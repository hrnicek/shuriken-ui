<script lang="ts">
import type {
  AcceptableValue,
  SelectContentProps,
  SelectPortalProps,
  SelectRootEmits,
  SelectRootProps,
  SelectTriggerProps,
  SelectViewportProps,
} from 'reka-ui'
import type { BaseSelectItemProps } from './SelectItem.vue'
import { reactiveOmit } from '@vueuse/core'
import { defu } from 'defu'
import {
  createContext,
  SelectContent,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  useForwardExpose,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { useInertiaConfig } from '../composables/useInertiaConfig'

import { useNuiId } from '../composables/useNuiId'
import { tm } from '../utils/tw-merge'

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
   * The defaults items to display for the select input.
   */
  items?: BaseSelectItemProps[]

  /**
   * The variant of the select input.
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the select input.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the select input.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Bindings presets
   */
  preset?: 'aligned' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps
    portal?: SelectPortalProps
    content?: SelectContentProps
    viewport?: SelectViewportProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    text?: string | string[]
    icon?: string | string[]
    content?: string | string[]
    buttonUp?: string | string[]
    buttonDown?: string | string[]
    viewport?: string | string[]
  }
}
export interface BaseSelectEmits<T = AcceptableValue> extends SelectRootEmits<T> {}
export interface BaseSelectSlots<T = AcceptableValue> {
  'default': () => any
  'label': () => any
  'value': (props: { selectedLabel: string[], modelValue: T | T[] | undefined }) => any
  'content-start': () => any
  'content-end': () => any
  'viewport-start': () => any
  'viewport-end': () => any
}

export interface BaseSelectContext {
  variant: NonNullable<BaseSelectProps['variant']>
  rounded: NonNullable<BaseSelectProps['rounded']>
  size: NonNullable<BaseSelectProps['size']>
}

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text data-placeholder:text-input-default-placeholder',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text data-placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const portalVariants = {
  default: 'bg-portal-default-bg border-portal-default-border',
  muted: 'bg-portal-muted-bg border-portal-muted-border',
} as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const triggerVariants = {
  default: 'text-input-default-button-text',
  muted: 'text-input-muted-button-text',
} as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const satisfies Record<NonNullable<BaseSelectProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseSelectProps['rounded']>, string>

export const portalRadiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseSelectProps['rounded']>, string>

export const presets = {
  aligned: {},
  popper: {
    content: {
      position: 'popper',
      align: 'start',
      sideOffset: 6,
      avoidCollisions: true,
      collisionPadding: 20,
      // @ts-expect-error - `class` is not defined in the type
      class: 'max-h-[var(--reka-popper-available-height)] min-w-[var(--reka-select-trigger-width)]',
    },
  },
} as const satisfies Record<NonNullable<BaseSelectProps['preset']>, BaseSelectProps['bindings']>

export const [
  injectBaseSelectContext,
  provideBaseSelectContext,
] = createContext<BaseSelectContext>('BaseSelectContext')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
const props = withDefaults(defineProps<BaseSelectProps<T>>(), {
  id: undefined,
  placeholder: '',

  rounded: 'md',
  size: 'md',
  variant: 'default',
  preset: 'aligned',

  autocomplete: undefined,
  name: undefined,
  by: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  dir: undefined,

  items: () => [],
  bindings: () => ({}),
  classes: () => ({}),
})
const emits = defineEmits<BaseSelectEmits<T>>()
const slots = defineSlots<BaseSelectSlots<T>>()

const attrs = useAttrs()
const id = useNuiId(() => props.id)

const iconChevronDown = useInertiaConfig('icon', 'chevronDown')
const iconChevronUp = useInertiaConfig('icon', 'chevronUp')

const bindings = computed(() => {
  return defu(props.bindings, presets[props.preset])
})

const forward = useForwardPropsEmits(reactiveOmit(props, [
  'id',
  'items',
  'placeholder',
  'variant',
  'rounded',
  'size',
  'preset',
  'bindings',
  'classes',
]), emits) as any
const { forwardRef } = useForwardExpose()

provideBaseSelectContext({
  variant: props.variant,
  rounded: props.rounded,
  size: props.size,
})
</script>

<template>
  <SelectRoot :id v-bind="forward">
    <SelectTrigger
      :ref="forwardRef"
      class="focus:nui-focus w-full flex items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive-base! aria-invalid:ring-destructive-base!"
      :class="[
        variants[props.variant],
        sizes[props.size],
        radiuses[props.rounded],
      ]"
      v-bind="{ ...attrs, ...(bindings?.trigger || {}) }"
    >
      <SelectValue
        v-slot="{ selectedLabel, modelValue }"
        :placeholder="props.placeholder"
        :class="tm([
          'line-clamp-1 leading-tight',
          props.classes.text,
        ])"
      >
        <slot name="value" v-bind="({ selectedLabel, modelValue } as any)" />
      </SelectValue>
      <Icon
        :name="iconChevronDown"
        :class="tm([
          'size-4 shrink-0',
          triggerVariants[props.variant],
          props.classes.icon,
        ])"
      />
    </SelectTrigger>

    <SelectPortal v-bind="bindings?.portal">
      <SelectContent
        :class="tm([
          'data-[side=bottom]:shadow-lg border shadow-muted-300/30 dark:shadow-muted-800/20 z-[100]',
          portalVariants[props.variant],
          portalRadiuses[props.rounded],
          props.classes.content,
        ])"
        v-bind="bindings?.content"
      >
        <slot name="content-start" />

        <SelectScrollUpButton
          :class="tm([
            'flex items-center justify-center h-[25px] bg-white cursor-default',
            portalVariants[props.variant],
            portalRadiuses[props.rounded],
            props.classes.buttonUp,
          ])"
        >
          <Icon :name="iconChevronUp" />
        </SelectScrollUpButton>

        <SelectViewport
          v-bind="bindings?.viewport"
          :class="tm([
            'p-[5px]',
            props.classes.viewport,
          ])"
        >
          <slot name="viewport-start" />
          <slot>
            <BaseSelectItem
              v-for="(item, key) in props.items"
              :key
              v-bind="item"
            >
              {{ item.textValue ?? item.value }}
            </BaseSelectItem>
          </slot>
          <slot name="viewport-end" />
        </SelectViewport>

        <SelectScrollDownButton
          :class="tm([
            'flex items-center justify-center h-[25px] bg-white cursor-default',
            portalVariants[props.variant],
            portalRadiuses[props.rounded],
            props.classes.buttonDown,
          ])"
        >
          <Icon :name="iconChevronDown" />
        </SelectScrollDownButton>

        <slot name="content-end" />
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
