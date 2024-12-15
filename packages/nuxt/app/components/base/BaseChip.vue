<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** The position of the chip */
    position?: 'static' | 'absolute'

    /** The placement of the chip */
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'

    /** The color of the chip */
    color?: 'primary' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'muted'

    /** The size of the chip */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

    /** Add a pulse animation on the badge */
    pulse?: boolean
  }>(),
  {
    color: 'primary',
    position: 'absolute',
    placement: 'top-end',
    size: 'md',
  },
)
</script>

<template>
  <div class="relative">
    <slot />
    <span
      class="flex"
      :class="[
        props.position === 'absolute' ? 'absolute' : 'static',
        props.placement === 'top-start' ? 'top-0 start-0 -mt-0.5' : '',
        props.placement === 'top-end' ? 'top-0 end-0 -mt-0.5' : '',
        props.placement === 'bottom-start' ? 'bottom-0 start-0 -mb-0.5' : '',
        props.placement === 'bottom-end' ? 'bottom-0 end-0 -mb-0.5' : '',
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
      ]" />
      <span class="relative inline-flex rounded-full" :class="[
        props.color === 'primary' ? 'bg-primary-500' : '',
        props.color === 'red' ? 'bg-red-500' : '',
        props.color === 'yellow' ? 'bg-yellow-400' : '',
        props.color === 'green' ? 'bg-green-500' : '',
        props.color === 'blue' ? 'bg-blue-500' : '',
        props.color === 'indigo' ? 'bg-indigo-500' : '',
        props.color === 'purple' ? 'bg-purple-500' : '',
        props.color === 'pink' ? 'bg-pink-500' : '',
        props.color === 'muted' ? 'bg-muted-200 dark:bg-muted-700' : '',
        props.size === 'xs' ? 'size-1.5' : '',
        props.size === 'sm' ? 'size-2' : '',
        props.size === 'md' ? 'size-2.5' : '',
        props.size === 'lg' ? 'size-3' : '',
        props.size === 'xl' ? 'size-3.5' : '',
      ]" />
    </span>
  </div>
</template>