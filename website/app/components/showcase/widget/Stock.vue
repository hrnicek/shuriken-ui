<script setup lang="ts">
</script>

<template>
  <BaseCard rounded="lg" class="flex flex-col h-full p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800">
    <div class="w-full">
      <BaseParagraph size="lg" weight="medium" lead="tight" class="text-muted-900 dark:text-white mb-1">Haynes Ltd.</BaseParagraph>
      <BaseParagraph size="sm" lead="tight"  class="text-muted-500 dark:text-muted-400 mb-2">
        <span>DMX:RTW&nbsp;&nbsp;-&nbsp;&nbsp;May 3rd 6:04pm EST</span>
      </BaseParagraph>
      <div class="flex w-full items-end mb-8 font-sans text-muted-900 dark:text-white">
        <span class="block leading-none text-3xl">3.618</span>
        <span class="block leading-5 text-sm ms-4">▲ 0.110 (4.966%)</span>
      </div>
      <div class="flex w-full text-xs mt-3 font-sans text-muted-600 dark:text-muted-400">
        <div class="flex w-5/12">
          <div class="flex-1 pe-3 text-start font-semibold">
            Open
          </div>
          <div class="flex-1 px-3 text-end" x-text="stockTicker.price.open.toFixed(3)">
            3.618
          </div>
        </div>
        <div class="flex w-7/12">
          <div class="flex-1 px-3 text-start font-semibold">Market Cap</div>
          <div class="flex-1 ps-3 text-end" x-text="stockTicker.price.cap.m_formatter()">93.8M</div>
        </div>
      </div>
      <div class="flex w-full font-sans text-xs text-muted-600 dark:text-muted-400">
        <div class="flex w-5/12">
          <div class="flex-1 pe-3 text-start font-semibold">High</div>
          <div class="px-3 text-end" x-text="stockTicker.price.high.toFixed(3)">3.623</div>
        </div>
        <div class="flex w-7/12">
          <div class="flex-1 px-3 text-start font-semibold">P/E ratio</div>
          <div class="ps-3 text-end" x-text="stockTicker.price.ratio.toFixed(2)">20.10</div>
        </div>
      </div>
      <div class="flex w-full font-sans text-xs text-muted-600 dark:text-muted-400">
        <div class="flex w-5/12">
          <div class="flex-1 pe-3 text-start font-semibold">Low</div>
          <div class="px-3 text-end" x-text="stockTicker.price.low.toFixed(3)">3.612</div>
        </div>
        <div class="flex w-7/12">
          <div class="flex-1 px-3 text-start font-semibold">Dividend yield</div>
          <div class="ps-3 text-end" x-text="`${stockTicker.price.dividend}%`">1.69%</div>
        </div>
      </div>
      <div class="flex w-full font-sans text-xs text-muted-600 dark:text-muted-400">
        <div class="flex w-5/12">
          <div class="flex-1 pe-3 text-start font-semibold">Average</div>
          <div class="px-3 text-end" x-text="stockTicker.price.low.toFixed(3)">3.612</div>
        </div>
        <div class="flex w-7/12">
          <div class="flex-1 px-3 text-start font-semibold">Scatter</div>
          <div class="ps-3 text-end" x-text="`${stockTicker.price.dividend}%`">2.41%</div>
        </div>
      </div>
    </div>
    <div class="mt-auto">
      <div class="flex items-center justify-between mb-1.5">
        <BaseParagraph
          size="xs"
          weight="medium"
          lead="tight"
          class="text-muted-600 dark:text-muted-400"
        >
          <span>Completed steps: 9/12</span>
        </BaseParagraph>
        <BaseParagraph
          size="xs"
          weight="medium"
          lead="tight"
          class="text-muted-600 dark:text-muted-400"
        >
          <span>Remaining: 22%</span>
        </BaseParagraph>
      </div>
      <BaseProgress
        title="Progress"
        size="xs"
        :model-value="78"
        variant="dark"
      />
    </div>
  </BaseCard>
</template>