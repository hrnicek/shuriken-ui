---
title: 'Radio'
description: 'A simple radio component.'
layout: 'default'
---

# Radio

`<BaseRadio />` · A simple radio component.

::component-header{category="components/form" fileName="BaseRadio.vue" }
::

::code-group{expandable}

```vue [DemoRadioBase.vue]
<template>
  <BaseRadioGroup v-model="value">
    <BaseRadio
      label="Option 1"
      value="Option 1"
    />
    <BaseRadio
      label="Option 2"
      value="Option 2"
    />
    <BaseRadio
      value="Option 3"
      label="Option 3"
    />
  </BaseRadioGroup>
</template>

<script setup lang="ts">
const value = ref('Option 1')
</script>
```

#preview
:demo-radio-base
::

## Features

:checklist{:items='["Full keyboard navigation", "Supports horizontal/vertical orientation", "Can be controlled or uncontrolled"]'}

## Anatomy
The `Group` component is a container for the `Radio` components. The `Radio` component is a simple radio button.

::code-group

```vue [BaseRadio]
<template>
  <BaseRadioGroup>
    <BaseRadio />
    <BaseRadio />
    <BaseRadio />
  </BaseRadioGroup>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

### Group

:component-meta{name="BaseRadioGroup"}

### Radio

:component-meta{name="BaseRadio"}

## Examples

### Variants

Use the `variant` prop to change the color of the radio.

::code-group

```vue [DemoRadioVariantsColor.vue]
<template>
  <BaseRadioGroup v-model="value">
    <BaseRadio
      value="Option 1"
      label="Option 1"
      variant="primary"
    />
  </BaseRadioGroup>
</template>

<script setup lang="ts">
const value = ref('Option 1')
</script>
```

#preview
:demo-radio-color
::

### Custom variants

Set the `variant` prop to `none` and use tailwind classes to customize the radio.

::code-group

```vue [DemoRadioVariantsCustom.vue]
<template>
  <BaseRadioGroup v-model="value">
    <BaseRadio
      value="Option 1"
      label="Option 1"
      variant="none"
      class="bg-green-500/10 dark:bg-green-500/20 border-1 border-muted-300 dark:border-muted-700 text-green-700 dark:text-green-400"
    />
  </BaseRadioGroup>
</template>

<script setup lang="ts">
const value = ref('Option 1')
</script>
```

#preview
:demo-radio-color-custom
::
