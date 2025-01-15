<script setup lang="ts">
definePageMeta({
  title: 'BaseSlider',
  icon: 'system-uicons:record',
  description: 'Slider component',
  section: 'form',
})

const valueRange = ref([35, 65])
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseSlider">
      <NuiPreview title="Controlled" description="Controlled and uncontrollable sliders components">
        <div class="max-w-sm space-y-4">
          <BaseSlider variant="dark" :model-value="[42]" />
          <BaseSlider variant="dark" :default-value="[42]" />
          <BaseSlider variant="dark" v-model="valueRange" />
        </div>
      </NuiPreview>
      <NuiPreview title="Variants" description="Controlled and uncontrollable sliders components">
        <div class="max-w-sm space-y-4">
          <BaseSlider :default-value="[42]" />
          <BaseSlider variant="primary" :default-value="[42]" />
          <BaseSlider variant="dark" :default-value="[42]" />
          <BaseSlider 
            variant="none" 
            :default-value="[42]" 
            class="text-pink-500"
            :classes="{ 
              tooltip: 'bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-pink-50', 
              tooltipArrow: 'fill-pink-100 dark:fill-pink-900',
            }" 
          />
          
          <BaseSlider :default-value="[42]" disabled />
          <BaseSlider variant="primary" :model-value="[42]" disabled />
          <BaseSlider variant="dark" :model-value="[42]" disabled />
          <BaseSlider variant="none" class="text-pink-500" :model-value="[42]" disabled />
        </div>
      </NuiPreview>
      <NuiPreview title="Vertical" description="Controlled and uncontrollable sliders components">
        <div class="max-w-sm flex h-[180px] gap-6">
          <BaseSlider variant="dark" orientation="vertical" :default-value="[42]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[42]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
          <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
        </div>
      </NuiPreview>

      <NuiPreview title="Controlled" description="Controlled and uncontrollable sliders components">
        <div class="max-w-sm space-y-4">
          <BaseSlider variant="dark"
            :default-value="[40]"
            :min="10"
            :max="60"
            :step="10"
          />
          <BaseSlider variant="dark"
            :default-value="[30, 40]"
            :min="10"
            :max="60"
            :step="2"
            :min-steps-between-thumbs="5"
            v-slot="{ value }"
          >
            {{ value }}%
          </BaseSlider>
        </div>
      </NuiPreview>

      
    </NuiPreviewContainer>
  </div>
</template>
