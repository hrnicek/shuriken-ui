---
title: 'Switch Thin'
description: 'A fancy togglable checkbox.'
layout: 'default'
---

# Switch Thin

`<BaseSwitchThin />` · A fancy togglable checkbox.

::component-header{category="components/form" fileName="BaseSwitchThin.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSwitchThin
    v-model="value"
    label="Label"
    color="primary"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-switch-thin-base
::

## Features

:checklist{:items='["Full keyboard navigation", "Can be controlled or uncontrolled"]'}

## Anatomy
This is a self closing component that can be used to display a fancy togglable checkbox.

::code-group

```vue [Comp.vue]
<template>
  <BaseSwitchThin />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseSwitchThin"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Switch default variables */
  --color-track-default-bg: var(--color-muted-200);
  --color-track-default-bg-active: var(--color-muted-500);
  --color-track-default-bg-invert: var(--color-white);
  --color-track-default-handle-bg: var(--color-white);
  --color-track-default-handle-border: var(--color-muted-300);
  --color-track-default-handle-ring: var(--color-track-default-bg-active);

  /* Switch dark variables */
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

Use the `variant` prop to change the color of the switch.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSwitchThin
    v-model="ballValues.one"
    variant="default"
  >
    Default
  </BaseSwitchThin>
  <BaseSwitchThin
    v-model="ballValues.two"
    variant="primary"
  >
    Primary
  </BaseSwitchThin>
  <BaseSwitchThin
    id="dark"
    v-model="ballValues.three"
    variant="dark"
  >
    Dark
  </BaseSwitchThin>
</template>

<script setup lang="ts">
const ballValues = reactive({
  one: true,
  two: true,
  three: true,
})
</script>
```

#preview
:demo-switch-thin-variants
::

### Custom variants

Set the `variant` prop to `none` to remove the default styles and create your own.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSwitchThin
    v-model="ballValues.one"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-green-500 *:dark:peer-data-[state=checked]:bg-green-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchThin>
  <BaseSwitchThin
    v-model="ballValues.two"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-pink-500 *:dark:peer-data-[state=checked]:bg-pink-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchThin>
  <BaseSwitchThin
    v-model="ballValues.three"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-amber-500 *:dark:peer-data-[state=checked]:bg-amber-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchThin>
  <BaseSwitchThin
    v-model="ballValues.four"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-violet-500 *:dark:peer-data-[state=checked]:bg-violet-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchThin>
</template>

<script setup lang="ts">
const ballValues = reactive({
  one: true,
  two: true,
  three: true,
  four: true,
})
</script>
```

#preview
:demo-switch-thin-color
::

### Sublabel

Use the `sublabel` prop to add a sublabel to the switch.

::code-group

```vue [Comp.vue]
<template>
  <BaseSwitchThin
    v-model="value"
    label="Primary"
    sublabel="This is a primary switch"
    color="primary"
  />
</template>

<script setup lang="ts">
const value = ref(true)
</script>
```

#preview
:demo-switch-thin-sublabel
::
