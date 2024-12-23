<script lang="ts">
import type {
  DropdownMenuCheckboxItemProps,
  DropdownMenuCheckboxItemEmits,
  DropdownMenuItemIndicatorProps,
} from 'reka-ui';

export interface BaseDropdownCheckboxProps extends DropdownMenuCheckboxItemProps {
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
   * @default 'default-high'
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

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
export interface BaseDropdownCheckboxEmits extends DropdownMenuCheckboxItemEmits {}
export type BaseDropdownCheckboxSlots = {
  default(): any
  text(): any
  end(): any
}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { variants } from './BaseDropdownItem.vue'
import { radiuses } from './BaseDropdown.vue'

const props = withDefaults(defineProps<BaseDropdownCheckboxProps>(), {
  rounded: undefined,
  variant: undefined,
  disabled: undefined,
  modelValue: undefined,
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
const emits = defineEmits<BaseDropdownCheckboxEmits>()

const slots = defineSlots<BaseDropdownCheckboxSlots>()

const variant = useNuiDefaultProperty(props, 'BaseDropdownItem', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseDropdownItem', 'rounded')
const iconCheck = useNuiDefaultIcon('check')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded', 'bindings', 'classes']), emits)
</script>

<template>
  <DropdownMenuCheckboxItem 
    v-bind="forward"
    class="nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-300 group/menu-checkbox-item"
    :class="[
      rounded && radiuses[rounded],
      variant && variants[variant],
      props.disabled && 'opacity-50 pointer-events-none',
    ]"
  >
    <DropdownMenuItemIndicator v-bind="props.bindings?.indicator" class="flex items-center justify-center shrink-0 size-4 group-data-[state=checked]/menu-checkbox-item:text-[var(--primary-base)] group-data-[state=unchecked]/menu-checkbox-item:text-transparent">
      <Icon :name="iconCheck" class="scale-90 relative start-0.5 text-sm [&>path]:stroke-[4px]" />
    </DropdownMenuItemIndicator>

    <div class="grow group-data-[state=unchecked]/menu-checkbox-item:ps-6!">
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
  </DropdownMenuCheckboxItem>
</template>