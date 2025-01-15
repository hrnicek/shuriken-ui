---
title: 'Avatar'
description: 'A profile picture, user initials as a fallback text.'
layout: 'default'
---

# Avatar

`<BaseAvatar />` · A profile picture, or initials as a fallback text.

::component-header{category="components/base" fileName="BaseAvatar.vue"}
::

::code-group

```vue [DemoAvatarBase.vue]
<template>
  <BaseAvatar src="/img/people/29.jpg" />
  <BaseAvatar text="L" class="bg-muted-200 dark:bg-muted-800" />
</template>
```

#preview
:demo-avatar-base
::

## Features

:checklist{:items='["Control over image render", "Fallback accepts any children", "Built-in badges and masks"]'}

## Anatomy
This component accepts images and fallback text as props or children. It also has built-in badges and masks, as well as useful utilities to control size and border radius.

::code-group

```vue [BaseAvatar]
<template>
  <BaseAvatar>
    <!-- Image or fallback here -->
  </BaseAvatar>
</template>
```

::

## API Reference

This component has props and slots. The slots are used to customize the content of the component.

:component-meta{name="BaseAvatar"}

## Examples

### Size

Use the `size` prop to control the size of the avatar.

::code-group

```vue [DemoAvatarSize.vue]
<template>
  <BaseAvatar src="/img/avatars/10.svg" size="lg" />
</template>
```

#preview
:demo-avatar-size
::

### Fallback

Use the `text` prop to add a fallback text to the avatar. Use tailwind classes to style the container and the text.

::code-group

```vue [DemoAvatarFallback.vue]
<template>
  <BaseAvatar size="md" text="L" class="bg-primary-500/20 text-primary-600" />
</template>
```

#preview
:demo-avatar-fallback
::

### Radius

Use the `rounded` prop to control the avatar border radius.

::code-group

```vue [DemoAvatarRadius.vue]
<template>
  <BaseAvatar src="/img/avatars/16.svg" rounded="none" />
  <BaseAvatar src="/img/avatars/10.svg" rounded="sm" />
  <BaseAvatar src="/img/avatars/25.svg" rounded="md" />
  <BaseAvatar src="/img/avatars/24.svg" rounded="lg" />
  <BaseAvatar src="/img/avatars/15.svg" rounded="full" />
</template>
```

#preview
:demo-avatar-radius
::

### Badge

Use the `badge-src` prop to add a badge to the avatar.

::code-group

```vue [DemoAvatarBadge.vue]
<template>
  <BaseAvatar
    src="/img/people/29.svg"
    size="md"
    badge-src="/img/vector/stacks/js.svg"
  />
</template>
```

#preview
:demo-avatar-badge
::

### Chip

Wrap the avatar component with a `Chip` component to add a status indicator. Use the chip props to control the indicator color and position.

::code-group

```vue [DemoAvatarDot.vue]
<template>
  <BaseChip
    placement="top-end"
    :offset="4"
    color="custom"
    class="text-sky-400"
  >
    <BaseAvatar
      src="/img/people/43.jpg"
      rounded="full"
      size="md"
      dot="pink"
    />
  </BaseChip>
</template>
```

#preview
:demo-avatar-dot
::

### Mask

Use the `mask` prop combined with the `none` radius to add an svg mask to the avatar.

::code-group

```vue [DemoAvatarMask.vue]
<template>
  <BaseAvatar src="/img/avatars/2.svg" rounded="none" mask="hex" />
  <BaseAvatar src="/img/avatars/10.svg" rounded="none" mask="hexed" />
  <BaseAvatar src="/img/avatars/25.svg" rounded="none" mask="blob" />
  <BaseAvatar src="/img/avatars/24.svg" rounded="none" mask="deca" />
  <BaseAvatar src="/img/avatars/15.svg" rounded="none" mask="diamond" />
</template>
```

#preview
:demo-avatar-mask
::

### Slot

Use the `default` slot to insert a custom image into the avatar.

::code-group

```vue [DemoAvatarSlot.vue]
<template>
  <BaseAvatar
    size="md"
    rounded="full"
  >
    <NuxtImg
      loading="lazy"
      decoding="async"
      src="/img/people/44.jpg"
      class="rounded-full"
      alt=""
    />
  </BaseAvatar>
</template>
```

#preview
:demo-avatar-slot
::
