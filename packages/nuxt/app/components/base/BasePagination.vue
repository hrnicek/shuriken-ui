<script lang="ts">
import type {
  PaginationRootProps,
  PaginationRootEmits,
  PaginationListProps,
  PaginationListItemProps,
  PaginationEllipsisProps,
  PaginationNextProps,
  PaginationPrevProps,
} from 'reka-ui'

export interface BasePaginationProps extends PaginationRootProps {
  /**
   * The ellipsis to show when there are too many links.
   */
  ellipsis?: string

  /**
   * The color of the pagination active button.
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'dark'

  /**
   * The size of the pagination buttons.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The radius of the pagination.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Wether the pagination is wrapped.
   *
   * @default 'true'
   */
  wrapped?: boolean

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    list?: PaginationListProps & Record<string, any>
    item?: PaginationListItemProps & Record<string, any>
    ellipsis?: PaginationEllipsisProps & Record<string, any>
    prev?: PaginationPrevProps & Record<string, any>
    next?: PaginationNextProps & Record<string, any>
  }
}
export interface BasePaginationEmits extends PaginationRootEmits {}
export type BasePaginationSlots = {
  default(): any
  ellipsis(): any
  page(props: { page: number }): any
  'before-pagination'(): any
  'after-pagination'(): any
  'before-navigation'(): any
  'after-navigation'(): any
  'previous-icon'(): any
  'next-icon'(): any
}

export const sizes = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
} as const

export const heights = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-5',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg sm:rounded-full',
} as const
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BasePaginationProps>(), {
  variant: undefined,
  size: undefined,
  rounded: undefined,
  ellipsis: '…',
  showEdges: true,
  wrapped: undefined,
  bindings: () => ({}),
})
const emits = defineEmits<BasePaginationEmits>()
const slots = defineSlots<BasePaginationSlots>()

const variant = useNuiConfig('BasePagination', 'variant', () => props.variant)
const size = useNuiConfig('BasePagination', 'size', () => props.size)
const rounded = useNuiConfig('BasePagination', 'rounded', () => props.rounded)
const wrapped = useNuiConfig('BasePagination', 'wrapped', () => props.wrapped)

const iconPrevious = useNuiConfig('icon', 'chevronLeft')
const iconNext = useNuiConfig('icon', 'chevronRight')

const forward = useForwardPropsEmits(reactiveOmit(props, ['ellipsis', 'variant', 'size', 'rounded', 'wrapped', 'bindings']), emits)
</script>

<template>
  <PaginationRoot
    v-bind="forward"
  >
    <PaginationList
      v-slot="{ items }"
      v-bind="props.bindings.list"
      class="inline-flex w-full flex-col md:flex-row md:justify-between"
      :class="[
        rounded && radiuses[rounded],
      ]"
    >
      <div
        class="inline-flex flex-wrap gap-2 md:gap-1 mb-4 md:mb-0"
        :class="[
          // @todo: low-contrast-theme
          // variant === 'primary-low' && wrapped && 'p-1 bg-muted-100 dark:bg-muted-700 border border-muted-200 dark:border-muted-600',
          variant === 'primary' && wrapped && 'p-1 bg-muted-100 dark:bg-muted-950 border border-muted-200 dark:border-muted-800',
          // variant === 'dark-low' && wrapped && 'p-1 bg-muted-100 dark:bg-muted-700 border border-muted-200 dark:border-muted-600',
          variant === 'dark' && wrapped && 'p-1 bg-muted-100 dark:bg-muted-950 border border-muted-200 dark:border-muted-800',
          rounded && radiuses[rounded], 
        ]"
      >
        <slot name="before-pagination" />

        <template v-for="(page, index) in items">
          <PaginationListItem
            v-if="page.type === 'page'"
            v-bind="props.bindings.item"
            :key="index"
            :value="page.value"
            class="outline-none focus-visible:ring focus-visible:!ring-primary-500 flex items-center justify-center mb-0 inline-flex flex-wrap gap-2 md:gap-1 font-sans text-sm border enabled:cursor-pointer"
            :class="[
              // @todo: low-contrast-theme
              // variant === 'primary-low' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-800 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-600 data-selected:!bg-primary-base data-selected:!text-primary-invert',
              variant === 'primary' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-800 data-selected:!bg-primary-base data-selected:!text-primary-invert',
              // variant === 'dark-low' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-800 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-700 data-selected:!bg-muted-900 data-selected:!text-white dark:data-selected:!bg-white dark:data-selected:!text-muted-900',
              variant === 'dark' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-700 data-selected:!bg-muted-900 data-selected:!text-white dark:data-selected:!bg-white dark:data-selected:!text-muted-900',
              rounded && radiuses[rounded],
              size && heights[size],
            ]"
          >
            <slot name="page" :page="page.value">
              {{ page.value }}
            </slot>
          </PaginationListItem>
          <PaginationEllipsis
            v-else
            v-bind="props.bindings.ellipsis"
            :key="page.type"
            :index="index"
            class="select-none flex items-center justify-center font-sans text-sm"
            :class="[
              // @todo: low-contrast-theme
              // variant === 'primary-low' && 'bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-600',
              variant === 'primary' && 'bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800',
              // variant === 'dark-low' && 'bg-white hover:bg-muted-50 dark:bg-muted-800 border border-muted-200 dark:border-muted-700',
              variant === 'dark' && 'bg-white hover:bg-muted-50 dark:bg-muted-900 border border-muted-200 dark:border-muted-700',
              rounded && radiuses[rounded],
              size && sizes[size],
            ]"
          >
            <slot name="ellipsis">
              &#8230;
            </slot>
          </PaginationEllipsis>
        </template>

        <slot name="after-pagination" />
      </div>

      <div
        class="flex items-center justify-end gap-1 enabled:cursor-pointer"
        :class="[
              // @todo: low-contrast-theme
          // variant === 'primary-low' && wrapped && 'p-1 border bg-muted-100 dark:bg-muted-700 border-muted-200 dark:border-muted-600',
          variant === 'primary' && wrapped && 'p-1 border bg-muted-100 dark:bg-muted-950 border-muted-200 dark:border-muted-800',
          // variant === 'dark-low' && wrapped && 'p-1 border bg-muted-100 dark:bg-muted-700 border-muted-200 dark:border-muted-600',
          variant === 'dark' && wrapped && 'p-1 border bg-muted-100 dark:bg-muted-950 border-muted-200 dark:border-muted-800',
          rounded && radiuses[rounded], 
        ]"
      >
        <slot name="before-navigation" />

        <PaginationPrev
          v-bind="props.bindings.prev"
          class="outline-none focus-visible:ring focus-visible:!ring-primary-500 flex w-full items-center justify-center font-sans text-sm enabled:cursor-pointer transition-all duration-300 disabled:opacity-50" 
          :class="[
              // @todo: low-contrast-theme
            // variant === 'primary-low' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-800 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-600',
            variant === 'primary' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-800',
            // variant === 'dark-low' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-800 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-700',
            variant === 'dark' && 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-700',
            rounded && radiuses[rounded], 
            size && heights[size],
          ]">
          <slot name="previous-icon">
            <Icon :name="iconPrevious" class="text-lg" />
          </slot>
        </PaginationPrev>

        <PaginationNext
          v-bind="props.bindings.next"
          class="outline-none focus-visible:ring focus-visible:!ring-primary-500 flex w-full items-center justify-center font-sans text-sm text-muted-500 dark:text-muted-400 enabled:hover:text-muted-700 enabled:dark:hover:text-muted-400 enabled:cursor-pointer bg-white dark:bg-muted-800 enabled:hover:bg-muted-100 enabled:dark:hover:bg-muted-900 border-muted-200 dark:border-muted-700 transition-all duration-300 disabled:opacity-50" 
          :class="[
            rounded && radiuses[rounded], 
            size && heights[size],
          ]">
          <slot name="next-icon">
            <Icon :name="iconNext" class="text-lg" />
          </slot>
        </PaginationNext>
        <slot name="after-navigation" />
      </div>
    </PaginationList>
  </PaginationRoot>
</template>
