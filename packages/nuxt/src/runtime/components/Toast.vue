<script lang="ts">
import type { ToastRootProps, ToastRootEmits } from 'reka-ui'

import type { BaseButtonProps } from '../types/BaseButton'

export interface BaseToastProps extends ToastRootProps {
  title?: string
  description?: string
  icon?: string
  variant?: 'default' | 'primary' | 'destructive'
  actions?: (BaseButtonProps & { 
    label: string
    icon?: string
    onClick?: (e: Event) => (void | Promise<void>)
  })[]
}
export interface BaseToastEmits extends ToastRootEmits {}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<BaseToastProps>()
const emits = defineEmits<BaseToastEmits>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'description', 'icon']), emits)
</script>

<template>
  <ToastRoot
    v-bind="forward"
    v-slot="{ duration, remaining, open }"
    class="group/toast flex"
  >
    <div 
      class="relative flex rounded-md border bg-white dark:border-muted-800 dark:bg-muted-900 dark:border-muted-800 border-muted-200"
    >
      <div
        v-if="props.icon"
        class="flex w-16 pt-4 justify-center rounded-s-lg bg-muted-50 dark:bg-muted-700 shrink-0"
      >
        <Icon
          :name="props.icon"
          class="size-8 text-muted-400 dark:text-muted-50"
        />
      </div>
      <div class="grow text-md min-w-[220px] max-w-md p-4">
        <div class="flex">
          <div class="grow space-y-1 pe-5">
            <ToastTitle as-child>
              <BaseHeading
                as="h4"
                weight="medium"
                size="lg"
                class="block truncate"
              >
                {{ props.title }}
              </BaseHeading>
            </ToastTitle>
            <ToastDescription v-if="props.description" as-child>
              <BaseParagraph
                size="sm"
                class="text-muted-600 dark:text-muted-400"
                lead="snug"
              >
                {{ props.description }}
              </BaseParagraph>
            </ToastDescription>
          </div>
          <div class="relative size-12 flex items-center justify-center">
            <ToastClose as-child>
              <BaseButton size="icon-sm" rounded="full">
                <Icon name="lucide:x" class="size-4" />
              </BaseButton>
            </ToastClose>

            <div class="absolute top-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover/toast:opacity-100 transition-opacity duration-700">
              <BaseProgressCircle
                :size="52"
                :thickness="2"
                :model-value="duration - remaining"
                :max="duration"
                class="**:duration-0"
              />
            </div>
          </div>
        </div>
        <div
          v-if="props.actions?.length"
          class="flex justify-center gap-2 pt-4"
        >
          <ToastAction v-for="(action, key) in props.actions" :key :alt-text="action.label" as-child>
            <BaseButton size="sm" class="gap-2 w-full" v-bind="{ ...action, label: undefined, icon: undefined }">
              <Icon v-if="action.icon" :name="action.icon" class="size-4" />
              {{ action.label }}
            </BaseButton>
          </ToastAction>
        </div>
      </div>
    </div>
  </ToastRoot>
</template>