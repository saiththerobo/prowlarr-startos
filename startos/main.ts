import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Prowlarr'))

  const mounts = sdk.Mounts.of().mountVolume({
    volumeId: 'main',
    subpath: null,
    mountpoint: '/config',
    readonly: false,
  })

  const prowlarrSub = sdk.SubContainer.of(
    effects,
    { imageId: 'prowlarr' },
    mounts,
    'prowlarr-sub',
  )

  return sdk.Daemons.of(effects)
    .addOneshot('setup-tmpdir', {
      subcontainer: prowlarrSub,
      exec: {
        command: ['mkdir', '-p', '/run/prowlarr-temp'],
        user: 'root',
      },
      requires: [],
    })
    .addDaemon('primary', {
      subcontainer: prowlarrSub,
      exec: {
        command: ['/app/prowlarr/bin/Prowlarr', '-nobrowser', '-data=/config'],
        env: {
          HOME: '/config',
          ASPNETCORE_FORWARDEDHEADERS_ENABLED: 'true',
        },
      },
      ready: {
        display: i18n('Web Interface'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: i18n('The web interface is ready'),
            errorMessage: i18n('The web interface is not ready'),
          }),
        gracePeriod: 30_000,
      },
      requires: ['setup-tmpdir'],
    })
})
