<script setup lang="ts">
const { add } = useNuiToasts()
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BaseButton
          @click="add({
            icon: 'lucide:check',
            title: 'Changes saved',
            description: 'Your changes have been saved successfully.',
            duration: 3000,
          })"
        >
          Show toast
        </BaseButton>
      </div>
    </div>
  </div>
</template>
