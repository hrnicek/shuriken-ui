<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-50 p-4 dark:bg-muted-900 md:p-8">
      <div class="grid max-w-3xl gap-4 md:grid-cols-2">
        <BaseCard  variant="default" rounded="md" class="p-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-muted-800 mb-2 dark:text-white"
          >
            Default card
          </BaseHeading>

          <BaseParagraph size="sm" lead="tight" class="text-muted-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>

        <BaseCard variant="muted" rounded="md" class="p-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-muted-800 mb-2 dark:text-white"
          >
            Muted card
          </BaseHeading>

          <BaseParagraph size="sm" lead="tight" class="text-muted-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>

        <BaseCard variant="none" rounded="md" class="p-6 bg-primary-600/10 border-2 border-primary-600">
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-primary-600 mb-2 dark:text-primary-200"
          >
            Custom card
          </BaseHeading>

          <BaseParagraph size="sm" lead="tight" class="text-primary-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>

        <BaseCard variant="none" rounded="md" class="p-6 bg-muted-950 dark:bg-white">
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-white mb-2 dark:text-muted-900"
          >
            Custom card
          </BaseHeading>

          <BaseParagraph size="sm" lead="tight" class="text-white dark:text-muted-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
