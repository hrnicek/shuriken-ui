<script setup lang="ts">
import type { BaseFieldController } from '../types';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldController>(), {})
const forward = useForwardProps(reactiveOmit(props, []))

const { id, required, disabled, name, state, idLabel, idDescription, idError } = injectBaseFieldContext()
</script>

<template>
  <Primitive
    v-bind="forward"
    :id
    :name
    :required
    :disabled
    :data-field-state="state"
    :aria-labelledby="idLabel"
    :aria-describedby="idDescription"
    :aria-required="required ? 'true' : undefined"
    :aria-invalid="state === 'error' ? 'true' : undefined"
    :aria-errormessage="state === 'error' ? idError : undefined"
    as-child
  >
    <slot />
  </Primitive>
</template>