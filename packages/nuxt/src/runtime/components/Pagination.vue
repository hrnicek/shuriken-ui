<script lang="ts">
import type { BasePaginationContext, BasePaginationEmits, BasePaginationProps, BasePaginationSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { createContext, useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'
import { BasePagination as theme } from '../theme'

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

  variant: theme.defaults.variant,
  size: theme.defaults.size,
  rounded: theme.defaults.rounded,
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
        props.rounded && theme.radiuses[props.rounded],
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
