<script lang="ts">
import type {
  CheckboxRootProps,
  CheckboxRootEmits,
} from 'reka-ui'

export interface BaseCheckboxProps extends CheckboxRootProps {
  /**
   * The label to display for the checkbox.
   */
  label?: string

  /**
   * The variant of the checkbox.
   *
   * @default 'default-high'
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional CSS classes to apply to the wrapper, label, and input elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * CSS classes to apply to the label element.
     */
    label?: string | string[]

    /**
     * CSS classes to apply to the input element.
     */
    box?: string | string[]
  }
}
export interface BaseCheckboxEmits extends CheckboxRootEmits {}
export type BaseCheckboxSlots = {
  default(): any
}

// @todo: low-contrast-theme
const variants = {
  'default': 'bg-white dark:bg-muted-950 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-100',
  'primary': 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-500 dark:text-primary-400',
  'dark': 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
  'none': '',
} as const

// const variants = {
//   'default': 'bg-white dark:bg-muted-700 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-300',
//   'primary': 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-500 dark:text-primary-400',
//   'dark': 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
//   'none': '',
// } as const
</script>


<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseCheckboxProps>(), {
  id: undefined,
  disabled: undefined,
  defaultValue: undefined,
  name: undefined,
  value: undefined,
  modelValue: undefined,
  label: undefined,
  variant: undefined,
  classes: () => ({}),
})
const emits = defineEmits<BaseCheckboxEmits>()

const slots = defineSlots<BaseCheckboxSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const variant = useNuiDefaultProperty(props, 'BaseCheckbox', 'variant')

const iconCheck = useNuiDefaultIcon('check')
const iconIndeterminate = useNuiDefaultIcon('minus')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'variant', 'classes']), emits)
</script>

<template>
  <div
    class="relative inline-flex items-start gap-1"
    :class="[
      props.disabled && 'opacity-50',
      props.classes?.wrapper,
    ]"
  >
    <CheckboxRoot :id v-bind="{ ...forward, ...attrs }" class="nui-focus relative flex items-center justify-center h-5 w-5 shrink-0 cursor-pointer disabled:cursor-not-allowed overflow-hidden">
      <div class="absolute start-0 top-0 z-0 h-full w-full rounded-md" :class="[
        variant && variants[variant],
        props.classes?.box,
      ]"></div>
      <CheckboxIndicator class="absolute start-0 top-0 z-0 flex items-center justify-center h-full w-full rounded-md group" :class="[
        variant && variants[variant],
        props.classes?.box,
      ]">
        <Icon :name="iconCheck" class="hidden group-data-[state=checked]:block size-4 scale-90" />
        <Icon :name="iconIndeterminate" class="hidden group-data-[state=indeterminate]:block size-4 scale-90" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <div class="inline-flex flex-col">
      <Label
        v-if="props.label || 'default' in $slots"
        :for="id"
        class="font-sans text-sm ms-1 cursor-pointer select-none text-muted-600 dark:text-muted-400"
        :class="props.classes?.label"
      >
        <slot>{{ props.label }}</slot>
      </Label>
    </div>
  </div>
</template>
