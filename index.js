#!/usr/bin/env node
import { execSync } from 'child_process'
import { existsSync } from 'fs'

const candidates = [
  ['bun.lock',          'bun'],
  ['bun.lockb',         'bun'],
  ['pnpm-lock.yaml',    'pnpm'],
  ['yarn.lock',         'yarn'],
  ['package-lock.json', 'npm'],
]

const match = candidates.find(([file]) => existsSync(file))
if (!match) { console.error('No lockfile found'); process.exit(1) }

const [lockfile, cmd] = match
execSync(`git restore --staged "${lockfile}"`, { stdio: 'inherit' })
execSync(`git restore "${lockfile}"`,          { stdio: 'inherit' })
execSync(`${cmd} install`,                     { stdio: 'inherit' })
execSync(`git add "${lockfile}"`,              { stdio: 'inherit' })
