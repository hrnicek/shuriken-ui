<script lang="ts">
import type {
  TooltipProviderProps,
  ConfigProviderProps,
} from 'reka-ui'

import type { BaseToastProviderProps } from './ToastProvider.vue'

export interface BaseProviders {
  config?: ConfigProviderProps
  tooltip?: TooltipProviderProps
  toast?: BaseToastProviderProps
}
</script>

<script setup lang="ts">
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
    <TooltipProvider v-bind="props.tooltip">
      <BaseToastProvider v-bind="props.toast">
        <slot />
      </BaseToastProvider>
    </TooltipProvider>
  </ConfigProvider>
</template>
