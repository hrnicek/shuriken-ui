<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
})
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="flex max-w-3xl flex-wrap items-end gap-3">
        <div class="flex-1">
          <BaseInputFile
            v-model="fields.first"
            size="sm"
            rounded="md"
            placeholder="Choose file"
          />
        </div>

        <div class="flex-1">
          <BaseInputFile
            v-model="fields.second"
            rounded="md"
            size="md"
            placeholder="Choose file"
          />
        </div>

        <div class="flex-1">
          <BaseInputFile
            v-model="fields.third"
            rounded="md"
            size="lg"
            placeholder="Choose file"
          />
        </div>
      </div>
    </div>
  </div>
</template>
