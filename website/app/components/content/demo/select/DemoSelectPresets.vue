<script setup lang="ts">
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
  'Condiment King',
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
  },
]
const item = ref(items[0])
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-md flex-wrap items-end gap-3">
          <div class="flex-1">
            <BaseSelect
              v-model="item"
              size="md"
              :by="(a, b) => {
                return a.value === b.value
              }"
              placeholder="aligned"
              preset="aligned"
            >
              <BaseSelectItem v-for="hero in items" :key="hero.label" :value="hero">
                {{ hero.label }}
              </BaseSelectItem>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              size="md"
              placeholder="popper"
              preset="popper"
            >
              <BaseSelectItem v-for="hero in heros" :key="hero" :value="hero">
                {{ hero }}
              </BaseSelectItem>
            </BaseSelect>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
