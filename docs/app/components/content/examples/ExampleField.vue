<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseField
            v-slot="{ inputRef, inputAttrs }"
            label="Search records..."
            state="loading"
          >
            <div class="focus-within:nui-focus rounded-md flex *:rounded-none *:border-e-0 *:first:rounded-s-md *:last:border-e *:last:rounded-e-md">
              <BaseIconBox size="sm">
                <Icon name="lucide:search" />
              </BaseIconBox>
              <BaseInput
                :ref="inputRef"
                v-model="value"
                v-bind="inputAttrs"
                placeholder="Type something..."
                class="focus-visible:ring-0  border-s-0 ps-0"
              />
            </div>
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
