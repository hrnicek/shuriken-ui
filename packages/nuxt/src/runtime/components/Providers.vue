<script lang="ts">
import type {
  TooltipProviderProps,
  ConfigProviderProps,
} from 'reka-ui'

export interface BaseProviders {
  config?: ConfigProviderProps
  tooltip?: TooltipProviderProps
}
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseProviders>(), {
  tooltip: () => ({}),
})
</script>

<template>
  <ConfigProvider v-bind="props.config">
    <TooltipProvider v-bind="props.tooltip">
      <slot />
    </TooltipProvider>
  </ConfigProvider>
</template>
