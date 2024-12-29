<script lang="ts">
import type{
  SwitchRootProps,
  SwitchRootEmits,
} from 'reka-ui'

export interface BaseSwitchBallProps extends SwitchRootProps {
  /**
   * Accessible label for the switch.
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
export interface BaseSwitchBallEmits extends SwitchRootEmits {}
export type BaseSwitchBallSlots = {
  default(): any
  sublabel(): any
}

const trackVariants = {
  'default': 'peer-data-[state=checked]:bg-muted-500 dark:peer-data-[state=checked]:bg-muted-800 bg-muted-300 dark:bg-muted-900',
  'primary': 'peer-data-[state=checked]:bg-[var(--primary-base)] dark:peer-data-[state=checked]:bg-[var(--primary-base)] bg-muted-300 dark:bg-muted-600',
  'dark': 'peer-data-[state=checked]:bg-muted-900 dark:peer-data-[state=checked]:bg-muted-100 bg-muted-300 dark:bg-muted-600',
  'none': '',
} as const

// @todo: low-contrast-theme
// const trackVariants = {
//   'default': 'peer-data-[state=checked]:bg-muted-400 dark:peer-data-[state=checked]:bg-muted-700 bg-muted-300 dark:bg-muted-600',
//   'primary': 'peer-data-[state=checked]:bg-[var(--primary-base)] dark:peer-data-[state=checked]:bg-[var(--primary-base)] bg-muted-300 dark:bg-muted-600',
//   'dark': 'peer-data-[state=checked]:bg-muted-900 dark:peer-data-[state=checked]:bg-muted-100 bg-muted-300 dark:bg-muted-600',
//   'none': '',
// } as const

const ballVariants = {
  'default': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'primary': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'dark': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'none': '',
} as const

// @todo: low-contrast-theme
// const ballVariants = {
//   'default': 'bg-white dark:bg-muted-900 border border-muted-300 dark:border-muted-800',
//   'primary': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'dark': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'none': '',
// } as const

const iconVariants = {
  'default': 'text-muted-100 dark:text-white',
  'primary': 'text-white dark:text-white',
  'dark': 'text-white dark:text-muted-900',
  'none': '',
} as const

// @todo: low-contrast-theme
// const iconVariants = {
//   'default': 'text-muted-900 dark:text-white',
//   'primary': 'text-white dark:text-white',
//   'dark': 'text-white dark:text-muted-900',
//   'none': '',
// } as const
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSwitchBallProps>(), {
  id: undefined,
  label: undefined,
  sublabel: undefined,
  variant: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  value: undefined,
})
const emits = defineEmits<BaseSwitchBallEmits>()
const slots = defineSlots<BaseSwitchBallSlots>()

const id = useNinjaId(() => props.id)
const variant = useNuiConfig('BaseSwitchBall', 'variant', () => props.variant)
const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'sublabel', 'variant']), emits)
</script>

<template>
  <span
    class="flex items-center"
  >
    <SwitchRoot :id v-bind="forward" class="group/switch relative">
      <SwitchThumb
        class="peer data-[state=checked]:translate-x-full data-[state=checked]:rtl:-translate-x-full absolute start-0.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full shadow focus:w-6 size-5 transition-all duration-300"
        :class="[
          ballVariants[variant],
        ]"
      />
      <span class="block h-6 w-11 rounded-full transition-all duration-300" :class="[
        trackVariants[variant],
      ]" />
      <Icon :name="iconCheck" class="peer-data-[state=checked]:-translate-y-1/2 peer-data-[state=checked]:opacity-100 peer-data-[state=checked]:block pointer-events-none absolute start-2 top-1/2 z-10 translate-y-0 fill-current opacity-0 h-2.5 w-2.5 transition-all duration-300" :class="[
        iconVariants[variant],
      ]" />
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
