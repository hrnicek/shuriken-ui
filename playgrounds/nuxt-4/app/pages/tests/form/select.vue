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
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
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
        </div>
      </NuiPreview>
      
      <NuiPreview title="Position" description="Select component radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            v-model="options.second"
            rounded="none"
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
            rounded="none"
            placeholder="Select a hero"
            label="Popper"
            :bindings="{
              content: {
                position: 'popper',
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

            <BaseSelectArrow />
          </BaseSelect>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Composition" description="Label, Separator and Group">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            v-model="options.third"
            rounded="none"
            placeholder="Select a hero"
            label="Item aligned (default)"
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
          </BaseSelect>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
