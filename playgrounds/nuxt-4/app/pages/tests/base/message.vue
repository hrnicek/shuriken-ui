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
          <BaseMessage variant="success-high">
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info-high">
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning-high">
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive-high">
            A destructive message.
          </BaseMessage>
          <BaseMessage variant="default-high">
            A default message.
          </BaseMessage>
          <BaseMessage variant="muted-high">
            A muted message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Message component icons">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage variant="success-high" icon>
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info-high" icon>
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning-high" icon>
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive-high" icon>
            A destructive message.
          </BaseMessage>
          <BaseMessage variant="default-high" icon="mingcute:avalanche-avax-fill">
            A default message.
          </BaseMessage>
          <BaseMessage variant="muted-high" icon="mingcute:desk-lamp-fill">
            A muted message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage variant="success-high" icon rounded="sm">
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info-high" icon rounded="md">
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning-high" icon rounded="lg">
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive-high" icon rounded="full">
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage variant="success-high" icon rounded="sm" closable>
            A successful message.
          </BaseMessage>
          <BaseMessage variant="info-high" icon rounded="md" closable>
            An information message.
          </BaseMessage>
          <BaseMessage variant="warning-high" icon rounded="lg" closable>
            A warning message.
          </BaseMessage>
          <BaseMessage variant="destructive-high" icon rounded="full" closable>
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
