<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-50 p-8 dark:bg-muted-900">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <BaseCard class="flex items-center gap-2 p-4">
          <BaseAvatar src="/img/people/39.jpg" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-800 dark:text-muted-100"
            >
              Josh Meyers
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
              UI/UX Designer
            </BaseParagraph>
          </div>
        </BaseCard>
        <BaseCard variant="muted" class="flex items-center gap-2 p-4">
          <BaseAvatar src="/img/people/11.jpg" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-800 dark:text-muted-100"
            >
              Janice Dakota
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
              Sales Manager
            </BaseParagraph>
          </div>
        </BaseCard>
        <BaseCard variant="none" class="flex items-center gap-2 p-4 bg-primary-500/10 border border-primary-600">
          <BaseAvatar src="/img/people/44.jpg" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-primary-600 dark:text-primary-400"
            >
              Anna Lopez
            </BaseHeading>
            <BaseParagraph size="xs" class="text-primary-500 dark:text-primary-400">
              Project Manager
            </BaseParagraph>
          </div>
        </BaseCard>
        <BaseCard variant="none" class="flex items-center gap-2 p-4 bg-muted-900 dark:bg-muted-50">
          <BaseAvatar src="/img/people/51.jpg" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-100 dark:text-muted-900"
            >
              Michael Jennings
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-200 dark:text-muted-600">
              Product Designer
            </BaseParagraph>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
