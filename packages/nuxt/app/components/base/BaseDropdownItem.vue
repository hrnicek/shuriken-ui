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
   * @default 'default-low'
   */
  variant?: 'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary-low' | 'primary-high' | 'none'

  /**
   * The radius of the dropdown-item.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Optional CSS classes to apply to the wrapper and inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the title element.
     */
    title?: string | string[]

    /**
     * CSS classes to apply to the text element.
     */
    text?: string | string[]
  }
}
export interface BaseDropdownItemEmits extends DropdownMenuItemEmits {}
export type BaseDropdownItemSlots = {
  default(): any
  text(): any
  start(): any
  end(): any
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg',
} as const

export const variants = {
  'default-low': 'hover:bg-muted-100 dark:hover:bg-muted-700',
  'default-high': 'hover:bg-muted-100 dark:hover:bg-muted-900',
  'muted-low': 'hover:bg-muted-200 dark:hover:bg-muted-700',
  'muted-high': 'hover:bg-muted-200 dark:hover:bg-muted-900',
  'primary-low': 'hover:bg-primary-500/10 dark:hover:bg-primary-500/20',
  'primary-high': 'hover:bg-primary-500/10 dark:hover:bg-primary-500/20',
  'none': '',
} as const
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseDropdownContext } from './BaseDropdown.vue'

const context = injectBaseDropdownContext()

const props = withDefaults(defineProps<BaseDropdownItemProps>(), {
  rounded: undefined,
  contrast: undefined,
  variant: undefined,
  title: '',
  text: '',
  classes: () => ({
    title:
      'font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white',
    text: 'text-muted-400 font-sans text-xs',
  }),
})

const emits = defineEmits<BaseDropdownItemEmits>()
const slots = defineSlots<BaseDropdownItemSlots>()

const variant = useNuiDefaultProperty(props, 'BaseDropdownItem', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseDropdownItem', 'rounded')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded', 'classes']), emits)
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
      <div :class="props.classes?.title">
        <slot>
          {{ props.title }}
        </slot>
      </div>
      <p
        v-if="'text' in $slots || props.text"
        class="text-muted-400 font-sans text-xs"
        :class="props.classes?.text"
      >
        <slot name="text">
          {{ props.text }}
        </slot>
      </p>
    </div>
    <slot name="end" />
  </DropdownMenuItem>
</template>
