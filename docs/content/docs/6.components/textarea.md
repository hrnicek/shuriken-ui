---
title: 'Textarea'
description: 'A user rich text, an editable field.'
layout: 'default'
---

# Textarea

`<BaseTextarea />` · A user rich text, an editable field.

::component-header{category="components/form" fileName="BaseTextarea.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTextarea
    v-model="value"
    placeholder="Write a message..."
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-textarea-base
::

## Features

:checklist{:items='["Handles model binding", "Color customization", "Sizes and radius support"]'}

## Anatomy
This component is self closing and can be used to create a textarea field. You can customize the input's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseTextarea />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseTextarea"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Default input variables */
  --color-input-default-border: var(--color-muted-300);
  --color-input-default-bg: var(--color-white);
  --color-input-default-text: var(--color-muted-600);
  --color-input-default-placeholder: var(--color-muted-300);
  --color-input-default-button-bg: var(--color-muted-100);
  --color-input-default-button-bg-active: var(--color-muted-200);
  --color-input-default-button-text: var(--color-muted-700);

  /* Muted input variables */
  --color-input-muted-border: var(--color-muted-300);
  --color-input-muted-bg: var(--color-muted-50);
  --color-input-muted-text: var(--color-muted-600);
  --color-input-muted-placeholder: var(--color-muted-300);
  --color-input-muted-button-bg: var(--color-muted-200);
  --color-input-muted-button-bg-active: var(--color-muted-300);
  --color-input-muted-button-text: var(--color-muted-700);
}
```

::

## Examples

### Variants

Use the `variant` prop to change the color of the textarea.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTextarea
    v-model="value"
    variant="muted"
    rounded="md"
    placeholder="Ex: Write a message..."
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-textarea-contrast
::

### Radius

Use the `rounded` prop to change the border radius of the textarea.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTextarea
    v-model="value"
    rounded="lg"
    placeholder="Write a message..."
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-textarea-radius
::

### Error

Use the `aria-invalid` prop to set the textarea in an error state.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTextarea
    v-model="value"
    placeholder="Write a message..."
    aria-invalid="true"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-textarea-error
::

### Disabled

Use the `disabled` prop to set the textarea in a disabled state.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTextarea
    v-model="value"
    placeholder="Write a message..."
    disabled
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-textarea-disabled
::
