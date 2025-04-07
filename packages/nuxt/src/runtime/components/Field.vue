<script lang="ts">
import type { BasePrimitiveFieldProps } from './PrimitiveField.vue'
import { reactiveOmit } from '@vueuse/core'

export interface BaseFieldProps extends BasePrimitiveFieldProps {
  label?: string
  description?: string
  hint?: string
  error?: string
}

export interface BaseFieldSlots {
  default: (props: {
    inputRef: (el: any) => void
    inputAttrs: Record<string, any>
  }) => any
  label: () => any
  description: () => any
  hint: () => any
  error: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseFieldProps>(), {
  name: undefined,
  label: undefined,
  required: false,
  fieldset: false,
  state: 'idle',
})
const slots = defineSlots<BaseFieldSlots>()

const forward = reactiveOmit(props, ['label', 'error', 'hint', 'description'])
</script>

<template>
  <BasePrimitiveField
    v-slot="{
      inputRef,
      inputAttrs,
    }"
    v-bind="forward"
  >
    <div class="w-full flex">
      <div
        v-if="props.label || 'label' in slots || props.hint || 'hint' in slots || props.state !== 'idle'"
        class="grow flex justify-between items-end w-full min-h-6 pb-2 gap-2"
      >
        <BasePrimitiveFieldLabel
          v-if="props.label || 'label' in slots"
        >
          <slot name="label">
            <span>{{ props.label }}</span>
          </slot>
          <BasePrimitiveFieldRequiredIndicator />
        </BasePrimitiveFieldLabel>

        <div v-if="props.hint || 'hint' in slots || props.state !== 'idle'" class="flex items-center justify-end gap-2">
          <BasePrimitiveFieldLoadingIndicator />
          <BasePrimitiveFieldSuccessIndicator />
          <BasePrimitiveFieldErrorIndicator />
          <slot name="hint">
            <span class="text-xs font-medium leading-none text-field-description/90 dark:text-field-description">{{ props.hint }}</span>
          </slot>
        </div>
      </div>
    </div>

    <slot v-bind="{ inputAttrs, inputRef }" />

    <div
      v-if="props.error || 'error' in slots || props.description || 'description' in slots"
      class="mt-2 space-y-1 flex flex-col"
    >
      <BasePrimitiveFieldError v-if="props.error || 'error' in slots">
        <slot name="error">
          {{ props.error }}
        </slot>
      </BasePrimitiveFieldError>
      <BasePrimitiveFieldDescription v-if="props.description || 'description' in slots">
        <slot name="description">
          {{ props.description }}
        </slot>
      </BasePrimitiveFieldDescription>
    </div>
  </BasePrimitiveField>
</template>
