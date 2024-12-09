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
     * The label to display for the file input.
     */
    label?: string

    /**
     * The icon to display for the file input.
     */
    icon?: string

    /**
     * The placeholder to display for the file input.
     */
    placeholder?: string

    /**
     * An error message or boolean value indicating whether the file input is in an error state.
     */
    error?: string | boolean

    /**
     * Whether the color of the file input should change when it is focused.
     */
    colorFocus?: boolean

    /**
     * Whether the file input is in a loading state.
     */
    loading?: boolean

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
       * CSS classes to apply to the label element.
       */
      label?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[]

      /**
       * CSS classes to apply to the error element.
       */
      error?: string | string[]

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
    label: undefined,
    icon: undefined,
    placeholder: undefined,
    error: false,
    textValue: undefined,
    classes: () => ({}),
  },
)

const [modelValue] = defineModel<FileList | null>()

const contrast = useNuiDefaultProperty(props, 'BaseInputFile', 'contrast')
const rounded = useNuiDefaultProperty(props, 'BaseInputFile', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseInputFile', 'size')
const i18n = useNuiDefaultProperty(props, 'BaseInputFile', 'i18n')

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

function defaultTextValue(fileList?: FileList | null) {
  if (!fileList?.item?.length) {
    return i18n.value.empty
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
      props.error && !props.loading && 'nui-input-file-regular-error',
      props.loading && 'nui-input-file-regular-loading',
      props.icon && 'nui-input-file-regular-has-icon',
      props.colorFocus && 'nui-input-file-regular-color-focus',
      props.classes?.wrapper,
    ]"
  >
    <label
      v-if="'label' in $slots || props.label"
      class="nui-input-file-regular-label"
      :for="id"
      :class="props.classes?.label"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="nui-input-file-regular-outer">
      <label
        tabindex="0"
        class="nui-input-file-regular-inner"
        :for="id"
        :class="[props.classes?.input]"
      >
        <div
          v-if="props.placeholder || props.icon || 'icon' in $slots"
          class="nui-input-file-regular-addon"
          :class="props.classes?.text"
        >
          <span v-if="props.placeholder" class="text-xs">
            {{ props.placeholder }}
          </span>
          <slot name="icon">
            <Icon
              v-if="props.icon"
              :name="props.icon"
              :class="props.classes?.icon"
            />
          </slot>
        </div>

        <div class="nui-input-file-regular-text">
          {{ textValue }}
        </div>
        <input
          :id="id"
          ref="inputRef"
          type="file"
          v-bind="$attrs"
          class="hidden"
          @change="
            (event) => (modelValue = (event.target as HTMLInputElement).files)
          "
        >
      </label>

      <div v-if="props.loading" class="nui-input-file-regular-placeload-wrapper">
        <BasePlaceload class="nui-input-file-regular-placeload" />
      </div>
      <BaseInputHelpText
        v-if="props.error && typeof props.error === 'string'"
        color="danger"
        :class="props.classes?.error"
      >
        {{ props.error }}
      </BaseInputHelpText>
    </div>
  </div>
</template>
