<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseField
            id="username"
            v-slot="{ inputAttrs, inputRef }"
            label="Username"
            class="w-full"
          >
            <BaseInput :ref="inputRef" v-model="value" v-bind="inputAttrs" placeholder="Ex: johndoe83" />
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
