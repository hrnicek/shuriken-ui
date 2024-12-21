<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The type of input.
     */
    type?: string

    /**
     * The placeholder to display for the input.
     */
    placeholder?: string

    /**
     * Whether the color of the input should change when it is focused.
     */
    colorFocus?: boolean

    /**
     * The contrast of the input.
     *
     * @default 'default'
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * The radius of the input.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the input.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl'

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the outer element.
       */
      outer?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]

      /**
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]
    }
  }>(),
  {
    id: undefined,
    type: 'text',
    rounded: undefined,
    size: undefined,
    contrast: undefined,
    placeholder: undefined,
    classes: () => ({}),
  },
)

function looseToNumber(val: any) {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

const [modelValue, modelModifiers] = defineModel<
  string | number,
  'lazy' | 'trim' | 'number'
>({
  set(value) {
    if (modelModifiers.number) {
      return looseToNumber(value)
    }
    else if (modelModifiers.trim && typeof value === 'string') {
      return value.trim()
    }

    return value
  },
})

const contrast = useNuiDefaultProperty(props, 'BaseInput', 'contrast')
const rounded = useNuiDefaultProperty(props, 'BaseInput', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseInput', 'size')

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

const radiuses = {
  none: '',
  sm: 'nui-input-rounded-sm',
  md: 'nui-input-rounded-md',
  lg: 'nui-input-rounded-lg',
  full: 'nui-input-rounded-full',
}

const sizes = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
  xl: 'nui-input-xl',
}

const contrasts = {
  'default': 'nui-input-default',
  'default-contrast': 'nui-input-default-contrast',
  'muted': 'nui-input-muted',
  'muted-contrast': 'nui-input-muted-contrast',
}

defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,

  /**
   * The internal id of the radio input.
   */
  id,
})
</script>

<template>
  <div
    class="nui-input-wrapper"
    :class="[
      contrast && contrasts[contrast],
      size && sizes[size],
      rounded && radiuses[rounded],
      props.colorFocus && 'nui-input-focus',
      'action' in $slots && 'nui-input-has-action',
      props.classes?.wrapper,
    ]"
  >
    <div class="nui-input-outer" :class="props.classes?.outer">
      <input
        v-if="modelModifiers.lazy"
        :id="id"
        ref="inputRef"
        v-model.lazy="modelValue"
        :type="props.type"
        v-bind="$attrs"
        class="nui-input"
        :class="props.classes?.input"
        :placeholder="placeholder"
      >
      <input
        v-else
        :id="id"
        ref="inputRef"
        v-model="modelValue"
        :type="props.type"
        v-bind="$attrs"
        class="nui-input"
        :class="props.classes?.input"
        :placeholder="placeholder"
      >
    </div>
  </div>
</template>
