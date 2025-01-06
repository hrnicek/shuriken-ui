<template>
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="mb-6 flex items-center justify-between">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>New Message</span>
      </BaseHeading>
      <div class="relative">
        <BaseChip size="sm" placement="top-end" :offset="2" pulse>
          <div class="flex items-center justify-center rounded-full size-6 ring-1 ring-muted-900/5">
            <span class="font-medium text-xs text-muted-900 dark:text-muted-100">1</span>
          </div>
        </BaseChip>
      </div>
    </div>
    <div class="mb-4 flex items-center gap-2">
      <BaseAvatar
        src="/img/people/29.jpg"
        alt="Christina Keller"
        class="grayscale"
      />
      <span class="text-muted-500 dark:text-muted-400 font-sans">
        <span class="block text-[0.65rem] uppercase font-medium">Sent by</span>
        <span class="block text-sm font-medium text-muted-800 dark:text-muted-100">Christina Keller</span>
      </span>
    </div>
    <div
      class="border-muted-300 dark:border-muted-800 border p-3 rounded-lg"
    >
      <div class="mb-3 flex items-center gap-2">
        <div class="bg-muted-900 dark:bg-white size-1.5 shrink-0 rounded-full" />
        <BaseParagraph size="sm" class="text-muted-800 dark:text-muted-100">
          Project review
        </BaseParagraph>
      </div>
      <div class="mb-2">
        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
          We need to review the last quarter and plan the next one. Can you prepare the slides and all the required data?
        </BaseParagraph>
      </div>
      <BaseParagraph size="xs" class="text-muted-400 dark:text-muted-500">
        19 minutes ago
      </BaseParagraph>
    </div>
  </BaseCard>
</template>