---
title: 'Message'
description: 'A versatile message component.'
layout: 'default'
---

# Message

`<BaseMessage />` · A versatile message component.

::component-header{category="components/base" fileName="BaseMessage.vue" }
::

::code-group

```vue [DemoMessageBase.vue]
<template>
  <BaseMessage
    icon
    rounded="md"
  >
    A default message.
  </BaseMessage>
</template>
```

#preview
:demo-message-base
::

## Features

:checklist{:items='["Supports message states", "Supports icons", "Can have a close button"]'}

## Anatomy
This component accepts text content as a child. You can customize the message visual style by using the available props.

::code-group

```vue [BaseMessage]
<template>
  <BaseMessage>
    <!-- Content goes here -->
  </BaseMessage>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseMessage"}

## Examples

### Type

Use the `variant` prop to control the color of the message.

::code-group

```vue [DemoMessageType.vue]
<template>
  <BaseMessage variant="success">
    A successful message.
  </BaseMessage>
  <BaseMessage variant="info">
    An information message.
  </BaseMessage>
  <BaseMessage variant="warning">
    A warning message.
  </BaseMessage>
  <BaseMessage variant="destructive">
    A destructive message.
  </BaseMessage>
</template>
```

#preview
:demo-message-type
::

### Icon

Use the `icon` prop to display an icon inside the message.

::code-group{expandable}

```vue [DemoMessageIcon.vue]
<template>
  <BaseMessage
    color="muted"
    icon="mingcute:globe-fill"
    rounded="md"
  >
    A muted message.
  </BaseMessage>
  <BaseMessage
    color="primary"
    icon="mingcute:bling-fill"
    rounded="md"
  >
    A primary message.
  </BaseMessage>
  <BaseMessage icon rounded="md">
    A successful message.
  </BaseMessage>
  <BaseMessage color="info" icon rounded="md">
    An information message.
  </BaseMessage>
  <BaseMessage color="warning" icon rounded="md">
    A warning message.
  </BaseMessage>
  <BaseMessage color="danger" icon rounded="md">
    A destructive message.
  </BaseMessage>
</template>
```

#preview
:demo-message-icon
::

### Radius

Use the `rounded` prop to control the border radius of the message.

::code-group

```vue [DemoMessageRadius.vue]
<template>
  <BaseMessage color="success" icon rounded="sm">
    A successful message.
  </BaseMessage>
  <BaseMessage color="info" icon rounded="md">
    An information message.
  </BaseMessage>
  <BaseMessage color="warning" icon rounded="lg">
    A warning message.
  </BaseMessage>
  <BaseMessage color="danger" icon rounded="full">
    A destructive message.
  </BaseMessage>
</template>
```

#preview
:demo-message-radius
::

### Closable

Use the `closable` prop to display a close button on the message.

::code-group

```vue [DemoMessageClose.vue]
<template>
  <BaseMessage color="success" icon rounded="sm">
    A successful message.
  </BaseMessage>
  <BaseMessage color="info" icon rounded="md">
    An information message.
  </BaseMessage>
  <BaseMessage color="warning" icon rounded="lg">
    A warning message.
  </BaseMessage>
  <BaseMessage color="danger" icon rounded="full">
    A destructive message.
  </BaseMessage>
</template>
```

#preview
:demo-message-close
::
