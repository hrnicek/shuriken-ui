<script lang="ts">
import type { ToastRootEmits, ToastRootProps } from 'reka-ui'
import type { BaseButtonProps } from './Button.vue'
import { reactiveOmit } from '@vueuse/core'
import { ToastAction, ToastClose, ToastDescription, ToastRoot, ToastTitle, useForwardPropsEmits } from 'reka-ui'

export interface BaseToastProps extends ToastRootProps {
  title?: string
  description?: string
  icon?: string
  progress?: boolean
  actions?: (BaseButtonProps & {
    label: string
    onClick?: (e: Event) => (void | Promise<void>)
  })[]
}
export interface BaseToastEmits extends ToastRootEmits {}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseToastProps>(), {})
const emits = defineEmits<BaseToastEmits>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'description', 'icon', 'progress', 'actions']), emits)
</script>

<template>
  <ToastRoot
    v-slot="{ duration, remaining }"
    v-bind="forward"
    class="group/toast flex focus-visible:nui-focus rounded-md w-full md:w-auto"
  >
    <div
      class="relative flex  w-full md:w-auto shadow-sm shadow-muted-200 dark:shadow-muted-800 items-center rounded-md border bg-card-default-bg border-card-default-border overflow-hidden"
    >
      <div class="grow ps-4 py-4 flex gap-2">
        <Icon
          v-if="props.icon"
          :name="props.icon"
          class="size-4 shrink-0 text-muted-600 dark:text-muted-400"
        />
        <div class="min-w-[120px] max-w-[260px]">
          <ToastTitle class="font-sans text-sm font-medium">
            {{ props.title }}
          </ToastTitle>
          <ToastDescription v-if="props.description" class="font-sans text-[0.8rem] text-muted-600 dark:text-muted-400 leading-snug mt-1">
            {{ props.description }}
          </ToastDescription>
        </div>
      </div>
      <div class="relative min-h-16 h-full flex shrink-0 ps-4 pe-8 pt-4">
        <ToastAction v-for="(action, key) in props.actions" :key :alt-text="action.label" as-child>
          <BaseButton size="sm" class="scale-90" v-bind="{ ...action, label: undefined }">
            {{ action.label }}
          </BaseButton>
        </ToastAction>
        <ToastClose class="absolute! top-0 end-0 p-2 opacity-0 transition-opacity duration-150 group-hover/toast:opacity-100 group-focus-within/toast:opacity-100 focus-visible:nui-focus rounded-tr-md">
          <Icon name="lucide:x" class="size-4" />
        </ToastClose>
      </div>

      <div v-if="progress" class="absolute bottom-0 inset-x-0 **:duration-0">
        <BaseProgress
          :model-value="duration - remaining"
          :max="duration"
          class="rounded-t-none! h-0.5!"
        />
      </div>
    </div>
  </ToastRoot>
</template>
