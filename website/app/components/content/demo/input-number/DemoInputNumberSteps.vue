<script setup lang="ts">
const fields = reactive({
  first: 0.15,
  second: 1.5,
  third: 1.542312,
  fourth: 1024,
})
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInputNumber
            v-model="fields.first"
            rounded="md"
            placeholder="Temperature (°C)"
            :min="-20"
            :max="20"
            :step="0.05"
          />

          <BaseInputNumber
            v-model="fields.second"
            rounded="md"
            placeholder="Temperature (°F)"
            :min="0"
            :step="0.5"
          />

          <BaseInputNumber
            v-model="fields.third"
            rounded="md"
            placeholder="BTC"
            :min="0"
            :step="0.000001"
          />

          <BaseInputNumber
            v-model="fields.fourth"
            rounded="md"
            placeholder="Bytes"
            :min="0"
            :step="1024"
          />
        </div>
      </div>
    </div>
  </div>
</template>
