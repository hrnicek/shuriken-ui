<script setup lang="ts">
definePageMeta({
  title: 'BaseIconBox',
  icon: 'system-uicons:nut',
  description: 'Icon box component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseIconBox">
      <NuiPreview
        title="Sizes"
        description="Icon box component sizes"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="h-3 w-3" />
          </BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="h-4 w-4" />
          </BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="h-6 w-6" />
          </BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="h-7 w-7" />
          </BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="h-8 w-8" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: default"
        description="Icon box component default variant"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            variant="default"
            size="md"
            rounded="none"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="default"
            size="md"
            rounded="sm"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="default"
            size="md"
            rounded="md"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="default"
            size="md"
            rounded="lg"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="default"
            size="md"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted"
        description="Icon box component muted variant"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            variant="muted"
            size="md"
            rounded="none"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="muted"
            size="md"
            rounded="sm"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="muted"
            size="md"
            rounded="md"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="muted"
            size="md"
            rounded="lg"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="muted"
            size="md"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: primary"
        description="Icon box component primary variant"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            variant="primary"
            size="md"
            rounded="none"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="primary"
            size="md"
            rounded="sm"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="primary"
            size="md"
            rounded="md"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="primary"
            size="md"
            rounded="lg"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="primary"
            size="md"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: dark"
        description="Icon box component dark variant"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            variant="dark"
            size="md"
            rounded="none"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="dark"
            size="md"
            rounded="sm"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="dark"
            size="md"
            rounded="md"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="dark"
            size="md"
            rounded="lg"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="dark"
            size="md"
            rounded="full"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Masks"
        description="Icon box component masks"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            variant="none"
            size="md"
            rounded="none"
            mask="hex"
            class="bg-violet-500/20 text-violet-600"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="none"
            size="md"
            rounded="none"
            mask="hexed"
            class="bg-sky-500/20 text-sky-600"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="none"
            size="md"
            rounded="none"
            mask="deca"
            class="bg-yellow-400/20 text-yellow-600"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="none"
            size="md"
            rounded="none"
            mask="diamond"
            class="bg-rose-500/20 text-rose-600"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
          <BaseIconBox
            variant="none"
            size="md"
            rounded="none"
            mask="blob"
            class="bg-green-500/20 text-green-600"
          >
            <Icon name="ph:nut-duotone" class="text-lg" />
          </BaseIconBox>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
