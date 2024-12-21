<script setup lang="ts">
definePageMeta({
  title: 'Icons',
  icon: 'system-uicons:diamond',
  description: 'SVG icons',
  section: 'authority',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="Icons">
      <NuiPreview title="Nui Icons" description="Custom iconify icons set">
        <div class="flex flex-wrap items-end gap-4">
          <Icon name="nui-icon:spiner-thin" class="text-2xl text-primary-500" />
          <Icon name="nui-icon:spiner" class="text-2xl text-primary-500" />
          <Icon name="nui-icon:spiner-bold" class="text-2xl text-primary-500" />
          <Icon name="nui-icon:sun" class="text-2xl text-amber-500" />
          <Icon name="nui-icon:moon" class="text-2xl text-amber-500" />
          <Icon name="nui-icon:screen" class="text-2xl text-primary-500" />
          <Icon name="nui-icon:screen-duotone" class="text-2xl text-primary-500" />
          <Icon name="nui-icon:screen-fill" class="text-2xl text-primary-500" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
