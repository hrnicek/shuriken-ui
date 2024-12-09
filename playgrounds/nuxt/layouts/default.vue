<script setup lang="ts">
const color = useColorMode()
</script>

<template>
  <div>
    <div class="flex min-h-screen">
      <div class="w-full border-l border-muted-200 dark:border-muted-800">
        <slot />
      </div>
    </div>
    <div class="fixed top-0 end-0 pr-6 pt-6 z-50">
      <BaseSelect v-model="color.preference" size="sm">
        <option value="system">
          system
        </option>
        <option value="light">
          light
        </option>
        <option value="dark">
          dark
        </option>
      </BaseSelect>
    </div>
  </div>
</template>
