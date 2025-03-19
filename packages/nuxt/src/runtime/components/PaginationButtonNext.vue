<script setup lang="ts">
import { PaginationNext } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'
import { buttonVariants, heights, injectBasePaginationContext, radiuses } from './Pagination.vue'

const context = injectBasePaginationContext()

const iconNext = useNuiConfig('icon', 'chevronRight')
</script>

<template>
  <PaginationNext
    class="focus-visible:nui-focus flex items-center justify-center font-sans text-sm enabled:cursor-pointer transition-all duration-300 disabled:opacity-50"
    :class="[
      context.variant && buttonVariants[context.variant],
      context.rounded && radiuses[context.rounded],
      context.size && heights[context.size],
    ]"
  >
    <slot>
      <Icon :name="iconNext" class="text-base rtl:scale-x-[-1]" />
    </slot>
  </PaginationNext>
</template>
