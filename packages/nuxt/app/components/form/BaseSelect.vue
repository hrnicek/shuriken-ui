<script lang="ts">
import type { 
  SelectRootProps,
  SelectRootEmits,
  SelectTriggerProps,
  SelectPortalProps,
  SelectContentProps,
  SelectViewportProps,
} from 'reka-ui'
import {
  createContext,
} from 'reka-ui'

export interface BaseSelectProps extends SelectRootProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder to display for the select input.
   */
  placeholder?: string

  /**
   * An error message to display, or a boolean indicating whether there is an error.
   */
  error?: string | boolean

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

  preset?: 'aligned' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps & {
      class?: string | string[]
    }
    portal?: SelectPortalProps & {
      class?: string | string[]
    }
    content?: SelectContentProps & {
      class?: string | string[]
    }
    viewport?: SelectViewportProps & {
      class?: string | string[]
    }
  },
}
export interface BaseSelectEmits extends SelectRootEmits {}
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
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const

export const portalRadiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
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

<script setup lang="ts">
import { defu } from 'defu'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseSelectProps>(), {
  id: undefined,
  rounded: undefined,
  size: undefined,
  variant: undefined,
  placeholder: '',
  error: false,
  preset: undefined,
  
  autocomplete: undefined,
  name: undefined,
  by: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  dir: undefined,

  bindings: () => ({}),
  classes: () => ({}),
})
const emits = defineEmits<BaseSelectEmits>()
const slots = defineSlots<BaseSelectSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const variant = useNuiDefaultProperty(props, 'BaseSelect', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseSelect', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseSelect', 'size')

const iconChevronDown = useNuiDefaultIcon('chevronDown')
const iconChevronUp = useNuiDefaultIcon('chevronUp')

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
]), emits)

provideBaseSelectContext({
  variant,
  rounded,
})
</script>

<template>
  <SelectRoot :id v-bind="forward">
    <SelectTrigger
      class="nui-focus w-full flex items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-invalid:border-red-500!"
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
