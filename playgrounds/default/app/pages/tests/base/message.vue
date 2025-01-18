<script setup lang="ts">
definePageMeta({
  title: 'BaseMessage',
  icon: 'system-uicons:postcard',
  description: 'Message component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseMessage">
      <NuiPreview title="Color" description="Message component colors">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage variant="success">
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info">
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning">
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive">
            A destructive message.
          </BaseMessage>
          <BaseMessage variant="default">
            A default message.
          </BaseMessage>
          <BaseMessage variant="muted">
            A muted message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Message component icons">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage variant="success" icon="carbon:checkmark-filled">
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info" icon="akar-icons:info-fill">
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning" icon="ci:warning">
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive" icon="ph:warning-octagon-fill">
            A destructive message.
          </BaseMessage>
          <BaseMessage variant="default" icon="mingcute:avalanche-avax-fill">
            A default message.
          </BaseMessage>
          <BaseMessage variant="muted" icon="mingcute:desk-lamp-fill">
            A muted message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage variant="success" icon="carbon:checkmark-filled" rounded="sm">
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info" icon="akar-icons:info-fill" rounded="md">
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning" icon="ci:warning" rounded="lg">
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive" icon="ph:warning-octagon-fill" rounded="full">
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage variant="success" icon="carbon:checkmark-filled" rounded="sm" closable>
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info" icon="akar-icons:info-fill" rounded="md" closable>
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning" icon="ci:warning" rounded="lg" closable>
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive" icon="ph:warning-octagon-fill" rounded="full" closable>
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
