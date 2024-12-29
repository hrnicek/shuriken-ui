<script lang="ts">
export interface BaseInputFileProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder to display for the file input.
   */
  placeholder?: string

  /**
   * Whether the input is disabled.
   */
  disabled?: boolean

  /**
   * Allows multiple files to be selected.
   */
  multiple?: boolean

  /**
   * Method to return the text value of the file input.
   */
  textValue?: (fileList?: FileList | null) => string

  /**
   * The variant of the input.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'primary'

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
}

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 has-aria-invalid:!border-destructive-base',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 has-aria-invalid:!border-destructive-base',
  primary: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 has-aria-invalid:!border-destructive-base',
} as const

// @todo: low-contrast-theme
// const variants = {
//   default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:!border-destructive-base',
//   muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:!border-destructive-base',
//   primary: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:!border-destructive-base',
// } as const

export const sizes = {
  sm: 'h-8 text-xs pe-2',
  md: 'h-10 text-sm pe-3',
  lg: 'h-12 text-sm pe-4',
  xl: 'h-14 text-base pe-4',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

export const textVariants = {
  default: 'bg-muted-100 dark:bg-muted-800 text-muted-700 dark:text-muted-400 not-data-disabled:group-hover/file:bg-muted-200 dark:not-data-disabled:group-hover/file:bg-muted-700 not-data-disabled:group-hover/file:text-muted-800 dark:not-data-disabled:group-hover/file:text-muted-200',
  muted: 'bg-muted-100 dark:bg-muted-800 text-muted-700 dark:text-muted-400 not-data-disabled:group-hover/file:bg-muted-200 dark:not-data-disabled:group-hover/file:bg-muted-700 not-data-disabled:group-hover/file:text-muted-800 dark:not-data-disabled:group-hover/file:text-muted-200',
  primary: 'bg-primary-500/10 dark:bg-primary-500/20 text-primary-base dark:text-primary-light not-data-disabled:group-hover/file:bg-primary-500/20 dark:not-data-disabled:group-hover/file:bg-primary-500/30 not-data-disabled:group-hover/file:text-primary-heavy dark:not-data-disabled:group-hover/file:text-primary-light',
} as const

// @todo: low-contrast-theme
// const textVariants = {
//   default: 'bg-muted-100 dark:bg-muted-800 text-muted-700 dark:text-muted-400 group-hover/file:bg-muted-200 dark:group-hover/file:bg-muted-700 group-hover/file:text-muted-800 dark:group-hover/file:text-muted-200',
//   muted: 'bg-muted-100 dark:bg-muted-800 text-muted-700 dark:text-muted-400 group-hover/file:bg-muted-200 dark:group-hover/file:bg-muted-700 group-hover/file:text-muted-800 dark:group-hover/file:text-muted-200',
//   primary: 'bg-primary-500/10 dark:bg-primary-500/20 text-primary-base dark:text-primary-light group-hover/file:bg-primary-500/20 dark:group-hover/file:bg-primary-500/10 group-hover/file:text-primary-heavy dark:group-hover/file:text-primary-light',
// } as const

export const textSpacings = {
  sm: 'px-2',
  md: 'px-2',
  lg: 'px-4',
  xl: 'px-5',
} as const
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseInputFileProps>(), {
  id: undefined,
  rounded: undefined,
  size: undefined,
  i18n: undefined,
  variant: undefined,
  icon: undefined,
  placeholder: undefined,
  textValue: undefined,
})

const [modelValue] = defineModel<FileList | null>()

const attrs = useAttrs()
const variant = useNuiConfig('BaseInputFile', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseInputFile', 'rounded', () => props.rounded)
const size = useNuiConfig('BaseInputFile', 'size', () => props.size)
const i18n = useNuiConfig('BaseInputFile', 'i18n', () => props.i18n)

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id as string)

function defaultTextValue(fileList?: FileList | null) {
  if (!fileList?.length) {
    return ''
  }

  if (fileList.length === 1) {
    return fileList.item(0)?.name ?? i18n.value.invalid
  }

  if (props.multiple) {
    return i18n.value.multiple.replaceAll(
      '{count}',
      String(fileList?.length ?? 0),
    )
  }

  return i18n.value.invalid
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
   * The internal id of the file input.
   */
  id,
})
</script>

<template>
  <div class="relative">
    <label
      :tabindex="props.disabled ? -1 : 0"
      class="group/file relative nui-focus w-full flex cursor-pointer items-center overflow-hidden has-disabled:cursor-not-allowed has-disabled:opacity-50 font-sans transition-colors duration-300"
      :for="id"
      :class="[
        variant && variants[variant],
        size && sizes[size],
        rounded && radiuses[rounded],
      ]"
    >
      <div
        class="flex w-full items-center text-muted-600 dark:text-muted-400 px-1 py-1.5 gap-2"
        :class="[
          size && sizes[size],
        ]"
      >
        <div
          class="h-full inline-flex items-center justify-center transition-colors duration-300 select-none shrink-0"
          :data-disabled="props.disabled ? 'true' : undefined"
          :class="[
            rounded && radiuses[rounded],
            variant && textVariants[variant],
            size && textSpacings[size],
          ]"
        >
          Choose File
        </div>

        <div class="flex-1 truncate text-ellipsis">
          <span v-if="textValue">{{  textValue }}</span>
          <span v-else class="text-muted-300 dark:text-muted-700 select-none">{{ props.placeholder }}</span>
        </div>
      </div>
      <input
        :id="id"
        ref="inputRef"
        type="file"
        v-bind="attrs"
        class="hidden"
        :disabled="props.disabled"
        :multiple="props.multiple"
        @change="
          (event: any) => (modelValue = (event.target as HTMLInputElement).files)
        "
      >
    </label>
  </div>
</template>
