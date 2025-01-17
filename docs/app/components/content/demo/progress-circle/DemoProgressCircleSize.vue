<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle
          title="Dark circle progress bar"
          :size="45"
          :model-value="65"
          variant="dark"
        />
        <BaseProgressCircle
          title="Dark circle progress bar"
          :size="55"
          :model-value="65"
          variant="dark"
        />
        <BaseProgressCircle
          title="Dark circle progress bar"
          :size="65"
          :model-value="65"
          variant="dark"
        />
        <BaseProgressCircle
          title="Dark circle progress bar"
          :size="75"
          :model-value="65"
          variant="dark"
        />
      </div>
    </div>
  </div>
</template>
