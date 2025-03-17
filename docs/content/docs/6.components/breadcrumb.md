---
title: Breadcrumb
description: A navigation that helps users find their place within a website or web application.
---

# Breadcrumb

`<BaseBreadcrumb />` · A navigation that helps users find their place within a website or web application.

::component-header{category="components/base" fileName="BaseBreadcrumb.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseBreadcrumb :items="breadcrumb" />
</template>

<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    to: '#',
  },
  {
    label: 'Products',
    to: '#',
  },
  {
    label: 'Laptops',
    to: '#',
  },
]
</script>
```

#preview
:demo-breadcrumb-base
::

## Features

:checklist{:items='["Default slot support", "Turns into dropdown on mobile", "Simple and straightforward"]'}

## Anatomy
This component accepts an array of items as a prop. You can customize the separator between items by using the default slot.

::code-group

```vue [Comp.vue]
<template>
  <BaseBreadcrumb>
    <!-- Separator goes here -->
  </BaseBreadcrumb>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseBreadcrumb"}

## Examples

### Variants

Use the `variant` prop to change the hover color of the breadcrumb links.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseBreadcrumb :items="breadcrumb" variant="dark" />
</template>

<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]
</script>
```

#preview
:demo-breadcrumb-variants
::

### Custom separator

Use the `#default` slot to insert a breadcrumb item separator.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseBreadcrumb :items="breadcrumb">
    <Icon name="lucide:arrow-right" class="block h-3 w-3" />
  </BaseBreadcrumb>
</template>

<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    to: '#',
  },
  {
    label: 'Products',
    to: '#',
  },
  {
    label: 'Laptops',
    to: '#',
  },
]
</script>
```

#preview
:demo-breadcrumb-slot
::
