<script setup lang="ts">
const value = ref('Option 1')
</script>

<template>
  <BaseRadioGroup
    v-model="value"
    name="radio_base"
    class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4 p-4"
  >
    <BaseRadio
      label="Option 1"
      value="Option 1"
      variant="none"
      class="bg-green-500/10 dark:bg-green-500/20 border-1 border-muted-300 dark:border-muted-700 text-green-700 dark:text-green-400"
    />
    <BaseRadio
      label="Option 2"
      value="Option 2"
      variant="none"
      class="bg-red-500/10 dark:bg-red-500/20 border-1 border-muted-300 dark:border-muted-700 text-red-700 dark:text-red-400"
    />
    <BaseRadio
      value="Option 3"
      label="Option 3"
      variant="none"
      class="bg-cyan-500/10 dark:bg-cyan-500/20 border-1 border-muted-300 dark:border-muted-700 text-cyan-700 dark:text-cyan-400"
    />
    <BaseRadio
      value="Option 4"
      label="Option 4"
      variant="none"
      class="bg-amber-500/10 dark:bg-amber-500/20 border-1 border-muted-300 dark:border-muted-700 text-amber-700 dark:text-amber-400"
    />
  </BaseRadioGroup>
</template>
