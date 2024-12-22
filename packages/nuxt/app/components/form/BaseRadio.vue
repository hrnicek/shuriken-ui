<script lang="ts">
import type {
  RadioGroupItemProps,
  // RadioGroupItemEmits,
} from 'reka-ui'

export interface BaseCheckboxProps extends RadioGroupItemProps {
  /**
   * The label for the radio input.
   */
  label?: string

  /**
   * An error message to display below the radio label.
   */
  error?: string | boolean

  /**
   * The variant of the radio.
   *
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Classes to apply to the various parts of the radio input.
   */
  classes?: {
    /**
     * Classes to apply to the wrapper element of the radio input.
     */
    wrapper?: string | string[]

    /**
     * Classes to apply to the label element of the radio input.
     */
    label?: string | string[]

    /**
     * Classes to apply to the dot element inside the radio input.
     */
    dot?: string | string[]

    /**
     * Classes to apply to the background element inside the radio input.
     */
    box?: string | string[]
  }
}
export interface BaseCheckboxEmits /*extends RadioGroupItemEmits*/ {
  select: [event: any]
}
export type BaseCheckboxSlots = {
  default(): any
  error(): any
}

const boxVariants = {
  'default': 'bg-white dark:bg-muted-950 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-100',
  'primary': 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-500 dark:text-primary-400',
  'dark': 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
  'none': '',
} as const

// @todo: low-contrast-theme
// const boxVariants = {
//   'default': 'bg-white dark:bg-muted-700 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-300',
//   'primary': 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-500 dark:text-primary-400',
//   'dark': 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
//   'none': '',
// } as const

const dotVariants = {
  'default': 'text-muted-700 dark:text-muted-300',
  'primary': 'text-primary-500 dark:text-primary-400',
  'dark': 'text-muted-900 dark:text-white',
  'none': '',
} as const

// @todo: low-contrast-theme
// const dotVariants = {
//   'default': 'text-muted-700 dark:text-muted-300',
//   'primary': 'text-primary-500 dark:text-primary-400',
//   'dark': 'text-muted-900 dark:text-white',
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
  name: undefined,
  value: undefined,
  id: undefined,
  label: undefined,
  variant: undefined,
  error: undefined,
  classes: () => ({}),
})
const emits = defineEmits<BaseCheckboxEmits>()
const slots = defineSlots<BaseCheckboxSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const variant = useNuiDefaultProperty(props, 'BaseRadio', 'variant')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'error', 'variant',  'classes']), emits)
</script>

<template>
  <div
    class="relative inline-flex items-start gap-1"
    :class="props.classes?.wrapper"
  >
    <RadioGroupItem :id v-bind="{ ...forward, ...attrs }" class="group/radio nui-focus relative flex items-center justify-center shrink-0 cursor-pointer overflow-hidden rounded-full size-5 disabled:pointer-events-none disabled:opacity-50">
      <div :class="[props.classes?.box, variant && boxVariants[variant]]" class="absolute start-0 top-0 z-0 rounded-full h-full w-full" />
      <div 
        :class="[
          props.classes?.dot, 
          variant && dotVariants[variant]
        ]" 
        class="pointer-events-none z-10 block group-data-[state=unchecked]/radio:scale-0 roup-data-[state=checked]/radio:scale-100 rounded-full size-1 bg-current dark:bg-current transition-all duration-300" 
      />
    </RadioGroupItem>
    <div class="inline-flex flex-col">
      <Label
        v-if="props.label || 'default' in $slots"
        :for="id"
        :class="props.classes?.label"
        class=" ms-1 cursor-pointer select-none font-sans text-sm text-muted-600 dark:text-muted-400"
      >
        <slot>{{ props.label }}</slot>
      </Label>
      <Label
        v-if="props.error && typeof props.error === 'string'"
        :for="id"
        class="ms-1 inline-block"
        as-child
      >
        <slot name="error">
          <BaseInputHelpText color="danger">
            {{ props.error }}
          </BaseInputHelpText>
        </slot>
      </Label>
    </div>
  </div>
</template>
