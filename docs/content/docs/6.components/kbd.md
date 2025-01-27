---
title: 'Kbd'
description: 'An abstraction of a keyboard key.'
layout: 'default'
---

# Kbd

`<BaseKbd />` · An abstraction of a keyboard key.

::component-header{category="components/base" fileName="BaseKbd.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <div class="flex items-center gap-1">
    <BaseKbd
      variant="default"
      size="md"
    >
      ⌘
    </BaseKbd>
    +
    <BaseKbd
      variant="default"
      size="md"
    >
      <span class="px-1">k</span>
    </BaseKbd>
  </div>
</template>
```

#preview
:demo-kbd-base
::

## Features

:checklist{:items='["Easy to use", "Supports variants and sizes"]'}

## Anatomy
This component can have any children inside its default slot. You can use the provided slots to create a custom `kbd` element

::code-group

```vue [Comp.vue]
<template>
  <BaseKbd>
    <!-- Your custom content here -->
  </BaseKbd>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseKbd"}
