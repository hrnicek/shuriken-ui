<script setup lang="ts">
import type { BaseMessageEmits, BaseMessageProps, BaseMessageSlots } from '../types'
import { useNuiConfig } from '../composables/useNuiConfig'

import { BaseMessage as theme } from '../theme'

const props = withDefaults(defineProps<BaseMessageProps>(), {
  message: '',
  icon: undefined,
  closeIcon: undefined,

  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,
})
const emits = defineEmits<BaseMessageEmits>()
const slots = defineSlots<BaseMessageSlots>()
const iconClose = useNuiConfig('icon', 'close', () => props.closeIcon)
</script>

<template>
  <div
    class="relative flex gap-2 border"
    :class="[
      props.rounded && theme.radiuses[props.rounded],
      props.variant && theme.variants[props.variant],
      props.icon ? 'py-1 ps-1 pe-6' : 'py-2 ps-2 pe-6',
    ]"
  >
    <div
      v-if="props.icon"
      class="flex size-10 shrink-0 items-center justify-center"
      :class="[
        props.icon && theme.iconVariants[props.variant],
        props.rounded && theme.radiuses[props.rounded],
      ]"
    >
      <slot name="icon">
        <Icon :name="props.icon" class="text-lg text-white dark:text-white" />
      </slot>
    </div>
    <span
      class="inline-flex items-center leading-normal font-sans text-sm"
      :class="[
        props.variant && theme.textVariants[props.variant],
      ]"
    >
      <slot>{{ props.message }}</slot>
    </span>
    <div v-if="props.closable" class="absolute top-[-0.5rem] end-[-0.5rem] flex items-center justify-center bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-full size-8">
      <button
        type="button"
        tabindex="0"
        class="focus-visible:nui-focus flex cursor-pointer items-center justify-center shrink-0 size-6 rounded-full transition-colors duration-200"
        :class="[
          props.icon && theme.closeVariants[props.variant],
        ]"
        @click="emits('close')"
      >
        <slot name="close-button">
          <Icon :name="iconClose" class="text-base" />
        </slot>
      </button>
    </div>
  </div>
</template>
