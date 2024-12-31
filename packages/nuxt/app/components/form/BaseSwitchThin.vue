<script lang="ts">
import type{
  SwitchRootProps,
  SwitchRootEmits,
} from 'reka-ui'

export interface BaseSwitchThinProps extends SwitchRootProps {
  /**
   * Accessible label of the switch.
   */
  label?: string

  /**
   * The sublabel of the switch.
   */
  sublabel?: string

  /**
   * Main color of the switch.
   *
   * @default 'default'
   */
   variant?: 'default' | 'primary' | 'dark' | 'none'
}
export interface BaseSwitchThinEmits extends SwitchRootEmits {}
export type BaseSwitchThinSlots = {
  default(): any
  sublabel(): any
}


const trackVariants = {
  'default': 'peer-data-[state=checked]:bg-muted-500 dark:peer-data-[state=checked]:bg-muted-800 bg-muted-300 dark:bg-muted-900',
  'primary': 'peer-data-[state=checked]:bg-primary-base dark:peer-data-[state=checked]:bg-primary-base bg-muted-300 dark:bg-muted-600',
  'dark': 'peer-data-[state=checked]:bg-muted-900 dark:peer-data-[state=checked]:bg-muted-100 bg-muted-300 dark:bg-muted-600',
  'none': '',
} as const

// @todo: low-contrast-theme
// const trackVariants = {
//   'default': 'peer-data-[state=checked]:bg-muted-400 dark:peer-data-[state=checked]:bg-muted-700 bg-muted-300 dark:bg-muted-600',
//   'primary': 'peer-data-[state=checked]:bg-primary-base dark:peer-data-[state=checked]:bg-primary-base bg-muted-300 dark:bg-muted-600',
//   'dark': 'peer-data-[state=checked]:bg-muted-900 dark:peer-data-[state=checked]:bg-muted-100 bg-muted-300 dark:bg-muted-600',
//   'none': '',
// } as const

const handleVariants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  'primary': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'dark': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'none': '',
} as const

// @todo: low-contrast-theme
// const handleVariants = {
//   'default': 'bg-white dark:bg-muted-900 border border-muted-300 dark:border-muted-700',
//   'primary': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'dark': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'none': '',
// } as const
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSwitchThinProps>(), {
  id: undefined,
  label: undefined,
  sublabel: undefined,
  variant: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  value: undefined,
})
const emits = defineEmits<BaseSwitchThinEmits>()
const slots = defineSlots<BaseSwitchThinSlots>()

const id = useNinjaId(() => props.id)
const attrs = useAttrs()
const variant = useNuiConfig('BaseSwitchThin', 'variant', () => props.variant)
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
      class="nui-focus-force relative block h-4 rounded-full cursor-pointer"
    >
      <SwitchThumb
        class="peer data-[state=checked]:-translate-y-1/2 data-[state=checked]:translate-x-full data-[state=checked]:rtl:-translate-x-full absolute -start-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full size-6 transition-all duration-300"
        :class="[
          handleVariants[variant],
        ]"
      />
      <span
        class="block h-4 w-10 rounded-full transition-all duration-300"
        :class="[
          trackVariants[variant],
        ]"
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
