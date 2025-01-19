<script setup lang="ts">
import { Label } from 'reka-ui'
import { useNuiField } from '../composables/useNuiField'

const {
  fieldset,
  ids,
  labelRef,
} = useNuiField()
</script>

<template>
  <component
    :is="fieldset || !ids.input ? 'span' : Label"
    v-if="'default' in $slots"
    :id="ids.label"
    :ref="labelRef"
    :for="ids.input"
    class="font-sans font-medium text-sm leading-none text-field-label"
  >
    <slot />
  </component>
</template>
