<script setup lang="ts">
const { add } = useNuiToasts()
// eslint-disable-next-line no-console
const log = console.log
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BaseButton
          @click="add({
            title: 'Order sent',
            description: 'Your order has been sent successfully.',
            icon: 'lucide:check',
            actions: [
              {
                label: 'Cancel',
                variant: 'default',
                onClick: () => {
                  log('Action clicked')
                },
              },
            ],
          })"
        >
          Show toast with action
        </BaseButton>

        <BaseButton
          @click="add({
            title: 'Are you sure?',
            description: 'This action cannot be undone.',
            actions: [
              {
                label: 'Cancel',
                onClick: () => {
                  log('Action clicked')
                },
              },
              {
                label: 'Delete',
                variant: 'destructive',
                onClick: () => {
                  log('Action clicked')
                },
              },
            ],
          })"
        >
          Show toast with actions
        </BaseButton>
      </div>
    </div>
  </div>
</template>
