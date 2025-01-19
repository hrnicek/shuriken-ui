<script setup lang="ts">
import type { BaseFieldProps, BaseFieldSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'

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
      <div class=" flex justify-between w-full min-h-6 pb-2 gap-2">
        <BasePrimitiveFieldLabel
          v-if="props.label || 'label' in slots"
        >
          <span>
            <slot name="label">
              {{ props.label }}
            </slot>
          </span>
          <BasePrimitiveFieldRequiredIndicator />
        </BasePrimitiveFieldLabel>
        <span v-else />

        <div class="flex items-center gap-2 pe-0.5">
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
