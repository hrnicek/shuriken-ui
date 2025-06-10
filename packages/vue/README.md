# Shuriken UI - Vue

Shuriken UI is a free and open-source Tailwind CSS UI Kit. It is a collection of components and templates that you can use to build your next Tailwind CSS project.

This package provides Shuriken UI components for Vue 3 applications. It works great with Inertia.js.

## Installation

Install dependencies:

```bash
pnpm install -D @shuriken-ui/vue tailwindcss @inertiajs/vue3
```

Register the plugin in your Vue app:

```ts
import { createApp } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import ShurikenUI from '@shuriken-ui/vue'

createInertiaApp({
  // ...
  setup({ el, App, props }) {
    createApp({ render: () => h(App, props) })
      .use(ShurikenUI())
      .mount(el)
  },
})
```

Reference Shuriken UI in your Tailwind CSS file:

```css
@import 'tailwindcss';
@import '@shuriken-ui/vue';
```

> See the [theme.css](https://github.com/shuriken-ui/shuriken-ui/blob/main/packages/tailwind/lib/theme.css) file for a complete list of available variables you can customize.
