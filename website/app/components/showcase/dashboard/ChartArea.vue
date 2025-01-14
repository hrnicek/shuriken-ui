<script setup lang="ts">
const areaChart = reactive(useareaChart())

function useareaChart() {
  const type = 'area'
  const height = 250

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
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
    legend: {
      show: false,
      position: 'top',
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        right: 0,
        bottom: 10,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2024-09-19T00:00:00.000Z',
        '2024-09-20T01:30:00.000Z',
        '2024-09-21T02:30:00.000Z',
        '2024-09-22T03:30:00.000Z',
        '2024-09-23T04:30:00.000Z',
        '2024-09-24T05:30:00.000Z',
        '2024-09-25T06:30:00.000Z',
      ],
    },
    yaxis: {
      labels: {
        show: false,
        offsetX: -15,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
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
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
      y: {
        formatter: (val: number) => `$${val}`,
      },
    },
  }

  const series = ref([
    {
      name: 'Balance',
      data: [3143.16, 4298.49, 2876.54, 5183.76, 4232.87, 10876.56, 9543.12],
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
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="flex flex-col gap-4 pt-3">
      <BaseHeading
        as="h4"
        size="xs"
        weight="medium"
        lead="none"
        class="text-muted-600 dark:text-muted-400 uppercase"
      >
        Account Balance
      </BaseHeading>
      <BaseParagraph
        size="3xl"
        weight="bold"
        lead="none"
        class="text-muted-800 dark:text-white"
      >
        $9,543.12
      </BaseParagraph>
      <div class="flex items-center gap-x-2">
        <span class="block leading-5 text-sm">▲ 0.110 (4.966%)</span>
      </div>
    </div>
    <ApexChart v-bind="areaChart" />
  </BaseCard>
</template>
