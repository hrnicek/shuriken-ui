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
          <BaseSnack label="React" variant="default-low" size="xs" />
          <BaseSnack label="Angular" variant="default-low" size="sm" />
          <BaseSnack label="Vue" variant="default-low" size="md" />
        </div>
      </NuiPreview>

      <NuiPreview title="Color: default" description="Snack component default">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="default-high" />
          <BaseSnack label="Angular" variant="default-high" />
          <BaseSnack label="Vue" variant="default-high" />
          <BaseSnack label="Html" variant="default-high" />
          <BaseSnack label="Python" variant="default-high" />
        </div>
      </NuiPreview>

      <NuiPreview title="Color: muted" description="Snack component muted">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="muted-high" />
          <BaseSnack label="Angular" variant="muted-high" />
          <BaseSnack label="Vue" variant="muted-high" />
          <BaseSnack label="Html" variant="muted-high" />
          <BaseSnack label="Python" variant="muted-high" />
        </div>
      </NuiPreview>

      <NuiPreview title="Icon: default" description="Snack component icons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="React"
            variant="default-high"
            size="xs"
            icon="logos:react"
          />
          <BaseSnack
            label="Angular"
            variant="default-high"
            size="sm"
            icon="logos:angular-icon"
          />
          <BaseSnack label="Vue" variant="default-high" size="md" icon="logos:vue" />
        </div>
      </NuiPreview>

      <NuiPreview title="Icon: muted" description="Snack component icons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack label="React" variant="muted-low" size="xs" icon="logos:react" />
          <BaseSnack
            label="Angular"
            variant="muted-low"
            size="sm"
            icon="logos:angular-icon"
          />
          <BaseSnack label="Vue" variant="muted-low" size="md" icon="logos:vue" />
        </div>
      </NuiPreview>

      <NuiPreview title="Image: default" description="Snack component images">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="Mike"
            variant="default-high"
            size="xs"
            image="https://tairo.cssninja.io/img/avatars/3.svg"
          />
          <BaseSnack
            label="Maya"
            variant="default-high"
            size="sm"
            image="https://tairo.cssninja.io/img/avatars/2.svg"
          />
          <BaseSnack
            label="John"
            variant="default-high"
            size="md"
            image="https://tairo.cssninja.io/img/avatars/11.svg"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Image: muted" description="Snack component images">
        <div class="flex flex-wrap items-end gap-4">
          <BaseSnack
            label="Mike"
            variant="muted-high"
            size="xs"
            image="https://tairo.cssninja.io/img/avatars/3.svg"
          />
          <BaseSnack
            label="Maya"
            variant="muted-high"
            size="sm"
            image="https://tairo.cssninja.io/img/avatars/2.svg"
          />
          <BaseSnack
            label="John"
            variant="muted-high"
            size="md"
            image="https://tairo.cssninja.io/img/avatars/11.svg"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
