// update tsconfig.json
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const tsconfig = {
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleDetection": "force",
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "module": "preserve",
    "noEmit": true,
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true
  }
}

writeFileSync(join(import.meta.dirname, '..', 'tsconfig.json'), JSON.stringify(tsconfig, null, 2))
