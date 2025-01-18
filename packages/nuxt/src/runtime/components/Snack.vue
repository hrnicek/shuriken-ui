<script setup lang="ts">
import type { BaseSnackEmits, BaseSnackProps, BaseSnackSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'

import { BaseSnack as theme } from '../theme'

const props = withDefaults(defineProps<BaseSnackProps>(), {
  label: '',
  icon: undefined,
  image: undefined,

  size: theme.defaults.size,
  variant: theme.defaults.variant,
})
const emits = defineEmits<BaseSnackEmits>()
const slots = defineSlots<BaseSnackSlots>()

const iconClose = useNuiConfig('icon', 'close')

const forward = useForwardProps(reactiveOmit(props, ['size', 'variant', 'label', 'icon', 'image']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="inline-flex items-center gap-1 rounded-full outline-transparent"
    :class="[
      theme.sizes[props.size],
      props.variant && theme.variants[props.variant],
      props.icon || props.image ? '' : theme.spacings[props.size],
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="-ms-0.5 flex items-center justify-center rounded-full bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-700"
      :class="[
        theme.wrapperSizes[props.size],
      ]"
    >
      <slot name="icon">
        <Icon :name="props.icon" :class="theme.iconSizes[props.size]" />
      </slot>
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="-ms-0.5 flex items-center justify-center rounded-full shrink-0"
    >
      <img :src="props.image" class="rounded-full" :class="theme.wrapperSizes[props.size]" alt="">
    </div>
    <span
      class="font-sans"
      :class="[
        theme.textSizes[props.size],
      ]"
    >
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="focus-visible:nui-focus cursor-pointer scale-75 flex items-center justify-center rounded-full hover:bg-current/15 dark:hover:bg-current/10 transition-colors duration-200"
      :class="[
        theme.wrapperSizes[props.size],
      ]"
      @click="emits('delete')"
    >
      <Icon :name="iconClose" class="text-base" />
    </button>
  </Primitive>
</template>
