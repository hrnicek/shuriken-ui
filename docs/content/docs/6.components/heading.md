---
title: 'Heading'
description: 'A title or a paragraph heading.'
layout: 'default'
---

# Heading

`<BaseHeading />` · A title or a paragraph heading.

::component-header{category="components/base" fileName="BaseHeading.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseHeading as="h1" size="xl" weight="semibold" lead="normal">
    Iam a page heading
  </BaseHeading>
</template>
```

#preview
:demo-heading-base
::

## Features

:checklist{:items='["Support all tailwind sizes", "Support all tailwind weights", "Support all tailwind leading", "Can be rendered as any HTML tag"]'}

## Anatomy
This component accepts any content as a child. You can customize the components's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseHeading>
    <!-- Content goes here -->
  </BaseHeading>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseHeading"}
