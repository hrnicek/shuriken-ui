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
} from 'reka-ui'
import {
  createContext,
} from 'reka-ui'

export interface BaseAutocompleteProps extends ComboboxRootProps {
  /**
   * The variant of the dropdown
   *
   * @default 'default-low'
   */
   variant?: 'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary-low' | 'primary-high' | 'none'

  /**
   * The radius of the component.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the autocomplete component.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  clearable?: boolean

  bindings?: {
    anchor?: ComboboxAnchorProps & {
      class?: string | string[]
    },
    cancel?: ComboboxCancelProps & {
      class?: string | string[]
    },
    trigger?: ComboboxTriggerProps & {
      class?: string | string[]
    },
    portal?: ComboboxPortalProps & {
      class?: string | string[]
    },
    content?: ComboboxContentProps & {
      class?: string | string[]
    },
    viewport?: ComboboxViewportProps & {
      class?: string | string[]
    },
    empty?: ComboboxEmptyProps & {
      class?: string | string[]
    },
  }
}
export interface BaseAutocompleteEmits extends ComboboxRootEmits {}
export type BaseAutocompleteSlots = {
  default(): any
  input(): any
}

export interface BaseAutocompleteContext {
  variant: ComputedRef<NonNullable<BaseAutocompleteProps['variant']>>
  rounded: ComputedRef<NonNullable<BaseAutocompleteProps['rounded']>>
  size: ComputedRef<NonNullable<BaseAutocompleteProps['size']>>
}

export const variants = {
  'default-low': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
  'default-high': 'border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted-low': 'border border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-800',
  'muted-high': 'border border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-950',
  'primary-low': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
  'primary-high': 'border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'none': '',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg',
} as const

export const sizes = {
  sm: 'nui-autocomplete-sm',
  md: 'nui-autocomplete-md',
  lg: 'nui-autocomplete-lg',
  xl: 'nui-autocomplete-xl',
} as const

export const [
  injectBaseAutocompleteContext,
  provideBaseAutocompleteContext,
] = createContext<BaseAutocompleteContext>('BaseAutocompleteContext')
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<BaseAutocompleteProps>(), {
  variant: undefined,
  rounded: undefined,
  size: undefined,

  defaultOpen: undefined,
  open: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  by: undefined,

  bindings: () => ({}),
})

const attrs = useAttrs()
const emits = defineEmits<BaseAutocompleteEmits>()
const slots = defineSlots<BaseAutocompleteSlots>()

const variant = useNuiDefaultProperty(props, 'BaseAutocomplete', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseAutocomplete', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseAutocomplete', 'size')

const iconClose = useNuiDefaultIcon('close')
const iconChevronDown = useNuiDefaultIcon('chevronDown')

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size', 'bindings']), emits)

provideBaseAutocompleteContext({
  variant,
  rounded,
  size,
})

const theme = {
  anchor: '',
  cancel: ''
}
</script>

<template>
  <ComboboxRoot
    v-bind="forward"
    class="nui-autocomplete"
    :class="[
      size && sizes[size],
    ]"
  >
    <ComboboxAnchor
      class="nui-focus w-full flex min-w-[160px] items-center justify-between px-2 text-xs leading-none h-10 gap-[5px] bg-white dark:bg-muted-900 dark:border-muted-600 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700 outline-none disabled:cursor-not-allowed has-disabled:opacity-75 has-aria-invalid:border-red-500! group"
      :class="[
        rounded && radiuses[rounded],
      ]"
      v-bind="props.bindings.anchor"
    >
      <slot name="input">
        <ComboboxInput class="h-full w-full outline-none" v-bind="attrs" />
      </slot>
      <ComboboxCancel
        v-if="props.clearable"
        class="opacity-0 group-focus-within:opacity-100 transition-opacity duration-100"
        v-bind="{
          ...(props.bindings?.cancel || {}),
        }"
      >
        <Icon
          :name="iconClose"
          class="size-4"
        />
      </ComboboxCancel>

      <ComboboxTrigger
        v-bind="{
          disabled: props.disabled,
          ...(props.bindings.trigger || {}),
        }"
      >
        <Icon
          :name="iconChevronDown"
          class="size-4"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal v-bind="props.bindings.portal">
      <ComboboxContent
        v-bind="{
          position: 'popper',
          align: 'start',
          ...(props.bindings.content || {}),
        }"
        class="min-w-52 focus:outline-none shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 space-y-1"
        :class="[
          rounded && radiuses[rounded],
          variant && variants[variant],
        ]"
      >
        <ComboboxViewport
          class="p-[5px] nui-slimscroll max-h-[calc(var(--reka-popper-available-height)_-_2rem)]"
          v-bind="props.bindings.viewport"
        >
          <ComboboxEmpty
            class="text-muted-500 text-xs font-medium text-center py-2"
            v-bind="props.bindings.empty"
          />

          <slot />
        </ComboboxViewport>
        <!-- <BaseAutocompleteArrow /> -->
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
