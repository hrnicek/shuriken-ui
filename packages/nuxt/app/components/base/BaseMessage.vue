<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The message to display.
     */
    message?: string

    /**
     * Whether to show an icon, or the name of the icon to display.
     */
    icon?: boolean | string

    /**
     * Default icons to apply to the messages, when the icon is active.
     */
    defaultIcons?: {
      /**
       * The default low contrast icon
       */
      'default-low'?: string

      /**
       * The default high contrast icon
       */
      'default-high'?: string

      /**
       * The muted low contrast icon
       */
      'muted-low'?: string

      /**
       * The muted high contrast icon
       */
      'muted-high'?: string

      /**
       * The info low contrast icon
       */
      'info-low'?: string

      /**
       * The info high contrast icon
       */
      'info-high'?: string

      /**
       * The success low contrast icon
       */
      'success-low'?: string

      /**
       * The success high contrast icon
       */
      'success-high'?: string

      /**
       * The warning low contrast icon
       */
      'warning-low'?: string

      /**
       * The warning high contrast icon
       */
      'warning-high'?: string

      /**
       * The destructive low contrast icon
       */
      'destructive-low'?: string

      /**
       * The destructive high contrast icon
       */
      'destructive-high'?: string

      /**
       * The primary low contrast icon
       */
      'primary-low'?: string

      /**
       * The primary high contrast icon
       */
      'primary-high'?: string
    }

    /**
     * The icon to show in the close button
     */
    closeIcon?: string

    /**
     * Whether to show a close button.
     */
    closable?: boolean

    /**
     * The variant of the message.
     *
     * @default 'default'
     */
    variant?: 'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary-low' | 'primary-high' | 'info-low' | 'info-high' | 'success-low' | 'success-high' | 'warning-low' | 'warning-high' | 'destructive-low' | 'destructive-high'

    /**
     * The radius of the message.
     *
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[]
    }
  }>(),
  {
    variant: undefined,
    rounded: undefined,
    message: '',
    icon: false,
    closeIcon: undefined,
    classes: () => ({}),
    defaultIcons: undefined,
  },
)
const emit = defineEmits<{
  close: []
}>()

const variant = useNuiDefaultProperty(props, 'BaseMessage', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseMessage', 'rounded')
const icons = useNuiDefaultProperty(props, 'BaseMessage', 'defaultIcons')

const iconClose = useNuiDefaultIcon('close', () => props.closeIcon)

const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
}

const variants = {
  'default-low': 'border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
  'default-high': 'border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted-low': 'border-muted-200 dark:border-muted-700 bg-muted-100 dark:bg-muted-500/10',
  'muted-high': 'border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
  'primary-low': 'border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/10',
  'primary-high': 'border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/10',
  'info-low': 'border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-500/10',
  'info-high': 'border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-500/10',
  'success-low': 'border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-500/10',
  'success-high': 'border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-500/10',
  'warning-low': 'border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-500/10',
  'warning-high': 'border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-500/10',
  'destructive-low': 'border-red-200 dark:border-red-700 bg-red-100 dark:bg-red-500/10',
  'destructive-high': 'border-red-200 dark:border-red-700 bg-red-100 dark:bg-red-500/10',
} as const

const textVariants = {
  'default-low': 'text-muted-500 dark:text-muted-400',
  'default-high': 'text-muted-500 dark:text-muted-400',
  'muted-low': 'text-muted-500 dark:text-muted-500',
  'muted-high': 'text-muted-500 dark:text-muted-500',
  'primary-low': 'text-primary-800 dark:text-primary-200',
  'primary-high': 'text-primary-800 dark:text-primary-200',
  'info-low': 'text-blue-800 dark:text-blue-200',
  'info-high': 'text-blue-800 dark:text-blue-200',
  'success-low': 'text-green-800 dark:text-green-200',
  'success-high': 'text-green-800 dark:text-green-200',
  'warning-low': 'text-amber-800 dark:text-amber-200',
  'warning-high': 'text-amber-800 dark:text-amber-200',
  'destructive-low': 'text-red-800 dark:text-red-200',
  'destructive-high': 'text-red-800 dark:text-red-200',
} as const

const iconVariants = {
  'default-low': 'text-white dark:text-white bg-muted-600 dark:bg-muted-900',
  'default-high': 'text-white dark:text-white bg-muted-600 dark:bg-muted-900',
  'muted-low': 'text-white dark:text-white bg-muted-400 dark:bg-muted-900',
  'muted-high': 'text-white dark:text-white bg-muted-400 dark:bg-muted-900',
  'primary-low': 'text-white dark:text-white bg-primary-500 dark:bg-primary-500',
  'primary-high': 'text-white dark:text-white bg-primary-500 dark:bg-primary-500',
  'info-low': 'text-white dark:text-white bg-blue-500 dark:bg-blue-500',
  'info-high': 'text-white dark:text-white bg-blue-500 dark:bg-blue-500',
  'success-low': 'text-white dark:text-white bg-green-500 dark:bg-green-500',
  'success-high': 'text-white dark:text-white bg-green-500 dark:bg-green-500',
  'warning-low': 'text-white dark:text-white bg-amber-500 dark:bg-amber-500',
  'warning-high': 'text-white dark:text-white bg-amber-500 dark:bg-amber-500',
  'destructive-low': 'text-white dark:text-white bg-red-500 dark:bg-red-500',
  'destructive-high': 'text-white dark:text-white bg-red-500 dark:bg-red-500',
} as const

const closeVariants = {
  'default-low': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'default-high': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'muted-low': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'muted-high': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'primary-low': 'text-primary-500 dark:text-primary-500 hover:enabled:bg-primary-300/50 dark:hover:enabled:bg-primary-500/30 focus-visible:bg-primary-300/50 dark:focus-visible:bg-primary-500/30 active:enabled:bg-primary-300/20 dark:active:enabled:bg-primary-500/20',
  'primary-high': 'text-primary-500 dark:text-primary-500 hover:enabled:bg-primary-300/50 dark:hover:enabled:bg-primary-500/30 focus-visible:bg-primary-300/50 dark:focus-visible:bg-primary-500/30 active:enabled:bg-primary-300/20 dark:active:enabled:bg-primary-500/20',
  'info-low': 'text-blue-500 dark:text-blue-500 hover:enabled:bg-blue-300/50 dark:hover:enabled:bg-blue-500/30 focus-visible:bg-blue-300/50 dark:focus-visible:bg-blue-500/30 active:enabled:bg-blue-300/20 dark:active:enabled:bg-blue-500/20',
  'info-high': 'text-blue-500 dark:text-blue-500 hover:enabled:bg-blue-300/50 dark:hover:enabled:bg-blue-500/30 focus-visible:bg-blue-300/50 dark:focus-visible:bg-blue-500/30 active:enabled:bg-blue-300/20 dark:active:enabled:bg-blue-500/20',
  'success-low': 'text-green-500 dark:text-green-500 hover:enabled:bg-green-300/50 dark:hover:enabled:bg-green-500/30 focus-visible:bg-green-300/50 dark:focus-visible:bg-green-500/30 active:enabled:bg-green-300/20 dark:active:enabled:bg-green-500/20',
  'success-high': 'text-green-500 dark:text-green-500 hover:enabled:bg-green-300/50 dark:hover:enabled:bg-green-500/30 focus-visible:bg-green-300/50 dark:focus-visible:bg-green-500/30 active:enabled:bg-green-300/20 dark:active:enabled:bg-green-500/20',
  'warning-low': 'text-amber-500 dark:text-amber-500 hover:enabled:bg-amber-300/50 dark:hover:enabled:bg-amber-500/30 focus-visible:bg-amber-300/50 dark:focus-visible:bg-amber-500/30 active:enabled:bg-amber-300/20 dark:active:enabled:bg-amber-500/20',
  'warning-high': 'text-amber-500 dark:text-amber-500 hover:enabled:bg-amber-300/50 dark:hover:enabled:bg-amber-500/30 focus-visible:bg-amber-300/50 dark:focus-visible:bg-amber-500/30 active:enabled:bg-amber-300/20 dark:active:enabled:bg-amber-500/20',
  'destructive-low': 'text-red-500 dark:text-red-500 hover:enabled:bg-red-300/50 dark:hover:enabled:bg-red-500/30 focus-visible:bg-red-300/50 dark:focus-visible:bg-red-500/30 active:enabled:bg-red-300/20 dark:active:enabled:bg-red-500/20',
  'destructive-high': 'text-red-500 dark:text-red-500 hover:enabled:bg-red-300/50 dark:hover:enabled:bg-red-500/30 focus-visible:bg-red-300/50 dark:focus-visible:bg-red-500/30 active:enabled:bg-red-300/20 dark:active:enabled:bg-red-500/20',
} as const

const icon = computed(() =>
  typeof props.icon === 'string'
    ? props.icon
    : variant.value && icons.value
      ? icons.value[variant.value]
      : '',
)
</script>

<template>
  <div
    class="relative flex gap-2 border"
    :class="[
      rounded && radiuses[rounded],
      variant && variants[variant],
      classes?.wrapper,
      props.icon ? 'py-1 ps-1 pe-6' : 'py-2 ps-2 pe-6',
    ]"
  >
    <div
      v-if="props.icon && icon"
      class="flex size-10 shrink-0 items-center justify-center"
      :class="[
        classes?.icon,
        icon && iconVariants[variant],
        rounded && radiuses[rounded],
      ]"
    >
      <slot name="icon" icon-name="icon">
        <Icon v-if="icon" :name="icon" class="text-lg text-white dark:text-white" />
      </slot>
    </div>
    <span class="inline-flex items-center leading-normal font-sans text-sm" :class="[
      classes?.text,
      variant && textVariants[variant],
    ]">
      <slot>{{ props.message }}</slot>
    </span>
    <div v-if="props.closable" class="absolute top-[-0.5rem] end-[-0.5rem] flex items-center justify-center bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-full size-8">
      <button
        type="button"
        tabindex="0"
        class="nui-focus flex cursor-pointer items-center justify-center shrink-0 size-6 rounded-full transition-colors duration-200"
        :class="[
          icon && closeVariants[variant],
        ]"
        @click="emit('close')"
      >
        <slot name="close-button">
          <Icon :name="iconClose" class="text-base" />
        </slot>
      </button>
    </div>
  </div>
</template>
