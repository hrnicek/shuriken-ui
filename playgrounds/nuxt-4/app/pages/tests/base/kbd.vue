<script setup lang="ts">
definePageMeta({
  title: 'BaseKbd',
  icon: 'system-uicons:browser',
  description: 'Kbd component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseKbd">
      <NuiPreview
        title="Variant: default-low"
        description="Kbd component default low contrast variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="sm"
            variant="default-low"
          >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="md"
            variant="default-low"
            >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="lg"
            variant="default-low"
            >
            ctrl
          </BaseKbd>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: default-high"
        description="Kbd component default high contrast variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="sm"
            variant="default-high"
          >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="md"
            variant="default-high"
            >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="lg"
            variant="default-high"
            >
            ctrl
          </BaseKbd>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted-low"
        description="Kbd component muted low contrast variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="sm"
            variant="muted-low"
          >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="md"
            variant="muted-low"
            >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="lg"
            variant="muted-low"
            >
            ctrl
          </BaseKbd>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted-high"
        description="Kbd component muted high contrast variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="sm"
            variant="muted-high"
          >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="md"
            variant="muted-high"
            >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="lg"
            variant="muted-high"
            >
            ctrl
          </BaseKbd>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
