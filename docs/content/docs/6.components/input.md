---
title: 'Input'
description: 'A user input, an editable field.'
layout: 'default'
---

# Input

`<BaseInput />` · A user input, an editable field.

::component-header{category="components/form" fileName="BaseInput.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInput
    v-model="value"
    rounded="md"
    placeholder="Label"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-input-base
::

## Features

:checklist{:items='["Handles model binding", "Color customization", "Sizes and radius support"]'}

## Anatomy
This component is self closing and can be used to create an input field. You can customize the input's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseInput />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseInput"}

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

### Size

Use the `size` prop to change the size of the input.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInput
    v-model="value"
    size="md"
    placeholder="Ex: username"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-input-size
::

### Variant

Use the `variant` prop to change the contrast of the input.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInput
    v-model="value"
    variant="default"
    rounded="md"
    placeholder="Ex: username"
  />
  <BaseInput
    v-model="value"
    variant="muted"
    rounded="md"
    placeholder="Ex: username"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-input-contrast
::

### Radius

Use the `rounded` prop to change the border radius of the input.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInput
    v-model="value"
    rounded="full"
    placeholder="Ex: username"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-input-radius
::

### Error

Use the `aria-invalid="true"` attribute to display an error state.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInput
    v-model="value"
    variant="default"
    rounded="md"
    placeholder="Ex: username"
    aria-invalid="true"
  />
  <BaseInput
    v-model="value"
    variant="muted"
    rounded="md"
    placeholder="Ex: username"
    aria-invalid="true"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-input-error
::

### Disabled

Use the `disabled` prop to set the input in a disabled state.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseInput
    v-model="value"
    label="Username"
    placeholder="Ex: username"
    disabled
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-input-disabled
::
