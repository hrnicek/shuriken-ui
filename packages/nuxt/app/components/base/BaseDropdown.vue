<script lang="ts">
import type {
  DropdownMenuRootProps,
  DropdownMenuRootEmits,
  DropdownMenuContentProps,
  DropdownMenuTriggerProps,
  DropdownMenuPortalProps,
} from 'reka-ui'
import {
  createContext,
} from 'reka-ui'

export interface BaseDropdownProps extends DropdownMenuRootProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string

  /**
   * Disables the dropdown.
   */
  disabled?: boolean

  /**
   * The variant of the dropdown.buttonSize
   *
   * @default 'default-low'
   */
  variant?: 'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary-low' | 'primary-high' | 'none'

  /**
   * The radius of the dropdown button.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * CSS classes to apply to the dropdown menu element.
     */
    menu?: string | string[]

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[]
  },

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    content?: DropdownMenuContentProps
    trigger?: DropdownMenuTriggerProps
    portal?: DropdownMenuPortalProps
  },
}
export interface BaseDropdownEmits extends DropdownMenuRootEmits {}

export interface BaseDropdownContext {
  variant: ComputedRef<NonNullable<BaseDropdownProps['variant']>>
  rounded: ComputedRef<NonNullable<BaseDropdownProps['rounded']>>
}
export type BaseDropdownSlots = {
  default(): any
  button(): any
  label(): any
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg',
} as const

export const variants = {
  'default-low': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
  'default-high': 'border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted-low': 'border border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-800',
  'muted-high': 'border border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-950',
  'primary-low': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
  'primary-high': 'border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'none': '',
} as const

export const [
  injectBaseDropdownContext,
  provideBaseDropdownContext,
] = createContext<BaseDropdownContext>('BaseDropdownContext')
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseDropdownProps>(), {
  variant: undefined,
  rounded: undefined,
  label: '',
  modal: undefined,
  open: undefined,
  defaultOpen: undefined,
  classes: () => ({}),
  bindings: () => ({}),
})
const emits = defineEmits<BaseDropdownEmits>()
const slots = defineSlots<BaseDropdownSlots>()

const attrs = useAttrs()

const variant = useNuiDefaultProperty(props, 'BaseDropdown', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseDropdown', 'rounded')
const iconChevronDown = useNuiDefaultIcon('chevronDown')
const forward = useForwardPropsEmits(reactiveOmit(props, ['label', 'disabled', 'variant', 'rounded', 'classes', 'bindings']), emits)

provideBaseDropdownContext({
  variant,
  rounded,
})
</script>

<template>
  <DropdownMenuRoot v-bind="forward">
    <DropdownMenuTrigger 
      v-bind="{
        asChild: true,
        disabled: props.disabled,
        ...attrs,
        ...(props.bindings?.trigger || {}),
      }"
    >
      <slot name="button">
        <BaseButton
          :rounded
          :variant="variant.endsWith('low') ? 'default-low' : 'default-high'"
          class="group"
        >
          <slot name="label">
            <span>{{ props.label }}</span>
          </slot>
          <Icon
            :name="iconChevronDown"
            class="text-base transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </BaseButton>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuPortal v-bind="props.bindings?.portal">
      <DropdownMenuContent
        class="min-w-52 focus:outline-none shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 p-2 space-y-1 max-h-[calc(var(--reka-popper-available-height)_-_2rem)] overflow-y-auto nui-slimscroll"
        v-bind="{
          align: 'start',
          ...(props.bindings?.content || {}),
        }"
        :class="[
          rounded && radiuses[rounded],
          variant && variants[variant],
          props.classes?.content,
        ]"
      >
        <slot />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
