<script lang="ts">
import type { ToastProviderProps } from 'reka-ui'

export interface BaseToastProviderProps extends Omit<ToastProviderProps, 'swipeDirection'> {
  max?: number
  position?: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'
}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { computed, watchEffect } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { useState } from "#app";
import { useNuiToasts } from '../composables/useNuiToasts';

const props = withDefaults(defineProps<BaseToastProviderProps>(), {
  max: 3,
  position: 'bottom-end',
  swipeDirection: undefined,
})

const max = useState('nui-toasts-max', () => 3);
watchEffect(() => max.value = props.max)

const { toasts, remove } = useNuiToasts()

const positions = {
  'top-start': 'top-0 start-0 flex-col-reverse',
  'top-center': 'top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex-col-reverse',
  'top-end': 'top-0 end-0 flex-col-reverse',
  'bottom-start': 'bottom-0 start-0 flex-col',
  'bottom-center': 'bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex-col',
  'bottom-end': 'bottom-0 end-0 flex-col',
} as const

const swipeDirection = computed(() => {
  switch (props.position) {
    case 'top-center':
      return 'up'
    case 'bottom-center':
      return 'down'
    case 'top-start':
    case 'bottom-start':
      return 'left'
    case 'top-end':
    case 'bottom-end':
      return 'right'
  }
})

const forward = useForwardProps(reactiveOmit(props, ['position']))
</script>

<template>
  <ToastProvider
    v-bind="{
      swipeDirection,
      ...forward,
    }"
  >
    <slot />

    <BaseToast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="{
        ...toast,
        id: undefined,
      }"
      force-mount
      :class="[
        'data-[swipe=move]:duration-0 duration-200 data-[state=closed]:duration-100 data-[swipe=cancel]:ease-out data-[state=closed]:ease-out starting:ease-in starting:opacity-0 transition-discrete',
        swipeDirection === 'right' && 'starting:translate-x-full data-[state=closed]:translate-x-full translate-x-0',
        swipeDirection === 'left' && 'starting:-translate-x-full data-[state=closed]:-translate-x-full translate-x-0',
        swipeDirection === 'up' && 'starting:-translate-y-full data-[state=closed]:-translate-y-full translate-y-0',
        swipeDirection === 'down' && 'starting:translate-y-full data-[state=closed]:translate-y-full translate-y-0',

        ['right', 'left'].includes(swipeDirection) && 'data-[swipe=move]:translate-x-[var(--reka-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0',
        ['up', 'down'].includes(swipeDirection) && 'data-[swipe=move]:translate-y-[var(--reka-toast-swipe-move-y)] data-[swipe=cancel]:translate-y-0',
      ]"
      @update:open="(value: boolean) => { if (!value) remove(toast.id) }"
    />
    
    <ToastViewport 
      class="fixed flex gap-2 max-w-[100vw] z-[2147483647] outline-none"
      :class="[
        positions[position],
        toasts.length === 0 ? 'p-0' : 'p-4',
      ]"
    />
  </ToastProvider>
</template>