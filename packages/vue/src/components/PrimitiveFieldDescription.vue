<script setup lang="ts">
import { Label } from 'reka-ui'
import { useNuiField } from '../composables/useNuiField'

const {
  fieldset,
  ids,
  descriptionRef,
} = useNuiField()
</script>

<template>
  <component
    :is="fieldset || !ids.input ? 'span' : Label"
    v-if="'default' in $slots"
    :id="ids.input ? ids.description : undefined"
    :ref="descriptionRef"
    :for="ids.input"
    class="font-sans text-xs leading-tight text-field-description/90 dark:text-field-description"
  >
    <slot />
  </component>
</template>
