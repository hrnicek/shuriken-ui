<script setup lang="ts">
const value = true
</script>

<template>
  <div class="flex items-center p-4">
    <BaseSwitchThin
      v-model="value"
      label="Label"
      variant="dark"
    />
  </div>
</template>
