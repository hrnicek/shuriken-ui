<script setup lang="ts">
import type { BaseSnackProps, BaseSnackEmits, BaseSnackSlots } from '@shuriken-ui/types';
import { BaseSnack as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

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
      class="font-sans text-muted-600 dark:text-muted-300"
      :class="[
        theme.textSizes[props.size],
      ]"
    >
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="focus-visible:nui-focus cursor-pointer scale-75 flex items-center justify-center rounded-full text-muted-600 dark:text-muted-300 hover:text-destructive-base dark:hover:text-destructive-light hover:bg-muted-50 dark:hover:bg-white/10 transition-colors duration-200"
      :class="[
        theme.wrapperSizes[props.size],
      ]"
      @click="emits('delete')"
    >
      <Icon :name="iconClose" class="text-base" />
    </button>
  </Primitive>
</template>
