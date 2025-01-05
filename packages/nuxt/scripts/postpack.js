// update tsconfig.json
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const tsconfig = {
  "extends": "./.nuxt/tsconfig.json"
}

writeFileSync(join(import.meta.dirname, '..', 'tsconfig.json'), JSON.stringify(tsconfig, null, 2))
