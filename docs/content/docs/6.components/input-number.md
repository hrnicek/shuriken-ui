---
title: 'Input Number'
description: 'An incremental number input.'
layout: 'default'
---

# Input Number

`<BaseInputNumber />` · An incremental number input.

::component-header{category="components/form" fileName="BaseInputNumber.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInputNumber
    v-model="value"
    rounded="sm"
    placeholder="Quantity"
  />
</template>

<script setup lang="ts">
const value = ref(0)
</script>
```

#preview
:demo-input-number-base
::

## Features

:checklist{:items='["Handles model binding", "Full keyboard navigation", "Support button hold and wheel even", "Customizable formatting", "State based styling", "Support numbering systems in different locale"]'}

## Anatomy
This component is self closing and can be used to create a number input. You can customize the input's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseInputNumber />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseInputNumber"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Default input variables */
  --color-input-default-border: var(--color-muted-300);
  --color-input-default-bg: var(--color-white);
  --color-input-default-text: var(--color-muted-600);
  --color-input-default-placeholder: var(--color-muted-300);
  --color-input-default-button-bg: var(--color-muted-100);
  --color-input-default-button-bg-active: var(--color-muted-200);
  --color-input-default-button-text: var(--color-muted-700);

  /* Muted input variables */
  --color-input-muted-border: var(--color-muted-300);
  --color-input-muted-bg: var(--color-muted-50);
  --color-input-muted-text: var(--color-muted-600);
  --color-input-muted-placeholder: var(--color-muted-300);
  --color-input-muted-button-bg: var(--color-muted-200);
  --color-input-muted-button-bg-active: var(--color-muted-300);
  --color-input-muted-button-text: var(--color-muted-700);
}
```

::

## Examples

### Size

Use the `size` prop to change the size of the input.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInputNumber
    v-model="value"
    size="md"
    placeholder="Size: md"
  />
</template>

<script setup lang="ts">
const value = ref(0)
</script>
```

#preview
:demo-input-number-size
::

### Variants

Use the `variant` prop to change the visual style of the input.
::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInputNumber
    v-model="value"
    variant="default"
    placeholder="Quantity"
  />
  <BaseInputNumber
    v-model="value"
    variant="muted"
    placeholder="Quantity"
  />
</template>

<script setup lang="ts">
const value = ref(0)
</script>
```

#preview
:demo-input-number-variants
::

### Radius

Use the `rounded` prop to change the border radius of the input.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInputNumber
    v-model="value"
    rounded="full"
    placeholder="Quantity"
  />
</template>

<script setup lang="ts">
const value = ref(0)
</script>
```

#preview
:demo-input-number-radius
::

### Steps

Use the `step` prop to handle the incremental steps of the input.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInputNumber
    v-model="fields.first"
    rounded="md"
    placeholder="Temperature (°C)"
    :min="-20"
    :max="20"
    :step="0.05"
  />

  <BaseInputNumber
    v-model="fields.second"
    rounded="md"
    placeholder="Temperature (°F)"
    :min="0"
    :step="0.5"
  />

  <BaseInputNumber
    v-model="fields.third"
    rounded="md"
    placeholder="BTC"
    :min="0"
    :step="0.000001"
  />

  <BaseInputNumber
    v-model="fields.fourth"
    rounded="md"
    placeholder="Bytes"
    :min="0"
    :step="1024"
  />
</template>

const fields = reactive({
  first: 0.15,
  second: 1.5,
  third: 1.542312,
  fourth: 1024,
})
```

#preview
:demo-input-number-steps
::

### Disabled

Use the `disabled` prop to set the input in a disabled state.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInputNumber
    v-model="value"
    placeholder="Quantity"
    disabled
  />
</template>

<script setup lang="ts">
const value = ref(0)
</script>
```

#preview
:demo-input-number-disabled
::
