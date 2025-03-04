<script setup lang="ts">
import type { BaseProviders } from '../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseProviders>(), {
  tooltip: () => ({}),
  config: () => ({}),
  toast: () => ({}),
})
</script>

<template>
  <ConfigProvider v-bind="props.config">
    <TooltipProvider
      v-bind="{
        delayDuration: 350,
        ...props.tooltip,
      }"
    >
      <BaseToastProvider v-bind="props.toast">
        <slot />
      </BaseToastProvider>
    </TooltipProvider>
  </ConfigProvider>
</template>
