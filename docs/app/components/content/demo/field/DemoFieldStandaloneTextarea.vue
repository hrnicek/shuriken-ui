<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseField
            id="message"
            v-slot="{ inputAttrs, inputRef }"
            label="Message"
            class="w-full"
          >
            <BaseTextarea :ref="inputRef" v-model="value" v-bind="inputAttrs" placeholder="Write a message..." />
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
