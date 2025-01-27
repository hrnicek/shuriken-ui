<script setup lang="ts">
const demoGauge = reactive(useDemoGauge())

function useDemoGauge() {
  const height = 320
  const type = 'radialBar'

  const options = {
    title: {
      text: '',
    },
    chart: {
      type: 'radialBar',
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['var(--color-chart-base)'],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '40%',
        },
        track: {
          // background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shade: 'light',
    //     shadeIntensity: 0.1,
    //     inverseColors: false,
    //     opacityFrom: 1,
    //     opacityTo: 1,
    //     stops: [0, 50, 53, 91],
    //   },
    // },
    labels: ['Average Results'],
  }

  const series = shallowRef([76])

  return {
    type,
    height,
    options,
    series,
  }
}

const languages = [
  {
    name: 'JavaScript',
    icon: 'skill-icons:javascript',
  },
  {
    name: 'React',
    icon: 'logos:react',
  },
  {
    name: 'Tailwind CSS',
    icon: 'devicon:tailwindcss',
  },
  {
    name: 'Nuxt',
    icon: 'logos:nuxt-icon',
  },
  {
    name: 'Vue',
    icon: 'logos:vue',
  },
]
</script>

<template>
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
        <span>Completion</span>
      </BaseParagraph>
      <BaseParagraph
        size="2xl"
        weight="bold"
        lead="none"
        class="text-muted-900 dark:text-white mb-2"
      >
        <span>76%</span>
        <span class="ps-2 text-sm font-medium">code reviewed</span>
      </BaseParagraph>
      <BaseParagraph
        size="xs"
        weight="medium"
        lead="tight"
        class="text-muted-500"
      >
        <span>Over the last 15 days</span>
      </BaseParagraph>
    </div>
    <ApexChart v-bind="demoGauge" />
    <div class="flex flex-wrap gap-2 mt-12">
      <BaseSnack
        v-for="language in languages"
        :key="language.name"
        :label="language.name"
        variant="default"
        size="xs"
        :icon="language.icon"
        class="grayscale"
      />
    </div>
  </BaseCard>
</template>
