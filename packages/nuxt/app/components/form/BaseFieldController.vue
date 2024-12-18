<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseFieldController extends PrimitiveProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

const props = withDefaults(defineProps<BaseFieldController>(), {})
const forward = useForwardProps(reactiveOmit(props, []))

const { id, idLabel, idDescription, idError, state, required } = injectBaseFieldContext()
</script>

<template>
  <Primitive
    v-bind="forward"
    :id
    :aria-labelledby="idLabel"
    :aria-describedby="state !== 'error' ? idDescription : undefined"
    :aria-required="required ? 'true' : undefined"
    :aria-invalid="state === 'error' ? 'true' : undefined"
    :aria-errormessage="state === 'error' ? idError : undefined"
    as-child
  >
    <slot />
  </Primitive>
</template>