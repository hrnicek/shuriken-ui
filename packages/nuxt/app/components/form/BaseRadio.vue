<script setup lang="ts">
import type { BaseRadioProps, BaseRadioEmits, BaseRadioSlots } from '@shuriken-ui/types';
import { BaseRadio as theme } from '@shuriken-ui/theme-iga';
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseRadioProps>(), {
  name: undefined,
  value: undefined,
  id: undefined,
  label: undefined,

  variant: theme.defaults.variant,
})
const emits = defineEmits<BaseRadioEmits>()
const slots = defineSlots<BaseRadioSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'variant']), emits)
</script>

<template>
  <div
    class="relative inline-flex items-start gap-1"
  >
    <RadioGroupItem
      :id
      v-bind="{ ...forward, ...attrs }"
      class="group/radio focus-visible:nui-focus relative flex items-center justify-center shrink-0 cursor-pointer overflow-hidden rounded-full size-5 disabled:pointer-events-none disabled:opacity-50"
      :class="theme.boxVariants[variant]"
    >
      <RadioGroupIndicator
        :class="theme.dotVariants[variant]" 
        class="pointer-events-none z-10 block group-data-[state=unchecked]/radio:scale-0 roup-data-[state=checked]/radio:scale-100 rounded-full size-1 bg-current dark:bg-current starting:opacity-0 transition-opacity duration-150"
      />
    </RadioGroupItem>
    <div class="inline-flex flex-col">
      <Label
        v-if="props.label || 'default' in $slots"
        :for="id"
        class=" ms-1 cursor-pointer select-none font-sans text-sm text-muted-600 dark:text-muted-400"
      >
        <slot>{{ props.label }}</slot>
      </Label>
    </div>
  </div>
</template>
