<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Label to display when file is being dropped.
     */
    label?: string

    /**
     * Icon to display when file is being dropped.
     */
    icon?: string

    /**
     * Allows to filter files when dropped.
     */
    filterFileDropped?: (file: File) => boolean

    /**
     * Defines the color of the icon
     *
     * @default 'default'
     */
    variant?: 'default' | 'primary' | 'dark'
  }>(),
  {
    label: 'Drop your files',
    icon: '',
    variant: undefined,
    filterFileDropped: () => true,
  },
)
const emits = defineEmits<{
  drop: [value: FileList]
}>()

const variant = useNuiDefaultProperty(props, 'BaseFullscreenDropfile', 'variant')

const isDropping = ref(false)

// drag file over app handlers, to show drop placeholder
// we need to keep track of how deep the drag is because it raises on each child elements
let dragCount = 0
function onDragenter() {
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
    emits('drop', filtered.files)
  }
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

const dropVariants = {
  default: 'bg-muted-100 dark:bg-muted-950 border-2 border-dashed border-muted-200 dark:border-muted-800',
  primary: 'bg-muted-100 dark:bg-muted-950 border-2 border-dashed border-muted-200 dark:border-muted-800',
  dark: 'bg-muted-100 dark:bg-muted-950 border-2 border-dashed border-muted-200 dark:border-muted-800',
}

// @todo: low-contrast-theme
// const dropVariants = {
//   default: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
//   primary: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
//   dark: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
// }

const overlayVariants = {
  default: 'bg-muted-50 dark:bg-muted-900/20',
  primary: 'bg-muted-50 dark:bg-muted-900/20',
  dark: 'bg-muted-50 dark:bg-muted-900/20',
}

// @todo: low-contrast-theme
// const overlayVariants = {
//   default: 'text-muted-500 dark:text-muted-400',
//   primary: 'text-[var(--primary-base)] dark:text-[var(--primary-light)]',
//   dark: 'text-muted-900 dark:text-muted-100',
// }

const iconVariants = {
  default: 'text-muted-500 dark:text-muted-400',
  primary: 'text-[var(--primary-base)] dark:text-[var(--primary-light)]',
  dark: 'text-muted-900 dark:text-muted-100',
}
</script>

<template>
  <div class="block">
    <div 
      v-if="isDropping" 
      class=" fixed inset-0 z-40 backdrop-blur-xs transition-all hover:backdrop-blur-none" 
      :class="[
        overlayVariants[variant],
      ]" 
    />
    <div v-show="isDropping" class="fixed inset-0 z-50">
      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-0 opacity-0"
        enter-to-class="transform scale-1 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-1 opacity-100"
        leave-to-class="transform scale-0 opacity-0"
      >
        <div v-if="isDropping" class="flex h-full flex-1 items-center justify-center">
          <div 
            class="h-[230px] w-[500px] mx-auto flex flex-col items-center justify-center gap-6 drop-shadow-xs rounded-md"
            :class="[
              dropVariants[variant],
            ]"
          > 
            <Icon
              v-if="props.icon"
              :name="props.icon"
              class="h-10 w-10"
              :class="[
                variant && iconVariants[variant],
              ]"
            />
            <div class="text-base text-muted-500 dark:text-muted-400">
              {{ props.label }}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
