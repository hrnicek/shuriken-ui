<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="max-w-sm space-y-4">
        <BaseSlider
          variant="dark"
          :default-value="[40]"
          :min="10"
          :max="60"
          :step="10"
        />
        <BaseSlider
          v-slot="{ value }"
          variant="dark"
          :default-value="[30, 40]"
          :min="10"
          :max="60"
          :step="2"
          :min-steps-between-thumbs="5"
        >
          {{ value }}%
        </BaseSlider>
      </div>
    </div>
  </div>
</template>
