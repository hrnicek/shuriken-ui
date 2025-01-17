<script setup lang="ts">
const first = ref('')
const second = ref('')
const third = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full flex-wrap items-end gap-3">
          <div class="flex-1">
            <BaseSelect v-model="first" size="sm" rounded="md" placeholder="Select a hero">
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
            <BaseSelect v-model="second" size="md" rounded="md" placeholder="Select a hero">
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
            <BaseSelect v-model="third" size="lg" rounded="md" placeholder="Select a hero">
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
