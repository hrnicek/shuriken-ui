<script setup lang="ts">
const value = ref(undefined)
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-xs items-end gap-4">
          <BaseSelect
            v-model="value"
            placeholder="Select a hero"
          >
            <BaseSelectGroup>
              <BaseSelectLabel>
                Marvel
              </BaseSelectLabel>
              <BaseSelectItem value="Superman">
                Superman
              </BaseSelectItem>
              <BaseSelectItem value="Batman">
                Batman
              </BaseSelectItem>
            </BaseSelectGroup>
            <BaseSelectSeparator />
            <BaseSelectGroup>
              <BaseSelectLabel>
                DC
              </BaseSelectLabel>
              <BaseSelectItem value="Magneto">
                Magneto
              </BaseSelectItem>
              <BaseSelectItem value="Cyclops">
                Cyclops
              </BaseSelectItem>
            </BaseSelectGroup>

            <BaseSelectGroup>
              <BaseSelectLabel>
                Long list
              </BaseSelectLabel>
              <BaseSelectItem v-for="i in 50" :key="i" :value="i">
                Option {{ i }}
              </BaseSelectItem>
            </BaseSelectGroup>
          </BaseSelect>
        </div>
      </div>
    </div>
  </div>
</template>
