<script lang="ts">
import type {
  PopoverRootProps,
  PopoverRootEmits,
  PopoverTriggerProps,
  PopoverPortalProps,
  PopoverContentProps,
  PopoverArrowProps,
} from 'reka-ui'

export interface BasePopoverProps extends PopoverRootProps {
  variant?: 'default' | 'muted' /*| 'dark' | 'primary'*/ | 'none'
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'none'
  content?: string
  bindings?: {
    trigger?: PopoverTriggerProps
    portal?: PopoverPortalProps
    content?: PopoverContentProps
    arrow?: PopoverArrowProps
  }
}
export interface BasePopoverEmits extends PopoverRootEmits {
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg',
} as const satisfies Record<NonNullable<BasePopoverProps['rounded']>, string>

export const variants = {
  default: 'bg-popup-default-bg border border-popup-default-border text-popup-default-text',
  muted: 'bg-popup-muted-bg border border-popup-muted-border text-popup-muted-text',
  // dark: 'bg-popup-dark-bg border border-popup-dark-border text-popup-dark-text',
  // primary: 'bg-primary-base border border-primary-heavy text-primary-invert',
  none: '',
} as const satisfies Record<NonNullable<BasePopoverProps['variant']>, string>

export const arrowVariants = {
  default: 'fill-popup-default-bg stroke-popup-default-border',
  muted: 'fill-popup-muted-bg stroke-popup-muted-border',
  // dark: 'fill-popup-dark-bg stroke-popup-dark-border',
  // primary: 'fill-primary-base stroke-primary-heavy',
  none: '',
} as const satisfies Record<NonNullable<BasePopoverProps['variant']>, string>
</script>

<script setup lang="ts">
import { useForwardPropsEmits, useForwardExpose } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BasePopoverProps>(), {
  delayDuration: 0,
  variant: 'default',
  rounded: 'md',
  bindings: () => ({}),
})
const emits = defineEmits<BasePopoverEmits>()
const iconClose = useNuiConfig('icon', 'close')

const forward = useForwardPropsEmits(reactiveOmit(props, ['content', 'variant', 'rounded', 'bindings']), emits)
// const { forwardRef } = useForwardExpose()
</script>

<template>
  <PopoverRoot v-bind="forward" v-slot="{ open }">
    <PopoverTrigger
      v-bind="{
        asChild: true,
        ...(props.bindings.trigger || {}),
      }"
    >
      <slot v-bind="{ open }" />
    </PopoverTrigger>
    <PopoverPortal v-bind="props.bindings.portal">
      <PopoverContent
        v-bind="{
          align: 'start',
          sideOffset: 2,
          avoidCollisions: true,
          collisionPadding: 20,
          ...(props.bindings.content || {}),
        }"
        :class="[
          'pe-6 text-sm will-change-[opacity] duration-200 transition-opacity transition-discrete [state=instant-open]:opacity-100 starting:data-[state=instant-open]:opacity-0 max-w-[var(--reka-popover-content-available-width)] lg:max-w-[25vw] max-h-[var(--reka-popover-content-available-height)] overflow-y-auto nui-slimscroll',
          props.variant && variants[props.variant],
          props.rounded && radiuses[props.rounded],
        ]"
      >
        <slot name="content" v-bind="{ open }">{{ props.content }}</slot>
        <PopoverClose
          class="absolute outline-none size-6 top-1 right-1 flex items-center justify-center transition-color duration-150 hover:bg-muted-100 focus-visible:bg-muted-100 dark:hover:bg-muted-800 dark:focus-visible:bg-muted-800"
          :class="[
            props.rounded && radiuses[props.rounded],
          ]"
        >
          <Icon
            :name="iconClose"
            class="size-4 text-base text-muted-600 dark:text-muted-400"
          />
        </PopoverClose>

        <PopoverArrow
          v-bind="props.bindings.arrow"
          :class="[
            '-translate-[1px]',
            props.variant && arrowVariants[props.variant],
          ]"
        />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>