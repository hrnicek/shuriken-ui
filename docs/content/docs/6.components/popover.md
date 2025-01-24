---
title: 'Popover'
description: 'A simple popup component.'
layout: 'default'
---

# Popover

`BasePopover` · A simple popup component.

::component-header{category="components/base" fileName="BasePopover.vue" }
::

::code-group{expandable}

```vue [demoPopoverBase.vue]
<template>
  <BasePopover>
    <BaseButton>
      Open me
    </BaseButton>

    <template #content>
      <div class="ps-4 py-4 max-w-[260px] space-y-2">
        <BaseHeading size="md" weight="semibold">
          Take action
        </BaseHeading>

        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          This text is the description of the action you are about to take. Please read it before proceeding.
        </BaseParagraph>

        <BaseButton size="sm" variant="dark" class="w-full mt-2">
          Understood
        </BaseButton>
      </div>
    </template>
  </BasePopover>
</template>
```

#preview
:demo-popover-base
::

## Features

:checklist{:items='["Can be controlled or uncontrolled", "Customize side, alignment, offsets, collision handling", "Optionally render a pointing arrow", "Focus is fully managed and customizable", "Supports modal and non-modal modes", "Dismissing and layering behavior is highly customizable"]'}

## Anatomy
This component has a slot that you can use to add your content. You can customize the tooltip's visual style by using the available props.

::code-group

```vue [BasePopover]
<template>
  <BasePopover>
    <!-- Your content here -->
  </BasePopover>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style and behavior.

:component-meta{name="BasePopover"}

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

Use the `variant` prop to change color of the popover.

::code-group{expandable}

```vue [DemoPopoverVariants.vue]
<template>
  <BasePopover variant="muted">
    <BaseButton>
      Open me
    </BaseButton>

    <template #content>
      <div class="ps-4 py-4 max-w-[260px] space-y-2">
        <BaseHeading size="md" weight="semibold">
          Take action
        </BaseHeading>

        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          This text is the description of the action you are about to take. Please read it before proceeding.
        </BaseParagraph>

        <BaseButton size="sm" variant="dark" class="w-full mt-2">
          Understood
        </BaseButton>
      </div>
    </template>
  </BasePopover>
</template>
```

#preview
:demo-popover-variants
::

### Custom content slot

Use the `content` slot to render the popover inner content.

::code-group{expandable}

```vue [DemoPopoverInline.vue]
<template>
  <BasePopover>
    <button type="button" tabindex="0" class="focus-visible:nui-focus cursor-pointer rounded-full">
      <BaseAvatar src="/img/people/placeholder.png" class="bg-muted-100 dark:bg-muted-800" />
    </button>

    <template #content>
      <div class="pe-2 space-y-2 w-[180px]">
        <BaseInputFile size="sm" :classes="{ root: 'border-0' }" />
      </div>
    </template>
  </BasePopover>
</template>
```

#preview
:demo-popover-inline
::
