<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/278e3026-1997-4e01-9457-20772adbce31">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
    <img alt="Shuriken UI logo" src="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
  </picture>
</p>


<p align="center">
  <a href="https://shurikenui.com" title="Shuriken UI website"><strong>shurikenui.com</strong></a> | 
  by <a href="https://cssninja.io" title="Our official website"><strong>cssninja.io</strong></a>
</p>

---

## Shuriken UI - Nuxt

Shuriken UI is a free and open-source Tailwind CSS UI Kit. It is a collection of components and templates that you can use to build your next Tailwind CSS project.

This repository contains Shuriken UI components (form inputs, buttons, cards, etc.) that you can use to build your project.

## Installation

Install dependencies:

```bash
pnpm install -D @shuriken-ui/nuxt@next @shuriken-ui/tailwind@next tailwindcss@next
```

Add the Shuriken UI module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@shuriken-ui/nuxt'],
  css: ['~/assets/tailwind.css'],
})
```

Reference Shuriken UI in your `~/assets/tailwind.css` file:

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