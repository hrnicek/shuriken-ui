---
title: 'List'
description: 'A versatile list component.'
layout: 'default'
---

# List

`<BaseList />` · A versatile list component.

::component-header{category="components/base" fileName="BaseList.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseList class="ps-4">
    <li>Finish project UX</li>
    <li>Meet with Andy at 3:00pm</li>
    <li>Get groceries for Anna</li>
    <li>Pay water bill</li>
  </BaseList>
</template>
```

#preview
:demo-list-base
::

## Features

:checklist{:items='["Native or child component", "Supports ordered and numbered lists", "Supports media elements"]'}

## Anatomy
This component accepts a `<li/>` or a `BaseListItem` as a child. You can customize the list's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseList>
    <BaseListItem>
      <!-- Content goes here -->
    </BaseListItem>
  </BaseList>
</template>
```

::

## API Reference

This component has props that you can use to modify its style and behavior.

### List

:component-meta{name="BaseList"}

### List Item

:component-meta{name="BaseListItem"}

## Examples

### Ordered

Use the `ordered` prop to set the list component to an ordered list.

::code-group

```vue [Comp.vue]
<template>
  <BaseList ordered class="ps-4">
    <li>Finish project UX</li>
    <li>Meet with Andy at 3:00pm</li>
    <li>Get groceries for Anna</li>
    <li>Pay water bill</li>
  </BaseList>
</template>
```

#preview
:demo-list-ordered
::

### Subtitle

Use the `<ListItem />` component inside the list to add a subtitle.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseList>
    <BaseListItem
      title="Finish project UX"
      subtitle="Close resubing pending tasks"
    />
    <BaseListItem
      title="Meet with Andy at 3:00pm"
      subtitle="Meeting about next project steps"
    />
    <BaseListItem
      title="Get groceries for Anna"
      subtitle="In preparation of next Friday's party"
    />
    <BaseListItem
      title="Pay water bill"
      subtitle="Bill must be paid before next Tuesday"
    />
  </BaseList>
</template>
```

#preview
:demo-list-subtitle
::

### Icon

Use the `<ListItem />` component default slot to display an icon.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseList>
    <BaseListItem
      title="Finish project UX"
      subtitle="Close resubing pending tasks"
    >
      <Icon
        name="solar:document-add-linear"
        class="text-2xl text-muted-400 dark:text-muted-500"
      />
    </BaseListItem>
    <BaseListItem
      title="Meet with Andy at 3:00pm"
      subtitle="Meeting about next project steps"
    >
      <Icon name="solar:map-point-linear" class="text-2xl text-muted-400 dark:text-muted-500" />
    </BaseListItem>
    <BaseListItem
      title="Get groceries for Anna"
      subtitle="In preparation of next Friday's party"
    >
      <Icon name="solar:cart-3-linear" class="text-2xl text-muted-400 dark:text-muted-500" />
    </BaseListItem>
    <BaseListItem
      title="Pay power bill"
      subtitle="Bill must be paid before next Tuesday"
    >
      <Icon name="solar:bolt-linear" class="text-2xl text-muted-400 dark:text-muted-500" />
    </BaseListItem>
  </BaseList>
</template>
```

#preview
:demo-list-icon
::

### Avatar

Use the `<ListItem />` component default slot to display an avatar.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseList>
    <BaseListItem
      title="Finish project UX"
      subtitle="Close resubing pending tasks"
    >
      <BaseAvatar src="/img/people/44.jpg" />
    </BaseListItem>
    <BaseListItem
      title="Meet with Andy at 3:00pm"
      subtitle="Meeting about next project steps"
    >
      <BaseAvatar src="/img/people/19.jpg" />
    </BaseListItem>
    <BaseListItem
      title="Get groceries for Anna"
      subtitle="In preparation of next Friday's party"
    >
      <BaseAvatar src="/img/people/17.jpg" />
    </BaseListItem>
    <BaseListItem
      title="Pay water bill"
      subtitle="Bill must be paid before next Tuesday"
    >
      <BaseAvatar src="/img/people/51.jpg" />
    </BaseListItem>
  </BaseList>
</template>
```

#preview
:demo-list-avatar
::
