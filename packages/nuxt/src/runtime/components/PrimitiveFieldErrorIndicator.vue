<script setup lang="ts">
import { useNuiConfig } from '../composables/useNuiConfig'
import { useNuiField } from '../composables/useNuiField'

const { state } = useNuiField()

const iconAlert = useNuiConfig('icon', 'alert')
</script>

<template>
  <div v-if="state === 'error'" class="flex pointer-events-none text-destructive-base dark:text-destructive-light">
    <slot>
      <Icon :name="iconAlert" class="size-4" />
    </slot>
  </div>
</template>
