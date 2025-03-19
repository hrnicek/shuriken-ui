<script lang="ts">
import type {
  PaginationRootEmits,
  PaginationRootProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import {
  createContext,
  PaginationList,
  PaginationRoot,
  useForwardPropsEmits,
} from 'reka-ui'
import { useAttrs } from 'vue'

export interface BasePaginationProps extends PaginationRootProps {
  /**
   * The color of the pagination active button.
   */
  variant?: 'primary' | 'dark'

  /**
   * The size of the pagination buttons.
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The radius of the pagination.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}
export interface BasePaginationEmits extends PaginationRootEmits {}
export interface BasePaginationSlots {
  default: (props: { items: Array<{ type: 'ellipsis' } | { type: 'page', value: number }> }) => any
  ellipsis: () => any
  page: (props: { page: number }) => any
}
export interface BasePaginationContext {
  variant: NonNullable<BasePaginationProps['variant']>
  size: NonNullable<BasePaginationProps['size']>
  rounded: NonNullable<BasePaginationProps['rounded']>
}

export const sizes = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
} as const satisfies Record<NonNullable<BasePaginationProps['size']>, string>

export const heights = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-5',
} as const satisfies Record<NonNullable<BasePaginationProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg sm:rounded-full',
} as const satisfies Record<NonNullable<BasePaginationProps['rounded']>, string>

export const itemVariants = {
  primary: 'bg-white focus-visible:data-selected:ring-primary-500 hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-300 dark:border-muted-800 data-selected:!bg-primary-base data-selected:!text-primary-invert',
  dark: 'bg-white focus-visible:data-selected:ring-muted-700 dark:focus-visible:data-selected:ring-muted-300 hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-700 data-selected:!bg-muted-900 data-selected:!text-white dark:data-selected:!bg-white dark:data-selected:!text-muted-900',
} as const satisfies Record<NonNullable<BasePaginationProps['variant']>, string>

export const ellipsisVariants = {
  primary: 'bg-white dark:bg-muted-900 border border-muted-300 dark:border-muted-800',
  dark: 'bg-white hover:bg-muted-50 dark:bg-muted-900 border border-muted-300 dark:border-muted-700',
} as const satisfies Record<NonNullable<BasePaginationProps['variant']>, string>

export const buttonVariants = {
  primary: 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-300 dark:border-muted-800',
  dark: 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-300 dark:border-muted-700',
} as const satisfies Record<NonNullable<BasePaginationProps['variant']>, string>

export const [
  injectBasePaginationContext,
  provideBasePaginationContext,
] = createContext<BasePaginationContext>('BasePaginationContext')
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BasePaginationProps>(), {
  showEdges: true,

  variant: 'primary',
  size: 'md',
  rounded: 'sm',
})
const emits = defineEmits<BasePaginationEmits>()
const slots = defineSlots<BasePaginationSlots>()
const attrs = useAttrs()

provideBasePaginationContext({
  variant: props.variant,
  rounded: props.rounded,
  size: props.size,
})

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'size', 'rounded']), emits)
</script>

<template>
  <PaginationRoot v-bind="forward">
    <PaginationList
      v-slot="{ items }"
      v-bind="attrs"
      class="inline-flex flex-row gap-2"
      :class="[
        props.rounded && radiuses[props.rounded],
      ]"
    >
      <slot v-bind="{ items }">
        <BasePaginationItems :items>
          <template #page="{ page }">
            <slot name="page" :page="page" />
          </template>
          <template #ellipsis>
            <slot name="ellipsis" />
          </template>
        </BasePaginationItems>
        <BasePaginationButtonPrev class="ms-auto" />
        <BasePaginationButtonNext />
      </slot>
    </PaginationList>
  </PaginationRoot>
</template>
