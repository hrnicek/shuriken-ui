<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="w-full grid md:grid-cols-2 max-w-xl gap-4">
          <BaseTextarea
            v-model="value"
            variant="default"
            rounded="md"
            placeholder="Ex: Write a message..."
          />
          <BaseTextarea
            v-model="value"
            variant="muted"
            rounded="md"
            placeholder="Ex: Write a message..."
          />
        </div>
      </div>
    </div>
  </div>
</template>
