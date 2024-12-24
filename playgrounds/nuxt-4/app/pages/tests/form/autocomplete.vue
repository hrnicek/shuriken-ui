<script setup lang="ts">
definePageMeta({
  title: 'BaseAutocomplete',
  icon: 'system-uicons:zoom-reset',
  description: 'Autocomplete component',
  section: 'form',
})

interface Hobby {
  id: number
  disabled?: boolean
  name: string
  text: string
  icon: string
}

interface Person {
  id: number
  disabled?: boolean
  name: string
  text: string
  media: string
}

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
const hobbies: Hobby[] = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    disabled: true,
    text: 'Wines & fine drinks',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    disabled: true,
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
  },
]

const multipleValue = ref<string[]>(['Nuxt', 'Vue.js'])
const multiplePerson = ref<Person[]>([persons[1]!])

const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
  seventh: undefined,
  eighth: '',
  ninth: 'Nuxt',
  tenth: '',
  eleventh: '',
  twelfth: '',
  thirteenth: '',
})

</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseAutocomplete">
      <NuiPreview title="Radius" description="Autocomplete component radiuses">
        <div class="grid grid-cols-3 gap-4 w-full max-w-3xl">
          <BaseAutocomplete
            rounded="none"
            placeholder="Ex: nuxt"
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>

          <BaseAutocomplete
            v-model="fields.second"
            rounded="sm"
            placeholder="Ex: nuxt"
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>

          <BaseAutocomplete
            v-model="fields.third"
            rounded="md"
            placeholder="Ex: nuxt"
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>

          <BaseAutocomplete
            v-model="fields.fourth"
            rounded="lg"
            placeholder="Ex: nuxt"
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>

          <BaseAutocomplete
            v-model="fields.fifth"
            rounded="full"
            placeholder="Ex: nuxt"
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Autocomplete component sizes">
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.first"
              size="sm"
              placeholder="Ex: nuxt"
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.second"
              size="md"
              placeholder="Ex: nuxt"
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.third"
              size="lg"
              placeholder="Ex: nuxt"
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.third"
              size="xl"
              placeholder="Ex: nuxt"
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variants"
        description="Autocomplete component default contrast"
      >
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.first"
              variant="default"
              size="md"
              placeholder="Ex: nuxt"
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.second"
              variant="muted"
              size="md"
              placeholder="Ex: nuxt"
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Autocomplete component default contrast"
      >
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
          <BaseAutocomplete
            v-model="fields.first"
            variant="default"
            size="md"
            placeholder="Ex: nuxt"
          >
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
          <BaseAutocomplete
            v-model="multipleValue"
            variant="muted"
            size="md"
            placeholder="Ex: nuxt"
            multiple
          >
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
        </div>
      </NuiPreview>

      <NuiPreview title="Presets" description="Autocomplete component presets">
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
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
      </NuiPreview>

      <NuiPreview title="Bindings" description="Autocomplete component bindings">
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
          <BaseAutocomplete placeholder="Inline ..">
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
        </div>
      </NuiPreview>

      <NuiPreview title="Spacing" description="Menu spacing options">
        <div class="grid grid-cols-4 gap-4 w-full max-w-4xl">
          <BaseAutocomplete placeholder="Default spacing">
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
          <BaseAutocomplete placeholder="With more spacing" :bindings="{ content: { sideOffset: 10 } }">
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
          <BaseAutocomplete placeholder="disabled" disabled>
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Disabled"
        description="Autocomplete component disabled"
      >
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.first"
              size="md"
              placeholder="Ex: nuxt"
              disabled
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.second"
              size="md"
              variant="muted"
              placeholder="Ex: nuxt"
              disabled
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Clearable"
        description="Autocomplete component clearable"
      >
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.first"
              size="md"
              placeholder="Ex: nuxt"
              clearable
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.second"
              size="md"
              variant="muted"
              placeholder="Ex: nuxt"
              clearable
            >
              <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
                {{ item }}
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple: Strings"
        description="Autocomplete component multiple selection"
      >
        <div class="max-w-sm">
          <BaseAutocomplete
            v-model="multipleValue"
            rounded="md"
            placeholder="Search..."
            multiple
          >
            <BaseAutocompleteItem v-for="item in frameworks" :key="item" :value="item">
              {{ item }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple: Objects using By"
        description="Autocomplete component multiple object selection"
      >
        <div class="max-w-sm">
          <BaseAutocomplete
            v-model="multiplePerson"
            by="id"
            rounded="md"
            icon="lucide:list-filter"
            placeholder="Search..."
            multiple
          >
            <BaseAutocompleteItem v-for="item in persons" :key="item.id" :value="item">
              {{ item.name }}
            </BaseAutocompleteItem>
          </BaseAutocomplete>
        </div>
      </NuiPreview>

      <NuiPreview title="Allow create" description="Allow to create new items">
        <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
          <BaseAutocomplete
            v-model="fields.thirteenth"
            allow-create
            placeholder="Allow create"
          />
          <BaseAutocomplete
            v-model="fields.thirteenth"
            allow-create
            hide-create-prompt
            variant="muted"
            placeholder="Hide create prompt"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
