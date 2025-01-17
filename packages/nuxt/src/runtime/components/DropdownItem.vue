<script setup lang="ts">
import type { BaseDropdownItemProps, BaseDropdownItemEmits, BaseDropdownItemSlots } from '../types';
import { BaseDropdownItem as theme } from '@shuriken-ui/theme-iga';
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseDropdownContext } from './Dropdown.vue'

const props = withDefaults(defineProps<BaseDropdownItemProps>(), {
  title: '',
  text: '',

  variant: undefined,
  rounded: undefined,
})

const emits = defineEmits<BaseDropdownItemEmits>()
const slots = defineSlots<BaseDropdownItemSlots>()

const context = injectBaseDropdownContext()

const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded']), emits)
</script>

<template>
  <DropdownMenuItem
    v-bind="forward"
    class="focus-visible:nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-100"
    :class="[
      theme.radiuses[props.rounded || context.rounded],
      theme.variants[props.variant || context.variant],
      props.disabled && 'opacity-50 pointer-events-none',
    ]"
  >
    <slot name="start" />
    <div class="grow">
      <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
        <slot>
          {{ props.title }}
        </slot>
      </div>
      <div
        v-if="'text' in $slots || props.text"
        class="text-muted-400 font-sans text-xs"
      >
        <slot name="text">
          {{ props.text }}
        </slot>
      </div>
    </div>
    <slot name="end" />
  </DropdownMenuItem>
</template>
