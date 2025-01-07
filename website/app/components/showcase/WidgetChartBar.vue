<script setup lang="ts">
const demoBar = reactive(useDemoBar())

function useDemoBar() {
  const type = 'bar'
  const height = 80

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "80%",
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: asPercent,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
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
      ],
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: asDollar,
      },
    },
    colors: ['var(--chart-color-base)'],
    title: {
      text: '',
      align: 'left',
    },
  }

  const series = shallowRef([
    {
      name: 'Expenses',
      data: [200.31, 309.12, 427.89, 438.82, 354.62, 339.29, 257.38],
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
          <span>Expenses</span>
        </BaseParagraph>
        <BaseParagraph
          size="2xl"
          weight="bold"
          lead="none"
          class="text-muted-900 dark:text-white mb-2"
        >
          <span>$5,216.72</span>
        </BaseParagraph>
        <BaseParagraph
          size="xs"
          weight="medium"
          lead="tight"
          class="text-muted-500"
        >
          <span>+131% since last month</span>
        </BaseParagraph>
      </div>
      <ApexChart v-bind="demoBar" />
    </BaseCard>
  </div>
</template>