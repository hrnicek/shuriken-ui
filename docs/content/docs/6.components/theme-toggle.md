---
title: 'Theme Toggle'
description: 'A theme switching component.'
layout: 'default'
---

# Theme Toggle

`<BaseTheme* />` · A theme switching component.

::component-header{category="components/base" fileName="BaseThemeToggle.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseThemeToggle />
  <BaseThemeSwitch />
  <BaseThemeSystem />
</template>
```

#preview
:demo-theme-toggle-base
::

## Features

:checklist{:items='["Full keyboard navigation", "Can be controlled or uncontrolled"]'}

## Anatomy
This is a self closing component that can be used to switch between different themes.

::code-group

```vue [Comp.vue]
<template>
  <BaseThemeToggle />
</template>
```

::
## API Reference

This component has props that you can use to modify its visual style.

### Theme Toggle

:component-meta{name="BaseThemeToggle"}

### Theme Switch

:component-meta{name="BaseThemeSwitch"}

### Theme System

:component-meta{name="BaseThemeSystem"}
