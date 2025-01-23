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
            <BaseSelectItem value="Superman" raw-slot>
              <div class="flex flex-col items-start gap-0 py-2">
                <div class="text-xs opacity-50">
                  Marvel
                </div>
                <div>
                  <SelectItemText>Superman</SelectItemText>
                </div>
              </div>
            </BaseSelectItem>
            <BaseSelectItem value="Batman" raw-slot>
              <div class="flex flex-col items-start gap-0 py-2">
                <div class="text-xs opacity-50">
                  Marvel
                </div>
                <div>
                  <SelectItemText>Batman</SelectItemText>
                </div>
              </div>
            </BaseSelectItem>
            <BaseSelectLabel>
              <div>DC</div>
            </BaseSelectLabel>
            <BaseSelectItem value="Magneto" raw-slot>
              <div class="flex flex-col items-start gap-0 py-2">
                <div class="text-xs opacity-50">
                  DC
                </div>
                <div>
                  <SelectItemText>Magneto</SelectItemText>
                </div>
              </div>
            </BaseSelectItem>
            <BaseSelectItem value="Cyclops" raw-slot>
              <div class="flex flex-col items-start gap-0 py-2">
                <div class="text-xs opacity-50">
                  DC
                </div>
                <div>
                  <SelectItemText>Cyclops</SelectItemText>
                </div>
              </div>
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </div>
    </div>
  </div>
</template>
