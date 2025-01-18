<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/278e3026-1997-4e01-9457-20772adbce31">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
    <img alt="Shuriken UI logo" src="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
  </picture>
</p>

<p align="center">
  <a href="https://cssninja.io" title="Our official website">by <strong>cssninja.io</strong></a>
</p>

---

## Shuriken UI - Tailwind CSS v4

Shuriken UI is a free and open-source Tailwind CSS UI Kit. It is a collection of components and templates that you can use to build your next Tailwind CSS project.

This package contains the Tailwind CSS preset, components, and shared utils like custom colors used in Shuriken UI.

## Installation

Install dependencies:

```bash
pnpm install -D @shuriken-ui/tailwind@next tailwindcss@next @tailwindcss/vite@next
```

Add tailwind plugin to your `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

Reference Shuriken UI in your `tailwind.css` file:

```css
@import 'tailwindcss';
@import '@shuriken-ui/tailwind';

/* Register the dark mode variant (with .dark class) */
@variant dark (&:where(.dark, .dark *));

@theme {
  /* Customize your theme here */
}
```

> See the [theme.css](https://github.com/shuriken-ui/shuriken-ui/blob/main/packages/tailwind/lib/theme.css) file for a complete list of available variables you can customize.
