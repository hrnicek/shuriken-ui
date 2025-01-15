---
title: 'Avatar Group'
description: 'A group of users or of entities.'
layout: 'default'
---

# Avatar Group

`<BaseAvatarGroup />` · A group of users or of entities.

::component-header{category="components/base" fileName="BaseAvatarGroup.vue" }
::

::code-group{expandable}

```vue [DemoAvatarGroupBase.vue]
<template>
  <BaseAvatarGroup :avatars="people" />
</template>

<script setup lang="ts">
const people = [
  {
    src: '/img/avatars/19.svg',
  },
  {
    src: '/img/avatars/16.svg',
  },
  {
    src: '/img/avatars/3.svg',
  },
  {
    src: '/img/avatars/22.svg',
  },
  {
    src: '/img/avatars/2.svg',
  },
]
</script>
```

#preview
:demo-avatar-group-base
::

## Features

:checklist{:items='["Control over image render", "inherits props from avatar", "Built-in badges and masks"]'}

## Anatomy
This component is uncontrolled and accepts an array of avatars as a prop. It also has built-in badges and masks, as well as useful utilities to control size and border radius.

::code-group

```vue [BaseAvatarGroup]
<template>
  <BaseAvatarGroup />
</template>
```

::

## API Reference

This component has props that you can use to modify its behavior.

:component-meta{name="BaseAvatarGroup"}

## Examples

### Size

Use the `size` prop to control the size of the avatars inside the group.

::code-group{expandable}

```vue [DemoAvatarGroupSize.vue]
<template>
  <BaseAvatarGroup size="md" :avatars="people" />
</template>

<script setup lang="ts">
const people = [
  {
    src: '/img/avatars/19.svg',
  },
  {
    src: '/img/avatars/16.svg',
  },
  {
    src: '/img/avatars/3.svg',
  },
  {
    src: '/img/avatars/22.svg',
  },
  {
    src: '/img/avatars/2.svg',
  },
]
</script>
```

#preview
:demo-avatar-group-size
::

### Limit

Use the `limit` prop to control how many avatars are shown before a counter is displayed.

::code-group{expandable}

```vue [DemoAvatarGroupLimit.vue]
<template>
  <BaseAvatarGroup :avatars="people" :limit="8" />
</template>

<script setup lang="ts">
const people = [
  {
    src: '/img/avatars/19.svg',
  },
  {
    src: '/img/avatars/16.svg',
  },
  {
    src: '/img/avatars/3.svg',
  },
  {
    src: '/img/avatars/22.svg',
  },
  {
    src: '/img/avatars/2.svg',
  },
]
</script>
```

#preview
:demo-avatar-group-limit
::
