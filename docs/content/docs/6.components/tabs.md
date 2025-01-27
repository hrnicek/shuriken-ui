---
title: 'Tabs'
description: 'A subnavigation component.'
layout: 'default'
---

# Tabs

`<BaseTabs />` · A subnavigation component.

::component-header{category="components/base" fileName="BaseTabs.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    default-value="team"
    variant="primary"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Disabled', value: 'tasks', disabled: true },
    ]"
  >
    <BaseTabsContent value="team">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
      iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
      Ne discipulum abducam, times. ...
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
      quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
      risus sem semper lorem, vitae efficitur nunc est eget mi. ...
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
      gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
      Pellentesque quis vehicula ipsum. ...
    </BaseTabsContent>
  </BaseTabs>
</template>
```

#preview
:demo-tabs-base
::

## Features

:checklist{:items='["Full keyboard navigation", "Can be controlled or uncontrolled", "Supports horizontal/vertical orientation", "Supports automatic/manual activation"]'}

## Anatomy
Use the `<BaseTabs />` component to create a subnavigation component. Nest `<BaseTabsContent />` components inside `<BaseTabs />` to create the content for each tab.

::code-group

```vue [Comp.vue]
<template>
  <BaseTabs>
    <BaseTabsContent>
      <!-- Content goes here -->
    </BaseTabsContent>
    <BaseTabsContent>
      <!-- Content goes here -->
    </BaseTabsContent>
  </BaseTabs>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

### Tabs

:component-meta{name="BaseTabs"}

### Tab item

:component-meta{name="BaseTabsContent"}

## Examples

### Alignment

Use the `justify` prop to change alignment of the tabs.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    default-value="team"
    justify="center"
    variant="primary"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
    ]"
  >
    <BaseTabsContent value="team">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
      iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
      Ne discipulum abducam, times. ...
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
      quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
      risus sem semper lorem, vitae efficitur nunc est eget mi. ...
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
      gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
      Pellentesque quis vehicula ipsum. ...
    </BaseTabsContent>
  </BaseTabs>
</template>
```

#preview
:demo-tabs-align
::

### Orientation

Use the `orientation` prop to change orientation of the tabs.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    default-value="team"
    orientation="vertical"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Disabled', value: 'tasks', disabled: true },
    ]"
  >
    <BaseTabsContent value="team">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
      iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
      Ne discipulum abducam, times. ...
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
      quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
      risus sem semper lorem, vitae efficitur nunc est eget mi. ...
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
      gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
      Pellentesque quis vehicula ipsum. ...
    </BaseTabsContent>
  </BaseTabs>
</template>
```

#preview
:demo-tabs-orientation
::

### Variants

Use the `variant` prop to change the color of the tabs.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    default-value="team"
    variant="primary"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Disabled', value: 'tasks', disabled: true },
    ]"
  >
    <BaseTabsContent value="team">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
      iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
      Ne discipulum abducam, times. ...
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
      quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
      risus sem semper lorem, vitae efficitur nunc est eget mi. ...
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
      gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
      Pellentesque quis vehicula ipsum. ...
    </BaseTabsContent>
  </BaseTabs>
</template>
```

#preview
:demo-tabs-color
::

### Icons

Include icons in the tabs object to display icons.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    default-value="tasks"
    color="default"
    :tabs
  >
    <BaseTabsContent value="team">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
      iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
      Ne discipulum abducam, times. ...
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
      quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
      risus sem semper lorem, vitae efficitur nunc est eget mi. ...
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
      gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
      Pellentesque quis vehicula ipsum. ...
    </BaseTabsContent>
  </BaseTabs>
</template>

<script setup lang="ts">
const tabs = [
  {
    label: 'Team',
    value: 'team',
    icon: 'solar:users-group-rounded-linear',
  },
  {
    label: 'Projects',
    value: 'projects',
    icon: 'solar:case-linear',
  },
  {
    label: 'Tasks',
    value: 'tasks',
    icon: 'solar:scanner-2-linear',
  },
]
</script>
```

#preview
:demo-tabs-icon
::

### Boxed

Use the `type` prop to change the style of the tabs.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    v-model="selectedTab"
    type="box"
    :tabs="tabs"
  >
    <BaseTabsContent value="team">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
      iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
      Ne discipulum abducam, times. ...
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
      quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
      risus sem semper lorem, vitae efficitur nunc est eget mi. ...
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
      gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
      Pellentesque quis vehicula ipsum. ...
    </BaseTabsContent>
  </BaseTabs>
</template>

<script setup lang="ts">
const selectedTab = ref('team')

const tabs = [
  {
    label: 'Team',
    value: 'team',
  },
  {
    label: 'Projects',
    value: 'projects',
  },
  {
    label: 'Tasks',
    value: 'tasks',
  },
]
</script>
```

#preview
:demo-tabs-boxed
::

### Boxed Icons

Include icons in the tabs object to display icons.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    v-model="selectedTab"
    type="box"
    variant="dark"
  >
    <template #trigger>
      <BaseTabsTrigger v-for="tab in tabs" :key="tab.value" label="Team" :icon="tab.icon" value="team" @click="selectedTab = tab.value" />
    </template>

    <BaseTabsContent value="team">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
      iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
      Ne discipulum abducam, times. ...
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
      quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
      risus sem semper lorem, vitae efficitur nunc est eget mi. ...
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
      gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
      Pellentesque quis vehicula ipsum. ...
    </BaseTabsContent>
  </BaseTabs>
</template>

<script setup lang="ts">
const selectedTab = ref('team')

const tabs = [
  {
    label: 'Team',
    value: 'team',
    icon: 'solar:users-group-rounded-linear',
  },
  {
    label: 'Projects',
    value: 'projects',
    icon: 'solar:case-linear',
  },
  {
    label: 'Tasks',
    value: 'tasks',
    icon: 'solar:scanner-2-linear',
  },
]
</script>
```

#preview
:demo-tabs-boxed-icons
::

### Nested tabs

You can nest tabs within tabs.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseTabs
    default-value="team"
    variant="dark"
    :tabs="tabs"
  >
    <BaseTabsContent value="team">
      <BaseTabs
        default-value="team"
        orientation="vertical"
        type="box"
        variant="dark"
        :tabs="tabsNoIcon"
      >
        <BaseTabsContent value="team">
          team Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
          iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
          Ne discipulum abducam, times. ...
        </BaseTabsContent>
        <BaseTabsContent value="projects">
          team Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
          quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
          risus sem semper lorem, vitae efficitur nunc est eget mi. ...
        </BaseTabsContent>
        <BaseTabsContent value="tasks">
          team Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
          gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
          Pellentesque quis vehicula ipsum. ...
        </BaseTabsContent>
      </BaseTabs>
    </BaseTabsContent>
    <BaseTabsContent value="projects">
      <BaseTabs
        default-value="team"
        orientation="vertical"
        type="box"
        variant="dark"
        :tabs="tabsNoIcon"
      >
        <BaseTabsContent value="team">
          projects Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
          iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
          Ne discipulum abducam, times. ...
        </BaseTabsContent>
        <BaseTabsContent value="projects">
          projects Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
          quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
          risus sem semper lorem, vitae efficitur nunc est eget mi. ...
        </BaseTabsContent>
        <BaseTabsContent value="tasks">
          projects Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
          gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
          Pellentesque quis vehicula ipsum. ...
        </BaseTabsContent>
      </BaseTabs>
    </BaseTabsContent>
    <BaseTabsContent value="tasks">
      <BaseTabs
        default-value="team"
        orientation="vertical"
        type="box"
        variant="dark"
        :tabs="tabsNoIcon"
      >
        <BaseTabsContent value="team">
          tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
          iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
          Ne discipulum abducam, times. ...
        </BaseTabsContent>
        <BaseTabsContent value="projects">
          tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada,
          quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet,
          risus sem semper lorem, vitae efficitur nunc est eget mi. ...
        </BaseTabsContent>
        <BaseTabsContent value="tasks">
          tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu,
          gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare.
          Pellentesque quis vehicula ipsum. ...
        </BaseTabsContent>
      </BaseTabs>
    </BaseTabsContent>
  </BaseTabs>
</template>

<script setup lang="ts">
const tabs = [
  {
    label: 'Team',
    value: 'team',
    icon: 'solar:users-group-rounded-linear',
  },
  {
    label: 'Projects',
    value: 'projects',
    icon: 'solar:case-linear',
  },
  {
    label: 'Tasks',
    value: 'tasks',
    icon: 'solar:scanner-2-linear',
  },
]

const tabsNoIcon = [
  {
    label: 'Team',
    value: 'team',
  },
  {
    label: 'Projects',
    value: 'projects',
  },
  {
    label: 'Tasks',
    value: 'tasks',
  },
]
</script>
```

#preview
:demo-tabs-nested
::
