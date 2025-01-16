<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-50 p-4 dark:bg-muted-900 md:p-6">
      <div class="flex items-center">
        <div class="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <BaseMessage
            variant="success"
            icon="solar:confetti-bold"
            rounded="md"
            closable
          >
            A successful message.
          </BaseMessage>
          <BaseMessage
            variant="info"
            icon="solar:chat-unread-bold"
            rounded="md"
            closable
          >
            An information message.
          </BaseMessage>
          <BaseMessage
            variant="warning"
            icon="solar:bolt-bold"
            rounded="md"
            closable
          >
            A warning message.
          </BaseMessage>
          <BaseMessage
            variant="destructive"
            icon="solar:confounded-square-bold"
            rounded="md"
            closable
          >
            A destructive message.
          </BaseMessage>
        </div>
      </div>
    </div>
  </div>
</template>
