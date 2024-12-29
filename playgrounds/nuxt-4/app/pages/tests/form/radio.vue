<script setup lang="ts">
definePageMeta({
  title: 'BaseRadio',
  icon: 'system-uicons:record',
  description: 'Radio component',
  section: 'form',
})

const value = ref('primary')
const customValue = ref('pink')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseRadio">
      <NuiPreview title="Variants" description="Radio component variants">
        <BaseRadioGroup v-model="value" name="radio_base" class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseRadio
            label="Default"
            variant="default"
          />
          <BaseRadio
            label="Primary"
            value="primary"
            variant="primary"
          />
          <BaseRadio
            value="muted"
            label="Dark"
            variant="dark"
          />
        </BaseRadioGroup >
      </NuiPreview>

      <NuiPreview title="Custom" description="Radio component custom colors">
        <BaseRadioGroup v-model="customValue" name="radio_colors" class="grid grid-cols-2 gap-6 md:max-w-xl md:grid-cols-4">
          <BaseRadio
            label="Custom color"
            value="one"
            variant="none"
            class="bg-green-500/10 dark:bg-green-500/20 border-1 border-muted-300 dark:border-muted-700 text-green-700 dark:text-green-400"
          />
          <BaseRadio
            label="Custom color"
            value="two"
            variant="none"
            class="bg-red-500/10 dark:bg-red-500/20 border-1 border-muted-300 dark:border-muted-700 text-red-700 dark:text-red-400"
          />
          <BaseRadio
            label="Custom color"
            value="three"
            variant="none"
            class="bg-cyan-500/10 dark:bg-cyan-500/20 border-1 border-muted-300 dark:border-muted-700 text-cyan-700 dark:text-cyan-400"
          />
          <BaseRadio
            value="Custom color"
            label="four"
            variant="none"
            class="bg-amber-500/10 dark:bg-amber-500/20 border-1 border-muted-300 dark:border-muted-700 text-amber-700 dark:text-amber-400"
          />
        </BaseRadioGroup>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
