<script setup lang="ts">
const thinValues = reactive({
  one: true,
  two: true,
  three: true,
})
</script>

<template>
  <div
    class="grid grid-cols-2 gap-6 md:max-w-2xl md:grid-cols-4 p-4"
  >
    <BaseSwitchThin
      v-model="thinValues.one"
      variant="default"
    >
      Default
    </BaseSwitchThin>
    <BaseSwitchThin
      v-model="thinValues.two"
      variant="primary"
    >
      Primary
    </BaseSwitchThin>
    <BaseSwitchThin
      id="dark"
      v-model="thinValues.three"
      variant="dark"
    >
      Dark
    </BaseSwitchThin>
  </div>
</template>
