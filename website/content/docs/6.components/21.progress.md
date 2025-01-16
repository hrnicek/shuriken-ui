---
title: 'Progress'
description: 'A progression indicator element.'
layout: 'default'
---

# Progress

`<BaseProgress />` · A progression indicator element.

::component-header{category="components/base" fileName="BaseProgress.vue" }
::

::code-group

```vue [DemoProgressBase.vue]
<template>
  <BaseProgress
    v-model="progress"
    title="Progress bar"
  />
</template>

<script setup lang="ts">
const progress = ref(25)
</script>
```

#preview
:demo-progress-base
::

## Features

:checklist{:items='["Supports indeterminate state", "Provides context for assistive technology", "Style customization"]'}

## Anatomy
This component is self closing and can be used to create an animated progress bar.

::code-group

```vue [BaseProgress]
<template>
  <BaseProgress />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseProgress"}

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

Use the `value` prop to set the value of the progress bar.

::code-group

```vue [DemoProgressValue.vue]
<template>
  <BaseProgress
    v-model="progress"
    title="Dynamic progress bar"
  />
</template>

<script setup lang="ts">
const progress = ref(76)
</script>
```

#preview
:demo-progress-value
::

### Indeterminate

Omit the `value` prop to set the progress bar in an indeterminate state.

::code-group

```vue [DemoProgressValue.vue]
<template>
  <BaseProgress title="Indeterminate progress bar" />
</template>
```

#preview
:demo-progress-indeterminate
::

### Size

Use the `size` prop to change the size of the progress bar.

::code-group

```vue [DemoProgressSize.vue]
<template>
  <BaseProgress
    v-model="progress"
    title="Medium progress bar"
    size="md"
  />
</template>

<script setup lang="ts">
const progress = ref(76)
</script>
```

#preview
:demo-progress-size
::

### Variants

Use the `variant` prop to change the color of the progress bar. Set it to `none` to remove the default color and apply your own.

::code-group

```vue [DemoProgressColor.vue]
<template>
  <BaseProgress
    v-model="progress"
    title="Custom progress bar"
    size="sm"
    variant="none"
    class="bg-muted-200 dark:bg-muted-900 *:first:bg-yellow-400"
  />
</template>

<script setup lang="ts">
const progress = ref(76)
</script>
```

#preview
:demo-progress-color
::
