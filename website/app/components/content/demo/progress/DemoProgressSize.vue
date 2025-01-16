<script setup lang="ts">
const progress = ref(25)
</script>

<template>
  <div class="max-w-sm p-4">
    <BaseProgress
      v-model="progress"
      title="Default progress bar"
      size="md"
      variant="primary"
    />
  </div>
</template>
