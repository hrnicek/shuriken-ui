<script setup lang="ts">
import type { BaseFullscreenDropfileProps, BaseFullscreenDropfileEmits, BaseFullscreenDropfileSlots } from '../types'
import { BaseFullscreenDropfile as theme } from '@shuriken-ui/theme-iga'
import { useAttrs, ref, onMounted, onBeforeUnmount } from 'vue'

import { useNuiId } from '../composables/useNuiId';


const props = withDefaults(defineProps<BaseFullscreenDropfileProps>(), {
  label: 'Drop your files',
  icon: '',
  variant: theme.defaults.variant,

  id: undefined,
  multiple: false,
  disabled: false,
  filterFileDropped: () => true,
})

const attrs = useAttrs()
const emits = defineEmits<BaseFullscreenDropfileEmits>()
const slots = defineSlots<BaseFullscreenDropfileSlots>()

const [modelValue] = defineModel<FileList | null>()

const id = useNuiId(() => props.id)
// const variant = useNuiConfig('BaseFullscreenDropfile', 'variant', () => props.variant)

const inputRef = ref<HTMLInputElement>()
const isDropping = ref(false)

// drag file over app handlers, to show drop placeholder
// we need to keep track of how deep the drag is because it raises on each child elements
let dragCount = 0
function onDragenter() {
  if (props.disabled) return

  dragCount += 1
  if (dragCount === 1) {
    isDropping.value = true
  }
}
function onDragleave() {
  dragCount -= 1
  if (dragCount === 0) {
    isDropping.value = false
  }
}
function onDragover(e: DragEvent) {
  // prevent file from being opened in new browser tab
  e.preventDefault()
}
function onDrop(event: DragEvent) {
  event.preventDefault()

  isDropping.value = false
  dragCount = 0

  if (props.disabled) return
  if (!event.dataTransfer) {
    return
  }

  const dt = event.dataTransfer
  const filtered = new DataTransfer()
  if (dt) {
    for (const file of dt.files) {
      if (props.filterFileDropped(file)) {
        filtered.items.add(file)
      }
    }
  }

  if (inputRef.value) {
    inputRef.value.files = filtered.files
  }
  modelValue.value = filtered.files
}

// register drag events
onMounted(() => {
  document.documentElement.addEventListener('dragenter', onDragenter, false)
  document.documentElement.addEventListener('dragleave', onDragleave, false)
  document.documentElement.addEventListener('dragover', onDragover, false)
  document.documentElement.addEventListener('drop', onDrop)
})

onBeforeUnmount(() => {
  document.documentElement.removeEventListener('dragenter', onDragenter)
  document.documentElement.removeEventListener('dragleave', onDragleave)
  document.documentElement.removeEventListener('dragover', onDragover)
  document.documentElement.removeEventListener('drop', onDrop)
})

function handleFileChange(event: Event) {
  const newFiles = (event.target as HTMLInputElement).files
  if (!newFiles)
    return

  if (props.multiple && modelValue.value) {
    // When multiple is true, append new files to existing ones
    const existingFiles = [...modelValue.value]
    const updatedFiles = new DataTransfer()

    // Add all existing files
    for (const file of existingFiles) {
      updatedFiles.items.add(file)
    }

    // Add new files, optionally check for duplicates
    for (const newFile of newFiles) {
      if (
        !existingFiles.some(
          existingFile => existingFile.name === newFile.name,
        )
      ) {
        updatedFiles.items.add(newFile)
      }
    }
    if (!inputRef.value)
      return

    inputRef.value.files = updatedFiles.files
    modelValue.value = updatedFiles.files
  }
  else {
    // When multiple is false, replace current files with new selection
    modelValue.value = newFiles
  }
}
</script>

<template>
  <input
    :id
    v-bind="attrs"
    ref="inputRef"
    type="file"
    class="hidden"
    :multiple="props.multiple"
    :disabled="props.disabled"
    @change="handleFileChange"
  />
  <Teleport to="body">
    <div 
      v-if="isDropping" 
      class=" fixed inset-0 z-40 backdrop-blur-xs transition-all hover:backdrop-blur-none" 
      :class="theme.overlayVariants[props.variant]"
    />
    <div v-if="isDropping" class="fixed inset-0 z-50 starting:opacity-0 transition-discrete transition-opacity duration-300">
      <div class="flex h-full flex-1 items-center justify-center">
        <slot>
          <div 
            class="h-[230px] w-[500px] mx-auto flex flex-col items-center justify-center gap-6 drop-shadow-xs rounded-md"
            :class="theme.dropVariants[props.variant]"
          > 
            <Icon
              v-if="props.icon"
              :name="props.icon"
              class="h-10 w-10"
              :class="theme.iconVariants[props.variant]"
            />
            <div class="text-base text-muted-500 dark:text-muted-400">
              {{ props.label }}
            </div>
          </div>
        </slot>
      </div>
    </div>
  </Teleport>
</template>
