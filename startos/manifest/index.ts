import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'prowlarr',
  title: 'Prowlarr',
  license: 'GPL-3.0',
  packageRepo: 'https://github.com/saiththerobo/prowlarr-startos',
  upstreamRepo: 'https://github.com/Prowlarr/Prowlarr',
  marketingUrl: 'https://prowlarr.com/',
  donationUrl: null,
  docsUrls: ['https://wiki.servarr.com/prowlarr'],
  description: { short, long },
  volumes: ['main'],
  images: {
    prowlarr: {
      source: { dockerTag: 'lscr.io/linuxserver/prowlarr:2.4.0' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
