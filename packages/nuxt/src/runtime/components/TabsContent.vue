<script lang="ts">
import type { TabsContentProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { TabsContent, useForwardProps } from 'reka-ui'

export interface BaseTabsContentProps extends TabsContentProps {}
export interface BaseTabsContentSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseTabsContentProps>(), {
  value: undefined,
})
const slots = defineSlots<BaseTabsContentSlots>()
const forward = useForwardProps(reactiveOmit(props, [])) as unknown as BaseTabsContentProps
</script>

<template>
  <TabsContent v-bind="forward" class="font-sans focus-visible:nui-focus text-sm text-muted-500 dark:text-muted-400">
    <slot />
  </TabsContent>
</template>
