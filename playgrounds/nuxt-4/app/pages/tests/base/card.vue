<script setup lang="ts">
definePageMeta({
  title: 'BaseCard',
  icon: 'system-uicons:panel-top',
  description: 'Card component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseCard">
      <NuiPreview title="Radius" description="Card component radiuses">
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard variant="default-low" rounded="none" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard variant="default-low" rounded="sm" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard variant="default-low" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard variant="default-low" rounded="lg" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview title="Variants" description="Card component variants">
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard  variant="default-low" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard variant="default-high" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard variant="muted-low" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard variant="muted-high" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadows"
        description="Card component shadow types"
      >
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard rounded="md" shadow="static" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Static shadow
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="md" shadow="hover" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Hover shadow
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
