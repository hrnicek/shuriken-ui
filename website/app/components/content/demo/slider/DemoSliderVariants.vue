<script setup lang="ts">
const range = ref([62])
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="max-w-sm space-y-4">
        <BaseSlider v-model="range" />
        <BaseSlider v-model="range" variant="primary" />
        <BaseSlider v-model="range" variant="dark" />
        <BaseSlider
          v-model="range"
          variant="none"
          class="text-pink-500"
          :classes="{
            tooltip: 'bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-pink-50',
            tooltipArrow: 'fill-pink-100 dark:fill-pink-900',
          }"
        />
      </div>
    </div>
  </div>
</template>
