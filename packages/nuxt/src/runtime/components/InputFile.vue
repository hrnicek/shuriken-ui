<script lang="ts">
import { computed, useAttrs, useTemplateRef } from 'vue'
import { useNuiId } from '../composables/useNuiId'

import { tm } from '../utils/tw-merge'

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
   */
  variant?: 'default' | 'muted' | 'primary'

  /**
   * The radius of the file input.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    button?: string | string[]
    text?: string | string[]
    placeholder?: string | string[]
  }
}

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text',
  primary: 'bg-input-default-bg border-input-default-border border text-input-default-text',
} as const satisfies Record<NonNullable<BaseInputFileProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs pe-2',
  md: 'h-10 text-sm pe-3',
  lg: 'h-12 text-sm pe-4',
  xl: 'h-14 text-base pe-4',
} as const satisfies Record<NonNullable<BaseInputFileProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseInputFileProps['rounded']>, string>

export const textVariants = {
  default: 'bg-input-default-button-bg text-input-default-button-text not-data-disabled:group-hover/file:bg-input-default-button-bg-active',
  muted: 'bg-input-muted-button-bg text-input-muted-button-text not-data-disabled:group-hover/file:bg-input-muted-button-bg-active',
  primary: 'bg-primary-base/10 dark:bg-primary-base/20 text-primary-base dark:text-primary-light not-data-disabled:group-hover/file:bg-primary-base/20 dark:not-data-disabled:group-hover/file:bg-primary-base/30 not-data-disabled:group-hover/file:text-primary-heavy dark:not-data-disabled:group-hover/file:text-primary-light',
} as const satisfies Record<NonNullable<BaseInputFileProps['variant']>, string>

export const placeholderVariants = {
  default: 'text-input-default-placeholder',
  muted: 'text-input-muted-placeholder',
  primary: 'text-input-default-placeholder',
} as const satisfies Record<NonNullable<BaseInputFileProps['variant']>, string>

export const textSpacings = {
  sm: 'px-2',
  md: 'px-2',
  lg: 'px-4',
  xl: 'px-5',
} as const satisfies Record<NonNullable<BaseInputFileProps['size']>, string>
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseInputFileProps>(), {
  id: undefined,
  icon: undefined,
  placeholder: undefined,
  textValue: undefined,

  rounded: 'md',
  variant: 'default',
  size: 'md',

  classes: () => ({}),
})

const i18n = {
  empty: 'No file chosen',
  invalid: 'Invalid file selected',
  multiple: '{count} files selected',
}

const [modelValue] = defineModel<FileList | null>()

const attrs = useAttrs()

const id = useNuiId(() => props.id as string)

const currentRef = useTemplateRef<HTMLInputElement>('currentRef')

function defaultTextValue(fileList?: FileList | null) {
  if (!fileList?.length) {
    return ''
  }

  if (fileList.length === 1) {
    return fileList.item(0)?.name ?? i18n.invalid
  }

  if (props.multiple) {
    return i18n.multiple.replaceAll(
      '{count}',
      String(fileList?.length ?? 0),
    )
  }

  return i18n.invalid
}

const textValue = computed(() => {
  if (props.textValue) {
    return props.textValue(modelValue.value)
  }

  return defaultTextValue(modelValue.value)
})

defineExpose({
  $el: currentRef,
})
</script>

<template>
  <label
    :tabindex="props.disabled ? -1 : 0"
    :for="id"
    :class="tm([
      'group/file relative px-1 py-1.5 gap-2 focus-within:nui-focus w-full flex cursor-pointer items-center overflow-hidden has-disabled:cursor-not-allowed has-disabled:opacity-50 font-sans transition-colors duration-300 has-aria-invalid:border-destructive-base! has-aria-invalid:ring-destructive-base!',
      props.variant && variants[props.variant],
      props.size && sizes[props.size],
      props.rounded && radiuses[props.rounded],
      props.classes.root,
    ])"
    @keydown.enter.prevent="currentRef?.click()"
    @keydown.space.prevent="currentRef?.click()"
  >
    <div
      :data-disabled="props.disabled ? 'true' : undefined"
      :class="tm([
        'h-full inline-flex items-center justify-center transition-colors duration-300 select-none shrink-0',
        props.rounded && radiuses[props.rounded],
        props.variant && textVariants[props.variant],
        props.size && textSpacings[props.size],
        props.classes.button,
      ])"
    >
      Choose File
    </div>

    <span
      v-if="textValue"
      :class="tm([
        'flex-1 select-none line-clamp-1 text-ellipsis break-all',
        props.classes.text,
      ])"
    >
      {{ textValue }}
    </span>
    <span
      v-else
      :class="tm([
        'flex-1 select-none line-clamp-1 text-ellipsis break-all',
        placeholderVariants[props.variant],
        props.classes.placeholder,
      ])"
    >
      {{ props.placeholder }}
    </span>

    <input
      :id="id"
      ref="currentRef"
      type="file"
      v-bind="attrs"
      tabindex="-1"
      class="absolute opacity-0 w-0 h-0 overflow-hidden"
      :disabled="props.disabled"
      :multiple="props.multiple"
      @change="
        (event: any) => (modelValue = (event.target as HTMLInputElement).files)
      "
    >
  </label>
</template>
