<script setup lang="ts">
definePageMeta({
  title: 'BaseSnack',
  icon: 'system-uicons:gift',
  description: 'Snack component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseSnack">
      <NuiPreview title="Size" description="Snack component sizes">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="default" size="xs" />
          <BaseSnack label="Angular" variant="default" size="sm" />
          <BaseSnack label="Vue" variant="default" size="md" />
        </div>
      </NuiPreview>

      <NuiPreview title="Variant: default" description="Snack component default">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="default" />
          <BaseSnack label="Angular" variant="default" />
          <BaseSnack label="Vue" variant="default" />
          <BaseSnack label="Html" variant="default" />
          <BaseSnack label="Python" variant="default" />
        </div>
      </NuiPreview>

      <NuiPreview title="Variant: muted" description="Snack component muted">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="muted" />
          <BaseSnack label="Angular" variant="muted" />
          <BaseSnack label="Vue" variant="muted" />
          <BaseSnack label="Html" variant="muted" />
          <BaseSnack label="Python" variant="muted" />
        </div>
      </NuiPreview>

      <NuiPreview title="Variant: primary" description="Snack component primary">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="primary" />
          <BaseSnack label="Angular" variant="primary" />
          <BaseSnack label="Vue" variant="primary" />
          <BaseSnack label="Html" variant="primary" />
          <BaseSnack label="Python" variant="primary" />
        </div>
      </NuiPreview>

      <NuiPreview title="Variant: dark" description="Snack component dark">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="dark" />
          <BaseSnack label="Angular" variant="dark" />
          <BaseSnack label="Vue" variant="dark" />
          <BaseSnack label="Html" variant="dark" />
          <BaseSnack label="Python" variant="dark" />
        </div>
      </NuiPreview>

      <NuiPreview title="Variant: none" description="Snack component none">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="none" class="text-green-600 bg-green-500/10 ring-1 ring-green-600" />
          <BaseSnack label="Angular" variant="none" class="text-green-600 bg-green-500/10 ring-1 ring-green-600" />
          <BaseSnack label="Vue" variant="none" class="text-green-600 bg-green-500/10 ring-1 ring-green-600" />
          <BaseSnack label="Html" variant="none" class="text-green-600 bg-green-500/10 ring-1 ring-green-600" />
          <BaseSnack label="Python" variant="none" class="text-green-600 bg-green-500/10 ring-1 ring-green-600" />
        </div>
      </NuiPreview>

      <NuiPreview title="Icon: default" description="Snack component icons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="React"
            variant="default"
            size="xs"
            icon="logos:react"
          />
          <BaseSnack
            label="Angular"
            variant="default"
            size="sm"
            icon="logos:angular-icon"
          />
          <BaseSnack label="Vue" variant="default" size="md" icon="logos:vue" />
        </div>
      </NuiPreview>

      <NuiPreview title="Icon: muted" description="Snack component icons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="muted" size="xs" icon="logos:react" />
          <BaseSnack
            label="Angular"
            variant="muted"
            size="sm"
            icon="logos:angular-icon"
          />
          <BaseSnack label="Vue" variant="muted" size="md" icon="logos:vue" />
        </div>
      </NuiPreview>

      <NuiPreview title="Image: default" description="Snack component images">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="Mike"
            variant="default"
            size="xs"
            image="https://tairo.cssninja.io/img/avatars/3.svg"
          />
          <BaseSnack
            label="Maya"
            variant="default"
            size="sm"
            image="https://tairo.cssninja.io/img/avatars/2.svg"
          />
          <BaseSnack
            label="John"
            variant="default"
            size="md"
            image="https://tairo.cssninja.io/img/avatars/11.svg"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Image: muted" description="Snack component images">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="Mike"
            variant="muted"
            size="xs"
            image="https://tairo.cssninja.io/img/avatars/3.svg"
          />
          <BaseSnack
            label="Maya"
            variant="muted"
            size="sm"
            image="https://tairo.cssninja.io/img/avatars/2.svg"
          />
          <BaseSnack
            label="John"
            variant="muted"
            size="md"
            image="https://tairo.cssninja.io/img/avatars/11.svg"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
