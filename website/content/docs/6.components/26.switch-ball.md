---
title: 'Switch Ball'
description: 'A fancy togglable checkbox.'
layout: 'default'
---

# Switch Ball

`<BaseSwitchBall />` · A fancy togglable checkbox.

::component-header{category="components/form" fileName="BaseSwitchBall.vue" }
::

::code-group{expandable}

```vue [DemoSwitchBallBase.vue]
<template>
  <BaseSwitchBall
    v-model="value"
    label="Label"
  />
</template>

<script setup lang="ts">
const value = true
</script>
```

#preview
:demo-switch-ball-base
::

## Features

:checklist{:items='["Full keyboard navigation", "Can be controlled or uncontrolled"]'}

## Anatomy
This is a self closing component that can be used to display a fancy togglable checkbox.

::code-group

```vue [BaseSwitchBall]
<template>
  <BaseSwitchBall />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseSwitchBall"}

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

```vue [DemoSwitchBallVariants.vue]
<template>
  <BaseSwitchBall
    v-model="ballValues.one"
    variant="default"
  >
    Default
  </BaseSwitchBall>
  <BaseSwitchBall
    v-model="ballValues.two"
    variant="primary"
  >
    Primary
  </BaseSwitchBall>
  <BaseSwitchBall
    id="dark"
    v-model="ballValues.three"
    variant="dark"
  >
    Dark
  </BaseSwitchBall>
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
:demo-switch-ball-variants
::

### Custom variants

Set the `variant` prop to `none` to remove the default styles and create your own.

::code-group{expandable}

```vue [DemoSwitchBallColor.vue]
<template>
  <BaseSwitchBall
    v-model="ballValues.one"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-green-500 *:dark:peer-data-[state=checked]:bg-green-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchBall>
  <BaseSwitchBall
    v-model="ballValues.two"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-pink-500 *:dark:peer-data-[state=checked]:bg-pink-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchBall>
  <BaseSwitchBall
    v-model="ballValues.three"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-amber-500 *:dark:peer-data-[state=checked]:bg-amber-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchBall>
  <BaseSwitchBall
    v-model="ballValues.four"
    variant="none"
    class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-violet-500 *:dark:peer-data-[state=checked]:bg-violet-500 *:bg-muted-300 *:dark:bg-muted-600"
  >
    Custom variant
  </BaseSwitchBall>
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
:demo-switch-ball-color
::

### Sublabel

Use the `sublabel` prop to add a sublabel to the switch.

::code-group

```vue [DemoSwitchSublabel.vue]
<template>
  <BaseSwitchBall
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
:demo-switch-ball-sublabel
::
