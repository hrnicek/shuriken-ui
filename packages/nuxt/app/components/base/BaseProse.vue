<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Inner elements shapes.
     *
     * @since 2.0.0
     * @default 'none'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    rounded: undefined,
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseProse', 'rounded')

const radiuses = {
  none: 'prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none',
  sm: 'prose-img:rounded-sm prose-pre:rounded-sm prose-table:rounded-sm',
  md: 'prose-img:rounded-md prose-pre:rounded-md prose-table:rounded-md',
  lg: 'prose-img:rounded-lg prose-pre:rounded-lg prose-table:rounded-lg',
} as const
</script>

<template>
  <div class="prose dark:prose-invert prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border-separate prose-table:border-spacing-0 prose-table:border prose-table:border-muted-200 dark:prose-table:border-muted-700 prose-th:p-4 prose-td:p-4 prose-td:border-t prose-td:border-muted-200 dark:prose-td:border-muted-700" :class="rounded && radiuses[rounded]">
    <slot />
  </div>
</template>
