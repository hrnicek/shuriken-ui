<script setup lang="ts">
import type { BaseInputFileProps } from '../types';
import { BaseInputFile as theme } from '#build/shuriken-ui/theme';
import { useAttrs, computed, useTemplateRef } from 'vue'

import { useNinjaId } from '../composables/input-id';
import { tm } from '../utils/tw-merge';


const i18n = {
  empty: 'No file chosen',
  invalid: 'Invalid file selected',
  multiple: '{count} files selected',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseInputFileProps>(), {
  id: undefined,
  icon: undefined,
  placeholder: undefined,
  textValue: undefined,

  rounded: theme.defaults.rounded,
  variant: theme.defaults.variant,
  size: theme.defaults.size,

  classes: () => ({}),
})

const [modelValue] = defineModel<FileList | null>()

const attrs = useAttrs()

const id = useNinjaId(() => props.id as string)

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
      'group/file relative px-1 py-1.5 gap-2 focus-within:nui-focus w-full flex cursor-pointer items-center overflow-hidden has-disabled:cursor-not-allowed has-disabled:opacity-50 font-sans transition-colors duration-300 has-aria-invalid:border-destructive-base',
      props.variant && theme.variants[props.variant],
      props.size && theme.sizes[props.size],
      props.rounded && theme.radiuses[props.rounded],
      props.classes.root,
    ])"
    @keydown.enter.prevent="currentRef?.click()"
    @keydown.space.prevent="currentRef?.click()"
  >
    <div
      :data-disabled="props.disabled ? 'true' : undefined"
      :class="tm([
        'h-full inline-flex items-center justify-center transition-colors duration-300 select-none shrink-0',
        props.rounded && theme.radiuses[props.rounded],
        props.variant && theme.textVariants[props.variant],
        props.size && theme.textSpacings[props.size],
        props.classes.button,
      ])"
    >
      Choose File
    </div>

    <span
      v-if="textValue"
      :class="tm([
        'flex-1 select-none truncate text-ellipsis',
        props.classes.text
      ])"
    >
      {{ textValue }}
    </span>
    <span
      v-else
      :class="tm([
        'flex-1 select-none truncate text-ellipsis',
        theme.placeholderVariants[props.variant],
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
