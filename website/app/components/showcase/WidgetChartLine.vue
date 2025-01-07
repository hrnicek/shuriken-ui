<script setup lang="ts">
const demoLine = reactive(useDemoLine())

function useDemoLine() {
  const type = 'line'
  const height = 80

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['var(--chart-color-base)'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'straight',
    },
    title: {
      text: '',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: asDollar,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
  }

  const series = shallowRef([
    {
      name: 'Balance',
      data: [10579.15, 41459.57, 35778.21, 51268.32, 49779.45, 62189.12, 69567.23, 90745.21, 89546.64],
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
    <BaseCard rounded="lg" class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800">
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
      <ApexChart v-bind="demoLine" />
    </BaseCard>
  </div>
</template>