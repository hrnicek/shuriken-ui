<script setup lang="ts">
definePageMeta({
  title: 'BaseSelect',
  icon: 'system-uicons:document-list',
  description: 'Select component',
  section: 'form',
})

const options = reactive({
  first: undefined,
  second: 'Batman',
  third: undefined,
  fourth: undefined,
  fifth: undefined,
})

const heros = [
  'Superman',
  'Batman',
  'Iron man',
  'Magneto',
  'Cyclops',
  'Wolverine',
  'Spiderman',
  'Hulk',
  'Thor',
  'Captain America',
  'Black Widow',
  'Doctor Strange',
  'Black Panther',
  'Ant-Man',
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Star-Lord',
  'Gamora',
  'Drax',
  'Rocket Raccoon',
  'Groot',
  'Nebula',
  'Mantis',
  'Yondu',
  'Hawkeye',
  'Quicksilver',
  'War Machine',
  'Nick Fury',
  'Loki',
  'Thanos',
  'Ultron',
  'Green Lantern',
  'Flash',
  'Aquaman',
  'Wonder Woman',
  'Shazam',
  'Green Arrow',
  'Martian Manhunter',
  'Hawkgirl',
  'Black Canary',
  'Zatanna',
  'Supergirl',
  'Batgirl',
  'Nightwing',
  'Red Hood',
  'Robin',
  'Catwoman',
  'Riddler',
  'Penguin',
  'Two-Face',
  'Harley Quinn',
  'Joker',
  'Lex Luthor',
  'Darkseid',
  'Brainiac',
  'Deathstroke',
  'Bane',
  'Ra\'s al Ghul',
  'Scarecrow',
  'Poison Ivy',
  'Mr. Freeze',
  'Clayface',
  'Killer Croc',
  'Man-Bat',
  'Hush',
  'Black Mask',
  'Deadshot',
  'Firefly',
  'Mad Hatter',
  'Solomon Grundy',
  'Ventriloquist',
  'Calendar Man',
  'Kite Man',
  'Polka-Dot Man',
  'Condiment King'
]


const items = [
  {
    value: 'superman',
    label: 'Superman',
  },
  {
    value: 'batman',
    label: 'Batman',
  },
  {
    value: 'spiderman',
    label: 'Spiderman',
  }
]
const item = ref(items[0])
</script>

<template>
  <div class="mb-42">
    <NuiPreviewContainer title="BaseSelect">
      <NuiPreview title="Select base" description="Select component radiuses">
        <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
          <BaseSelect
            v-model="options.first"
            rounded="none"
            placeholder="Select a hero"
            label="Rounded: none"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect v-model="options.first" rounded="sm" label="Rounded: sm" placeholder="Select a hero">
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            rounded="md"
            placeholder="Select a hero"
            label="Rounded: md"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            rounded="lg"
            placeholder="Select a hero"
            label="Rounded: lg"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            rounded="full"
            placeholder="Select a hero"
            label="Rounded: full"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>

      <NuiPreview title="Variants" description="Select component variants">
        <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
          <BaseSelect
            v-model="options.first"
            size="md"
            placeholder="Select a hero"
            variant="default"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            size="md"
            placeholder="Select a hero"
            variant="muted"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Presets" description="Select component preset">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            size="md"
            v-model="item"
            :by="(a, b) => {
              return a.value === b.value
            }"
            placeholder="aligned"
            preset="aligned"
          >
            <BaseSelectItem v-for="hero in items" :value="hero">
              {{ hero.label }}
            </BaseSelectItem>
          </BaseSelect>

          <BaseSelect
            size="md"
            placeholder="popper"
            preset="popper"
          >
            <BaseSelectItem v-for="hero in heros" :value="hero">
              {{ hero }}
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>

      <NuiPreview title="Sizes" description="Select component sizes">
        <div class="flex items-end gap-3 max-w-6xl">
          <BaseSelect
            v-model="options.first"
            size="sm"
            placeholder="Select a hero"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            size="md"
            placeholder="Select a hero"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            size="lg"
            placeholder="Select a hero"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            size="xl"
            placeholder="Select a hero"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>
      
      <NuiPreview title="Position" description="Select component radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            v-model="options.second"
            placeholder="Select a hero"
            label="Item aligned (default)"
            :bindings="{
              content: {
                position: 'item-aligned',
              }
            }"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>

          
          <BaseSelect
            v-model="options.second"
            placeholder="Select a hero"
            :bindings="{
              content: {
                position: 'popper',
                bodyLock: false,
              },
              portal: {
                disabled: true,
              },
            }"
          >
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectItem value="Iron man">
              Iron man
            </BaseSelectItem>
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Composition" description="Label, Separator and Group">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            v-model="options.third"
            placeholder="Select a hero"
          >
            <BaseSelectGroup>
              <BaseSelectLabel>
                Marvel
              </BaseSelectLabel>
              <BaseSelectItem value="Superman">
                Superman
              </BaseSelectItem>
              <BaseSelectItem value="Batman">
                Batman
              </BaseSelectItem>
            </BaseSelectGroup>
            <BaseSelectSeparator />
            <BaseSelectGroup>
              <BaseSelectLabel>
                DC
              </BaseSelectLabel>
              <BaseSelectItem value="Magneto">
                Magneto
              </BaseSelectItem>
              <BaseSelectItem value="Cyclops">
                Cyclops
              </BaseSelectItem>
            </BaseSelectGroup>

            
            <BaseSelectGroup>
              <BaseSelectLabel>
                Long list
              </BaseSelectLabel>
              <BaseSelectItem v-for="i in 50" :value="i">Option {{ i }}</BaseSelectItem>
            </BaseSelectGroup>
          </BaseSelect>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Multiple" description="Multiple select">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            v-model="options.fourth"
            placeholder="Select some heroes"
            multiple
          >
            <BaseSelectLabel>
              <span>Marvel</span>
            </BaseSelectLabel>
            <BaseSelectItem value="Superman">
              <div>Superman</div>
              <div class="text-xs opacity-50">Marvel</div>
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              <div>Batman</div>
              <div class="text-xs opacity-50">Marvel</div>
            </BaseSelectItem>
            <BaseSelectLabel>
              <div>DC</div>
            </BaseSelectLabel>
            <BaseSelectItem value="Magneto">
              <div  class="flex flex-col items-start gap-0 py-2">
                <div class="text-xs opacity-50">Marvel</div>
                <div>Magneto</div>
              </div>
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              <div>Cyclops</div>
              <div class="text-xs opacity-50">Marvel</div>
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Slots" description="Slots select">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            placeholder="Select some heroes"
          >
            <template #viewport-start>
              <BaseCard variant="muted">
                #viewport-start
              </BaseCard>
            </template>
            <template #viewport-end>
              <BaseCard variant="muted">
                #viewport-end
              </BaseCard>
            </template>
            <template #content-start>
              <BaseCard>
                #content-start
              </BaseCard>
            </template>
            <template #content-end>
              <BaseCard>
                #content-end
              </BaseCard>
            </template>

            <BaseSelectLabel>
              Marvel
            </BaseSelectLabel>
            <BaseSelectItem value="Superman">
              Superman
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              Batman
            </BaseSelectItem>
            <BaseSelectLabel>
              DC
            </BaseSelectLabel>
            
            <BaseSelectItem v-for="hero in heros" :value="hero">
              {{ hero }}
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>

    </NuiPreviewContainer>
  </div>
</template>
