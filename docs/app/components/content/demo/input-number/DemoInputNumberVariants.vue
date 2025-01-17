<script setup lang="ts">
const fields = reactive({
  first: undefined as number | undefined,
  second: undefined as number | undefined,
})
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInputNumber
            v-model="fields.first"
            variant="default"
            rounded="md"
            placeholder="Your rating"
          />

          <BaseInputNumber
            v-model="fields.second"
            variant="muted"
            rounded="md"
            placeholder="Priority"
          />
        </div>
      </div>
    </div>
  </div>
</template>
