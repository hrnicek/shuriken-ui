---
title: 'Select'
description: 'A simple select box component.'
layout: 'default'
---

# Select

`<Baseselect />` · A simple select box component.

::component-header{category="components/form" fileName="BaseSelect.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect v-model="value" rounded="md" placeholder="Select a hero">
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectItem value="Iron man">
      Iron man
    </BaseSelectItem>
    <BaseSelectItem value="Magneto">
      Magneto
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops">
      Cyclops
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref()
</script>
```

#preview
:demo-select-base
::

## Features

:checklist{:items='["Can be controlled or uncontrolled", "Full keyboard navigation", "Supports custom placeholder", "Typeahead support"]'}

## Anatomy
This component has a default slot that can be used to add select options. Use the component `props` to customize its visual style.

::code-group

```vue [Comp.vue]
<template>
  <BaseSelect>
    <BaseSelectItem>
      <!-- Your content here -->
    </BaseSelectItem>
  </BaseSelect>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

### Select

:component-meta{name="BaseSelect"}

### Select item

:component-meta{name="BaseSelectItem"}

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

Use the `size` prop to change the size of the select.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect v-model="value" size="md" placeholder="Select a hero">
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectItem value="Iron man">
      Iron man
    </BaseSelectItem>
    <BaseSelectItem value="Magneto">
      Magneto
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops">
      Cyclops
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-size
::

### Variants

Use the `variant` prop to change the variant of the select.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect v-model="value" variant="muted" placeholder="Select a hero">
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectItem value="Iron man">
      Iron man
    </BaseSelectItem>
    <BaseSelectItem value="Magneto">
      Magneto
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops">
      Cyclops
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-contrast
::

### Radius

Use the `rounded` prop to change the border radius of the select.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect v-model="value" rounded="full" placeholder="Select a hero">
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectItem value="Iron man">
      Iron man
    </BaseSelectItem>
    <BaseSelectItem value="Magneto">
      Magneto
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops">
      Cyclops
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-radius
::

### Presets

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect
    v-model="item"
    size="md"
    :by="(a, b) => {
      return a.value === b.value
    }"
    placeholder="aligned"
    preset="aligned"
  >
    <BaseSelectItem v-for="hero in items" :key="hero.label" :value="hero">
      {{ hero.label }}
    </BaseSelectItem>
  </BaseSelect>
  <BaseSelect
    size="md"
    placeholder="popper"
    preset="popper"
  >
    <BaseSelectItem v-for="hero in heros" :key="hero" :value="hero">
      {{ hero }}
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const heros = [
  'Superman',
  'Batman',
  'Iron man',
  'Magneto',
  'Cyclops',
  'Wolverine',
  'Spiderman',
  'Hulk',
  'Thor',
  'Captain America',
  'Black Widow',
  'Doctor Strange',
  'Black Panther',
  'Ant-Man',
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Star-Lord',
  'Gamora',
  'Drax',
  'Rocket Raccoon',
  'Groot',
  'Nebula',
  'Mantis',
  'Yondu',
  'Hawkeye',
  'Quicksilver',
  'War Machine',
  'Nick Fury',
  'Loki',
  'Thanos',
  'Ultron',
  'Green Lantern',
  'Flash',
  'Aquaman',
  'Wonder Woman',
  'Shazam',
  'Green Arrow',
  'Martian Manhunter',
  'Hawkgirl',
  'Black Canary',
  'Zatanna',
  'Supergirl',
  'Batgirl',
  'Nightwing',
  'Red Hood',
  'Robin',
  'Catwoman',
  'Riddler',
  'Penguin',
  'Two-Face',
  'Harley Quinn',
  'Joker',
  'Lex Luthor',
  'Darkseid',
  'Brainiac',
  'Deathstroke',
  'Bane',
  'Ra\'s al Ghul',
  'Scarecrow',
  'Poison Ivy',
  'Mr. Freeze',
  'Clayface',
  'Killer Croc',
  'Man-Bat',
  'Hush',
  'Black Mask',
  'Deadshot',
  'Firefly',
  'Mad Hatter',
  'Solomon Grundy',
  'Ventriloquist',
  'Calendar Man',
  'Kite Man',
  'Polka-Dot Man',
  'Condiment King',
]

const items = [
  {
    value: 'superman',
    label: 'Superman',
  },
  {
    value: 'batman',
    label: 'Batman',
  },
  {
    value: 'spiderman',
    label: 'Spiderman',
  },
]
const item = ref(items[0])
</script>
```

#preview
:demo-select-presets
::

### Position

Use the `position` prop to change the alignment of the select.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect
    v-model="value"
    placeholder="Select a hero"
    label="Item aligned (default)"
    :bindings="{
      content: {
        position: 'item-aligned',
      },
    }"
  >
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectItem value="Iron man">
      Iron man
    </BaseSelectItem>
    <BaseSelectItem value="Magneto">
      Magneto
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops">
      Cyclops
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-position
::

### Composition

Compose the select with groups, separators, and labels.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect
    v-model="value"
    placeholder="Select a hero"
  >
    <BaseSelectGroup>
      <BaseSelectLabel>
        Marvel
      </BaseSelectLabel>
      <BaseSelectItem value="Superman">
        Superman
      </BaseSelectItem>
      <BaseSelectItem value="Batman">
        Batman
      </BaseSelectItem>
    </BaseSelectGroup>
    <BaseSelectSeparator />
    <BaseSelectGroup>
      <BaseSelectLabel>
        DC
      </BaseSelectLabel>
      <BaseSelectItem value="Magneto">
        Magneto
      </BaseSelectItem>
      <BaseSelectItem value="Cyclops">
        Cyclops
      </BaseSelectItem>
    </BaseSelectGroup>

    <BaseSelectGroup>
      <BaseSelectLabel>
        Long list
      </BaseSelectLabel>
      <BaseSelectItem v-for="i in 50" :key="i" :value="i">
        Option {{ i }}
      </BaseSelectItem>
    </BaseSelectGroup>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-composition
::

### Multiple

Use the `multiple` prop to allow multiple selections.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect
    v-model="value"
    placeholder="Select some heroes"
    multiple
  >
    <BaseSelectLabel>
      <span>Marvel</span>
    </BaseSelectLabel>
    <BaseSelectItem value="Superman" raw-slot>
      <div class="flex flex-col items-start gap-0 py-2">
        <div class="text-xs opacity-50">
          Marvel
        </div>
        <div>
          <SelectItemText>Superman</SelectItemText>
        </div>
      </div>
    </BaseSelectItem>
    <BaseSelectItem value="Batman" raw-slot>
      <div class="flex flex-col items-start gap-0 py-2">
        <div class="text-xs opacity-50">
          Marvel
        </div>
        <div>
          <SelectItemText>Batman</SelectItemText>
        </div>
      </div>
    </BaseSelectItem>
    <BaseSelectLabel>
      <div>DC</div>
    </BaseSelectLabel>
    <BaseSelectItem value="Magneto" raw-slot>
      <div class="flex flex-col items-start gap-0 py-2">
        <div class="text-xs opacity-50">
          DC
        </div>
        <div>
          <SelectItemText>Magneto</SelectItemText>
        </div>
      </div>
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops" raw-slot>
      <div class="flex flex-col items-start gap-0 py-2">
        <div class="text-xs opacity-50">
          DC
        </div>
        <div>
          <SelectItemText>Cyclops</SelectItemText>
        </div>
      </div>
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-multiple
::

### Slots

Use the provided slots to customize the select.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect
    placeholder="Select some heroes"
  >
    <template #viewport-start>
      <BaseCard variant="muted">
        #viewport-start
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

    <BaseSelectLabel>
      Marvel
    </BaseSelectLabel>
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectLabel>
      DC
    </BaseSelectLabel>

    <BaseSelectItem v-for="hero in heros" :key="hero" :value="hero">
      {{ hero }}
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const heros = [
  'Superman',
  'Batman',
  'Iron man',
  'Magneto',
  'Cyclops',
  'Wolverine',
  'Spiderman',
  'Hulk',
  'Thor',
  'Captain America',
  'Black Widow',
  'Doctor Strange',
  'Black Panther',
  'Ant-Man',
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Star-Lord',
  'Gamora',
  'Drax',
  'Rocket Raccoon',
  'Groot',
  'Nebula',
  'Mantis',
  'Yondu',
  'Hawkeye',
  'Quicksilver',
  'War Machine',
  'Nick Fury',
  'Loki',
  'Thanos',
  'Ultron',
  'Green Lantern',
  'Flash',
  'Aquaman',
  'Wonder Woman',
  'Shazam',
  'Green Arrow',
  'Martian Manhunter',
  'Hawkgirl',
  'Black Canary',
  'Zatanna',
  'Supergirl',
  'Batgirl',
  'Nightwing',
  'Red Hood',
  'Robin',
  'Catwoman',
  'Riddler',
  'Penguin',
  'Two-Face',
  'Harley Quinn',
  'Joker',
  'Lex Luthor',
  'Darkseid',
  'Brainiac',
  'Deathstroke',
  'Bane',
  'Ra\'s al Ghul',
  'Scarecrow',
  'Poison Ivy',
  'Mr. Freeze',
  'Clayface',
  'Killer Croc',
  'Man-Bat',
  'Hush',
  'Black Mask',
  'Deadshot',
  'Firefly',
  'Mad Hatter',
  'Solomon Grundy',
  'Ventriloquist',
  'Calendar Man',
  'Kite Man',
  'Polka-Dot Man',
  'Condiment King',
]
</script>
```

#preview
:demo-select-slots
::

### Error

Use the `aria-invalid` prop to set the select in an error state.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect
    v-model="value"
    rounded="md"
    placeholder="Select a hero"
    aria-invalid="true"
  >
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectItem value="Iron man">
      Iron man
    </BaseSelectItem>
    <BaseSelectItem value="Magneto">
      Magneto
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops">
      Cyclops
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-error
::

### Disabled

Use the `disabled` prop to set the select in a disabled state.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseSelect
    v-model="value"
    rounded="md"
    placeholder="Select a hero"
    disabled
  >
    <BaseSelectItem value="Superman">
      Superman
    </BaseSelectItem>
    <BaseSelectItem value="Batman">
      Batman
    </BaseSelectItem>
    <BaseSelectItem value="Iron man">
      Iron man
    </BaseSelectItem>
    <BaseSelectItem value="Magneto">
      Magneto
    </BaseSelectItem>
    <BaseSelectItem value="Cyclops">
      Cyclops
    </BaseSelectItem>
  </BaseSelect>
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

#preview
:demo-select-disabled
::
