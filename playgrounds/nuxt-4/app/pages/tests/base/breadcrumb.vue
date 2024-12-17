<script setup lang="ts">
definePageMeta({
  title: 'BaseBreadcrumb',
  icon: 'system-uicons:chain',
  description: 'Breadcrumb component',
  section: 'base',
})

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseBreadcrumb">
      <NuiPreview title="Variant: primary" description="Breadcrumb component primary variant">
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumb" variant="primary" />
        </div>
      </NuiPreview>

      <NuiPreview title="Variant: dark" description="Breadcrumb component dark variant">
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumb" variant="dark" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: slash"
        description="Breadcrumb component with slash separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumb">
            /
          </BaseBreadcrumb>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: chevron"
        description="Breadcrumb component with chevron separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumb">
            <Icon name="lucide:chevron-right" class="w-4 h-4" />
          </BaseBreadcrumb>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: arrow"
        description="Breadcrumb component with arrow separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumb">
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </BaseBreadcrumb>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
