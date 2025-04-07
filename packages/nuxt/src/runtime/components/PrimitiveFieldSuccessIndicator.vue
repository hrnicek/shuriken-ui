<script setup lang="ts">
import { useNuiConfig } from '../composables/useNuiConfig'
import { useNuiField } from '../composables/useNuiField'

const { state } = useNuiField()

const iconCheck = useNuiConfig('icon', 'check')
</script>

<template>
  <div v-if="state === 'success'" class="flex pointer-events-none text-success-base dark:text-success-light">
    <slot>
      <Icon :name="iconCheck" class="size-4" />
    </slot>
  </div>
</template>
