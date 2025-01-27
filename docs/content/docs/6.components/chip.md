---
title: 'Chip'
description: 'A discreet indicator component.'
layout: 'default'
---

# Chip

`BaseChip` · A discreet indicator component.

::component-header{category="components/base" fileName="BaseChip.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseChip>
    <BaseButton>
      Button
    </BaseButton>
  </BaseChip>
</template>
```

#preview
:demo-chip-base
::

## Features

:checklist{:items='["Absolute or static position", "Infinite colors", "Built in pulse animation", "Offsetting support"]'}

## Anatomy
This component is a simple wrapper that creates a dot with a pulse animation. You can customize the chip's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseChip>
    <!-- Your content here -->
  </BaseChip>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseChip"}

## Examples

### Chip placement

Use the `placement` prop to change the chip's placement relative to the element it wraps.

::code-group

```vue [Comp.vue]
<template>
  <BaseChip placement="bottom-end">
    <div />
  </BaseChip>
</template>
```

#preview
:demo-chip-placement
::

### Chip offset

Use the `offset` prop to move the chip from its default position.

::code-group

```vue [Comp.vue]
<template>
  <BaseChip :offset="6">
    <div />
  </BaseChip>
</template>
```

#preview
:demo-chip-offset
::

### Chip colors

Use the `color` prop to change the chip's color. Set it to `custom` to use a custom color.

::code-group

```vue [Comp.vue]
<template>
  <BaseChip color="primary">
    <div />
  </BaseChip>
  <BaseChip color="custom" class="text-yellow-400">
    <div />
  </BaseChip>
</template>
```

#preview
:demo-chip-colors
::

### Pulse animation

Use the `pulse` prop to add a pulse animation to the chip.

::code-group

```vue [Comp.vue]
<template>
  <BaseChip pulse>
    <div />
  </BaseChip>
</template>
```

#preview
:demo-chip-pulse
::
