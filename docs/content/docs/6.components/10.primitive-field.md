---
title: 'Primitive Field'
description: 'A form control container.'
layout: 'default'
---

# Primitive Field

`<BasePrimitiveField />` · A form control container.

::component-header{category="components/base" fileName="BasePrimitiveField.vue" }
::

::code-group{expandable}

```vue [DemoFieldBase.vue]
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <BasePrimitiveField required>
    <div class="relative">
      <BasePrimitiveFieldController>
        <BaseInput
          v-model="value"
          rounded="md"
          placeholder="Username"
        />
      </BasePrimitiveFieldController>
      <div class="absolute z-0 end-4 top-3 pointer-events-none">
        <BasePrimitiveFieldLoadingIndicator />
        <BasePrimitiveFieldSuccessIndicator />
        <BasePrimitiveFieldErrorIndicator />
      </div>
    </div>
  </BasePrimitiveField>
</template>
```

#preview
:demo-field-base
::

## Features

:checklist{:items='["Fully customizable", "Handles all input states", "Handles accessibiliy", "Handles input orientation", "Handles label and description"]'}

## Anatomy
This component is the atomic version of the `Field` component. It is meant, unlike the field, to let you compose the structure of your inputs. It has a few sub-components that you can use to build your form fields the way you want them in your project. Take a look at the anatomy of the component:

::code-group

```vue [BasePrimitiveField]
<template>
  <BasePrimitiveField>
    <BasePrimitiveFieldLabel>
      <!-- Your label here -->
      <BasePrimitiveFieldRequiredIndicator />
    </BasePrimitiveFieldLabel>
    <BasePrimitiveFieldController>
      <!-- Your input component here -->
    </BasePrimitiveFieldController>
    <div>
      <BasePrimitiveFieldLoadingIndicator />
      <BasePrimitiveFieldSuccessIndicator />
      <BasePrimitiveFieldErrorIndicator />
    </div>
    <BasePrimitiveFieldDescription>
      <!-- Your description here -->
    </BasePrimitiveFieldDescription>
  </BasePrimitiveField>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

Each of the field related components has its own set of props and slots that are detailed in the API reference section. Use them to build your unique input fields.

### Field

:component-meta{name="BasePrimitiveField"}

### Label

:component-meta{name="BasePrimitiveFieldLabel"}

### Controller

:component-meta{name="BasePrimitiveFieldController"}

### Loading indicator

:component-meta{name="BasePrimitiveFieldLoadingIndicator"}

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

```vue [DemoFieldInput.vue]
<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <BasePrimitiveField v-for="state in states" :key="state" :state="state">
    <div class="w-full inline-flex">
      <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
        <div>
          <span>Username</span>
          <BasePrimitiveFieldRequiredIndicator />
        </div>
      </BasePrimitiveFieldLabel>
    </div>
    <div class="relative">
      <BasePrimitiveFieldController>
        <BaseInput placeholder="username..." />
      </BasePrimitiveFieldController>
      <div class="absolute z-0 end-4 top-3 pointer-events-none">
        <BasePrimitiveFieldLoadingIndicator />
        <BasePrimitiveFieldSuccessIndicator />
        <BasePrimitiveFieldErrorIndicator />
      </div>
    </div>
    <div class="mt-2 flex flex-col">
      <BasePrimitiveFieldError class="mb-1 block">
        The input is invalid because ...
      </BasePrimitiveFieldError>
      <BasePrimitiveFieldDescription>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
        <BaseLink to="#" class="text-primary-600 dark:text-primary-400">
          Learn more
        </BaseLink>
      </BasePrimitiveFieldDescription>
    </div>
  </BasePrimitiveField>
</template>
```

#preview
:demo-field-input
::

### Select

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseSelect` component:

::code-group{expandable}

```vue [DemoFieldSelect.vue]
<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <BasePrimitiveField v-for="state in states" :key="state">
    <div class="w-full inline-flex">
      <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
        <div>
          <span>Select an option</span>
          <BasePrimitiveFieldRequiredIndicator />
        </div>
      </BasePrimitiveFieldLabel>
    </div>
    <div class="relative">
      <BasePrimitiveFieldController>
        <BaseSelect v-model="value" placeholder="Select a value...">
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
      </BasePrimitiveFieldController>
      <div class="absolute z-0 end-10 top-3 pointer-events-none">
        <BasePrimitiveFieldLoadingIndicator />
        <BasePrimitiveFieldSuccessIndicator />
        <BasePrimitiveFieldErrorIndicator />
      </div>
    </div>
  </BasePrimitiveField>
</template>
```

#preview
:demo-field-select
::

### Autocomplete

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseAutocomplete` component:

::code-group{expandable}

```vue [DemoFieldAutocomplete.vue]
<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <BasePrimitiveField v-for="state in states" :key="state" :state="state">
    <div class="w-full inline-flex">
      <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
        <div>
          <span>Choose an option</span>
          <BasePrimitiveFieldRequiredIndicator />
        </div>
      </BasePrimitiveFieldLabel>
    </div>
    <div class="relative">
      <BasePrimitiveFieldController>
        <BaseAutocomplete
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
      </BasePrimitiveFieldController>
      <div class="absolute z-0 end-10 top-3 pointer-events-none">
        <BasePrimitiveFieldLoadingIndicator />
        <BasePrimitiveFieldSuccessIndicator />
        <BasePrimitiveFieldErrorIndicator />
      </div>
    </div>
  </BasePrimitiveField>
</template>
```

#preview
:demo-field-autocomplete
::

### File input

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseInputFile` component:

::code-group{expandable}

```vue [DemoFieldInputFile.vue]
<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <BasePrimitiveField v-for="state in states" :key="state" :state="state">
    <div class="w-full inline-flex">
      <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
        <div>
          <span>Upload file</span>
          <BasePrimitiveFieldRequiredIndicator />
        </div>
      </BasePrimitiveFieldLabel>
    </div>
    <div class="relative">
      <BasePrimitiveFieldController>
        <BaseInputFile placeholder="placeholder" />
      </BasePrimitiveFieldController>
      <div class="absolute z-0 end-4 top-3 pointer-events-none">
        <BasePrimitiveFieldLoadingIndicator />
        <BasePrimitiveFieldSuccessIndicator />
        <BasePrimitiveFieldErrorIndicator />
      </div>
    </div>
  </BasePrimitiveField>
</template>
```

#preview
:demo-field-input-file
::

### Number input

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseInputNumber` component:

::code-group{expandable}

```vue [DemoFieldInputNumber.vue]
<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <BasePrimitiveField v-for="state in states" :key="state" :state="state">
    <div class="w-full inline-flex">
      <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
        <div>
          <span>Quantity</span>
          <BasePrimitiveFieldRequiredIndicator />
        </div>
      </BasePrimitiveFieldLabel>
    </div>
    <div class="relative">
      <BasePrimitiveFieldController>
        <BaseInputNumber placeholder="placeholder" />
      </BasePrimitiveFieldController>
      <div class="absolute z-0 end-12 top-3 pointer-events-none">
        <BasePrimitiveFieldLoadingIndicator />
        <BasePrimitiveFieldSuccessIndicator />
        <BasePrimitiveFieldErrorIndicator />
      </div>
    </div>
    <div class="mt-2 flex flex-col">
      <BasePrimitiveFieldError class="mb-1 block">
        The input is invalid because ...
      </BasePrimitiveFieldError>
      <BasePrimitiveFieldDescription>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
        <BaseLink to="#" class="text-primary-600 dark:text-primary-400">
          Learn more
        </BaseLink>
      </BasePrimitiveFieldDescription>
    </div>
  </BasePrimitiveField>
</template>
```

#preview
:demo-field-input-number
::

### Textarea

Fields can be used with any input component. Fields handle all states an input component can go through, such as `idle`, `loading`, `success` and `error`. Here is an example using the `BaseTextarea` component:

::code-group{expandable}

```vue [DemoFieldTextarea.vue]
<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <BasePrimitiveField v-for="state in states" :key="state" :state="state">
    <div class="w-full inline-flex">
      <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
        <div>
          <span>Message</span>
          <BasePrimitiveFieldRequiredIndicator />
        </div>
      </BasePrimitiveFieldLabel>
    </div>
    <div class="relative">
      <BasePrimitiveFieldController>
        <BaseTextarea placeholder="Write a message..." />
      </BasePrimitiveFieldController>
      <div class="absolute z-0 end-4 top-3 pointer-events-none">
        <BasePrimitiveFieldLoadingIndicator />
        <BasePrimitiveFieldSuccessIndicator />
        <BasePrimitiveFieldErrorIndicator />
      </div>
    </div>
  </BasePrimitiveField>
</template>
```

#preview
:demo-field-textarea
::

### Horizontal orientation

Fields can render in a horizontal orientation. Here is an example using the `BaseInput` component:

::code-group{expandable}

```vue [DemoFieldHorizontal.vue]
<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <div class="grid grid-cols-3 gap-8 gap-x-10 max-w-2xl">
    <BasePrimitiveField class="grid grid-cols-subgrid col-span-3" state="loading">
      <div class="flex flex-col justify-center gap-1 relative">
        <BasePrimitiveFieldLabel>
          <span>Horizontal</span>
          <BasePrimitiveFieldRequiredIndicator />
        </BasePrimitiveFieldLabel>
        <BasePrimitiveFieldDescription>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
          <BaseLink to="#" class="text-primary-600 dark:text-primary-400">
            Learn more
          </BaseLink>
        </BasePrimitiveFieldDescription>
        <div class="absolute z-0 end-0 top-0 pointer-events-none">
          <BasePrimitiveFieldLoadingIndicator />
          <BasePrimitiveFieldSuccessIndicator />
          <BasePrimitiveFieldErrorIndicator />
        </div>
      </div>

      <div class="col-span-2">
        <div class="relative">
          <BasePrimitiveFieldController>
            <BaseInput v-model="value" />
          </BasePrimitiveFieldController>
          <div class="absolute z-0 end-4 top-3 pointer-events-none">
            <BasePrimitiveFieldLoadingIndicator />
            <BasePrimitiveFieldSuccessIndicator />
            <BasePrimitiveFieldErrorIndicator />
          </div>
        </div>
      </div>
    </BasePrimitiveField>
  </div>
</template>
```

#preview
:demo-field-horizontal
::
