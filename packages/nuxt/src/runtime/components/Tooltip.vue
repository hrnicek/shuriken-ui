<script lang="ts">
import type {
  TooltipRootProps,
  TooltipRootEmits,
  TooltipTriggerProps,
  TooltipPortalProps,
  TooltipContentProps,
  TooltipArrowProps,
} from 'reka-ui'

export interface BaseTooltipProps extends TooltipRootProps {
  variant?: 'default' | 'muted' | 'dark' | 'primary' | 'none'
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'none'
  content?: string
  bindings?: {
    trigger?: TooltipTriggerProps
    portal?: TooltipPortalProps
    content?: TooltipContentProps
    arrow?: TooltipArrowProps
  }
}
export interface BaseTooltipEmits extends TooltipRootEmits {
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg',
} as const satisfies Record<NonNullable<BaseTooltipProps['rounded']>, string>

export const variants = {
  default: 'bg-popup-default-bg border border-popup-default-border text-popup-default-text',
  muted: 'bg-popup-muted-bg border border-popup-muted-border text-popup-muted-text',
  dark: 'bg-popup-dark-bg border border-popup-dark-border text-popup-dark-text',
  primary: 'bg-primary-base border border-primary-heavy text-primary-invert',
  none: '',
} as const satisfies Record<NonNullable<BaseTooltipProps['variant']>, string>

export const arrowVariants = {
  default: 'fill-popup-default-bg stroke-popup-default-border',
  muted: 'fill-popup-muted-bg stroke-popup-muted-border',
  dark: 'fill-popup-dark-bg stroke-popup-dark-border',
  primary: 'fill-primary-base stroke-primary-heavy',
  none: '',
} as const satisfies Record<NonNullable<BaseTooltipProps['variant']>, string>
</script>

<script setup lang="ts">
import { useForwardPropsEmits, useForwardExpose } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseTooltipProps>(), {
  variant: 'default',
  rounded: 'md',
  bindings: () => ({}),
})
const emits = defineEmits<BaseTooltipEmits>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['content', 'variant', 'rounded', 'bindings']), emits)
// const { forwardRef } = useForwardExpose()
</script>

<template>
  <TooltipRoot v-bind="forward" v-slot="{ open }">
    <TooltipTrigger
      v-bind="{
        asChild: true,
        ...(props.bindings.trigger || {}),
      }"
    >
      <slot v-bind="{ open }" />
    </TooltipTrigger>
    <TooltipPortal v-bind="props.bindings.portal">
      <TooltipContent
        v-bind="{
          sideOffset: 2,
          collisionPadding: 20,
          ...(props.bindings.content || {}),
        }"
        :class="[
          'px-2 py-1 text-sm will-change-[opacity] duration-200 transition-opacity transition-discrete [state=delayed-open]:opacity-100 starting:data-[state=delayed-open]:opacity-0 [state=instant-open]:opacity-100 starting:data-[state=instant-open]:opacity-0 max-w-[var(--reka-tooltip-content-available-width)] lg:max-w-[25vw] max-h-[var(--reka-tooltip-content-available-height)] overflow-y-auto nui-slimscroll',
          props.variant && variants[props.variant],
          props.rounded && radiuses[props.rounded],
        ]"
      >
        <slot name="content" v-bind="{ open }">{{ props.content }}</slot>
        <TooltipArrow
          v-bind="props.bindings.arrow"
          :class="[
            '-translate-[1px]',
            props.variant && arrowVariants[props.variant],
          ]"
        />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>