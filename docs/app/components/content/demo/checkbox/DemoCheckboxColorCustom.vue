<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <div class="flex gap-x-8 p-4">
    <BaseCheckbox
      v-model="value"
      label="Option 1"
      variant="none"
      class="bg-green-500/10 dark:bg-green-500/20 border-1 border-muted-300 dark:border-muted-700 text-green-700 dark:text-green-400"
    />
    <BaseCheckbox
      v-model="value"
      label="Option 2"
      variant="none"
      class="bg-red-500/10 dark:bg-red-500/20 border-1 border-muted-300 dark:border-muted-700 text-red-700 dark:text-red-400"
    />
    <BaseCheckbox
      v-model="value"
      label="Option 3"
      variant="none"
      class="bg-cyan-500/10 dark:bg-cyan-500/20 border-1 border-muted-300 dark:border-muted-700 text-cyan-700 dark:text-cyan-400"
    />
    <BaseCheckbox
      v-model="value"
      label="Option 4"
      variant="none"
      class="bg-amber-500/10 dark:bg-amber-500/20 border-1 border-muted-300 dark:border-muted-700 text-amber-700 dark:text-amber-400"
    />
  </div>
</template>
