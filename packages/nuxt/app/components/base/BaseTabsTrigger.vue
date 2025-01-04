<script setup lang="ts">
import type { BaseTabsTriggerProps, BaseTabsTriggerSlots } from '@shuriken-ui/types';
import { 
  BaseTabs as tabsTheme,
  BaseTabsTrigger as theme,
} from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseTabsContext } from './BaseTabs.vue'

const props = withDefaults(defineProps<BaseTabsTriggerProps>(), {
  type: undefined,
  icon: undefined,
  variant: undefined,
})

const context = injectBaseTabsContext()

const slots = defineSlots<BaseTabsTriggerSlots>()
const forward = useForwardProps(reactiveOmit(props, ['label', 'type', 'variant', 'icon']))
</script>

<template>
  <TabsTrigger 
    v-bind="forward"
    class="group/trigger focus-visible:nui-focus z-10 relative disabled:pointer-events-none disabled:opacity-50"
    :class="[
      (props.type || context.type) && tabsTheme.types[props.type || context.type],
      props.icon && 'flex items-center gap-1',
      (props.type || context.type === 'box' && !props.icon) && 'py-1.5 text-center',
      (props.type || context.type === 'box' && props.icon) && 'py-3 text-center',
    ]"
  >
    <slot>
      <Icon v-if="props.icon" :name="props.icon" class="me-1 block size-5" :class="(props.variant || context.variant) && theme.variants[props.variant || context.variant]" />
      <span
        :class="[
          (props.type || context.type === 'box') && props.icon && 'text-sm',
          (props.type || context.type === 'box') && !props.icon && 'text-sm',
          (props.type || context.type === 'tabs') && 'text-sm',
          (props.variant || context.variant) && theme.variants[props.variant || context.variant],
        ]"
      >
        {{ props.label }}
      </span>
    </slot>
  </TabsTrigger>
</template>