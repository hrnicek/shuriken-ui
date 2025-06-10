<script setup lang="ts">
import { useInertiaConfig } from '../composables/useInertiaConfig'
import { useNuiField } from '../composables/useNuiField'

const { required } = useNuiField()

const iconRequired = useInertiaConfig('icon', 'required')
</script>

<template>
  <span v-if="required" class="select-none text-destructive-base dark:text-destructive-light">
    <Icon :name="iconRequired" class="size-3 inline-block align-text-top" />
  </span>
</template>
