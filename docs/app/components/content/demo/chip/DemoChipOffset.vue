<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BaseChip>
          <div class="relative size-14 border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip>
          <div class="relative size-14 rounded-lg border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip :offset="2">
          <div class="relative size-14 rounded-2xl border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip :offset="6">
          <div class="relative size-14 rounded-full border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
      </div>
    </div>
  </div>
</template>
