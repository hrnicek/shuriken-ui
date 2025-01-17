<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="grid md:grid-cols-2 max-w-lg gap-4">
          <BaseInput
            v-model="value"
            variant="default"
            rounded="md"
            placeholder="Ex: username"
            aria-invalid="true"
          />
          <BaseInput
            v-model="value"
            variant="muted"
            rounded="md"
            placeholder="Ex: username"
            aria-invalid="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
