<script setup lang="ts">
import { PaginationLast } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'
import { buttonVariants, heights, injectBasePaginationContext, radiuses } from './Pagination.vue'

const context = injectBasePaginationContext()

const iconLast = useNuiConfig('icon', 'chevronLast')
</script>

<template>
  <PaginationLast
    class="focus-visible:nui-focus flex items-center justify-center font-sans text-sm enabled:cursor-pointer transition-all duration-300 disabled:opacity-50"
    :class="[
      context.variant && buttonVariants[context.variant],
      context.rounded && radiuses[context.rounded],
      context.size && heights[context.size],
    ]"
  >
    <slot>
      <Icon :name="iconLast" class="text-base rtl:scale-x-[-1]" />
    </slot>
  </PaginationLast>
</template>
