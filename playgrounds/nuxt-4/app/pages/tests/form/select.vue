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

            <BaseSelectArrow />
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
            <BaseSelectItem value="Magneto">
              Magneto
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              Cyclops
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
