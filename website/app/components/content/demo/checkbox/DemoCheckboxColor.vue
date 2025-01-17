<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <div class="flex gap-x-8 p-4">
    <BaseCheckbox
      v-model="value"
      label="Option 1"
      variant="default"
    />
    <BaseCheckbox
      v-model="value"
      label="Option 2"
      variant="primary"
    />
    <BaseCheckbox
      v-model="value"
      label="Option 3"
      variant="dark"
    />
  </div>
</template>
