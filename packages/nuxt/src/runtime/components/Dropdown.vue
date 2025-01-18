<script lang="ts">
import type { BaseDropdownContext, BaseDropdownEmits, BaseDropdownProps, BaseDropdownSlots } from '../types'
import { BaseDropdown as theme } from '@shuriken-ui/theme-iga'
import { reactiveOmit } from '@vueuse/core'
import { createContext, useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'
import { useNuiConfig } from '../composables/useNuiConfig'
import { tm } from '../utils/tw-merge'

export const [
  injectBaseDropdownContext,
  provideBaseDropdownContext,
] = createContext<BaseDropdownContext>('BaseDropdownContext')
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseDropdownProps>(), {
  label: '',
  modal: undefined,
  open: undefined,
  defaultOpen: undefined,

  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,

  bindings: () => ({}),
  classes: () => ({}),
})
const emits = defineEmits<BaseDropdownEmits>()
const slots = defineSlots<BaseDropdownSlots>()

const attrs = useAttrs()

const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const forward = useForwardPropsEmits(reactiveOmit(props, ['label', 'disabled', 'variant', 'rounded', 'bindings', 'classes']), emits)

provideBaseDropdownContext({
  variant: props.variant,
  rounded: props.rounded,
})
</script>

<template>
  <DropdownMenuRoot v-bind="forward">
    <DropdownMenuTrigger
      v-bind="{
        asChild: true,
        disabled: props.disabled,
        ...(props.bindings?.trigger || {}),
      }"
    >
      <slot name="button">
        <BaseButton
          v-bind="attrs"
          :rounded="props.rounded"
          class="group"
        >
          <slot name="label">
            <span>{{ props.label }}</span>
          </slot>
          <Icon
            :name="iconChevronDown"
            class="text-base transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </BaseButton>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuPortal v-bind="props.bindings?.portal">
      <DropdownMenuContent
        v-bind="{
          align: 'start',
          sideOffset: 6,
          avoidCollisions: true,
          collisionPadding: 20,
          ...(props.bindings?.content || {}),
        }"
        :class="tm([
          'min-w-52 focus:outline-none shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 p-2 space-y-1 max-h-[var(--reka-popper-available-height)] overflow-y-auto nui-slimscroll',
          props.rounded && theme.radiuses[props.rounded],
          props.variant && theme.variants[props.variant],
          props.classes.content,
        ])"
      >
        <slot />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
