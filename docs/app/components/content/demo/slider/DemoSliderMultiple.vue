<script setup lang="ts">
const range = ref([29, 62, 77])
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="max-w-sm space-y-4">
        <BaseSlider v-model="range" variant="dark" />
      </div>
    </div>
  </div>
</template>
