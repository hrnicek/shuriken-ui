<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BaseTooltip>
          <template #content>
            <BaseLink href="#" class="flex items-center gap-1">
              <Icon name="lucide:circle-help" />
              <span>Tooltip link</span>
            </BaseLink>
          </template>
          <span
            tabindex="0"
            class="outline-none focus-visible:text-primary-base hover:text-primary-base cursor-help underline decoration-dotted"
          >consectetur</span>
        </BaseTooltip>
      </div>
    </div>
  </div>
</template>
