---
title: 'Slider'
description: 'A range indicator element.'
layout: 'default'
---

# Slider

`<BaseSlider />` · A range indicator element.

::component-header{category="components/base" fileName="BaseSlider.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseSlider v-model="range" />
</template>

<script setup lang="ts">
const range = ref([62])
</script>
```

#preview
:demo-slider-base
::

## Features

:checklist{:items='["Can be controlled or uncontrolled", "Supports multiple thumbs", "Supports a minimum value between thumbs", "Supports touch or click on track to update value", "Supports Right to Left direction", "Full keyboard navigation"]'}

## Anatomy
This component is self closing and can be used to create range sliders.

::code-group

```vue [Comp.vue]
<template>
  <BaseSlider />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseSlider"}

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

### Variants

Use the `variant` prop to change the color of the progress bar. Set it to `none` to remove the default color and apply your own.

::code-group

```vue [Comp.vue]
<template>
  <BaseSlider v-model="range" />
  <BaseSlider v-model="range" variant="primary" />
  <BaseSlider v-model="range" variant="dark" />
  <BaseSlider
    v-model="range"
    variant="none"
    class="text-pink-500"
    :classes="{
      tooltip: 'bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-pink-50',
      tooltipArrow: 'fill-pink-100 dark:fill-pink-900',
    }"
  />
</template>

<script setup lang="ts">
const range = ref(76)
</script>
```

#preview
:demo-slider-variants
::

### Multiple handles

Use the `v-model` prop to set the value of the slider. You can also use an array to set multiple values.

::code-group

```vue [Comp.vue]
<template>
  <BaseSlider v-model="range" />
</template>

<script setup lang="ts">
const range = ref([29, 62, 77])
</script>
```

#preview
:demo-slider-multiple
::

### Orientation

Use the `orientation` prop to change the direction of the slider. Set it to `vertical` to make it vertical.

::code-group

```vue [Comp.vue]
<template>
  <BaseSlider v-model="range" orientation="vertical" />
</template>

<script setup lang="ts">
const range = ref(76)
</script>
```

#preview
:demo-slider-orientation
::

### Controlled

Sliders can be controlled by setting the `v-model` prop or uncontrolled by setting the `value` prop.

::code-group

```vue [Comp.vue]
<template>
  <BaseSlider
    variant="dark"
    :default-value="[40]"
    :min="10"
    :max="60"
    :step="10"
  />
  <BaseSlider
    v-slot="{ value }"
    variant="dark"
    :default-value="[30, 40]"
    :min="10"
    :max="60"
    :step="2"
    :min-steps-between-thumbs="5"
  >
    {{ value }}%
  </BaseSlider>
</template>
```

#preview
:demo-slider-control
::
