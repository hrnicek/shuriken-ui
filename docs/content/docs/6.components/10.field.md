---
title: 'Field'
description: 'A form control container.'
layout: 'default'
---

# Field

`<BaseField />` · A form control container.

::component-header{category="components/base" fileName="BaseField.vue" }
::

::code-group{expandable}

```vue [DemoFieldStandaloneBase.vue]
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <BaseField
    id="username"
    v-slot="{ inputAttrs, inputRef }"
    label="Username"
  >
    <BaseInput :ref="inputRef" v-model="value" v-bind="inputAttrs" placeholder="Ex: johndoe83" />
  </BaseField>
</template>
```

#preview
:demo-field-standalone-base
::

## Features

:checklist{:items='["Supports all input types", "Handles all input states", "Handles accessibiliy", "Handles input orientation", "Handles label and description"]'}

## Anatomy
This component is the standalone version of the `PrimitiveField` component. It has a single slot where you can place your input component. It also has various props to handle the label, description, and other field options.

::code-group

```vue [BaseField]
<template>
  <BaseField>
    <!-- Your input component here -->
  </BaseField>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behaviour.

:component-meta{name="BaseField"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Field elements variables */
  --color-field-label: var(--color-muted-600);
  --color-field-description: var(--color-muted-500);
  --color-field-loading: var(--color-muted-400);
}
```

::

## Examples

### Text input

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseInput` component:

::code-group{expandable}

```vue [DemoFieldStandaloneInput.vue]
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <BaseField
    id="username"
    v-slot="{ inputAttrs, inputRef }"
    label="Username"
  >
    <BaseInput :ref="inputRef" v-model="value" v-bind="inputAttrs" placeholder="Ex: johndoe83" />
  </BaseField>
</template>
```

#preview
:demo-field-standalone-base
::

### Select

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseSelect` component:

::code-group{expandable}

```vue [DemoFieldStandaloneSelect.vue]
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <BaseField
    id="username"
    v-slot="{ inputAttrs, inputRef }"
    label="Username"
    class="w-full"
  >
    <BaseSelect :ref="inputRef" v-model="value" v-bind="inputAttrs" placeholder="Select a value...">
      <BaseSelectItem value="1">
        Option 1
      </BaseSelectItem>
      <BaseSelectItem value="2">
        Option 2
      </BaseSelectItem>
      <BaseSelectItem value="3">
        Option 3
      </BaseSelectItem>
      <BaseSelectItem value="4">
        Option 4
      </BaseSelectItem>
    </BaseSelect>
  </BaseField>
</template>
```

#preview
:demo-field-standalone-select
::

### Autocomplete

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseAutocomplete` component:

::code-group{expandable}

```vue [DemoFieldStandaloneAutocomplete.vue]
<template>
  <BaseField
    id="options"
    v-slot="{ inputAttrs, inputRef }"
    label="Search an option"
    class="w-full"
  >
    <BaseAutocomplete
      :ref="inputRef"
      v-bind="inputAttrs"
      placeholder="autocomplete placeholder"
      clearable
    >
      <BaseAutocompleteItem value="1">
        Option 1
      </BaseAutocompleteItem>
      <BaseAutocompleteItem value="2">
        Option 2
      </BaseAutocompleteItem>
      <BaseAutocompleteItem value="3">
        Option 3
      </BaseAutocompleteItem>
      <BaseAutocompleteItem value="4">
        Option 4
      </BaseAutocompleteItem>
      <BaseAutocompleteItem value="5">
        Option 5
      </BaseAutocompleteItem>
      <BaseAutocompleteItem value="6">
        Option 6
      </BaseAutocompleteItem>
    </BaseAutocomplete>
  </BaseField>
</template>
```

#preview
:demo-field-standalone-autocomplete
::

### File input

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseInputFile` component:

::code-group{expandable}

```vue [DemoFieldStandaloneInputFile.vue]
<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseField
            id="upload"
            v-slot="{ inputAttrs, inputRef }"
            label="Upload file"
            class="w-full"
          >
            <BaseInputFile :ref="inputRef" v-bind="inputAttrs" placeholder="placeholder" />
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
```

#preview
:demo-field-standalone-input-file
::

### Number input

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseInputNumber` component:

::code-group{expandable}

```vue [DemoFieldStandaloneInputNumber.vue]
<template>
  <BaseField
    id="quantity"
    v-slot="{ inputAttrs, inputRef }"
    label="Quantity"
    class="w-full"
  >
    <BaseInputNumber :ref="inputRef" v-bind="inputAttrs" placeholder="placeholder" />
  </BaseField>
</template>
```

#preview
:demo-field-standalone-input-number
::

### Textarea

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseTextarea` component:

::code-group{expandable}

```vue [DemoFieldStandaloneTextarea.vue]
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <BaseField
    id="message"
    v-slot="{ inputAttrs, inputRef }"
    label="Message"
    class="w-full"
  >
    <BaseTextarea :ref="inputRef" v-model="value" v-bind="inputAttrs" placeholder="Write a message..." />
  </BaseField>
</template>
```

#preview
:demo-field-standalone-textarea
::
