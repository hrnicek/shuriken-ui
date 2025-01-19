---
title: 'Card'
description: 'A flexible content container.'
layout: 'default'
---

# Card

`<BaseCard />` · A flexible content container.

::component-header{category="components/base" fileName="BaseCard.vue" }
::

::code-group

```vue [DemoCardBase.vue]
<template>
  <BaseCard class="p-6">
    <!-- Card content -->
  </BaseCard>
</template>
```

#preview
:demo-card-base
::

## Features

:checklist{:items='["Optimized contrasts", "Fully customizable", "Configurable variants"]'}

## Anatomy
This component accepts any content as a child. You can customize the card's visual style by using the available props.

::code-group

```vue [BaseCard]
<template>
  <BaseCard>
    <!-- Content goes here -->
  </BaseCard>
</template>
```

::

## API Reference

This component has props that you can use to modify its behavior.

:component-meta{name="BaseCard"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Default card variables */
  --color-card-default-bg: var(--color-white);
  --color-card-default-border: var(--color-muted-300);

  /* Muted card variables */
  --color-card-muted-bg: var(--color-muted-50);
  --color-card-muted-border: var(--color-muted-300);
}
```

::

## Examples

### Variants

Use the `variant` prop to control the colors of the card.

::code-group{expandable}

```vue [DemoCardColor.vue]
<template>
  <BaseCard variant="default" class="p-6">
    <!-- Card content -->
  </BaseCard>
  <BaseCard variant="muted" class="p-6">
    <!-- Card content -->
  </BaseCard>
  <BaseCard variant="none" rounded="md" class="p-6 bg-primary-600/10 border-2 border-primary-600">
    <!-- Card content -->
  </BaseCard>
  <BaseCard variant="none" rounded="md" class="p-6 bg-muted-950 dark:bg-white">
    <!-- Card content -->
  </BaseCard>
</template>
```

#preview
:demo-card-color
::

### Radius

Use the `rounded` prop to control the border radius of the card.

::code-group{expandable}

```vue [DemoCardRadius.vue]
<template>
  <BaseCard rounded="none" class="p-6">
    <!-- Card content -->
  </BaseCard>
  <BaseCard rounded="sm" class="p-6">
    <!-- Card content -->
  </BaseCard>
  <BaseCard rounded="md" class="p-6">
    <!-- Card content -->
  </BaseCard>
  <BaseCard rounded="lg" class="p-6">
    <!-- Card content -->
  </BaseCard>
</template>
```

#preview
:demo-card-radius
::
