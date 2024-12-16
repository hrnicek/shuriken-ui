<script setup lang="ts">
definePageMeta({
  title: 'BaseTag',
  icon: 'system-uicons:tags',
  description: 'Tag component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTag">
      <NuiPreview title="Size" description="Tag component sizes">
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="md" size="sm">
            Label
          </BaseTag>
          <BaseTag rounded="md" size="md">
            Label
          </BaseTag>
          <BaseTag rounded="md" size="lg">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Tag component radiuses">
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="none">
            Label
          </BaseTag>
          <BaseTag rounded="sm">
            Label
          </BaseTag>
          <BaseTag rounded="md">
            Label
          </BaseTag>
          <BaseTag rounded="lg">
            Label
          </BaseTag>
          <BaseTag rounded="full">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: default high"
        description="Tag default high contrast"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag variant="default-high" rounded="full" size="sm">
            Label
          </BaseTag>
          <BaseTag variant="default-high" rounded="full" size="md">
            Label
          </BaseTag>
          <BaseTag variant="default-high" rounded="full" size="lg">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted low"
        description="Tag muted low contrast"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag variant="muted-low" rounded="full" size="sm">
            Label
          </BaseTag>
          <BaseTag variant="muted-low" rounded="full" size="md">
            Label
          </BaseTag>
          <BaseTag variant="muted-low" rounded="full" size="lg">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted high"
        description="Tag muted high contrast"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag variant="muted-high" rounded="full" size="sm">
            Label
          </BaseTag>
          <BaseTag variant="muted-high" rounded="full" size="md">
            Label
          </BaseTag>
          <BaseTag variant="muted-high" rounded="full" size="lg">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: primary"
        description="Tag primary variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag variant="primary" rounded="full" size="sm">
            Label
          </BaseTag>
          <BaseTag variant="primary" rounded="full" size="md">
            Label
          </BaseTag>
          <BaseTag variant="primary" rounded="full" size="lg">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: custom"
        description="Tag custom variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag variant="custom" class="bg-yellow-400/20 text-yellow-400 ring-1 ring-inset ring-yellow-400/30" rounded="full" size="sm">
            Label
          </BaseTag>
          <BaseTag variant="custom" class="bg-yellow-400/20 text-yellow-400 ring-1 ring-inset ring-yellow-400/30" rounded="full" size="md">
            Label
          </BaseTag>
          <BaseTag variant="custom" class="bg-yellow-400/20 text-yellow-400 ring-1 ring-inset ring-yellow-400/30" rounded="full" size="lg">
            Label
          </BaseTag>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
