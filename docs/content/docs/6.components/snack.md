---
title: 'Snack'
description: 'A small piece of removable info.'
layout: 'default'
---

# Snack

`<BaseSnack />` · A small piece of removable info.

::component-header{category="components/base" fileName="BaseSnack.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseSnack label="Label" />
</template>
```

#preview
:demo-snack-base
::

## Features

:checklist{:items='["Can be used with tag inputs", "Supports close button", "Supports icons and images"]'}

## Anatomy
This is a self closing component that can be used to display a small piece of removable info.

::code-group

```vue [Comp.vue]
<template>
  <BaseSnack />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseSnack"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Tag default variables */
  --color-tag-default-bg: var(--color-white);
  --color-tag-default-border: var(--color-muted-400);
  --color-tag-default-text: var(--color-muted-400);

  /* Tag muted variables */
  --color-tag-muted-bg: var(--color-muted-400);
  --color-tag-muted-border: var(--color-muted-400);
  --color-tag-muted-text: var(--color-muted-400);

  /* Tag dark variables */
  --color-tag-dark-bg: var(--color-muted-900);
  --color-tag-dark-border: var(--color-muted-900);
  --color-tag-dark-text: var(--color-muted-900);
}
```

::

## Examples

### Size

Use the `size` prop to change size of the snack.

::code-group

```vue [Comp.vue]
<template>
  <BaseSnack label="React" color="default" size="xs" />
  <BaseSnack label="Angular" color="default" size="sm" />
  <BaseSnack label="Vue" color="default" size="md" />
</template>
```

#preview
:demo-snack-size
::

### Variants

Use the `variant` prop to change color of the snack. Set it to `none` to remove the default color and apply your own.

::code-group

```vue [Comp.vue]
<template>
  <BaseSnack
    label="Label"
    variant="default"
  />
  <BaseSnack
    label="Label"
    variant="muted"
  />
  <BaseSnack
    label="Label"
    variant="dark"
  />
  <BaseSnack
    label="Label"
    variant="none"
    class="text-primary-600 bg-primary-500/10 ring-1 ring-primary-600"
  />
</template>
```

#preview
:demo-snack-color
::

### Icon

Use the `icon` prop to display an icon inside the snack.

::code-group

```vue [Comp.vue]
<template>
  <BaseSnack
    label="React"
    variant="default"
    icon="logos:react"
  />
</template>
```

#preview
:demo-snack-icon
::

### Image

Use the `image` prop to display an image inside the snack.

::code-group

```vue [Comp.vue]
<template>
  <BaseSnack
    label="Mike"
    variant="default"
    size="xs"
    image="/img/people/19.jpg"
  />
</template>
```

#preview
:demo-snack-image
::
