<script setup lang="ts">
import type { BaseDropdownCheckboxProps, BaseDropdownCheckboxEmits, BaseDropdownCheckboxSlots} from '@shuriken-ui/types';
import { 
  BaseDropdown as dropdownTheme,
  BaseDropdownItem as theme,
} from '@shuriken-ui/theme-iga';

import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseDropdownCheckboxProps>(), {
  title: '',
  text: '',

  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,

  disabled: undefined,
  modelValue: undefined,
  textValue: undefined,

  bindings: () => ({}),
})
const emits = defineEmits<BaseDropdownCheckboxEmits>()
const slots = defineSlots<BaseDropdownCheckboxSlots>()

const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded', 'bindings']), emits)
</script>

<template>
  <DropdownMenuCheckboxItem 
    v-bind="forward"
    class="focus-visible:nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-300 group/menu-checkbox-item"
    :class="[
      props.rounded && dropdownTheme.radiuses[rounded],
      props.variant && theme.variants[variant],
      props.disabled && 'opacity-50 pointer-events-none',
    ]"
  >
    <DropdownMenuItemIndicator v-bind="props.bindings?.indicator" class="flex items-center justify-center shrink-0 size-4 group-data-[state=checked]/menu-checkbox-item:text-primary-base group-data-[state=unchecked]/menu-checkbox-item:text-transparent">
      <Icon :name="iconCheck" class="scale-90 relative start-0.5 text-sm [&>path]:stroke-[4px]" />
    </DropdownMenuItemIndicator>

    <div class="grow group-data-[state=unchecked]/menu-checkbox-item:ps-6!">
      <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
        <slot name="title">
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
  </DropdownMenuCheckboxItem>
</template>