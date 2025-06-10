# Shuriken UI - Monorepo

This is a monorepo for Shuriken UI, a collection of components for building modern web applications.

## Packages

- [@shuriken-ui/vue](./packages/nuxt/README.md): Vue 3 plugin for Shuriken UI.

## Development

### Install dependencies

```bash
pnpm install
```

### Build packages

```bash
pnpm --filter @shuriken-ui/vue build
```

### Run a playground

```bash
pnpm --filter playground dev
```

Available playgrounds: `playground`, `playground-tiny`, `@shuriken-ui/docs`.
