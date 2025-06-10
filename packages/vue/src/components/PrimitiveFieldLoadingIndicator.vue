<script setup lang="ts">
import { useInertiaConfig } from '../composables/useInertiaConfig'
import { useNuiField } from '../composables/useNuiField'

const { state } = useNuiField()

const iconSpiner = useInertiaConfig('icon', 'spiner')
</script>

<template>
  <div v-if="state === 'loading'" class="flex pointer-events-none text-field-loading">
    <slot>
      <Icon :name="iconSpiner" class="size-4" />
    </slot>
  </div>
</template>
