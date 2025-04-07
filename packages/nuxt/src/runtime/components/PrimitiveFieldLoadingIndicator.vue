<script setup lang="ts">
import { useNuiConfig } from '../composables/useNuiConfig'
import { useNuiField } from '../composables/useNuiField'

const { state } = useNuiField()

const iconSpiner = useNuiConfig('icon', 'spiner')
</script>

<template>
  <div v-if="state === 'loading'" class="flex pointer-events-none text-field-loading">
    <slot>
      <Icon :name="iconSpiner" class="size-4" />
    </slot>
  </div>
</template>
