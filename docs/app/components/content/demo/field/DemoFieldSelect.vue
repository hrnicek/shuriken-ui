<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const

const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="w-full grid grid-cols-2 gap-4">
          <BasePrimitiveField v-for="state in states" :key="state">
            <div class="w-full inline-flex">
              <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>Select an option</span>
                  <BasePrimitiveFieldRequiredIndicator />
                </div>
              </BasePrimitiveFieldLabel>
            </div>
            <div class="relative">
              <BasePrimitiveFieldController>
                <BaseSelect v-model="value" placeholder="Select a value...">
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
              </BasePrimitiveFieldController>
              <div class="absolute z-0 end-10 top-3 pointer-events-none">
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
