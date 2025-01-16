<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-50 p-4 dark:bg-muted-900 md:p-6">
      <div class="flex items-center">
        <div class="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <BaseMessage
            variant="muted"
            icon="solar:videocamera-bold"
            rounded="md"
          >
            A muted message.
          </BaseMessage>
          <BaseMessage
            variant="primary"
            icon="solar:widget-6-bold"
            rounded="md"
          >
            A primary message.
          </BaseMessage>
          <BaseMessage
            variant="success"
            icon="solar:confetti-bold"
            rounded="md"
          >
            A successful message.
          </BaseMessage>
          <BaseMessage
            variant="info"
            icon="solar:chat-unread-bold"
            rounded="md"
          >
            An information message.
          </BaseMessage>
          <BaseMessage
            variant="warning"
            icon="solar:bolt-bold"
            rounded="md"
          >
            A warning message.
          </BaseMessage>
          <BaseMessage
            variant="destructive"
            icon="solar:confounded-square-bold"
            rounded="md"
          >
            A destructive message.
          </BaseMessage>
        </div>
      </div>
    </div>
  </div>
</template>
