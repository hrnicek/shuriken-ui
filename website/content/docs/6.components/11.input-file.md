---
title: 'Input File'
description: 'A simple file upload input'
layout: 'default'
---

# Input File

`<BaseInputFile />` · A simple file upload input

::component-header{category="components/form" fileName="BaseInputFile.vue" }
::

::code-group
```vue [DemoInputFileBase.vue]
<template>
  <BaseInputFile v-model="file" rounded="md" placeholder="Upload a file" />
</template>

<script setup lang="ts">
const file = ref<FileList | null>(null)
</script>
```

#preview
:demo-input-file-base
::

## Features

:checklist{:items='["Handles model binding", "Color customization", "Sizes and radius support"]'}

## Anatomy
This component is self closing and can be used to create a file input. You can customize the input's visual style by using the available props.

::code-group

```vue [BaseInputFile]
<template>
  <BaseInputFile />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseInputFile"}

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

### Sizes

Use the `size` prop to set the size of the input.

::code-group
```vue [DemoInputFileSize.vue]
<template>
  <BaseInputFile v-model="file" size="md" placeholder="Upload a file" />
</template>

<script setup lang="ts">
const file = ref<FileList | null>(null)
</script>
```

#preview
:demo-input-file-size
::

### Border radius

Use the `rounded` prop to set the border radius of the input.

::code-group
```vue [DemoInputFileRadius.vue]
<template>
  <BaseInputFile v-model="file" rounded="full" placeholder="Upload a file" />
</template>

<script setup lang="ts">
const file = ref<FileList | null>(null)
</script>
```

#preview
:demo-input-file-radius
::
