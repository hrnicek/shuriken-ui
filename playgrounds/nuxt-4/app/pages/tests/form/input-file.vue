<script setup lang="ts">
definePageMeta({
  title: 'BaseInputFile',
  icon: 'system-uicons:cloud-upload',
  description: 'Input file component',
  section: 'form',
})

const first = ref<FileList | null>(null)
const second = ref<FileList | null>(null)
const third = ref<FileList | null>(null)
const fourth = ref<FileList | null>(null)
const fifth = ref<FileList | null>(null)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseInputFile">
      <NuiPreview title="Radius" description="File inputs radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInputFile
            v-model="first"
            rounded="none"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="second"
            rounded="sm"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="third"
            rounded="md"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="fourth"
            rounded="lg"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="fifth"
            rounded="full"
            placeholder="Choose file"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Sizes" description="File inputs sizes">
        <div class="grid gap-6 md:max-w-5xl md:grid-cols-4">
          <BaseInputFile
            v-model="first"
            rounded="md"
            size="sm"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="second"
            rounded="md"
            size="md"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="third"
            rounded="md"
            size="lg"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="third"
            rounded="md"
            size="xl"
            placeholder="Choose file"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Variants" description="File inputs variants">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInputFile
            v-model="first"
            rounded="md"
            variant="default"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="second"
            rounded="md"
            variant="muted"
            placeholder="Choose file"
          />
          <BaseInputFile
            v-model="third"
            rounded="md"
            variant="primary"
            placeholder="Choose file"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
