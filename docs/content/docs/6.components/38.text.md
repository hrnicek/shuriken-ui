---
title: 'Text'
description: 'A text span or a smaller piece of content.'
layout: 'default'
---

# Text

`<BaseText />` · A text span or a smaller piece of content.

::component-header{category="components/base" fileName="BaseText.vue" }
::

::code-group

```vue [DemoTextBase.vue]
<template>
  <BaseText size="md" weight="normal" lead="normal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urgent
    tamen et nihil remittunt. Et non ex maxima parte de tota iudicabis?
    Beatum, inquit. Ille incendat?
  </BaseText>
</template>
```

#preview
:demo-paragraph-base
::

## Features

:checklist{:items='["Support all tailwind sizes", "Support all tailwind weights", "Support all tailwind leading"]'}

## Anatomy
This component accepts any content as a child. You can customize the components's visual style by using the available props.

::code-group

```vue [BaseText]
<template>
  <BaseText>
    <!-- Content goes here -->
  </BaseText>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseText"}
