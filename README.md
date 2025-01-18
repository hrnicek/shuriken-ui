# Shuriken UI - Monorepo

This is a monorepo for Shuriken UI, a collection of components for building modern web applications.

## Packages

- [@shuriken-ui/tailwind](./packages/tailwind/README.md): Tailwind (v4) utilities and theme for Shuriken UI.
- [@shuriken-ui/nuxt](./packages/nuxt/README.md): Nuxt (v4) Layer for Shuriken UI.

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

Available playgrounds: `playground`, `playground-tiny`, `docs`.
