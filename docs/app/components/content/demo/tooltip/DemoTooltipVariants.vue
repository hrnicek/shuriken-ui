<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BaseTooltip content="Tooltip content">
          <BaseButton>
            Button
          </BaseButton>
        </BaseTooltip>

        <BaseTooltip variant="muted">
          <template #content>
            Tooltip content muted
          </template>
          <BaseButton>
            Button
          </BaseButton>
        </BaseTooltip>

        <BaseTooltip variant="dark">
          <template #content>
            Tooltip content dark
          </template>
          <BaseButton>
            Button
          </BaseButton>
        </BaseTooltip>

        <BaseTooltip variant="primary">
          <template #content>
            Tooltip content primary
          </template>
          <BaseButton>
            Button
          </BaseButton>
        </BaseTooltip>
      </div>
    </div>
  </div>
</template>
