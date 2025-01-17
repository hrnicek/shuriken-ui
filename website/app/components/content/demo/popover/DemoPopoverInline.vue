<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BasePopover>
          <button type="button" tabindex="0" class="focus-visible:nui-focus cursor-pointer rounded-full">
            <BaseAvatar src="/img/people/placeholder.png" class="bg-muted-100 dark:bg-muted-800" />
          </button>

          <template #content>
            <div class="pe-2 space-y-2 w-[180px]">
              <BaseInputFile size="sm" :classes="{ root: 'border-0' }" />
            </div>
          </template>
        </BasePopover>
        <BasePopover>
          <button type="button" tabindex="0" class="focus-visible:nui-focus cursor-pointer rounded-full">
            <BaseAvatar src="/img/people/44.jpg" class="bg-muted-100 dark:bg-muted-800" />
          </button>

          <template #content>
            <div class="ps-6 py-6 space-y-2 w-[280px]">
              <div class="flex items-center gap-2">
                <BaseAvatar size="lg" src="/img/people/44.jpg" />
                <div class="relative">
                  <BaseHeading size="sm" weight="semibold" class="text-muted-900 dark:text-white">
                    Kendra Wilson
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                    Software Engineer
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex my-4 divide-x divide-muted-300 dark:divide-muted-700">
                <div class="flex-1 flex flex-col gap-0.5 text-center px-4">
                  <span class="font-sans text-[0.65rem] uppercase font-medium text-muted-600 dark:text-muted-400">Posts</span>
                  <span class="font-sans text-lg font-sans font-semibold text-muted-900 dark:text-white">1.2K</span>
                </div>
                <div class="flex-1 flex flex-col gap-0.5 text-center px-4">
                  <span class="font-sans text-[0.65rem] uppercase font-medium text-muted-600 dark:text-muted-400">Comments</span>
                  <span class="font-sans text-lg font-sans font-semibold text-muted-900 dark:text-white">4.3K</span>
                </div>
                <div class="flex-1 flex flex-col gap-0.5 text-center px-4">
                  <span class="font-sans text-[0.65rem] uppercase font-medium text-muted-600 dark:text-muted-400">Views</span>
                  <span class="font-sans text-lg font-sans font-semibold text-muted-900 dark:text-white">75.5K</span>
                </div>
              </div>
              <div>
                <BaseButton variant="dark" class="w-full">
                  View Profile
                </BaseButton>
              </div>
            </div>
          </template>
        </BasePopover>
      </div>
    </div>
  </div>
</template>
