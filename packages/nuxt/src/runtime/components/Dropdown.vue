<script lang="ts">
import type { BaseDropdownContext } from '../types';
import { createContext } from 'reka-ui'

export const [
  injectBaseDropdownContext,
  provideBaseDropdownContext,
] = createContext<BaseDropdownContext>('BaseDropdownContext')
</script>

<script setup lang="ts">
import type { BaseDropdownProps, BaseDropdownEmits, BaseDropdownSlots } from '../types';
import { BaseDropdown as theme } from '#build/shuriken-ui/theme';
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { useNuiConfig } from '../composables/default-property';
import { useAttrs } from 'vue'

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
})
const emits = defineEmits<BaseDropdownEmits>()
const slots = defineSlots<BaseDropdownSlots>()

const attrs = useAttrs()

const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const forward = useForwardPropsEmits(reactiveOmit(props, ['label', 'disabled', 'variant', 'rounded', 'bindings']), emits)

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
        ...attrs,
        ...(props.bindings?.trigger || {}),
      }"
    >
      <slot name="button">
        <BaseButton
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
        class="min-w-52 focus:outline-none shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 p-2 space-y-1 max-h-[calc(var(--reka-popper-available-height)_-_2rem)] overflow-y-auto nui-slimscroll"
        v-bind="{
          align: 'start',
          sideOffset: 6,
          ...(props.bindings?.content || {}),
        }"
        :class="[
          props.rounded && theme.radiuses[props.rounded],
          props.variant && theme.variants[props.variant],
        ]"
      >
        <slot />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
