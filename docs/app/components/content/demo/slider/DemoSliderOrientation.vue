<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="max-w-sm flex h-[180px] gap-6">
        <BaseSlider variant="dark" orientation="vertical" :default-value="[42]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[42]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[49]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[56]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[48]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[60]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[31]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[40]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[35]" />
        <BaseSlider variant="dark" orientation="vertical" :default-value="[29]" />
      </div>
    </div>
  </div>
</template>
