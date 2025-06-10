<script lang="ts">
import type {
  DropdownMenuItemEmits,
  DropdownMenuItemProps,
} from 'reka-ui'
import type { BaseDropdownContext } from './Dropdown.vue'
import { reactiveOmit } from '@vueuse/core'
import { DropdownMenuItem, useForwardPropsEmits } from 'reka-ui'
import { injectBaseDropdownContext, radiuses } from './Dropdown.vue'

export interface BaseDropdownItemProps extends DropdownMenuItemProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * The hover color of the dropdown-item inner elements.
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The radius of the dropdown-item.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export interface BaseDropdownItemEmits extends DropdownMenuItemEmits {}

export interface BaseDropdownItemSlots {
  default: () => any

  title: () => any
  text: () => any
  start: () => any
  end: () => any
}

export const variants = {
  default: 'hover:bg-portal-default-item-bg-active',
  muted: 'hover:bg-portal-muted-item-bg-active',
  primary: 'hover:bg-primary-base/10 dark:hover:bg-primary-base/20',
  none: '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseDropdownItemProps>(), {
  title: '',
  text: '',

  variant: undefined,
  rounded: undefined,
})

const emits = defineEmits<BaseDropdownItemEmits>()
const slots = defineSlots<BaseDropdownItemSlots>()

const context = injectBaseDropdownContext()

const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded']), emits)
</script>

<template>
  <DropdownMenuItem
    v-bind="forward"
    class="focus-visible:nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-100"
    :class="[
      radiuses[props.rounded || context.rounded],
      variants[props.variant || context.variant],
      props.disabled && 'opacity-50 pointer-events-none',
    ]"
  >
    <slot name="start" />
    <div class="grow">
      <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
        <slot>
          {{ props.title }}
        </slot>
      </div>
      <div
        v-if="'text' in $slots || props.text"
        class="text-muted-400 font-sans text-xs"
      >
        <slot name="text">
          {{ props.text }}
        </slot>
      </div>
    </div>
    <slot name="end" />
  </DropdownMenuItem>
</template>
