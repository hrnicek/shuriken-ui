# Shuriken UI - Monorepo

This is a monorepo for Shuriken UI, a collection of components for building modern web applications.

## Packages

- [@shuriken-ui/nuxt](./packages/nuxt/README.md): Nuxt Module for Shuriken UI.

## Development

### Install dependencies

```bash
pnpm install
```

### Prepare the development environment

```bash
pnpm --filter @shuriken-ui/nuxt dev:prepare
```

### Run a playground

```bash
pnpm --filter playground dev
```

Available playgrounds: `playground`, `playground-tiny`, `@shuriken-ui/docs`.
