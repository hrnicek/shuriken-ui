<script setup lang="ts">
import { BasePagination as theme } from '@shuriken-ui/theme-iga'
import { useNuiConfig } from '../composables/useNuiConfig'
import { injectBasePaginationContext } from './Pagination.vue'

const context = injectBasePaginationContext()

const iconFirst = useNuiConfig('icon', 'chevronFirst')
</script>

<template>
  <PaginationFirst
    class="focus-visible:nui-focus flex items-center justify-center font-sans text-sm enabled:cursor-pointer transition-all duration-300 disabled:opacity-50"
    :class="[
      context.variant && theme.buttonVariants[context.variant],
      context.rounded && theme.radiuses[context.rounded],
      context.size && theme.heights[context.size],
    ]"
  >
    <slot>
      <Icon :name="iconFirst" class="text-base rtl:scale-x-[-1]" />
    </slot>
  </PaginationFirst>
</template>
