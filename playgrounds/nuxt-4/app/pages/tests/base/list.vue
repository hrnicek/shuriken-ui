<script setup lang="ts">
definePageMeta({
  title: 'BaseList',
  icon: 'system-uicons:list',
  description: 'List component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseList">
      <NuiPreview title="Unordered" description="List component unordered">
        <BaseList class="ps-4">
          <li>Finish project UX</li>

          <li>Meet with Andy at 3:00pm</li>

          <li>Get groceries for Anna</li>

          <li>Pay water bill</li>
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Ordered" description="List component ordered">
        <BaseList ordered class="ps-4">
          <li>Finish project UX</li>

          <li>Meet with Andy at 3:00pm</li>

          <li>Get groceries for Anna</li>

          <li>Pay water bill</li>
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Subtitle" description="List component subtitle">
        <BaseList>
          <BaseListItem
            title="Finish project UX"
            subtitle="Close resubing pending tasks"
          />
          <BaseListItem
            title="Meet with Andy at 3:00pm"
            subtitle="Meeting about next project steps"
          />
          <BaseListItem
            title="Get groceries for Anna"
            subtitle="In preparation of next Friday's party"
          />
          <BaseListItem
            title="Pay water bill"
            subtitle="Bill must be paid before next Tuesday"
          />
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Icon" description="List component icon">
        <BaseList>
          <BaseListItem
            title="Finish project UX"
            subtitle="Close resubing pending tasks"
          >
            <Icon
              name="solar:document-add-linear"
              class="text-2xl text-muted-400 dark:text-muted-500"
            />
          </BaseListItem>
          <BaseListItem
            title="Meet with Andy at 3:00pm"
            subtitle="Meeting about next project steps"
          >
            <Icon name="solar:map-point-linear" class="text-2xl text-muted-400 dark:text-muted-500" />
          </BaseListItem>
          <BaseListItem
            title="Get groceries for Anna"
            subtitle="In preparation of next Friday's party"
          >
            <Icon name="solar:cart-3-linear" class="text-2xl text-muted-400 dark:text-muted-500" />
          </BaseListItem>
          <BaseListItem
            title="Pay power bill"
            subtitle="Bill must be paid before next Tuesday"
          >
            <Icon name="solar:bolt-linear" class="text-2xl text-muted-400 dark:text-muted-500" />
          </BaseListItem>
        </BaseList>
      </NuiPreview>

      <NuiPreview title="Avatar" description="List component avatar">
        <BaseList>
          <BaseListItem
            title="Finish project UX"
            subtitle="Close resubing pending tasks"
          >
            <BaseAvatar size="xs" src="https://tairo.cssninja.io/img/avatars/10.svg" />
          </BaseListItem>
          <BaseListItem
            title="Meet with Andy at 3:00pm"
            subtitle="Meeting about next project steps"
          >
            <BaseAvatar size="xs" src="https://tairo.cssninja.io/img/avatars/25.svg" />
          </BaseListItem>
          <BaseListItem
            title="Get groceries for Anna"
            subtitle="In preparation of next Friday's party"
          >
            <BaseAvatar size="xs" src="https://tairo.cssninja.io/img/avatars/15.svg" />
          </BaseListItem>
          <BaseListItem
            title="Pay power bill"
            subtitle="Bill must be paid before next Tuesday"
          >
            <BaseAvatar size="xs" src="https://tairo.cssninja.io/img/avatars/4.svg" />
          </BaseListItem>
        </BaseList>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
