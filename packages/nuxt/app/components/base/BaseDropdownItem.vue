<script lang="ts">
import type {
  DropdownMenuItemProps,
  DropdownMenuItemEmits,
} from 'reka-ui';

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
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The radius of the dropdown-item.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}
export interface BaseDropdownItemEmits extends DropdownMenuItemEmits {}
export type BaseDropdownItemSlots = {
  default(): any

  title(): any
  text(): any
  start(): any
  end(): any
}

export const variants = {
  'default': 'hover:bg-muted-100 dark:hover:bg-muted-900',
  'muted': 'hover:bg-muted-200 dark:hover:bg-muted-900',
  'primary': 'hover:bg-primary-500/10 dark:hover:bg-primary-500/20',
  'none': '',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'hover:bg-muted-100 dark:hover:bg-muted-700',
//   'muted': 'hover:bg-muted-200 dark:hover:bg-muted-700',
//   'primary': 'hover:bg-primary-500/10 dark:hover:bg-primary-500/20',
//   'none': '',
// } as const
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseDropdownContext, radiuses } from './BaseDropdown.vue'

const context = injectBaseDropdownContext()

const props = withDefaults(defineProps<BaseDropdownItemProps>(), {
  rounded: undefined,
  contrast: undefined,
  variant: undefined,
  title: '',
  text: '',
})

const emits = defineEmits<BaseDropdownItemEmits>()
const slots = defineSlots<BaseDropdownItemSlots>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded']), emits)
</script>

<template>
  <DropdownMenuItem
    v-bind="forward"
    class="nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-300"
    :class="[
      context.rounded.value && radiuses[context.rounded.value],
      context.variant.value && variants[context.variant.value],
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
