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

  /**
   * Classes to apply to the select input.
   */
  classes?: {
    /**
     * A class or classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * A class or classes to apply to the outer element.
     */
    outer?: string | string[]

    /**
     * A class or classes to apply to the select element.
     */
    select?: string | string[]

    /**
     * A class or classes to apply to the chevron element.
     */
    chevron?: string | string[]

    /**
     * A class or classes to apply to the error element.
     */
    error?: string | string[]
  }

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps,
    portal?: SelectPortalProps,
    content?: SelectContentProps,
    viewport?: SelectViewportProps,
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

export const [
  injectBaseSelectContext,
  provideBaseSelectContext,
] = createContext<BaseSelectContext>('BaseSelectContext')
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseSelectProps>(), {
  id: undefined,
  rounded: undefined,
  size: undefined,
  variant: undefined,
  placeholder: '',
  error: false,
  
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

const forward = useForwardPropsEmits(reactiveOmit(props, [
  'id',
  'placeholder', 
  'variant', 
  'rounded',
  'size',
  'classes',
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
      class="nui-focus w-full flex min-w-[160px] items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-invalid:border-red-500!"
      :class="[
        variant && variants[variant],
        size && sizes[size],
        rounded && radiuses[rounded],
      ]"
      v-bind="{ ...attrs, ...(props.bindings?.trigger || {}) }"
    >
      <SelectValue :placeholder="props.placeholder" class="line-clamp-1" />
      <Icon :name="iconChevronDown" class="size-4 text-muted-600 dark:text-muted-500" />
    </SelectTrigger>

    <SelectPortal v-bind="props.bindings?.portal">
      <SelectContent
        class="min-w-[160px] shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
        :class="[
          variant && portalVariants[variant],
          rounded && portalRadiuses[rounded],
        ]"
        v-bind="{
          sideOffset: 5,
          ...(props.bindings?.content || {}),
        }"
      >
        <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-white cursor-default">
          <Icon :name="iconChevronUp" />
        </SelectScrollUpButton>

        <SelectViewport v-bind="props.bindings?.viewport" class="p-[5px]">
          <slot />
        </SelectViewport> 

        <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-white cursor-default">
          <Icon :name="iconChevronDown" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
