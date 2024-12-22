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
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
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

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
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
</script>

<template>
  <ComboboxRoot
    v-bind="forward"
    class="w-full relative"
  >
    <ComboboxAnchor
      class="nui-focus w-full flex min-w-[160px] items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed has-disabled:opacity-75 has-aria-invalid:border-red-500! group"
      :class="[
        rounded && radiuses[rounded],
        size && sizes[size],
        variant && variants[variant],
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
          class="size-4 text-base text-muted-600 dark:text-muted-400"
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
          class="size-4 text-base"
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
          rounded !== 'full' && radiuses[rounded],
          rounded === 'full' && 'rounded-xl',
          variant && portalVariants[variant],
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
