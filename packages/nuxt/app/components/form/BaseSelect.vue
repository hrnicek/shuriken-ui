<script lang="ts">
import type { 
  SelectRootProps,
  SelectRootEmits,
  SelectTriggerProps,
  SelectPortalProps,
  SelectContentProps,
  SelectViewportProps,
  AcceptableValue,
} from 'reka-ui'
import {
  createContext,
} from 'reka-ui'

export interface BaseSelectProps<T = AcceptableValue> extends SelectRootProps<T> {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder to display for the select input.
   */
  placeholder?: string

  /**
   * The variant of the select input.
   *
   * @default 'default'
   */
   variant?: 'default' | 'muted' 

  /**
   * The radius of the select input.
   *
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the select input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Bindings presets
   *
   * @default 'aligned'
   */
  preset?: 'aligned' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps & Record<string, any>
    portal?: SelectPortalProps & Record<string, any>
    content?: SelectContentProps & Record<string, any>
    viewport?: SelectViewportProps & Record<string, any>
  },
}
export interface BaseSelectEmits<T = AcceptableValue> extends SelectRootEmits<T> {}
export type BaseSelectSlots = {
  default(): any
  label(): any
}

export interface BaseSelectContext {
  variant: ComputedRef<NonNullable<BaseSelectProps['variant']>>
  rounded: ComputedRef<NonNullable<BaseSelectProps['rounded']>>
}

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
//   'muted': 'bg-muted-50 dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
// } as const

export const portalVariants = {
  default: 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  muted: 'bg-muted-50 dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
} as const

// @todo: low-contrast-theme
// const portalVariants = {
//   'default': '',
//   'muted': '',
// } as const

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const

export const portalRadiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const


const presets = {
  aligned: {},
  popper: {
    content: {
      position: 'popper',
      align: 'start',
      sideOffset: 6,
      class: 'max-h-[calc(var(--reka-popper-available-height)_-_2rem)] min-w-[var(--reka-select-trigger-width)]',
    },
  },
} as const satisfies Record<NonNullable<BaseSelectProps['preset']>, BaseSelectProps['bindings']>

export const [
  injectBaseSelectContext,
  provideBaseSelectContext,
] = createContext<BaseSelectContext>('BaseSelectContext')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import { defu } from 'defu'
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseSelectProps<T>>(), {
  id: undefined,
  rounded: undefined,
  size: undefined,
  variant: undefined,
  placeholder: '',
  preset: undefined,
  
  autocomplete: undefined,
  name: undefined,
  by: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  dir: undefined,

  bindings: () => ({}),
})
const emits = defineEmits<BaseSelectEmits<T>>()
const slots = defineSlots<BaseSelectSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const variant = useNuiConfig('BaseSelect', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseSelect', 'rounded', () => props.rounded)
const size = useNuiConfig('BaseSelect', 'size', () => props.size)

const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const iconChevronUp = useNuiConfig('icon', 'chevronUp')

const bindings = computed(() => {
  return defu(props.bindings, presets[props.preset || 'aligned'])
})

const forward = useForwardPropsEmits(reactiveOmit(props, [
  'id',
  'placeholder', 
  'variant', 
  'rounded',
  'size',
  'preset',
  'bindings',
]), emits) as SelectRootProps<T>
const { forwardRef } = useForwardExpose()

provideBaseSelectContext({
  variant,
  rounded,
})
</script>

<template>
  <SelectRoot :id v-bind="forward">
    <SelectTrigger
      :ref="forwardRef"
      class="nui-focus-force w-full flex items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive-base!"
      :class="[
        variant && variants[variant],
        size && sizes[size],
        rounded && radiuses[rounded],
      ]"
      v-bind="{ ...attrs, ...(bindings?.trigger || {}) }"
    >
      <SelectValue :placeholder="props.placeholder" class="line-clamp-1" />
      <Icon :name="iconChevronDown" class="size-4 text-muted-600 dark:text-muted-500" />
    </SelectTrigger>

    <SelectPortal v-bind="bindings?.portal">
      <SelectContent
        class="data-[side=bottom]:shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 z-[100]"
        :class="[
          variant && portalVariants[variant],
          rounded && portalRadiuses[rounded],
        ]"
        v-bind="bindings?.content"
      >
        <SelectScrollUpButton
          class="flex items-center justify-center h-[25px] bg-white cursor-default"
          :class="[
            rounded && portalRadiuses[rounded],
          ]"
        >
          <Icon :name="iconChevronUp" />
        </SelectScrollUpButton>

        <SelectViewport v-bind="bindings?.viewport" class="p-[5px]">
          <slot />
        </SelectViewport> 

        <SelectScrollDownButton
          class="flex items-center justify-center h-[25px] bg-white cursor-default"
          :class="[
            rounded && portalRadiuses[rounded],
          ]"
        >
          <Icon :name="iconChevronDown" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
