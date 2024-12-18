<script lang="ts">
import type {
  DropdownMenuRadioItemProps,
  DropdownMenuRadioItemEmits,
  DropdownMenuItemIndicatorProps,
} from 'reka-ui';

export interface BaseDropdownRadioItemProps extends DropdownMenuRadioItemProps {
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
  variant?: 'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'none'

  /**
   * The radius of the dropdown-item.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'

  bindings?: {
    indicator?: DropdownMenuItemIndicatorProps,
  }

  /**
   * Optional CSS classes to apply to the wrapper and inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

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
export interface BaseDropdownRadioItemEmits extends DropdownMenuRadioItemEmits {}
export type BaseDropdownRadioItemSlots = {
  default(): any
  text(): any
  end(): any
}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import {
  variants,
  radiuses,
} from './BaseDropdownItem.vue'

const props = withDefaults(defineProps<BaseDropdownRadioItemProps>(), {
  variant: undefined,
  rounded: undefined,
  disabled: undefined,
  text: undefined,
  textValue: undefined,
  title: undefined,
  bindings: () => ({}),
  classes: () => ({
    title:
      'font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white',
    text: 'text-muted-400 font-sans text-xs',
  }),
})
const emits = defineEmits<BaseDropdownRadioItemEmits>()
const slots = defineSlots<BaseDropdownRadioItemSlots>()

const variant = useNuiDefaultProperty(props, 'BaseDropdownItem', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseDropdownItem', 'rounded')
const iconCheck = useNuiDefaultIcon('checkCircle')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded', 'bindings', 'classes']), emits)
</script>

<template>
  <DropdownMenuRadioItem 
    v-bind="forward"
    class="nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-300 group/menu-radio-item"
    :class="[
      rounded && radiuses[rounded],
      variant && variants[variant],
      props.disabled && 'opacity-50 pointer-events-none',
    ]"
  >
    <DropdownMenuItemIndicator v-bind="props.bindings?.indicator" class="relative me-2 translate-y-1/4">
      <BaseChip position="static" color="primary" size="sm" />
    </DropdownMenuItemIndicator>

    <div class="grow group-data-[state=unchecked]/menu-radio-item:ps-6!">
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
  </DropdownMenuRadioItem>
</template>