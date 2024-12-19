<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The current value of the progress circle.
     */
    value?: number

    /**
     * The maximum value of the progress circle.
     */
    max?: number

    /**
     * The size of the progress circle.
     */
    size?: number

    /**
     * The thickness of the progress circle.
     */
    thickness?: number

    /**
     * Enable/disable animation, or set the animation duration (in seconds).
     */
    animation?: boolean | number

    /**
     * Defines the variant of the progress circle
     *
     * @default 'primary'
     */
    variant?: 'primary-low' | 'primary-high' | 'dark-low' | 'dark-high' | 'none'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the track element.
       */
      track?: string | string[]

      /**
       * CSS classes to apply to the progress element.
       */
      progress?: string | string[]
    }
  }>(),
  {
    value: 0,
    max: 100,
    size: 60,
    thickness: 4,
    animation: 2,
    variant: undefined,
    classes: () => ({}),
  },
)

const variant = useNuiDefaultProperty(props, 'BaseProgressCircle', 'variant')

const percent = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  // Round to 2 decimal places
  return Math.round((value / max) * 10000) / 100
})

const dasharray = computed(() => {
  return `${percent.value} 100`
})
const duration = computed(() => {
  if (props.animation === false) {
    return '0s'
  }

  const maxDuration = props.animation === true ? 2 : props.animation
  const ratio = percent.value / 100
  return ratio ? `${Math.round(maxDuration * ratio * 10) / 10}s` : '0s'
})

const variants = {
  'primary-low': 'text-primary-500',
  'primary-high': 'text-primary-500',
  'dark-low': 'text-muted-900 dark:text-muted-100',
  'dark-high': 'text-muted-900 dark:text-muted-100',
  'none': '',
}

const trackVariants = {
  'primary-low': 'text-muted-200 dark:text-muted-700',
  'primary-high': 'text-muted-200 dark:text-muted-900',
  'dark-low': 'text-muted-200 dark:text-muted-700',
  'dark-high': 'text-muted-200 dark:text-muted-900',
  'none': '',
}
</script>

<template>
  <svg
    role="progressbar"
    :aria-valuenow="props.value"
    :aria-valuemax="props.max"
    class="block"
    :class="props.classes?.wrapper"
    viewBox="0 0 45 45"
    :width="props.size"
    :height="props.size"
  >
    <circle
      class="stroke-current"
      :class="[
        props.classes?.track,
        variant && trackVariants[variant],
      ]"
      :stroke-width="props.thickness"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
    <circle
      class="stroke-current"
      :class="[
        variant && variants[variant],
        props.classes?.progress,
        props.animation !== false && 'circle-value transition-all duration-500',
      ]"
      :stroke-width="props.thickness"
      :stroke-dasharray="`${percent},100`"
      stroke-linecap="round"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
  </svg>
</template>

<style scoped>
.block {
  --progress-circle-duration: v-bind(duration);
  --progress-circle-dasharray: v-bind(dasharray);

  transform-origin: center;
  transform: rotate(-90deg);
}

.circle-value {
  animation-name: circle-chart-fill;
  animation-duration: var(--progress-circle-duration);
  /* transform: rotate(-90deg); */
  transform-origin: center;
  stroke-dashoffset: 0;
  animation-timing-function: cubic-bezier(0.78, 0.59, 0.19, 0.33);
}

@keyframes circle-chart-fill {
  0% {
    stroke-dasharray: 0 100;
  }

  100% {
    stroke-dasharray: var(--progress-circle-dasharray);
  }
}
</style>
