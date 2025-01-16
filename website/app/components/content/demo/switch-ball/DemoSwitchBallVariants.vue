<script setup lang="ts">
const ballValues = reactive({
  one: true,
  two: true,
  three: true,
})
</script>

<template>
  <div
    class="grid grid-cols-2 gap-6 md:max-w-2xl md:grid-cols-4 p-4"
  >
    <BaseSwitchBall
      v-model="ballValues.one"
      variant="default"
    >
      Default
    </BaseSwitchBall>
    <BaseSwitchBall
      v-model="ballValues.two"
      variant="primary"
    >
      Primary
    </BaseSwitchBall>
    <BaseSwitchBall
      id="dark"
      v-model="ballValues.three"
      variant="dark"
    >
      Dark
    </BaseSwitchBall>
  </div>
</template>
