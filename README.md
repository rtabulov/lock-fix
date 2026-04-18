# lock-fix

Fix merge conflicts in package manager lockfiles with one command.

## Install

```bash
npm install -g lock-fix
```

## Usage

Run inside any project root after hitting a lockfile merge conflict:

```bash
lock-fix
```

That's it. It detects your package manager, restores the conflicted lockfile, reinstalls dependencies, and re-stages the result.

## Supported lockfiles

| Lockfile           | Package manager |
|--------------------|-----------------|
| `bun.lock`         | bun             |
| `bun.lockb`        | bun             |
| `pnpm-lock.yaml`   | pnpm            |
| `yarn.lock`        | yarn            |
| `package-lock.json`| npm             |

## How it works

1. `git restore --staged <lockfile>` — unstage the conflicted file
2. `git restore <lockfile>` — discard working tree changes
3. `<pm> install` — regenerate the lockfile from `package.json`
4. `git add <lockfile>` — stage the clean result

Lock files are machine-generated — regenerating is always safer than hand-merging.

## License

MIT
