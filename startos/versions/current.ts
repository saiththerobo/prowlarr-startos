import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.3.5:0',
  releaseNotes: {
    en_US: 'Initial release of Prowlarr on StartOS.',
    es_ES: 'Lanzamiento inicial de Prowlarr en StartOS.',
    de_DE: 'Erstveröffentlichung von Prowlarr auf StartOS.',
    pl_PL: 'Pierwsze wydanie Prowlarr na StartOS.',
    fr_FR: 'Première version de Prowlarr sur StartOS.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
