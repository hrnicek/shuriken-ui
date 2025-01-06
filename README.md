# Shuriken UI - Monorepo

This is a monorepo for Shuriken UI, a collection of components for building modern web applications.

## Packages

- [@shuriken-ui/tailwind](./packages/tailwind/README.md): Tailwind (v4) utilities for Shuriken UI.
- [@shuriken-ui/nuxt](./packages/nuxt/README.md): Nuxt (v4) Layer for Shuriken UI.
- (WIP) [@shuriken-ui/react](./packages/react/README.md): React components for Shuriken UI.
- (WIP) [@shuriken-ui/vue](./packages/vue/README.md): Vue components for Shuriken UI.

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
pnpm --filter nuxt-4 dev
```

Available playgrounds: `docs`, `nuxt`, `nuxt-4`, `vite`.
