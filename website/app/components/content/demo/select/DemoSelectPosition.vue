<script setup lang="ts">
const value = ref(undefined)
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-md flex-wrap items-end gap-3">
          <div class="flex-1">
            <BaseSelect
              v-model="value"
              placeholder="Select a hero"
              label="Item aligned (default)"
              :bindings="{
                content: {
                  position: 'item-aligned',
                },
              }"
            >
              <BaseSelectItem value="Superman">
                Superman
              </BaseSelectItem>
              <BaseSelectItem value="Batman">
                Batman
              </BaseSelectItem>
              <BaseSelectItem value="Iron man">
                Iron man
              </BaseSelectItem>
              <BaseSelectItem value="Magneto">
                Magneto
              </BaseSelectItem>
              <BaseSelectItem value="Cyclops">
                Cyclops
              </BaseSelectItem>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="value"
              placeholder="Select a hero"
              :bindings="{
                content: {
                  position: 'popper',
                  bodyLock: false,
                },
                portal: {
                  disabled: true,
                },
              }"
            >
              <BaseSelectItem value="Superman">
                Superman
              </BaseSelectItem>
              <BaseSelectItem value="Batman">
                Batman
              </BaseSelectItem>
              <BaseSelectItem value="Iron man">
                Iron man
              </BaseSelectItem>
              <BaseSelectItem value="Magneto">
                Magneto
              </BaseSelectItem>
              <BaseSelectItem value="Cyclops">
                Cyclops
              </BaseSelectItem>
            </BaseSelect>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
