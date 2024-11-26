<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
     */
    mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'

    /**
     * Whether the icon is bordered.
     */
    bordered?: boolean

    /**
     * The color of the box.
     *
     * @default 'default'
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'dark'
      | 'black'
      | 'light'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'

    /**
     * The radius of the icon.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the icon.
     *
     * @default 'xs'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /**
     * The variant of the box.
     *
     * @since 2.0.0
     * @default 'solid'
     */
    variant?: 'solid' | 'outline' | 'pastel'
  }>(),
  {
    variant: undefined,
    color: undefined,
    size: undefined,
    rounded: undefined,
    mask: undefined,
    bordered: false,
  },
)

const color = useNuiDefaultProperty(props, 'BaseIconBox', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseIconBox', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseIconBox', 'size')
const variant = useNuiDefaultProperty(props, 'BaseIconBox', 'variant')

const radiuses = {
  none: '',
  sm: 'nui-icon-box-rounded-sm',
  md: 'nui-icon-box-rounded-md',
  lg: 'nui-icon-box-rounded-lg',
  full: 'nui-icon-box-rounded-full',
}

const sizes = {
  'xs': 'nui-icon-box-xs',
  'sm': 'nui-icon-box-sm',
  'md': 'nui-icon-box-md',
  'lg': 'nui-icon-box-lg',
  'xl': 'nui-icon-box-xl',
  '2xl': 'nui-icon-box-2xl',
}

const variants = {
  solid: 'nui-icon-box-solid',
  pastel: 'nui-icon-box-pastel',
  outline: 'nui-icon-box-outline',
}

const colors = {
  'none': '',
  'default': 'nui-icon-box-default',
  'default-contrast': 'nui-icon-box-default-contrast',
  'muted': 'nui-icon-box-muted',
  'muted-contrast': 'nui-icon-box-muted-contrast',
  'light': 'nui-icon-box-light',
  'dark': 'nui-icon-box-dark',
  'black': 'nui-icon-box-black',
  'primary': 'nui-icon-box-primary',
  'info': 'nui-icon-box-info',
  'success': 'nui-icon-box-success',
  'warning': 'nui-icon-box-warning',
  'danger': 'nui-icon-box-danger',
}

const masks = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
}

const classes = computed(() => [
  'nui-icon-box',
  props.bordered && 'nui-icon-box-bordered',
  rounded.value && radiuses[rounded.value],
  size.value && sizes[size.value],
  variant.value && variants[variant.value],
  color.value && colors[color.value],
  rounded.value === 'none' && props.mask && masks[props.mask],
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
