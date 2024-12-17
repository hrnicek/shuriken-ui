<script setup lang="ts">
definePageMeta({
  title: 'BaseAccordion',
  icon: 'system-uicons:flip-view',
  description: 'Accordion component',
  section: 'base',
})

const accordion = ref([
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
])
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseAccordion">
      <NuiPreview title="Default" description="Default accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" />
        </div>
      </NuiPreview>

      <NuiPreview title="Exclusive" description="Exclusive accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" exclusive />
        </div>
      </NuiPreview>

      <NuiPreview title="Wrapped" description="Accordion wrapped in a card">
        <div class="md:max-w-5xl">
          <div class="grid md:grid-cols-2 gap-6">
            <BaseCard variant="default-low" rounded="md" class="p-6">
              <BaseAccordion variant="default-low" :items="accordion" exclusive />
            </BaseCard>
            <BaseCard variant="default-high" rounded="md" class="p-6">
              <BaseAccordion :items="accordion" exclusive />
            </BaseCard>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Chevron" description="Chevron accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" exclusive action="chevron" />
        </div>
      </NuiPreview>

      <NuiPreview title="Plus" description="Plus accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" exclusive action="plus" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
