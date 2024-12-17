<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface BaseInputHelpTextProps extends PrimitiveProps {
  /**
   * The color of the button.
   *
   * @default 'default'
   */
  color?:
    | 'default'
    | 'default-contrast'
    | 'muted'
    | 'muted-contrast'
    | 'light'
    | 'dark'
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
}

export const colors = {
  'default': 'text-inherit',
  'default-contrast': 'text-inherit',
  'muted': 'text-muted-500 dark:text-muted-400',
  'muted-contrast': 'text-muted-500 dark:text-muted-400',
  'primary': 'text-primary-500',
  'info': 'text-info-500',
  'success': 'text-success-500',
  'warning': 'text-warning-500',
  'danger': 'text-danger-500',
  'light': 'text-muted-100',
  'dark': 'text-muted-900 dark:text-muted-100',
  'black': 'text-black dark:text-white',
  'none': '',
} as const
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseInputHelpTextProps>(), {
  color: undefined,
})
const slots = defineSlots<{
  default(): any
}>()

const color = useNuiDefaultProperty(props, 'BaseInputHelpText', 'color')
const forward = useForwardProps(reactiveOmit(props, ['color']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="nui-input-help-text"
    :class="[color && colors[color]]"
  >
    <slot />
  </Primitive>
</template>
