<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="w-full grid grid-cols-2 gap-4">
          <BaseField v-for="state in states" :key="state" :state="state">
            <div class="w-full inline-flex">
              <BaseFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>BaseInput</span>
                  <BaseFieldRequiredIndicator />
                </div>
              </BaseFieldLabel>
            </div>
            <div class="relative">
              <BaseFieldController>
                <BaseInput placeholder="placeholder" />
              </BaseFieldController>
              <div class="absolute z-0 end-4 top-3 pointer-events-none">
                <BaseFieldLoadingIndicator />
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
