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
   * An error message to display below the checkbox label.
   */
  error?: string | boolean

  /**
   * The color of the checkbox.
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
   * The radius of the checkbox.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

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
    input?: string | string[]
  }
}
export interface BaseCheckboxEmits extends CheckboxRootEmits {}
export type BaseCheckboxSlots = {
  default(): any
  error(): any
}

const radiuses = {
  none: '',
  sm: 'nui-checkbox-rounded-sm',
  md: 'nui-checkbox-rounded-md',
  lg: 'nui-checkbox-rounded-lg',
  full: 'nui-checkbox-rounded-full',
} as const

const colors = {
  default: 'nui-checkbox-default',
  muted: 'nui-checkbox-muted',
  light: 'nui-checkbox-light',
  dark: 'nui-checkbox-dark',
  black: 'nui-checkbox-black',
  primary: 'nui-checkbox-primary',
  info: 'nui-checkbox-info',
  success: 'nui-checkbox-success',
  warning: 'nui-checkbox-warning',
  danger: 'nui-checkbox-danger',
} as const
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
  error: false,
  rounded: undefined,
  color: undefined,
  classes: () => ({}),
})
const emits = defineEmits<BaseCheckboxEmits>()

const slots = defineSlots<BaseCheckboxSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const color = useNuiDefaultProperty(props, 'BaseCheckbox', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseCheckbox', 'rounded')

const iconCheck = useNuiDefaultIcon('check')
const iconIndeterminate = useNuiDefaultIcon('minus')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'error', 'color', 'rounded', 'classes']), emits)
</script>

<template>
  <div
    class="nui-checkbox"
    :class="[
      props.disabled && 'opacity-50',
      rounded && radiuses[rounded],
      color && colors[color],
      props.classes?.wrapper,
    ]"
  >
    <CheckboxRoot :id v-bind="{ ...forward, ...attrs }" class="nui-checkbox-outer">
      <div class="nui-checkbox-inner"></div>
      <CheckboxIndicator class="nui-checkbox-inner group">
        <Icon :name="iconCheck" class="hidden group-data-[state=checked]:block size-4" />
        <Icon :name="iconIndeterminate" class="hidden group-data-[state=indeterminate]:block size-4" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <div class="nui-checkbox-label-wrapper">
      <Label
        v-if="props.label || 'default' in $slots"
        :for="id"
        class="nui-checkbox-label-text"
        :class="props.classes?.label"
      >
        <slot>{{ props.label }}</slot>
      </Label>
      <Label
        v-if="props.error && typeof props.error === 'string' || 'error' in slots"
        class="nui-checkbox-error"
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
