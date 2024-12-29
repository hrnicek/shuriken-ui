<script lang="ts">
import type {
  ComboboxRootProps,
  ComboboxRootEmits,
  ComboboxAnchorProps,
  ComboboxCancelProps,
  ComboboxTriggerProps,
  ComboboxPortalProps,
  ComboboxContentProps,
  ComboboxViewportProps,
  ComboboxEmptyProps,
  AcceptableValue
} from 'reka-ui'
import {
  createContext,
} from 'reka-ui'

export interface BaseAutocompleteProps<T = AcceptableValue> extends ComboboxRootProps<T> {
  /**
   * The variant of the autocomplete
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The radius of the component.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the autocomplete component.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Display the clear button to reset the query.
   *
   * @default false
   */
  clearable?: boolean
  
  /**
   * Bindings presets 
   *
   * @default 'inline'
   */
  preset?: 'inline' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    anchor?: ComboboxAnchorProps & Record<string, any>
    cancel?: ComboboxCancelProps & Record<string, any>
    trigger?: ComboboxTriggerProps & Record<string, any>
    portal?: ComboboxPortalProps & Record<string, any>
    content?: ComboboxContentProps & Record<string, any>
    viewport?: ComboboxViewportProps & Record<string, any>
    empty?: ComboboxEmptyProps & Record<string, any>
  }
}
export interface BaseAutocompleteEmits<T = AcceptableValue> extends ComboboxRootEmits<T> {}
export type BaseAutocompleteSlots = {
  default(): any
  input(): any
  empty(): any
}

export interface BaseAutocompleteContext {
  variant: ComputedRef<NonNullable<BaseAutocompleteProps['variant']>>
  rounded: ComputedRef<NonNullable<BaseAutocompleteProps['rounded']>>
  size: ComputedRef<NonNullable<BaseAutocompleteProps['size']>>
}

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500',
  none: '',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
//   'muted': 'border border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-800',
//   'none': '',
// } as const

export const portalVariants = {
  default: 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  muted: 'bg-muted-50 dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  none: '',
} as const

// @todo: low-contrast-theme
// const portalVariants = {
//   'default': '',
//   'muted': '',
// } as const

export const arrowVariants = {
  default: 'fill-muted-400 dark:fill-muted-500',
  muted: 'fill-muted-400 dark:fill-muted-500',
  none: '',
} as const

// @todo: low-contrast-theme
// export const arrowVariants = {
//   default: 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
//   muted: 'fill-muted-50 dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
//   none: '',
// } as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const

export const presets = {
  inline: {
    portal: { 
      disabled: true,
    },
    content: {
      position: 'inline',
      class: 'absolute z-10 w-full mt-[6px] max-h-[300px]',
    },
  },
  popper: {
    content: {
      position: 'popper',
      align: 'start',
      sideOffset: 6,
    },
    viewport: {
      class: 'max-h-[calc(var(--reka-popper-available-height)_-_2rem)] min-w-[calc(var(--reka-combobox-trigger-width)-1px)]',
    },
  },
} as const satisfies Record<NonNullable<BaseAutocompleteProps['preset']>, BaseAutocompleteProps['bindings']>

export const [
  injectBaseAutocompleteContext,
  provideBaseAutocompleteContext,
] = createContext<BaseAutocompleteContext>('BaseAutocompleteContext')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import { defu } from 'defu'
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<BaseAutocompleteProps<T>>(), {
  variant: undefined,
  rounded: undefined,
  size: undefined,
  preset: undefined,

  defaultOpen: undefined,
  open: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  by: undefined,

  bindings: () => ({}),
})

const emits = defineEmits<BaseAutocompleteEmits<T>>()
const slots = defineSlots<BaseAutocompleteSlots>()
const attrs = useAttrs()
  
const variant = useNuiConfig('BaseAutocomplete', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseAutocomplete', 'rounded', () => props.rounded)
const size = useNuiConfig('BaseAutocomplete', 'size', () => props.size)
const preset = useNuiConfig('BaseAutocomplete', 'preset', () => props.preset)
const iconClose = useNuiConfig('icon', 'close')
const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const bindings = computed(() => defu(props.bindings, presets[preset.value]))

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size', 'preset', 'bindings']), emits)

provideBaseAutocompleteContext({
  variant,
  rounded,
  size,
})
</script>

<template>
  <ComboboxRoot
    v-bind="forward"
    class="w-full relative"
  >
    <ComboboxAnchor
      class="nui-focus w-full flex min-w-[160px] items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive-base! group"
      :class="[
        rounded && radiuses[rounded],
        size && sizes[size],
        variant && variants[variant],
      ]"
      v-bind="bindings.anchor"
    >
      <slot name="input">
        <ComboboxInput class="h-full w-full outline-none  placeholder:text-muted-300 dark:placeholder:text-muted-700" v-bind="attrs" />
      </slot>
      <ComboboxCancel
        v-if="props.clearable"
        class="opacity-0 group-focus-within:opacity-100 transition-opacity duration-100"
        as-child
      >
        <Icon
          :name="iconClose"
          class="size-4 text-base text-muted-600 dark:text-muted-400"
        />
      </ComboboxCancel>

      <ComboboxTrigger
        v-bind="{
          disabled: props.disabled,
          ...(bindings.trigger || {}),
        }"
      >
        <Icon
          :name="iconChevronDown"
          class="size-4 text-base"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal v-bind="bindings.portal">
      <ComboboxContent
        v-bind="bindings.content"
        class="min-w-52 focus:outline-none data-[side=bottom]:shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 space-y-1"
        :class="[
          rounded !== 'full' && radiuses[rounded],
          rounded === 'full' && 'rounded-xl',
          variant && portalVariants[variant],
        ]"
      >
        <ComboboxViewport
          class="p-[5px] nui-slimscroll"
          v-bind="bindings.viewport"
        >
          <ComboboxEmpty
            class="text-muted-500 text-xs font-medium text-center py-2"
            v-bind="bindings.empty"
          >
            <slot name="empty" />
          </ComboboxEmpty>

          <slot />
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
