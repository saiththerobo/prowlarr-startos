import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.4.0:0',
  releaseNotes: {
    en_US: 'Update to Prowlarr 2.4.0.',
    es_ES: 'Actualización a Prowlarr 2.4.0.',
    de_DE: 'Update auf Prowlarr 2.4.0.',
    pl_PL: 'Aktualizacja do Prowlarr 2.4.0.',
    fr_FR: 'Mise à jour vers Prowlarr 2.4.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
