---
title: 'Checkbox'
description: 'A simple checkbox component.'
layout: 'default'
---

# Checkbox

`<BaseCheckbox />` · A simple checkbox component.

::component-header{category="components/form" fileName="BaseCheckbox.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseCheckboxGroup v-model="value">
    <BaseCheckbox
      label="Option 1"
      value="Option 1"
    />
    <BaseCheckbox
      label="Option 2"
      value="Option 2"
    />
    <BaseCheckbox
      value="Option 3"
      label="Option 3"
    />
  </BaseCheckboxGroup>
</template>

<script setup lang="ts">
const value = ref('Option 1')
</script>
```

#preview
:demo-checkbox-base
::

## Features

:checklist{:items='["Full keyboard navigation", "Supports horizontal/vertical orientation", "Can be controlled or uncontrolled"]'}

## Anatomy
The `Group` component is a container for the `Checkbox` components. The `Checkbox` component is a simple checkbox button.

::code-group

```vue [Comp.vue]
<template>
  <BaseCheckboxGroup>
    <BaseCheckbox />
    <BaseCheckbox />
    <BaseCheckbox />
  </BaseCheckboxGroup>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

### Group

:component-meta{name="BaseCheckboxGroup"}

### Checkbox

:component-meta{name="BaseCheckbox"}

## Examples

### Variants

Use the `variant` prop to change the color of the radio.

::code-group

```vue [Comp.vue]
<template>
  <BaseCheckbox
    v-model="value"
    label="Option 2"
    variant="primary"
  />
</template>

<script setup lang="ts">
const value = ref(true)
</script>
```

#preview
:demo-checkbox-color
::

### Custom variants

Set the `variant` prop to `none` and use tailwind classes to customize the radio.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseCheckbox
    v-model="value"
    label="Option 2"
    variant="none"
    class="bg-amber-500/10 dark:bg-amber-500/20 border-1 border-muted-300 dark:border-muted-700 text-amber-700 dark:text-amber-400"
  />
</template>

<script setup lang="ts">
const value = ref(true)
</script>
```

#preview
:demo-checkbox-color-custom
::

### Multiple selection

Use `BaseCheckboxGroup` to create a group of checkboxes. Bond it to a `v-model` to control the selected values.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseCheckboxGroup v-model="multipleValue" class="p-4 grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox
      name="multiple-demo-1"
      label="Option 1"
      value="Option 1"
    />
    <BaseCheckbox
      name="multiple-demo-2"
      label="Option 2"
      value="Option 2"
    />
    <BaseCheckbox
      name="multiple-demo-3"
      label="Option 3"
      value="Option 3"
    />
    <BaseCheckbox
      name="multiple-demo-4"
      label="Option 4"
      value="Option 4"
    />
  </BaseCheckboxGroup>
</template>

<script setup lang="ts">
const value = ref(true)
</script>
```

#preview
:demo-checkbox-multiple
::

### Disabled

Use the `disabled` prop to disable the checkbox.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseCheckbox
    v-model="value"
    label="Option 2"
    disabled
  />
</template>

<script setup lang="ts">
const value = ref(true)
</script>
```

#preview
:demo-checkbox-disabled
::
