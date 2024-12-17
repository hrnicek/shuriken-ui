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
   * @default 'primary'
   */
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'black'

  /**
   * The contrast of the dropdown-item.
   *
   * @default 'default'
   */
  contrast?: 'default' | 'contrast'

  /**
   * The radius of the dropdown-item.
   *
   * @since 2.0.0
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
  colors,
  contrasts,
  radiuses,
} from './BaseDropdownItem.vue'

const props = withDefaults(defineProps<BaseDropdownRadioItemProps>(), {
  rounded: undefined,
  contrast: undefined,
  color: undefined,
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

const color = useNuiDefaultProperty(props, 'BaseDropdownItem', 'color')
const contrast = useNuiDefaultProperty(props, 'BaseDropdownItem', 'contrast')
const rounded = useNuiDefaultProperty(props, 'BaseDropdownItem', 'rounded')
const iconCheck = useNuiDefaultIcon('checkCircle')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'color', 'contrast', 'rounded', 'bindings', 'classes']), emits)
</script>

<template>
  <DropdownMenuRadioItem 
    v-bind="forward"
    class="nui-dropdown-item group/menu-radio-item"
    :class="[
      rounded && radiuses[rounded],
      contrast && contrasts[contrast],
      color && colors[color],
      props.disabled && 'nui-dropdown-item-disabled',
    ]"
  >
    <DropdownMenuItemIndicator v-bind="props.bindings?.indicator">
      <Icon :name="iconCheck" class="size-4" />
    </DropdownMenuItemIndicator>

    <div class="nui-dropdown-item-content group-data-[state=unchecked]/menu-radio-item:ps-6!">
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