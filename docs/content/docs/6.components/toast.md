---
title: 'Toast'
description: 'A simple toast component.'
layout: 'default'
---

# Toast

`BaseToast` · A simple toast component.

::component-header{category="components/base" fileName="BaseToast.vue" }
::

::code-group{expandable}

```vue [demoToastBase.vue]
<template>
  <BaseButton
    @click="add({
      title: 'Hey there! 👋',
      description: 'Looks like you clicked the button!',
      duration: 50000,
    })"
  >
    Show toast
  </BaseButton>
</template>

<script setup lang="ts">
const { add } = useNuiToasts()
</script>
```

#preview
:demo-toast-base
::

## Features

:checklist{:items='["Automatically closes", "Pauses closing on hover, focus and window blur", "Supports hotkey to jump to toast viewport", "Supports closing via swipe gesture", "Exposes CSS variables for swipe gesture animations", "Can be controlled or uncontrolled"]'}

## Anatomy
This component is provided by the `BaseProviders` component inside your `app.vue` file. You can customize the toast's visual style by using the available props.

::code-group

```vue [app.vue]
<template>
  <BaseProviders :toast="{ max: 3, position: 'top-center' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </BaseProviders>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseToast"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Toast container variables */
  --color-card-default-bg: var(--color-white);
  --color-card-default-border: var(--color-muted-300);
}
```

::

## Examples

### Icon

Use the `icon` prop to add an icon to your toast.

::code-group{expandable}

```vue [DemoToastIcon.vue]
<template>
  <BaseButton
    @click="add({
      icon: 'lucide:check',
      title: 'Changes saved',
      description: 'Your changes have been saved successfully.',
      duration: 3000,
    })"
  >
    Show toast
  </BaseButton>
</template>

<script setup lang="ts">
const { add } = useNuiToasts()
</script>
```

#preview
:demo-toast-icon
::

### Actions

Use the `actions` prop to add actions to your toast.

::code-group{expandable}

```vue [DemoToastIcon.vue]
<template>
  <BaseButton
    @click="add({
      title: 'Order sent',
      description: 'Your order has been sent successfully.',
      icon: 'lucide:check',
      actions: [
        {
          label: 'Cancel',
          variant: 'default',
          onClick: () => {
            log('Action clicked')
          },
        },
      ],
    })"
  >
    Show toast with action
  </BaseButton>
</template>

<script setup lang="ts">
const { add } = useNuiToasts()
const log = console.log
</script>
```

#preview
:demo-toast-actions
::

### Timer

Use the `progress` prop to show a timer on your toast.

::code-group{expandable}

```vue [DemoToastTimer.vue]
<template>
  <BaseButton
    @click="add({
      title: 'Hey there! 👋',
      description: 'Looks like you clicked the button!',
      duration: 3000,
      progress: true,
    })"
  >
    Show toast with action
  </BaseButton>
</template>

<script setup lang="ts">
const { add } = useNuiToasts()
</script>
```

#preview
:demo-toast-timer
::
