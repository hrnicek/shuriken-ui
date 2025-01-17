<script setup lang="ts">
const first = ref('')
const second = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-md items-end gap-4">
          <BaseSelect v-model="first" variant="default" rounded="md" placeholder="Select a hero">
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
          <BaseSelect v-model="second" variant="muted" rounded="md" placeholder="Select a hero">
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
</template>
