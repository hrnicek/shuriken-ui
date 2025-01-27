---
title: 'Progress Circle'
description: 'A progression indicator element.'
layout: 'default'
---

# Progress Circle

`<BaseProgressCircle />` · A progression indicator element.

::component-header{category="components/base" fileName="BaseProgressCircle.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseProgressCircle
    title="Static progress bar with max value"
    :size="55"
    :model-value="2"
    :max="3"
  />
</template>
```

#preview
:demo-progress-circle-base
::

## Features

:checklist{:items='["Supports indeterminate state", "Provides context for assistive technology", "Style customization"]'}

## Anatomy
This component is self closing and can be used to create an animated progress bar.

::code-group

```vue [Comp.vue]
<template>
  <BaseProgressCircle />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseProgressCircle"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Default progress bar variables */
  --color-track-default-bg: var(--color-muted-200);
  --color-track-default-bg-active: var(--color-muted-500);
  --color-track-default-bg-invert: var(--color-white);
  --color-track-default-handle-bg: var(--color-white);
  --color-track-default-handle-border: var(--color-muted-300);
  --color-track-default-handle-ring: var(--color-track-default-bg-active);

  /* Dark progress bar variables */
  --color-track-dark-bg: var(--color-muted-200);
  --color-track-dark-bg-active: var(--color-muted-900);
  --color-track-dark-bg-invert: var(--color-white);
  --color-track-dark-handle-bg: var(--color-white);
  --color-track-dark-handle-border: var(--color-muted-300);
  --color-track-dark-handle-ring: var(--color-track-dark-bg-active);
}
```

::

## Examples

### Value

Use the `value` prop to set the value of the progress circle.

::code-group

```vue [Comp.vue]
<template>
  <BaseProgressCircle
    v-model:value="value"
    title="Static progress bar with max value"
    :size="55"
  />
</template>

<script setup lang="ts">
const value = ref(25)
</script>
```

#preview
:demo-progress-circle-value
::

### Variant

Use the `variant` prop to change the color of the progress circle. Set it to `none` to apply your own colors.

::code-group

```vue [Comp.vue]
<template>
  <BaseProgressCircle
    v-model:value="value"
    title="Colored circle progress bar"
    :size="55"
    class="text-emerald-500 *:first:text-muted-200 *:dark:first:text-muted-900"
  />
</template>

<script setup lang="ts">
const value = ref(25)
</script>
```

#preview
:demo-progress-circle-color
::

### Size

use the `size` prop to set the size of the progress circle.

::code-group

```vue [Comp.vue]
<template>
  <BaseProgressCircle
    v-model:value="value"
    title="Colored circle progress bar"
    :size="75"
  />
</template>

<script setup lang="ts">
const value = ref(25)
</script>
```

#preview
:demo-progress-circle-size
::

### Thickness

use the `thickness` prop to set the stroke width of the progress circle.

::code-group

```vue [Comp.vue]
<template>
  <BaseProgressCircle
    v-model:value="value"
    title="Colored circle progress bar"
    :thickness="2"
  />
</template>

<script setup lang="ts">
const value = ref(25)
</script>
```

#preview
:demo-progress-circle-thickness
::

### Indeterminate

Having an `undefined` value on the `:model-value` or the `v-model` will show the progress circle component in an indeterminate state.

::code-group

```vue [Comp.vue]
<template>
  <BaseProgressCircle
    title="Colored circle progress bar"
  />
</template>

<script setup lang="ts">
const value = ref(25)
</script>
```

#preview
:demo-progress-circle-indeterminate
::
