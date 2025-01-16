<script setup lang="ts">
const value = ref()
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-xs items-end gap-4">
          <BaseSelect
            v-model="value"
            placeholder="Select some heroes"
            multiple
          >
            <BaseSelectLabel>
              <span>Marvel</span>
            </BaseSelectLabel>
            <BaseSelectItem value="Superman">
              <div>Superman</div>
              <div class="text-xs opacity-50">
                Marvel
              </div>
            </BaseSelectItem>
            <BaseSelectItem value="Batman">
              <div>Batman</div>
              <div class="text-xs opacity-50">
                Marvel
              </div>
            </BaseSelectItem>
            <BaseSelectLabel>
              <div>DC</div>
            </BaseSelectLabel>
            <BaseSelectItem value="Magneto">
              <div class="flex flex-col items-start gap-0 py-2">
                <div class="text-xs opacity-50">
                  Marvel
                </div>
                <div>Magneto</div>
              </div>
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops">
              <div>Cyclops</div>
              <div class="text-xs opacity-50">
                Marvel
              </div>
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </div>
    </div>
  </div>
</template>
