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
   * @default 'primary'
   */
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'black'

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * CSS classes to apply to the outer element.
     */
    outer?: string | string[]

    /**
     * CSS classes to apply to the handle element.
     */
    handle?: string | string[]

    /**
     * CSS classes to apply to the track element.
     */
    track?: string | string[]
  }
}
export interface BaseSwitchThinEmits extends SwitchRootEmits {}
export type BaseSwitchThinSlots = {
  default(): any
  sublabel(): any
}
</script>


<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSwitchThinProps>(), {
  id: undefined,
  label: undefined,
  sublabel: undefined,
  color: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  value: undefined,
  classes: () => ({}),
})
const emits = defineEmits<BaseSwitchThinEmits>()
const slots = defineSlots<BaseSwitchThinSlots>()

const id = useNinjaId(() => props.id)
const color = useNuiDefaultProperty(props, 'BaseSwitchThin', 'color')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'sublabel', 'color', 'classes']), emits)

const colors = {
  primary: 'nui-switch-thin-primary',
  info: 'nui-switch-thin-info',
  success: 'nui-switch-thin-success',
  warning: 'nui-switch-thin-warning',
  danger: 'nui-switch-thin-danger',
  dark: 'nui-switch-thin-dark',
  black: 'nui-switch-thin-black',
}
</script>

<template>
  <span
    class="nui-switch-thin"
    :class="[color && colors[color], props.classes?.wrapper]"
  >
    <SwitchRoot :id v-bind="forward" ref="inputRef" class="nui-switch-thin-outer" :class="props.classes?.outer">
      <SwitchThumb
        class="nui-switch-thin-handle"
        :class="props.classes?.handle"
      />
      <span class="nui-switch-thin-track" :class="props.classes?.track" />
    </SwitchRoot>
    <Label :for="id" v-if="props.sublabel || 'sublabel' in slots" class="nui-switch-thin-dual-label">
      <span class="nui-switch-thin-label">
        <slot>{{ props.label }}</slot>
      </span>
      <span class="nui-switch-thin-sublabel">
        <slot name="sublabel">{{ props.sublabel }}</slot>
      </span>
    </Label>
    <Label :for="id" v-else class="nui-switch-thin-single-label">
      <slot>{{ props.label }}</slot>
    </Label>
  </span>
</template>
