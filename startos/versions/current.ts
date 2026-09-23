import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.6.5:0',
  releaseNotes: {
    en_US: 'Updates Prowlarr to 2.6.5 and rebuilds the package on the StartOS 2.0 SDK.',
    es_ES:
      'Actualiza Prowlarr a 2.6.5 y reconstruye el paquete con el SDK 2.0 de StartOS.',
    de_DE:
      'Aktualisiert Prowlarr auf 2.6.5 und baut das Paket mit dem StartOS-2.0-SDK neu.',
    pl_PL:
      'Aktualizuje Prowlarr do 2.6.5 i przebudowuje pakiet na SDK StartOS 2.0.',
    fr_FR:
      'Met à jour Prowlarr vers 2.6.5 et reconstruit le paquet sur le SDK StartOS 2.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
