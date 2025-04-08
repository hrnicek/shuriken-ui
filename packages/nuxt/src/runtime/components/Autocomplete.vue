<script lang="ts">
import type {
  AcceptableValue,
  ComboboxAnchorProps,
  ComboboxContentProps,
  ComboboxEmptyProps,
  ComboboxPortalProps,
  ComboboxRootEmits,
  ComboboxRootProps,
  ComboboxTriggerProps,
  ComboboxViewportProps,
} from 'reka-ui'
import type { BaseAutocompleteItemProps } from './AutocompleteItem.vue'
import { reactiveOmit, useVModel } from '@vueuse/core'
import { defu } from 'defu'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
  createContext,
  useForwardExpose,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { useNuiConfig } from '../composables/useNuiConfig'
import { tm } from '../utils/tw-merge'

export interface BaseAutocompleteProps<T = AcceptableValue> extends ComboboxRootProps<T> {
  /**
   * The controlled value of the filter.
   */
  query?: string

  /**
   * The default query value when uncontrolled.
   */
  // defaultQuery?: string

  /**
   * Items to display in the autocomplete list instead of slots.
   */
  items?: BaseAutocompleteItemProps<T>[]

  /**
   * The variant of the autocomplete
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The radius of the component.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the autocomplete component.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Display the clear button to reset the query.
   */
  clearable?: boolean

  /**
   * Bindings presets
   */
  preset?: 'inline' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    anchor?: ComboboxAnchorProps
    trigger?: ComboboxTriggerProps
    portal?: ComboboxPortalProps
    content?: ComboboxContentProps
    viewport?: ComboboxViewportProps
    empty?: ComboboxEmptyProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    anchor?: string | string[]
    cancel?: string | string[]
    trigger?: string | string[]
    content?: string | string[]
    viewport?: string | string[]
    empty?: string | string[]
  }
}
export interface BaseAutocompleteEmits<T = AcceptableValue> extends ComboboxRootEmits<T> {
  'update:query': [value: string]
}
export interface BaseAutocompleteSlots<T = AcceptableValue> {
  'default': () => any
  'empty': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'content-start': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'content-end': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'viewport-start': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'viewport-end': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
}

export interface BaseAutocompleteContext {
  variant: NonNullable<BaseAutocompleteProps['variant']>
  rounded: NonNullable<BaseAutocompleteProps['rounded']>
  size: NonNullable<BaseAutocompleteProps['size']>
}

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border',
  muted: 'bg-input-muted-bg border-input-muted-border border',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const portalVariants = {
  default: 'bg-portal-default-bg border border-portal-default-border',
  muted: 'bg-portal-muted-bg border border-portal-muted-border',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const inputVariants = {
  default: 'text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'text-input-muted-text placeholder:text-input-muted-placeholder',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const triggerVariants = {
  default: 'text-input-default-button-text',
  muted: 'text-input-muted-button-text',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const arrowVariants = {
  default: 'fill-muted-400 dark:fill-muted-500',
  muted: 'fill-muted-400 dark:fill-muted-500',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['rounded']>, string>

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['size']>, string>

export const presets = {
  inline: {
    portal: {
      disabled: true,
    },
    content: {
      position: 'inline',
      // @ts-expect-error - `class` is not defined in the type
      class: 'absolute z-10 w-full mt-[6px] max-h-[300px]',
    },
  },
  popper: {
    content: {
      position: 'popper',
      align: 'start',
      sideOffset: 6,
      avoidCollisions: true,
      collisionPadding: 20,
    },
    viewport: {
      // @ts-expect-error - `class` is not defined in the type
      class: 'max-h-[var(--reka-popper-available-height)] min-w-[calc(var(--reka-combobox-trigger-width)-1px)]',
    },
  },
} as const satisfies Record<NonNullable<BaseAutocompleteProps['preset']>, BaseAutocompleteProps['bindings']>

export const [
  injectBaseAutocompleteContext,
  provideBaseAutocompleteContext,
] = createContext<BaseAutocompleteContext>('BaseAutocompleteContext')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<BaseAutocompleteProps<T>>(), {
  variant: 'default',
  rounded: 'md',
  size: 'md',
  preset: 'popper',

  query: undefined,

  defaultOpen: undefined,
  open: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  by: undefined,

  items: () => [],
  bindings: () => ({}),
  classes: () => ({}),
})

const emits = defineEmits<BaseAutocompleteEmits<T>>()
const slots = defineSlots<BaseAutocompleteSlots<T>>()
const attrs = useAttrs()

const query = useVModel(props as { query?: string }, 'query', emits, {
  // defaultValue: props.defaultQuery,
  passive: (props.query === undefined) as false,
})

const iconClose = useNuiConfig('icon', 'close')
const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const bindings = computed(() => defu(props.bindings, presets[props.preset]))

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size', 'preset', 'bindings', 'classes']), emits)
const { forwardRef } = useForwardExpose()

provideBaseAutocompleteContext({
  variant: props.variant,
  rounded: props.rounded,
  size: props.size,
})
</script>

<template>
  <ComboboxRoot
    v-slot="{ open, modelValue }"
    v-bind="forward"
    :class="tm([
      'w-full relative',
      props.classes.root,
    ])"
  >
    <ComboboxAnchor
      :class="tm([
        'has-focus-visible:nui-focus w-full flex min-w-[160px] items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive-base! has-aria-invalid:ring-destructive-base! group',
        props.rounded && radiuses[props.rounded],
        props.size && sizes[props.size],
        props.variant && variants[props.variant],
        props.classes.anchor,
      ])"
      v-bind="bindings.anchor"
    >
      <ComboboxInput
        :ref="forwardRef"
        v-bind="attrs"
        :model-value="props.query"
        :class="tm([
          'h-full w-full outline-none text-ellipsis',
          inputVariants[props.variant],
        ])"
        @update:model-value="(value: string) => {
          query = value
        }"
      />
      <ComboboxCancel
        v-if="props.clearable"
        :class="tm([
          'opacity-0 group-focus-within:opacity-100 transition-opacity duration-100',
          props.classes.cancel,
        ])"
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
        :class="props.classes.trigger"
      >
        <Icon
          :name="iconChevronDown"
          class="size-4 text-base"
          :class="triggerVariants[props.variant]"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal v-bind="bindings.portal">
      <ComboboxContent
        v-bind="bindings.content"
        :class="tm([
          'min-w-52 focus:outline-none data-[side=bottom]:shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 space-y-1',
          props.rounded !== 'full' && radiuses[props.rounded],
          props.rounded === 'full' && 'rounded-xl',
          props.variant && portalVariants[props.variant],
          props.classes.content,
        ])"
      >
        <slot name="content-start" v-bind="{ open, modelValue: modelValue as T | T[], query }" />

        <ComboboxViewport
          v-bind="bindings.viewport"
          :class="tm([
            'p-[5px] nui-slimscroll',
            props.classes.viewport,
          ])"
        >
          <slot name="viewport-start" v-bind="{ open, modelValue: modelValue as T | T[], query }" />

          <ComboboxEmpty
            v-bind="bindings.empty"
            :class="tm([
              'text-muted-500 text-xs font-medium text-center py-2',
              props.classes.empty,
            ])"
          >
            <slot name="empty" v-bind="{ open, modelValue: modelValue as T | T[], query }" />
          </ComboboxEmpty>

          <slot>
            <BaseAutocompleteItem
              v-for="(item, key) in props.items"
              :key
              v-bind="item"
            >
              {{ item.textValue ?? item.value }}
            </BaseAutocompleteItem>
          </slot>
          <slot name="viewport-end" v-bind="{ open, modelValue: modelValue as T | T[], query }" />
        </ComboboxViewport>
        <slot name="content-end" v-bind="{ open, modelValue: modelValue as T | T[], query }" />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
