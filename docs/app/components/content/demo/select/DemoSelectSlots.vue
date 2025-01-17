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
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-xs items-end gap-4">
          <BaseSelect
            placeholder="Select some heroes"
          >
            <template #viewport-start>
              <BaseCard variant="muted" class="p-1 font-sans text-sm font-medium">
                #viewport-start
              </BaseCard>
            </template>
            <template #viewport-end>
              <BaseCard variant="muted" class="p-1 font-sans text-sm font-medium">
                #viewport-end
              </BaseCard>
            </template>
            <template #content-start>
              <BaseCard class="p-1 font-sans text-sm font-medium">
                #content-start
              </BaseCard>
            </template>
            <template #content-end>
              <BaseCard class="p-1 font-sans text-sm font-medium">
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

            <BaseSelectItem v-for="hero in heros" :key="hero" :value="hero">
              {{ hero }}
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </div>
    </div>
  </div>
</template>
