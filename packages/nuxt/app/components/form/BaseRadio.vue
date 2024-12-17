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
   * The color of the radio.
   *
   * @default 'default'
   */
  color?:
    | 'default'
    | 'muted'
    | 'light'
    | 'dark'
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'

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
    inputDot?: string | string[]

    /**
     * Classes to apply to the background element inside the radio input.
     */
    inputBg?: string | string[]
  }
}
export interface BaseCheckboxEmits /*extends RadioGroupItemEmits*/ {
  select: [event: any]
}

const colors = {
  default: 'nui-radio-default',
  muted: 'nui-radio-muted',
  light: 'nui-radio-light',
  dark: 'nui-radio-dark',
  black: 'nui-radio-black',
  primary: 'nui-radio-primary',
  info: 'nui-radio-info',
  success: 'nui-radio-success',
  warning: 'nui-radio-warning',
  danger: 'nui-radio-danger',
} as const
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
  color: undefined,
  error: undefined,
  classes: () => ({}),
})
const emits = defineEmits<BaseCheckboxEmits>()
const slots = defineSlots<{
  default(): any
  error(): any
}>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const color = useNuiDefaultProperty(props, 'BaseRadio', 'color')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'error', 'color',  'classes']), emits)
</script>

<template>
  <div
    class="nui-radio"
    :class="[color && colors[color], props.classes?.wrapper]"
  >
    <RadioGroupItem :id v-bind="{ ...forward, ...attrs }" class="nui-radio-outer">
      <div :class="props.classes?.inputBg" class="nui-radio-inner" />
      <div :class="props.classes?.inputDot" class="nui-radio-dot" />
    </RadioGroupItem>
    <div class="nui-radio-label-wrapper">
      <Label
        v-if="props.label || 'default' in $slots"
        :for="id"
        :class="props.classes?.label"
        class="nui-radio-label-text"
      >
        <slot>{{ props.label }}</slot>
      </Label>
      <Label
        v-if="props.error && typeof props.error === 'string'"
        :for="id"
        class="nui-radio-error"
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
