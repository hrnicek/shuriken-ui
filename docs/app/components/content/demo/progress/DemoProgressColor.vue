<script setup lang="ts">
const progress = ref(76)
</script>

<template>
  <div class="max-w-sm p-4">
    <BaseProgress
      v-model="progress"
      title="Custom progress bar"
      size="sm"
      variant="none"
      class="bg-muted-200 dark:bg-muted-900 *:first:bg-yellow-400"
    />
  </div>
</template>
