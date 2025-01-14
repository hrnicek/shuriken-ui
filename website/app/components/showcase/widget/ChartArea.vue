<script setup lang="ts">
const demoArea = reactive(useDemoArea())

function useDemoArea() {
  const type = 'area'
  const height = 195

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    colors: ['var(--color-chart-base)'],
    title: {
      text: '',
      align: 'left',
    },
    labels: [
      '15 Nov 2024',
      '16 Nov 2024',
      '17 Nov 2024',
      '20 Nov 2024',
      '21 Nov 2024',
      '22 Nov 2024',
      '23 Nov 2024',
      '24 Nov 2024',
      '27 Nov 2024',
      '28 Nov 2024',
      '29 Nov 2024',
      '30 Nov 2024',
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.5,
        opacityTo: 0.1,
      },
    },
    legend: {
      horizontalAlign: 'left',
    },
  }

  const series = shallowRef([
    {
      name: 'Balance',
      data: [
        8000.0,
        8100.3,
        8250.5,
        8375.8,
        8400.1,
        8500.7,
        8450.4,
        8480.0,
        8520.3,
        8600.8,
        8700.1,
        8650.6,
      ],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="relative">
    <BaseCard
      rounded="lg"
      class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
    >
      <!-- Title -->
      <div class="mb-4">
        <BaseParagraph
          size="sm"
          weight="medium"
          lead="tight"
          class="text-muted-600 dark:text-muted-400 mb-4"
        >
          <span>Balance</span>
        </BaseParagraph>
        <BaseParagraph
          size="2xl"
          weight="bold"
          lead="none"
          class="text-muted-900 dark:text-white mb-2"
        >
          <span>$90,745.21</span>
        </BaseParagraph>
        <BaseParagraph
          size="xs"
          weight="medium"
          lead="tight"
          class="text-muted-500"
        >
          <span>+21.3% since last month</span>
        </BaseParagraph>
      </div>
      <div class="w-full">
        <ApexChart v-bind="demoArea" />
      </div>
    </BaseCard>
  </div>
</template>
