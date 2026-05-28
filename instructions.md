# Prowlarr

Prowlarr is an indexer manager and proxy. It sits between your indexers (torrent trackers, Usenet indexers) and your \*arr apps (Sonarr, Radarr, Lidarr, Readarr), so you configure each indexer once and sync it automatically to all your apps.

## Documentation

- [Prowlarr wiki](https://wiki.servarr.com/prowlarr) — official documentation covering indexer setup, app integration, and troubleshooting.

## Getting set up

Prowlarr starts immediately with no pre-configuration required.

1. Open Prowlarr's **Dashboard** tab and click **Web UI**.
2. On first visit Prowlarr will ask you to set up authentication — go to **Settings → General** and configure a username and password.
3. Add your indexers under **Indexers → Add Indexer**.
4. Connect your \*arr apps under **Settings → Apps** — enter each app's URL and API key.

Once connected, any indexer you add or update in Prowlarr is synced automatically to all linked apps.

## Connecting to other \*arr apps on StartOS

When linking Sonarr, Radarr, or similar apps installed on the same StartOS node:

- Use the app's **LAN address** (shown on its Dashboard tab) as the server URL.
- Copy the **API key** from the app's **Settings → General** page.

## Limitations

- Authentication is not pre-configured — set it up before exposing Prowlarr to untrusted networks.
- Prowlarr does not download content itself; it only manages indexers and forwards search requests.
