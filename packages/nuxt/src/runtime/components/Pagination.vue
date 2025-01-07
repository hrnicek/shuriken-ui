<script setup lang="ts">
import type { BasePaginationProps, BasePaginationEmits, BasePaginationSlots } from '../types';
import { BasePagination as theme } from '@shuriken-ui/theme-iga';
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { useNuiConfig } from '../composables/default-property';

const props = withDefaults(defineProps<BasePaginationProps>(), {
  ellipsis: '…',
  showEdges: true,

  variant: theme.defaults.variant,
  size: theme.defaults.size,
  rounded: theme.defaults.rounded,
  wrapped: theme.defaults.wrapped,

  bindings: () => ({}),
})
const emits = defineEmits<BasePaginationEmits>()
const slots = defineSlots<BasePaginationSlots>()

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
        props.rounded && theme.radiuses[props.rounded],
      ]"
    >
      <div
        class="inline-flex flex-wrap gap-2 md:gap-1 mb-4 md:mb-0"
        :class="[
          props.variant && theme.variants[props.variant],
          props.rounded && theme.radiuses[props.rounded],
          props.wrapped ? 'p-1' : '',
        ]"
      >
        <slot name="before-pagination" />

        <template v-for="(page, index) in items">
          <PaginationListItem
            v-if="page.type === 'page'"
            v-bind="props.bindings.item"
            :key="index"
            :value="page.value"
            class="focus-visible:nui-focus flex items-center justify-center mb-0 inline-flex flex-wrap gap-2 md:gap-1 font-sans text-sm border enabled:cursor-pointer"
            :class="[
              props.variant && theme.itemVariants[props.variant],
              props.rounded && theme.radiuses[props.rounded],
              props.size && theme.heights[props.size],
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
              props.variant && theme.ellipsisVariants[props.variant],
              props.rounded && theme.radiuses[props.rounded],
              props.size && theme.sizes[props.size],
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
          props.variant && theme.variants[props.variant],
          props.rounded && theme.radiuses[props.rounded],
          props.wrapped ? 'p-1' : '', 
        ]"
      >
        <slot name="before-navigation" />

        <PaginationPrev
          v-bind="props.bindings.prev"
          class="focus-visible:nui-focus flex w-full items-center justify-center font-sans text-sm enabled:cursor-pointer transition-all duration-300 disabled:opacity-50" 
          :class="[
            props.variant && theme.buttonVariants[props.variant],
            props.rounded && theme.radiuses[props.rounded], 
            props.size && theme.heights[props.size],
          ]">
          <slot name="previous-icon">
            <Icon :name="iconPrevious" class="text-lg" />
          </slot>
        </PaginationPrev>

        <PaginationNext
          v-bind="props.bindings.next"
          class="focus-visible:nui-focus flex w-full items-center justify-center font-sans text-sm enabled:cursor-pointer transition-all duration-300 disabled:opacity-50" 
          :class="[
            props.variant && theme.buttonVariants[props.variant],
            props.rounded && theme.radiuses[props.rounded], 
            props.size && theme.heights[props.size],
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
