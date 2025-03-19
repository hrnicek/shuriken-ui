<script lang="ts">
export interface BaseChipProps {
  /** The position of the chip */
  position?: 'static' | 'absolute'

  /** The placement of the chip */
  placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'

  /** The offset of the chip */
  offset?: number

  /** The color of the chip */
  color?: 'primary' | 'muted' | 'custom'

  /** The size of the chip */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /** Add a pulse animation on the badge */
  pulse?: boolean
}

export interface BaseChipSlots {
  default: () => any
}

// Theme configuration
export const placements = {
  'top-start': 'top-0 start-0 -mt-0.5 -ms-0.5',
  'top-end': 'top-0 end-0 -mt-0.5 -me-0.5',
  'bottom-start': 'bottom-0 start-0 -mb-0.5 -ms-0.5',
  'bottom-end': 'bottom-0 end-0 -mb-0.5 -me-0.5',
} as const satisfies Record<NonNullable<BaseChipProps['placement']>, string>

export const sizes = {
  xs: 'size-1.5',
  sm: 'size-2',
  md: 'size-2.5',
  lg: 'size-3',
  xl: 'size-3.5',
} as const satisfies Record<NonNullable<BaseChipProps['size']>, string>

export const colors = {
  primary: 'bg-primary-400',
  muted: 'bg-muted-200 dark:bg-muted-700',
  custom: 'bg-current dark:bg-current',
} as const satisfies Record<NonNullable<BaseChipProps['color']>, string>

export const pulseColors = {
  primary: 'bg-primary-500',
  muted: 'bg-muted-400 dark:bg-muted-700',
  custom: 'bg-current dark:bg-current',
} as const satisfies Record<NonNullable<BaseChipProps['color']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseChipProps>(), {
  offsetY: undefined,
  offsetX: undefined,
  color: 'primary',
  position: 'absolute',
  placement: 'top-end',
  size: 'md',
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
        placements[props.placement],
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
          pulseColors[props.color],
        ]"
      />
      <span
        class="relative inline-flex rounded-full"
        :class="[
          colors[props.color],
          sizes[props.size],
        ]"
      />
    </span>
  </div>
</template>
