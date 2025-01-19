<script setup lang="ts">
import { useNuiConfig } from '../composables/useNuiConfig'
import { useNuiField } from '../composables/useNuiField'

const { required } = useNuiField()

const iconRequired = useNuiConfig('icon', 'required')
</script>

<template>
  <span v-if="required" class="select-none text-destructive-base dark:text-destructive-light">
    <Icon :name="iconRequired" class="size-3 inline-block align-text-top" />
  </span>
</template>
