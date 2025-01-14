<script setup lang="ts">
</script>

<template>
  <div class="relative">
    <BaseCard
      rounded="lg"
      class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
    >
      <div class="space-y-1 mb-8">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Fine Tuning</span>
        </BaseHeading>
      </div>
      <div class="w-full flex justify-between gap-4 mb-2">
        <div class="h-[192px] flex flex-col gap-y-3">
          <span class="font-sans font-medium text-xs uppercase text-[0.65rem] text-muted-500 dark:text-muted-400">Hi</span>
          <BaseSlider
            variant="dark"
            orientation="vertical"
            :default-value="[42]"
          />
        </div>
        <div class="h-[192px] flex flex-col gap-y-3">
          <span class="font-sans font-medium text-xs uppercase text-[0.65rem] text-muted-500 dark:text-muted-400">Lo</span>
          <BaseSlider
            variant="dark"
            orientation="vertical"
            :default-value="[49]"
          />
        </div>
        <div class="h-[192px] flex flex-col gap-y-3">
          <span class="font-sans font-medium text-xs uppercase text-[0.65rem] text-muted-500 dark:text-muted-400">4k</span>
          <BaseSlider
            variant="dark"
            orientation="vertical"
            :default-value="[64]"
          />
        </div>
        <div class="h-[192px] flex flex-col gap-y-3">
          <span class="font-sans font-medium text-xs uppercase text-[0.65rem] text-muted-500 dark:text-muted-400">8k</span>
          <BaseSlider
            variant="dark"
            orientation="vertical"
            :default-value="[37]"
          />
        </div>
        <div class="h-[192px] flex flex-col gap-y-3">
          <span class="font-sans font-medium text-xs uppercase text-[0.65rem] text-muted-500 dark:text-muted-400">12k</span>
          <BaseSlider
            variant="dark"
            orientation="vertical"
            :default-value="[56]"
          />
        </div>
      </div>
    </BaseCard>
  </div>
</template>
