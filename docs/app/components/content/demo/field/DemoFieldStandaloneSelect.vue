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
            <BaseSelect :ref="inputRef" v-model="value" v-bind="inputAttrs" placeholder="Select a value...">
              <BaseSelectItem value="1">
                Option 1
              </BaseSelectItem>
              <BaseSelectItem value="2">
                Option 2
              </BaseSelectItem>
              <BaseSelectItem value="3">
                Option 3
              </BaseSelectItem>
              <BaseSelectItem value="4">
                Option 4
              </BaseSelectItem>
            </BaseSelect>
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
