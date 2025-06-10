<script setup lang="ts">
import { useInertiaConfig } from '../composables/useInertiaConfig'
import { useNuiField } from '../composables/useNuiField'

const { state } = useNuiField()

const iconAlert = useInertiaConfig('icon', 'alert')
</script>

<template>
  <div v-if="state === 'error'" class="flex pointer-events-none text-destructive-base dark:text-destructive-light">
    <slot>
      <Icon :name="iconAlert" class="size-4" />
    </slot>
  </div>
</template>
