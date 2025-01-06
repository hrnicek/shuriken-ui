<script setup lang="ts">
import type { BaseSwitchThinEmits, BaseSwitchThinProps, BaseSwitchThinSlots } from '../types';
import { BaseSwitchThin as theme } from '@shuriken-ui/theme-iga';
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSwitchThinProps>(), {
  id: undefined,
  label: undefined,
  sublabel: undefined,

  variant: theme.defaults.variant,

  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  value: undefined,
})
const emits = defineEmits<BaseSwitchThinEmits>()
const slots = defineSlots<BaseSwitchThinSlots>()

const id = useNinjaId(() => props.id)
const attrs = useAttrs()
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'sublabel', 'variant']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <span
    class="flex cursor-pointer items-center"
  >
    <SwitchRoot
      :id
      :ref="forwardRef"
      v-bind="{...attrs, ...forward }"
      class="focus:nui-focus relative block h-4 rounded-full cursor-pointer"
    >
      <SwitchThumb
        class="peer data-[state=checked]:-translate-y-1/2 data-[state=checked]:translate-x-full data-[state=checked]:rtl:-translate-x-full absolute -start-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full size-6 transition-all duration-300"
        :class="theme.handleVariants[props.variant]"
      />
      <span
        class="block h-4 w-10 rounded-full transition-all duration-300"
        :class="theme.trackVariants[props.variant]"
      />
    </SwitchRoot>
    <Label :for="id" v-if="props.sublabel || 'sublabel' in slots" class="ms-3 select-none">
      <span class="block cursor-pointer font-sans text-sm text-muted-600 dark:text-white">
        <slot>{{ props.label }}</slot>
      </span>
      <span class="block cursor-pointer font-sans text-xs text-muted-400 dark:text-muted-400">
        <slot name="sublabel">{{ props.sublabel }}</slot>
      </span>
    </Label>
    <Label :for="id" v-else class="relative ms-3 cursor-pointer select-none font-sans text-sm text-muted-600 dark:text-white">
      <slot>{{ props.label }}</slot>
    </Label>
  </span>
</template>
