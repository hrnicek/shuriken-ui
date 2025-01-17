<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BaseChip color="muted" :offset="6" pulse>
          <div class="relative size-14 rounded-full border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip color="primary" :offset="6" pulse>
          <div class="relative size-14 rounded-full border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip color="custom" :offset="6" pulse class="text-yellow-400">
          <div class="relative size-14 rounded-full border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip color="custom" :offset="6" pulse class="text-pink-500">
          <div class="relative size-14 rounded-full border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip color="custom" :offset="6" pulse class="text-lime-500">
          <div class="relative size-14 rounded-full border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
        <BaseChip color="custom" :offset="6" pulse class="text-orange-500">
          <div class="relative size-14 rounded-full border-2 border-dashed border-muted-300 dark:border-muted-700" />
        </BaseChip>
      </div>
    </div>
  </div>
</template>
