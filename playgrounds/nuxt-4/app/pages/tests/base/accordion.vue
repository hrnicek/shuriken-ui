<script setup lang="ts">
definePageMeta({
  title: 'BaseAccordion',
  icon: 'system-uicons:flip-view',
  description: 'Accordion component',
  section: 'base',
})

const accordion = ref([
  {
    value: 'item-1',
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    value: 'item-2',
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    value: 'item-3',
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
          <BaseAccordion :items="accordion" type="multiple" />
        </div>
      </NuiPreview>
      <NuiPreview title="Slots" description="Accordion available slots">
        <div class="md:max-w-lg">
          <BaseAccordion type="multiple">
            <BaseAccordionItem value="item-1" title="Accordion Item 1">
              <template #title>
                Accordion Item 1
              </template>

              Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.
            </BaseAccordionItem>
            <BaseAccordionItem value="item-2" title="Accordion Item 2" variant="default" action="chevron">
              <template #title>
                Accordion Item 2
              </template>

              Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.
            </BaseAccordionItem>
            <BaseAccordionItem value="item-3" title="Accordion Item 3" variant="default" action="plus">
              <template #title>
                Accordion Item 3
              </template>

              Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.
            </BaseAccordionItem>
          </BaseAccordion>
        </div>
      </NuiPreview>

      <NuiPreview title="Exclusive" description="Exclusive accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" type="single" />
        </div>
      </NuiPreview>

      <NuiPreview title="Wrapped" description="Accordion wrapped in a card">
        <div class="md:max-w-5xl">
          <div class="grid md:grid-cols-2 gap-6">
            <BaseCard rounded="md" class="p-6">
              <BaseAccordion :items="accordion" type="single" />
            </BaseCard>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Chevron" description="Chevron accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" type="single" action="chevron" />
        </div>
      </NuiPreview>

      <NuiPreview title="Plus" description="Plus accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" type="single" action="plus" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
