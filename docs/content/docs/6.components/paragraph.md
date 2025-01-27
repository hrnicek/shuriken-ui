---
title: 'Paragraph'
description: 'A paragraph or a smaller piece of content.'
layout: 'default'
---

# Paragraph

`<BaseParagraph />` · A paragraph or a smaller piece of content.

::component-header{category="components/base" fileName="BaseParagraph.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseParagraph as="p" size="md" weight="normal" lead="normal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urgent
    tamen et nihil remittunt. Et non ex maxima parte de tota iudicabis?
    Beatum, inquit. Ille incendat?
  </BaseParagraph>
</template>
```

#preview
:demo-paragraph-base
::

## Features

:checklist{:items='["Support all tailwind sizes", "Support all tailwind weights", "Support all tailwind leading", "Can be rendered as any HTML tag"]'}

## Anatomy
This component accepts any content as a child. You can customize the components's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseParagraph>
    <!-- Content goes here -->
  </BaseParagraph>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseParagraph"}
