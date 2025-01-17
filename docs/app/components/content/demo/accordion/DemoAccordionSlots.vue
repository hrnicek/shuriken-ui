<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-8">
      <div class="max-w-md">
        <BaseCard
          rounded="md"
          class="p-4"
        >
          <BaseAccordion type="single" collapsible>
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
        </BaseCard>
      </div>
    </div>
  </div>
</template>
