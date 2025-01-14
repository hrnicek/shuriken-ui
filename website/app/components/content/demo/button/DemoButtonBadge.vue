<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex flex-wrap items-end gap-4">
          <BaseChip :offset="1" pulse>
            <BaseButton
              size="sm"
              rounded="md"
              badge
              badge-pulse
            >
              Button
            </BaseButton>
          </BaseChip>
          <BaseChip :offset="1" pulse>
            <BaseButton
              size="md"
              rounded="md"
              badge
              badge-pulse
            >
              Button
            </BaseButton>
          </BaseChip>
          <BaseChip :offset="1" pulse>
            <BaseButton
              size="lg"
              rounded="md"
              badge
              badge-pulse
            >
              Button
            </BaseButton>
          </BaseChip>
          <BaseChip :offset="1" pulse>
            <BaseButton
              size="xl"
              rounded="md"
              badge
              badge-pulse
            >
              Button
            </BaseButton>
          </BaseChip>
        </div>
      </div>
    </div>
  </div>
</template>
