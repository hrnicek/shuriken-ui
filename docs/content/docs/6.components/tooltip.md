---
title: 'Tooltip'
description: 'A simple tooltip component.'
layout: 'default'
---

# Tooltip

`BaseTooltip` · A simple tooltip component.

::component-header{category="components/base" fileName="BaseTooltip.vue" }
::

::code-group{expandable}

```vue [demoTooltipBase.vue]
<template>
  <BaseTooltip content="Tooltip content">
    <BaseButton>
      Button
    </BaseButton>
  </BaseTooltip>
</template>
```

#preview
:demo-tooltip-base
::

## Features

:checklist{:items='["Provider to control display delay globally", "Opens when the trigger is focused or hovered", "Closes when the trigger is activated or when pressing escape", "Supports custom timings"]'}

## Anatomy
This component has a slot that you can use to add your content. You can customize the tooltip's visual style by using the available props.

::code-group

```vue [BaseTooltip]
<template>
  <BaseTooltip>
    <!-- Your content here -->
  </BaseTooltip>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BaseTooltip"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Default popup variables */
  --color-popup-default-bg: var(--color-portal-default-bg);
  --color-popup-default-border: var(--color-portal-default-border);
  --color-popup-default-text: var(--color-portal-default-item-text);

  /* Muted popup variables */
  --color-popup-muted-bg: var(--color-portal-muted-bg);
  --color-popup-muted-border: var(--color-portal-muted-border);
  --color-popup-muted-text: var(--color-portal-muted-item-text);

  /* Dark popup variables */
  --color-popup-dark-bg: var(--color-muted-950);
  --color-popup-dark-border: var(--color-muted-950);
  --color-popup-dark-text: var(--color-white);
}
```

::

## Examples

### Variants

Use the `variant` prop to change color of the tooltip.

::code-group{expandable}

```vue [DemoTooltipVariants.vue]
<template>
  <BaseTooltip content="Tooltip content">
    <BaseButton>
      Button
    </BaseButton>
  </BaseTooltip>

  <BaseTooltip variant="muted">
    <template #content>
      Tooltip content muted
    </template>
    <BaseButton>
      Button
    </BaseButton>
  </BaseTooltip>

  <BaseTooltip variant="dark">
    <template #content>
      Tooltip content dark
    </template>
    <BaseButton>
      Button
    </BaseButton>
  </BaseTooltip>

  <BaseTooltip variant="primary">
    <template #content>
      Tooltip content primary
    </template>
    <BaseButton>
      Button
    </BaseButton>
  </BaseTooltip>
</template>
```

#preview
:demo-tooltip-variants
::

### Inline content slot

Use the `content` slot to add custom content to the tooltip. add a `tabindex` to the trigger element to make it focusable.

::code-group{expandable}

```vue [DemoTooltipInline.vue]
<template>
  <BaseTooltip>
    <template #content>
      <BaseTag class="flex items-center gap-1">
        <Icon name="lucide:circle-help" />
        <span>Tooltip link</span>
      </BaseTag>
    </template>
    <span
      tabindex="0"
      class="inline-block outline-none focus-visible:text-primary-base hover:text-primary-base cursor-help underline underline-offset-4"
    >
      consectetur
    </span>
  </BaseTooltip>
</template>
```

#preview
:demo-tooltip-inline
::

### Custom behavior

Use the `disable-closing-trigger` prop to prevent the tooltip from closing when the trigger is activated. Use the `bindings` prop to customize the tooltip's position.

::code-group{expandable}

```vue [DemoTooltipCustom.vue]
<template>
  <BaseTooltip>
    <template #content>
      Quam quidem partem accusationis admiratus sum et moleste tuli potissimum esse Atratino datam. Neque enim decebat neque aetas illa postulabat neque, id quod animadvertere poteratis, pudor patiebatur optimi adulescentis in tali illum oratione versari. Vellem aliquis ex vobis robustioribus hunc male dicendi locum suscepisset; aliquanto liberius et fortius et magis more nostro refutaremus istam male dicendi licentiam. Tecum, Atratine, agam lenius, quod et pudor tuus moderatur orationi meae et meum erga te parentemque tuum beneficium tueri debeo.
    </template>
    <BaseButton>
      Button
    </BaseButton>
  </BaseTooltip>

  <div class="max-w-sm">
    <BaseTooltip disable-closing-trigger :bindings="{ content: { align: 'start' } }">
      <template #content>
        Tooltip content
      </template>
      <BaseInput placeholder="I can help" />
    </BaseTooltip>
  </div>

  <BaseTooltip disable-closing-trigger>
    <template #content>
      Tooltip content
    </template>
    <span tabindex="0" class="focus-visible:nui-focus rounded-md">
      <BaseButton disabled>
        Button
      </BaseButton>
    </span>
  </BaseTooltip>
</template>
```

#preview
:demo-tooltip-custom
::
