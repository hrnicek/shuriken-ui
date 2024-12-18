<script setup lang="ts">
definePageMeta({
  title: 'BaseButton',
  icon: 'system-uicons:duplicate-alt',
  description: 'Button component',
  section: 'base',
})

const loading = ref(true)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseButton">
      <NuiPreview title="Normal radius" description="Button component border radiuses for normal buttons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="default-low" rounded="none">
            Button
          </BaseButton>
          <BaseButton variant="default-low" rounded="sm">
            Button
          </BaseButton>
          <BaseButton variant="default-low" rounded="md">
            Button
          </BaseButton>
          <BaseButton variant="default-low" rounded="lg">
            Button
          </BaseButton>
          <BaseButton variant="default-low" rounded="full">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Normal size" description="Button component sizes for normal buttons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="default-low" size="sm" rounded="md">
            Button
          </BaseButton>
          <BaseButton variant="default-low" size="md" rounded="md">
            Button
          </BaseButton>
          <BaseButton variant="default-low" size="lg" rounded="md">
            Button
          </BaseButton>
          <BaseButton variant="default-low" size="xl" rounded="md">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Normal with icons" description="Normal buttons with icons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="default-low">
            <Icon name="lucide:moon" class="-ms-1 size-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton variant="default-low">
            <span>Button</span>
            <Icon name="lucide:arrow-right" class="me-1 size-4" />
          </BaseButton>
          <BaseButton variant="default-low">
            <Icon name="cib:envato" class="-ms-1 size-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton variant="default-low">
            <Icon name="fa:twitter" class="-ms-1 size-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton variant="default-low">
            <Icon name="ion:shapes" class="-ms-1 size-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton variant="default-low">
            <Icon name="ph:heart-duotone" class="-ms-1 size-4" />
            <span>Button</span>
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon radius" description="Button icon component radiuses">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButton variant="default-low" size="icon-md"  rounded="none">
            <Icon name="ph:moon-duotone" class="size-5" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="sm">
            <Icon name="ph:github-logo-duotone" class="size-5" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="lg">
            <Icon name="ph:alien-duotone" class="size-5" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="full">
            <Icon name="ph:heart-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon size" description="Button component sizes for icon buttons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="default-low" size="icon-sm" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-4" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-lg" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-6" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-xl" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-7" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: low contrast"
        description="Button component low contrast variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="default-low">
            This is a low contrast button
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: high contrast"
        description="Button component high contrast variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="default-high">
            This is a high contrast button
          </BaseButton>
          <BaseButton variant="default-high" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted low contrast"
        description="Button muted low contrast variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="muted-low">
            This is a muted low button
          </BaseButton>
          <BaseButton variant="muted-low" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: muted high contrast"
        description="Button muted high contrast variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="muted-high">
            This is a muted high button
          </BaseButton>
          <BaseButton variant="muted-high" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: ghost low contrast"
        description="Button ghost low contrast variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="ghost-low">
            This is a ghost low button
          </BaseButton>
          <BaseButton variant="ghost-low" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: ghost high contrast"
        description="Button ghost high contrast variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="ghost-high">
            This is a ghost high button
          </BaseButton>
          <BaseButton variant="ghost-high" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: link"
        description="Button link variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="link">
            This is a link button
          </BaseButton>
          <BaseButton variant="link" size="icon-md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="size-5" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: primary"
        description="Button component primary variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="primary">
            This is a primary button
          </BaseButton>
          <BaseButton variant="primary" size="icon-md" rounded="md">
            <Icon name="lucide:plus" class="size-4" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: dark"
        description="Button component dark variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="dark">
            This is a dark button
          </BaseButton>
          <BaseButton variant="dark" size="icon-md" rounded="md">
            <Icon name="lucide:plus" class="size-4" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: destructive"
        description="Button component destructive variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="destructive">
            This is a destructive button
          </BaseButton>
          <BaseButton variant="destructive" size="icon-md" rounded="md">
            <Icon name="lucide:trash-2" class="size-4" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: custom"
        description="Button component custom variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="custom" class="bg-primary-500/10 text-primary-600">
            This is a custom button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Chip" description="Button component with chip component">
        <div class="flex flex-wrap items-end gap-4">
          <BaseChip :offset="-5" pulse>
            <BaseButton variant="default-low" size="sm" rounded="md">
              Button
            </BaseButton>
          </BaseChip>
          <BaseChip :offset="-5" pulse>
            <BaseButton variant="default-low" size="md" rounded="md">
              Button
            </BaseButton>
          </BaseChip>
          <BaseChip :offset="-5" pulse>
            <BaseButton variant="default-low" size="lg" rounded="md">
              Button
            </BaseButton>
          </BaseChip>
          <BaseChip :offset="-5" pulse>
            <BaseButton variant="default-low" size="xl" rounded="md">
              Button
            </BaseButton>
          </BaseChip>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: loading"
        description="Button component in a loading state"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseSwitchBall v-model="loading" />
          <BaseButton :loading="loading" variant="default-low">
            Loading
          </BaseButton>
          <BaseButton :loading="loading" variant="muted-low">
            Loading
          </BaseButton>
          <BaseButton :loading="loading" variant="ghost-low">
            Loading
          </BaseButton>
          <BaseButton :loading="loading" variant="link">
            Loading
          </BaseButton>
          <BaseButton :loading="loading" variant="primary">
            Loading
          </BaseButton>
          <BaseButton :loading="loading" variant="dark">
            Loading
          </BaseButton>
          <BaseButton :loading="loading" variant="custom" class="bg-lime-500 font-medium text-muted-900">
            Loading
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Button component in a disabled state"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton disabled variant="default-low">
            Button
          </BaseButton>
          <BaseButton disabled variant="muted-low">
            Button
          </BaseButton>
          <BaseButton disabled variant="ghost-low">
            Button
          </BaseButton>
          <BaseButton disabled variant="link">
            Button
          </BaseButton>
          <BaseButton disabled variant="primary">
            Button
          </BaseButton>
          <BaseButton disabled variant="dark">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Close button" description="Buttons with a close icon">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButton variant="default-low" size="icon-md"  rounded="none">
            <Icon name="lucide:x" class="text-base" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="sm">
            <Icon name="lucide:x" class="text-base" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="md">
            <Icon name="lucide:x" class="text-base" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="lg">
            <Icon name="lucide:x" class="text-base" />
          </BaseButton>
          <BaseButton variant="default-low" size="icon-md"  rounded="full">
            <Icon name="lucide:x" class="text-base" />
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Button component inside a button group"
      >
        <BaseButton variant="default-low" rounded="none" class="border-e-0 rounded-s-md">
          <span>Edit</span>
        </BaseButton>
        <BaseButton variant="default-low" rounded="none" class="border-e-0">
          <span>View</span>
        </BaseButton>
        <BaseButton variant="primary" rounded="none" class="border-e-0">
          <span>Stash</span>
        </BaseButton>

        <BaseDropdown :classes="{ wrapper: 'inline-block' }" arrow>
          <template #button>
            <BaseButton variant="default-low" rounded="none" class="border-e-0">
              <span>Share</span>
            </BaseButton>
          </template>
          <BaseDropdownItem>test</BaseDropdownItem>
        </BaseDropdown>

        <BaseButton variant="default-low" rounded="none" class="rounded-e-md">
          <span>Share</span>
        </BaseButton>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
