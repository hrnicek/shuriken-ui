---
title: 'Link'
description: 'An internal or an external link.'
layout: 'default'
---

# Link

`<BaseLink />` · An internal or an external link.

::component-header{category="components/base" fileName="BaseLink.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseLink to="https://www.google.com" target="_blank" rel="noopener">
    Iam a link to Google
  </BaseLink>
</template>
```

#preview
:demo-link-base
::

## Features

:checklist{:items='["Creates a quickly styled link", "Works with other typography clusters", "Inherits NuxtLink props"]'}

## Anatomy
This component accepts any content as a child. You can customize the button's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseLink>
    <!-- Content goes here -->
  </BaseLink>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseLink"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Link color */
  --color-link: var(--color-primary-base);
}
```

::
