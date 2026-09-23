# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent to the constructs, the
reference pages, and a named production package to copy.

Then read [CONTRIBUTING.md](./CONTRIBUTING.md) for how this package in particular is built and
shipped, and [UPDATING.md](./UPDATING.md) for how the upstream version is tracked.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

## This repo

Single container: the `lscr.io/linuxserver/prowlarr` image, pinned at
`images['prowlarr'].source.dockerTag` in `startos/manifest/index.ts`. The daemon runs
`/app/prowlarr/bin/Prowlarr -nobrowser -data=/config` directly rather than through the image's
s6 entrypoint, with the `main` volume mounted at `/config` and the web UI on port 9696.

A `setup-tmpdir` oneshot creates `/run/prowlarr-temp` as root before the daemon starts.

**On an upstream bump, confirm the image still provides `/app/prowlarr/bin/Prowlarr` and still
defaults to port 9696** — both are assumed by `startos/main.ts`:

```bash
podman run --rm --entrypoint sh lscr.io/linuxserver/prowlarr:<ver> \
  -c 'ls -la /app/prowlarr/bin/Prowlarr; grep -rn 9696 /etc/s6-overlay/ | head'
```
