<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BasePopover>
          <BaseButton>
            Open me
          </BaseButton>

          <template #content>
            <div class="ps-4 py-4 max-w-[260px] space-y-2">
              <BaseHeading size="md" weight="semibold">
                Take action
              </BaseHeading>

              <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                This text is the description of the action you are about to take. Please read it before proceeding.
              </BaseParagraph>

              <BaseButton size="sm" variant="dark" class="w-full mt-2">
                Understood
              </BaseButton>
            </div>
          </template>
        </BasePopover>
      </div>
    </div>
  </div>
</template>
