<script setup lang="ts">
import type { BaseChipProps, BaseChipSlots } from '../types'
import { BaseChip as theme } from '../theme'

const props = withDefaults(defineProps<BaseChipProps>(), {
  offsetY: undefined,
  offsetX: undefined,

  color: theme.defaults.color,
  position: theme.defaults.position,
  placement: theme.defaults.placement,
  size: theme.defaults.size,
})
const slots = defineSlots<BaseChipSlots>()
</script>

<template>
  <div class="relative">
    <slot />
    <span
      class="flex"
      :class="[
        props.position === 'absolute' ? 'absolute' : 'static',
        theme.placements[props.placement],
      ]"
      :style="[
        props.placement === 'top-start' && `transform: translate(${props.offset}px, ${props.offset}px)`,
        props.placement === 'top-end' && `transform: translate(-${props.offset}px, ${props.offset}px)`,
        props.placement === 'bottom-start' && `transform: translate(${props.offset}px, -${props.offset}px)`,
        props.placement === 'bottom-end' && `transform: translate(-${props.offset}px, -${props.offset}px)`,
      ]"
    >
      <span
        v-if="props.pulse"
        class="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
        :class="[
          theme.pulseColors[props.color],
        ]"
      />
      <span
        class="relative inline-flex rounded-full"
        :class="[
          theme.colors[props.color],
          theme.sizes[props.size],
        ]"
      />
    </span>
  </div>
</template>
