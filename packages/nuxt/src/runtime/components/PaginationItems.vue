<script setup lang="ts">
import type { PaginationListItemProps } from 'reka-ui'
import { PaginationEllipsis, PaginationListItem } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'
import { heights, injectBasePaginationContext, itemVariants, radiuses, sizes } from './Pagination.vue'

const props = defineProps<{
  items: {
    type: 'page' | 'ellipsis'
    value: PaginationListItemProps['value']
  }[]
}>()

const context = injectBasePaginationContext()
const iconEllipsis = useNuiConfig('icon', 'ellipsis')
</script>

<template>
  <div class="inline-flex flex-wrap gap-2 md:gap-1 mb-4 md:mb-0">
    <template v-for="(page, index) in props.items">
      <PaginationListItem
        v-if="page.type === 'page'"
        :key="index"
        :value="page.value"
        class="focus-visible:nui-focus flex items-center justify-center mb-0 inline-flex flex-wrap gap-2 md:gap-1 font-sans text-sm border enabled:cursor-pointer"
        :class="[
          context.variant && itemVariants[context.variant],
          context.rounded && radiuses[context.rounded],
          context.size && heights[context.size],
        ]"
      >
        <slot name="page" :page="page.value">
          {{ page.value }}
        </slot>
      </PaginationListItem>
      <PaginationEllipsis
        v-else
        :key="page.type"
        :index="index"
        class="select-none flex items-center justify-center font-sans text-sm"
        :class="[
          context.rounded && radiuses[context.rounded],
          context.size && sizes[context.size],
        ]"
      >
        <slot name="ellipsis">
          <Icon :name="iconEllipsis" class="text-base" />
        </slot>
      </PaginationEllipsis>
    </template>
  </div>
</template>
