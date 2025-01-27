---
title: 'Autocomplete'
description: 'An interactive search box.'
layout: 'default'
---

# Autocomplete

`<BaseAutocomplete />` · An interactive search box.

::component-header{category="components/form" fileName="BaseAutocomplete.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseAutocomplete
    v-model="fields.first"
    placeholder="Ex: nuxt"
  >
    <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
      {{ item }}
    </BaseAutocompleteItem>
  </BaseAutocomplete>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>
```

#preview
:demo-autocomplete-base
::

## Features

:checklist{:items='["Can be controlled or uncontrolled", "Offers 2 positioning modes", "Supports items, labels, groups of items", "Focus is fully managed", "Full keyboard navigation", "Supports custom placeholder"]'}

## Anatomy
This component has a default slot that can be used to add items, labels, groups of items, and separators. You can customize the autocomplete's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseAutocomplete>
    <BaseAutocompleteItem>
      <!-- Your content here -->
    </BaseAutocompleteItem>
  </BaseAutocomplete>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

### Autocomplete

:component-meta{name="BaseAutocomplete"}

### Group

:component-meta{name="BaseAutocompleteGroup"}

### Item

:component-meta{name="BaseAutocompleteItem"}

### Label

:component-meta{name="BaseAutocompleteLabel"}

### Separator

:component-meta{name="BaseAutocompleteSeparator"}

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

Use the `size` prop to change the size of the autocomplete.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseAutocomplete
    v-model="fields.second"
    size="md"
    placeholder="Ex: nuxt"
  >
    <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
      {{ item }}
    </BaseAutocompleteItem>
  </BaseAutocomplete>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>
```

#preview
:demo-autocomplete-size
::

### Variants

Use the `variant` prop to change the contrast of the autocomplete.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseAutocomplete
    v-model="fields.second"
    variant="muted"
    placeholder="Ex: nuxt"
  >
    <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
      {{ item }}
    </BaseAutocompleteItem>
  </BaseAutocomplete>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>
```

#preview
:demo-autocomplete-contrast
::

### Groups

Use the `BaseAutocompleteGroup` component to group items.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseAutocomplete
    v-model="fields.first"
    rounded="md"
    placeholder="Ex: nuxt"
  >
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Frameworks
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
  </BaseAutocomplete>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]

const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Ruby',
  'Java',
  'C#',
  'PHP',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'Dart',
  'Scala',
  'Elixir',
  'Clojure',
]
</script>
```

#preview
:demo-autocomplete-groups
::

### Presets

Use the available presets to quickly change the autocomplete's visual style.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseAutocomplete preset="popper" placeholder="popper">
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Frameworks
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
  </BaseAutocomplete>
  <BaseAutocomplete preset="inline" placeholder="Inline">
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Frameworks
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
    <BaseAutocompleteSeparator />
    <BaseAutocompleteGroup>
      <BaseAutocompleteLabel>
        Languages
      </BaseAutocompleteLabel>
      <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </BaseAutocompleteItem>
    </BaseAutocompleteGroup>
  </BaseAutocomplete>
</template>

<script setup lang="ts">
const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]

const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Ruby',
  'Java',
  'C#',
  'PHP',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'Dart',
  'Scala',
  'Elixir',
  'Clojure',
]
</script>
```

#preview
:demo-autocomplete-presets
::

### Multiple string selection

Use the `multiple` prop to be able to select multiple items at once.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="multipleValue"
          rounded="md"
          placeholder="Ex: nuxt"
          multiple
        >
          <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
            {{ item }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const multipleValue = ref<string[]>(['Nuxt', 'Vue.js'])
const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>
```

#preview
:demo-autocomplete-multiple-strings
::

### Multiple object selection

Use the `multiple` prop to be able to select multiple items at once.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="multiplePerson"
          by="id"
          rounded="md"
          placeholder="Search..."
          multiple
        >
          <BaseAutocompleteItem v-for="item in persons" :key="item.id" :value="item">
            {{ item.name }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const persons = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: 'https://tairo.cssninja.io/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: 'https://tairo.cssninja.io/img/avatars/16.svg',
  },
  {
    id: 3,
    disabled: true,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: 'https://tairo.cssninja.io/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: 'https://tairo.cssninja.io/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: 'https://tairo.cssninja.io/img/avatars/2.svg',
  },
]
const multiplePerson = ref([persons[1]!])
</script>
```

#preview
:demo-autocomplete-multiple-objects
::

### Clearable

Use the `clearable` prop to add a clear button to the autocomplete.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="fields.first"
          rounded="md"
          placeholder="Ex: nuxt"
          clearable
        >
          <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
            {{ item }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>
```

#preview
:demo-autocomplete-clearable
::

### Error

Use the `aria-invalid` prop to indicate that the input has an error.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="fields.first"
          rounded="md"
          placeholder="Ex: nuxt"
          aria-invalid="true"
        >
          <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
            {{ item }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>
```

#preview
:demo-autocomplete-error
::

### Disabled

Use the `disabled` prop to disable the autocomplete.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="fields.first"
          rounded="md"
          placeholder="Ex: nuxt"
          disabled
        >
          <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
            {{ item }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>
```

#preview
:demo-autocomplete-disabled
::

### Slots

This component has multiple slots that you can use to customize how your items render and behave.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          placeholder="Hide create prompt"
        >
          <template #empty>
            <BaseCard variant="muted">
              #empty
            </BaseCard>
          </template>
          <template #viewport-start="{ query }">
            <BaseCard variant="muted">
              #viewport-start { {{ query }} }
            </BaseCard>
          </template>
          <template #viewport-end>
            <BaseCard variant="muted">
              #viewport-end
            </BaseCard>
          </template>
          <template #content-start>
            <BaseCard>
              #content-start
            </BaseCard>
          </template>
          <template #content-end>
            <BaseCard>
              #content-end
            </BaseCard>
          </template>
          <BaseAutocompleteItem v-for="item in persons" :key="item.id" :value="item">
            {{ item.name }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const persons = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: 'https://tairo.cssninja.io/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: 'https://tairo.cssninja.io/img/avatars/16.svg',
  },
  {
    id: 3,
    disabled: true,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: 'https://tairo.cssninja.io/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: 'https://tairo.cssninja.io/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: 'https://tairo.cssninja.io/img/avatars/2.svg',
  },
]
</script>
```

#preview
:demo-autocomplete-slots
::
