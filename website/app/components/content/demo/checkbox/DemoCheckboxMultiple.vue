<script setup lang="ts">
const multipleValue = ref(['Option 1', 'Option 4'])
</script>

<template>
  <BaseCheckboxGroup v-model="multipleValue" class="p-4 grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox
      name="multiple-demo-1"
      label="Option 1"
      value="Option 1"
    />
    <BaseCheckbox
      name="multiple-demo-2"
      label="Option 2"
      value="Option 2"
    />
    <BaseCheckbox
      name="multiple-demo-3"
      label="Option 3"
      value="Option 3"
    />
    <BaseCheckbox
      name="multiple-demo-4"
      label="Option 4"
      value="Option 4"
    />
  </BaseCheckboxGroup>
</template>
