<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BasePrimitiveField required class="w-full">
            <div class="relative">
              <BasePrimitiveFieldController>
                <BaseInput
                  v-model="value"
                  rounded="md"
                  placeholder="Username"
                />
              </BasePrimitiveFieldController>
              <div class="absolute z-0 end-4 top-3 pointer-events-none">
                <BasePrimitiveFieldLoadingIndicator />
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
          </BasePrimitiveField>
        </div>
      </div>
    </div>
  </div>
</template>
