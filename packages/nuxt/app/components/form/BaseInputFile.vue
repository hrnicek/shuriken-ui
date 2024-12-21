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
     * The icon to display for the file input.
     */
    icon?: string

    /**
     * The placeholder to display for the file input.
     */
    placeholder?: string

    /**
     * Whether the color of the file input should change when it is focused.
     */
    colorFocus?: boolean

    /**
     * Method to return the text value of the file input.
     */
    textValue?: (fileList?: FileList | null) => string

    /**
     * The contrast of the input.
     *
     * @since 2.0.0
     * @default 'default'
     */
    contrast?: 'default' | 'default-contrast'

    /**
     * The radius of the file input.
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
     * Translation strings.
     *
     * @default { empty: 'No file chosen', invalid: 'Invalid file selected', multiple: '{count} files selected'}
     */
    i18n?: {
      empty: string
      invalid: string
      multiple: string
    }

    /**
     * Optional CSS classes to apply to the wrapper, label, input, text, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[]

      /**
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]
    }
  }>(),
  {
    id: undefined,
    rounded: undefined,
    size: undefined,
    i18n: undefined,
    contrast: undefined,
    icon: undefined,
    placeholder: undefined,
    textValue: undefined,
    classes: () => ({}),
  },
)

const [modelValue] = defineModel<FileList | null>()

const attrs = useAttrs()
const contrast = useNuiDefaultProperty(props, 'BaseInputFile', 'contrast')
const rounded = useNuiDefaultProperty(props, 'BaseInputFile', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseInputFile', 'size')
const i18n = useNuiDefaultProperty(props, 'BaseInputFile', 'i18n')

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

function defaultTextValue(fileList?: FileList | null) {
  if (!fileList?.item?.length) {
    return ''
  }

  return fileList?.item.length === 1
    ? fileList.item(0)?.name ?? i18n.value.invalid
    : i18n.value.multiple.replaceAll(
      '{count}',
      String(fileList?.item?.length ?? 0),
    )
}

const radiuses = {
  none: '',
  sm: 'nui-input-file-regular-rounded-sm',
  md: 'nui-input-file-regular-rounded-md',
  lg: 'nui-input-file-regular-rounded-lg',
  full: 'nui-input-file-regular-rounded-full',
}

const sizes = {
  sm: 'nui-input-file-regular-sm',
  md: 'nui-input-file-regular-md',
  lg: 'nui-input-file-regular-lg',
  xl: 'nui-input-file-regular-xl',
}

const contrasts = {
  'default': 'nui-input-file-regular-default',
  'default-contrast': 'nui-input-file-regular-default-contrast',
}

const textValue = computed(() => {
  if (props.textValue) {
    return props.textValue(modelValue.value)
  }

  return defaultTextValue(modelValue.value)
})

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
    class="nui-input-file-regular"
    :class="[
      contrast && contrasts[contrast],
      size && sizes[size],
      rounded && radiuses[rounded],
      props.icon && 'nui-input-file-regular-has-icon',
      props.colorFocus && 'nui-input-file-regular-color-focus',
      props.classes?.wrapper,
    ]"
  >
    <div class="nui-input-file-regular-outer">
      <label
        tabindex="0"
        class="nui-input-file-regular-inner"
        :for="id"
        :class="[props.classes?.input]"
      >
        <div class="nui-input-file-regular-text">
          {{ textValue || props.placeholder }}
        </div>
        <input
          :id="id"
          ref="inputRef"
          type="file"
          v-bind="attrs"
          class="hidden"
          @change="
            (event: any) => (modelValue = (event.target as HTMLInputElement).files)
          "
        >
      </label>
    </div>
  </div>
</template>
