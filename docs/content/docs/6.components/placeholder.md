---
title: 'Placeholder'
description: 'A placeholder component, for empty states.'
layout: 'default'
---

# Placeholder

`<BasePlaceholderPage />` · A placeholder component, for empty states.

::component-header{category="components/base" fileName="BasePlaceholderPage.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePlaceholderPage
    title="Looks like you are new!"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
  >
    <template #image>
      <img class="dark:invert" src="/img/vector/placeholders/placeholder-1.svg" alt="placeholder-image">
    </template>

    <div class="mt-2 flex justify-center gap-2">
      <BaseButton variant="primary" rounded="md" class="w-40">
        Take some action
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
```

#preview
:demo-placeholder-base
::

## Features

:checklist{:items='["Ideal for empty states", "Provides multiple slots", "Supports media elements"]'}

## Anatomy
This component accepts any content as a child. You can customize the component visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BasePlaceholderPage>
    <template #image>
      <!-- Media goes here -->
    </template>
    <template #default>
      <!-- Content goes here -->
    </template>
  </BasePlaceholderPage>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BasePlaceholderPage"}

## Examples

### Image size

Use the `image-size` prop to control the width of the image slot.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePlaceholderPage
    title="Starting Soon!"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
  >
    <template #image>
      <img
        img-size="md"
        src="/img/illustrations/vector/placeholder-1.svg"
        alt="placeholder-image"
      >
    </template>

    <div class="mt-2 flex justify-center gap-2">
      <BaseButton rounded="md" class="w-32">
        Cancel
      </BaseButton>
      <BaseButton variant="primary" rounded="md" class="w-32">
        Confirm
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
```

#preview
:demo-placeholder-img
::

### Slot #default

Use the `#default` slot to add anything to your placeholder.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePlaceholderPage
    title="Get Notified"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
  >
    <template #image>
      <img
        src="/img/vector/placeholders/placeholder-3.svg"
        alt="placeholder-image"
      >
    </template>

    <div class="mt-2 flex justify-center gap-2">
      <BaseInput
        rounded="md"
        placeholder="Enter your email"
      />
      <BaseButton variant="primary" rounded="md">
        Subscribe
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
```

#preview
:demo-placeholder-slot
::
