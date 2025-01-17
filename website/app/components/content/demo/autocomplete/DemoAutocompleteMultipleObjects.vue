<script setup lang="ts">
interface Person {
  id: number
  disabled?: boolean
  name: string
  text: string
  media: string
}

const persons: Person[] = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: 'https://tairo.cssninja.io/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: 'https://tairo.cssninja.io/img/avatars/16.svg',
  },
  {
    id: 3,
    disabled: true,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: 'https://tairo.cssninja.io/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: 'https://tairo.cssninja.io/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: 'https://tairo.cssninja.io/img/avatars/2.svg',
  },
]
const multiplePerson = ref<Person[]>([persons[1]!])
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-xs">
        <BaseAutocomplete
          v-model="multiplePerson"
          by="id"
          rounded="md"
          placeholder="Search..."
          multiple
        >
          <BaseAutocompleteItem v-for="item in persons" :key="item.id" :value="item">
            {{ item.name }}
          </BaseAutocompleteItem>
        </BaseAutocomplete>
      </div>
    </div>
  </div>
</template>
