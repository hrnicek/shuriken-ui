<script setup lang="ts">
const demoBar = reactive(useDemoBar())

function useDemoBar() {
  const type = 'bar'
  const height = 180

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
        columnWidth: "85%",
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
        formatter: asPercent,
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
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 4.8, 3.6, 3.2, 2.3],
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
    <BaseCard class="p-6">
      <!-- Title -->
      <div class="-mb-6">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Bar Chart</span>
        </BaseHeading>
      </div>
      <ApexChart v-bind="demoBar" />
    </BaseCard>
  </div>
</template>