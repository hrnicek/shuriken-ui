<script setup lang="ts">
definePageMeta({
  title: 'BaseInput',
  icon: 'system-uicons:calendar-move',
  description: 'Input component',
  section: 'form',
})

const fieldsRounded = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
})

const amount = ref<number | undefined>(undefined)
const taxes = ref('With taxes')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseInput">
      <NuiPreview title="Radius" description="Inputs radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInput
            v-model="fieldsRounded.first"
            rounded="none"
            placeholder="Rounded: none"
          />
          <BaseInput
            v-model="fieldsRounded.second"
            rounded="sm"
            placeholder="Rounded: sm"
          />
          <BaseInput
            v-model="fieldsRounded.third"
            rounded="md"
            placeholder="Rounded: md"
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            rounded="lg"
            placeholder="Rounded: lg"
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            rounded="full"
            placeholder="Rounded: full"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Input component sizes">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="sm"
              rounded="md"
              placeholder="Size: sm"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              placeholder="Size: md"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="lg"
              rounded="md"
              placeholder="Size: lg"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="xl"
              rounded="md"
              placeholder="Size: xl"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variants"
        description="Input component variants"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-2xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              variant="default"
              size="md"
              rounded="md"
              label="Size: sm"
              placeholder="Default variant"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              variant="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Muted variant"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Input component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-2xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="md"
              rounded="md"
              placeholder="Error"
              aria-invalid="true"
              required
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              variant="muted"
              placeholder="Error"
              aria-invalid="true"
              required
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Input component disabled state">
        <div class="flex flex-wrap items-end gap-3 max-w-2xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="md"
              rounded="md"
              placeholder="Disabled"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              variant="muted"
              placeholder="Disabled"
              disabled
            />
          </div>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
