<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="55"
          :model-value="65"
          variant="primary"
        />
        <BaseProgressCircle
          title="Dark circle progress bar"
          :size="55"
          :model-value="65"
          variant="dark"
        />
        <BaseProgressCircle
          title="Custom circle progress bar"
          :size="55"
          :model-value="65"
          variant="none"
          class="text-pink-500 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
        <BaseProgressCircle
          title="Custom circle progress bar"
          :size="55"
          :model-value="65"
          variant="none"
          class="text-lime-500 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
        <BaseProgressCircle
          title="Custom circle progress bar"
          :size="55"
          :model-value="65"
          variant="none"
          class="text-blue-500 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
        <BaseProgressCircle
          title="Custom circle progress bar"
          :size="55"
          :model-value="65"
          variant="none"
          class="text-yellow-500 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
        <BaseProgressCircle
          title="Custom circle progress bar"
          :size="55"
          :model-value="65"
          variant="none"
          class="text-emerald-500 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
      </div>
    </div>
  </div>
</template>
