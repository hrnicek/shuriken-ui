<script setup lang="ts">
import { computed, useSlots } from 'vue'
const props = defineProps<{
  /**
   * The title of the list item.
   */
  title?: string
  /**
   * The subtitle of the list item.
   */
  subtitle?: string
}>()

const slots = useSlots()
const hasTitle = computed(() => {
  return Boolean(props.title || 'title' in slots)
})
const hasSubtitle = computed(() => {
  return Boolean(props.subtitle || 'subtitle' in slots)
})
</script>

<template>
  <li class="flex gap-2">
    <slot />

    <div v-if="hasTitle || hasSubtitle">
      <h6
        v-if="hasTitle"
        class="font-sans font-medium text-sm leading-snug"
      >
        <slot name="title">
          {{ props.title }}
        </slot>
      </h6>
      <p
        v-if="hasSubtitle"
        class="font-sans text-xs text-muted-500 dark:text-muted-400"
      >
        <slot name="subtitle">
          {{ props.subtitle }}
        </slot>
      </p>
    </div>

    <div v-if="'end' in $slots" class="ms-auto">
      <slot name="end" />
    </div>
  </li>
</template>
