<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
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
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="grid md:grid-cols-2 max-w-lg gap-4">
          <BaseAutocomplete
            v-model="fields.first"
            rounded="md"
            variant="default"
            placeholder="Ex: nuxt"
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
          <BaseAutocomplete
            v-model="fields.second"
            rounded="md"
            variant="muted"
            placeholder="Ex: nuxt"
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
        </div>
      </div>
    </div>
  </div>
</template>
