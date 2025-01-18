---
title: 'Tag'
description: 'An informative small piece of content.'
layout: 'default'
---

# Tag

`<BaseTag />` · An informative small piece of content.

::component-header{category="components/base" fileName="BaseTag.vue" }
::

::code-group

```vue [DemoTagBase.vue]
<template>
  <BaseTag>
    Label
  </BaseTag>
</template>
```

#preview
:demo-tag-base
::

## Features

:checklist{:items='["Can have different sizes", "Supports custom colors"]'}

## Anatomy
This component can have any content inside it. It is used to display an informative small piece of content.

::code-group

```vue [BaseTag]
<template>
  <BaseTag>
    <!-- Your content here -->
  </BaseTag>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseTag"}

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

Use the `size` prop to change the size of the tag.

::code-group

```vue [DemoTagSize.vue]
<template>
  <BaseTag size="sm">
    Label
  </BaseTag>
  <BaseTag size="md">
    Label
  </BaseTag>
  <BaseTag size="lg">
    Label
  </BaseTag>
</template>
```

#preview
:demo-tag-size
::

### Radius

Use the `rounded` prop to change the radius of the tag.

::code-group

```vue [DemoTagRadius.vue]
<template>
  <BaseTag variant="default">
    Label
  </BaseTag>
  <BaseTag variant="muted">
    Label
  </BaseTag>
  <BaseTag variant="primary">
    Label
  </BaseTag>
  <BaseTag variant="dark">
    Label
  </BaseTag>
</template>
```

#preview
:demo-tag-radius
::

### Variant

Use the `variant` prop to change the style of the tag.

::code-group

```vue [DemoTagVariant.vue]
<template>
  <BaseTag variant="solid" color="primary">
    Label
  </BaseTag>
  <BaseTag variant="pastel" color="primary">
    Label
  </BaseTag>
  <BaseTag variant="outline" color="primary">
    Label
  </BaseTag>
</template>
```

#preview
:demo-tag-variant
::

### Custom variants

Set the `variant` prop to `none` to remove the default colors and apply your own.

::code-group

```vue [DemoTagColorsvue]
<template>
  <BaseTag
    variant="none"
    class="bg-yellow-400/20 text-yellow-400 ring-1 ring-inset ring-yellow-400/30"
  >
    Label
  </BaseTag>
</template>
```

#preview
:demo-tag-colors
::
