<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="grid grid-cols-3 gap-8 gap-x-10 max-w-2xl">
          <BaseField class="grid grid-cols-subgrid col-span-3" state="idle">
            <div class="flex flex-col justify-center gap-1 relative">
              <BaseFieldLabel>
                <span>Username</span>
                <BaseFieldRequiredIndicator />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </BaseFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none">
                <BaseFieldLoadingIndicator />
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseFieldController>
                  <BaseInput v-model="value" placeholder="Ex: johndoe" />
                </BaseFieldController>
                <div class="absolute z-0 end-4 top-3 pointer-events-none">
                  <BaseFieldLoadingIndicator />
                  <BaseFieldSuccessIndicator />
                  <BaseFieldErrorIndicator />
                </div>
              </div>
            </div>
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
