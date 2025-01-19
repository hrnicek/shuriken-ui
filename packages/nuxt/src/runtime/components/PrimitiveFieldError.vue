<script setup lang="ts">
import { Label } from 'reka-ui'
import { useNuiField } from '../composables/useNuiField'

const {
  fieldset,
  ids,
  errorRef,
} = useNuiField()
</script>

<template>
  <component
    :is="fieldset || !ids.input ? 'span' : Label"
    v-if="'default' in $slots"
    :id="ids.input ? ids.error : undefined"
    :ref="errorRef"
    class="font-sans text-xs font-medium leading-none text-destructive-base dark:text-destructive-light"
  >
    <slot />
  </component>
</template>
