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

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[]
  }
}
export interface BaseSwitchBallEmits extends SwitchRootEmits {}
export type BaseSwitchBallSlots = {
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

const props = withDefaults(defineProps<BaseSwitchBallProps>(), {
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
const emits = defineEmits<BaseSwitchBallEmits>()
const slots = defineSlots<BaseSwitchBallSlots>()

const id = useNinjaId(() => props.id)
const color = useNuiDefaultProperty(props, 'BaseSwitchBall', 'color')
const iconCheck = useNuiDefaultIcon('check')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'sublabel', 'color', 'classes']), emits)

const colors = {
  primary: 'nui-switch-ball-primary',
  info: 'nui-switch-ball-info',
  success: 'nui-switch-ball-success',
  warning: 'nui-switch-ball-warning',
  danger: 'nui-switch-ball-danger',
  dark: 'nui-switch-ball-dark',
  black: 'nui-switch-ball-black',
}
</script>

<template>
  <span
    class="nui-switch-ball"
    :class="[color && colors[color], props.classes?.wrapper]"
  >
    <SwitchRoot :id v-bind="forward" class="nui-switch-ball-outer" :class="props.classes?.outer">
      <SwitchThumb
        class="nui-switch-ball-handle"
        :class="props.classes?.handle"
      />
      <span class="nui-switch-ball-track" :class="props.classes?.track" />
      <Icon :name="iconCheck" class="nui-switch-ball-icon" :class="props.classes?.icon" />
    </SwitchRoot>
    <Label :for="id" v-if="props.sublabel || 'sublabel' in slots" class="nui-switch-ball-dual-label">
      <span class="nui-switch-ball-label">
        <slot>{{ props.label }}</slot>
      </span>
      <span class="nui-switch-ball-sublabel">
        <slot name="sublabel">{{ props.sublabel }}</slot>
      </span>
    </Label>
    <Label :for="id" v-else class="nui-switch-ball-single-label">
      <slot>{{ props.label }}</slot>
    </Label>
  </span>
</template>
