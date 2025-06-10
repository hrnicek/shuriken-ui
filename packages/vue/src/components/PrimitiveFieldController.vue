<script setup lang="ts">
import { useNuiField } from '../composables/useNuiField'

const { inputAttrs, inputRef } = useNuiField()
</script>

<template>
  <slot v-bind="{ inputRef, inputAttrs }" />
</template>
