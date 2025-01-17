<script setup lang="ts">
const frameworks = [
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]

const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Ruby',
  'Java',
  'C#',
  'PHP',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'Dart',
  'Scala',
  'Elixir',
  'Clojure',
]
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="grid md:grid-cols-2 max-w-lg gap-4">
          <BaseAutocomplete preset="popper" placeholder="popper">
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Frameworks
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
          </BaseAutocomplete>
          <BaseAutocomplete preset="inline" placeholder="Inline">
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Frameworks
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
            <BaseAutocompleteSeparator />
            <BaseAutocompleteGroup>
              <BaseAutocompleteLabel>
                Languages
              </BaseAutocompleteLabel>
              <BaseAutocompleteItem v-for="item in languages" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocompleteGroup>
          </BaseAutocomplete>
        </div>
      </div>
    </div>
  </div>
</template>
