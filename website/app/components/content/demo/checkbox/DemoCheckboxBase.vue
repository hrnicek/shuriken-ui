<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <div class="p-4">
    <BaseCheckbox
      v-model="value"
      label="Option 1"
      variant="default"
    />
  </div>
</template>
