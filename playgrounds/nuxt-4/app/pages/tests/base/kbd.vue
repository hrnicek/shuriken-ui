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
        title="Variant: default"
        description="Kbd component default variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="sm"
            variant="default"
          >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="md"
            variant="default"
            >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="lg"
            variant="default"
            >
            ctrl
          </BaseKbd>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted"
        description="Kbd component muted variant"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseKbd
            size="sm"
            variant="muted"
          >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="md"
            variant="muted"
            >
            ctrl
          </BaseKbd>
          <BaseKbd
            size="lg"
            variant="muted"
            >
            ctrl
          </BaseKbd>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
