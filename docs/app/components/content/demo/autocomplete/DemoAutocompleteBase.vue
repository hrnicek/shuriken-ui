<script setup lang="ts">
const fields = reactive({
  first: '',
})

const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="fields.first"
          rounded="md"
          placeholder="Ex: nuxt"
        >
          <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
            {{ item }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>
