<script lang="ts">
export interface BaseChipProps {
  /** The position of the chip */
  position?: 'static' | 'absolute'

  /** The placement of the chip */
  placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'

  /** The offset of the chip */
  offset?: number

  /** The color of the chip */
  color?: 'primary' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'muted' | 'custom'

  /** The size of the chip */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /** Add a pulse animation on the badge */
  pulse?: boolean
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseChipProps>(), {
  color: 'primary',
  position: 'absolute',
  placement: 'top-end',
  offsetY: undefined,
  offsetX: undefined,
  size: 'md',
})
</script>

<template>
  <div class="relative">
    <slot />
    <span
      class="flex"
      :class="[
        props.position === 'absolute' ? 'absolute' : 'static',
        props.placement === 'top-start' ? 'top-0 start-0 -mt-0.5 -ms-0.5' : '',
        props.placement === 'top-end' ? 'top-0 end-0 -mt-0.5 -me-0.5' : '',
        props.placement === 'bottom-start' ? 'bottom-0 start-0 -mb-0.5 -ms-0.5' : '',
        props.placement === 'bottom-end' ? 'bottom-0 end-0 -mb-0.5 -me-0.5' : '',
      ]"
      :style="[
        props.placement === 'top-start' && `transform: translate(${offset}px, ${offset}px)`,
        props.placement === 'top-end' && `transform: translate(-${offset}px, ${offset}px)`,
        props.placement === 'bottom-start' && `transform: translate(${offset}px, -${offset}px)`,
        props.placement === 'bottom-end' && `transform: translate(-${offset}px, -${offset}px)`,
      ]"
    >
      <span v-if="props.pulse" class="absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary-500 animate-ping" 
      :class="[
        props.color === 'primary' ? 'bg-primary-500' : '',
        props.color === 'red' ? 'bg-red-500' : '',
        props.color === 'yellow' ? 'bg-yellow-400' : '',
        props.color === 'green' ? 'bg-green-500' : '',
        props.color === 'blue' ? 'bg-blue-500' : '',
        props.color === 'indigo' ? 'bg-indigo-500' : '',
        props.color === 'purple' ? 'bg-purple-500' : '',
        props.color === 'pink' ? 'bg-pink-500' : '',
        props.color === 'muted' ? 'bg-muted-400 dark:bg-muted-700' : '',
        props.color === 'custom' ? 'bg-current dark:bg-current' : '',
      ]" />
      <span class="relative inline-flex rounded-full" :class="[
        props.color === 'primary' ? 'bg-primary-400' : '',
        props.color === 'red' ? 'bg-red-400' : '',
        props.color === 'yellow' ? 'bg-yellow-300' : '',
        props.color === 'green' ? 'bg-green-400' : '',
        props.color === 'blue' ? 'bg-blue-400' : '',
        props.color === 'indigo' ? 'bg-indigo-400' : '',
        props.color === 'purple' ? 'bg-purple-400' : '',
        props.color === 'pink' ? 'bg-pink-400' : '',
        props.color === 'muted' ? 'bg-muted-200 dark:bg-muted-700' : '',
        props.color === 'custom' ? 'bg-current dark:bg-current' : '',
        props.size === 'xs' ? 'size-1.5' : '',
        props.size === 'sm' ? 'size-2' : '',
        props.size === 'md' ? 'size-2.5' : '',
        props.size === 'lg' ? 'size-3' : '',
        props.size === 'xl' ? 'size-3.5' : '',
      ]" />
    </span>
  </div>
</template>