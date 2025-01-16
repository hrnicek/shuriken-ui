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
      variant="default"
    />
    <BaseRadio
      label="Option 2"
      value="Option 2"
      variant="primary"
    />
    <BaseRadio
      value="Option 3"
      label="Option 3"
      variant="dark"
    />
  </BaseRadioGroup>
</template>
