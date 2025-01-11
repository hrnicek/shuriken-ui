
<script setup lang="ts">
const route = useRoute()

// #region Demo data
const home = route.fullPath
const menuItems = [
  {
    name: 'Dashboard',
    activePath: home,
    to: home,
  },
  {
    name: 'Customers',
    activePath: '/',
    to: '/',
  },
  {
    name: 'Products',
    activePath: '/',
    to: '/',
  },
  {
    name: 'Settings',
    activePath: '/',
    to: '/',
  },
]

const workspaces = ref([
  {
    id: 1,
    name: 'Marketing',
    logo: '/img/people/39.jpg',
  },
  {
    id: 2,
    name: 'Help Desk',
    logo: '/img/people/25.jpg',
  },
  {
    id: 3,
    name: 'Innovation',
    logo: '/img/people/43.jpg',
  },
])
// #endregion

const selectedWorkspace = ref(workspaces.value[0])
const target = ref(null)
const open = ref(false)
const isMobileOpen = ref(false)

function openDropdown() {
  open.value = true
}

onClickOutside(target, () => (open.value = false))

function setWorkspace(workspace: any) {
  selectedWorkspace.value = workspace
  open.value = false
}

const progressCircle = ref(25)

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
    type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.5,
        opacityTo: 0.1
      }
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
  <div>
    <BaseCard rounded="lg" class="shadow-sm shadow-muted-200 dark:shadow-muted-800 overflow-hidden">
      <div class="w-full h-[815px] flex flex-col">
        <!--Navigation-->
        <div class="w-full bg-white transition-all duration-300 dark:bg-muted-950">
          <nav class="relative mx-auto w-full px-4 md:px-6">
            <div class="flex w-full items-center justify-between h-16 flex-row">
              <div class="grow w-auto">
                <div class="flex h-16 w-full items-center gap-x-4">
                  <!--Logo-->
                  <NuxtLink to="/" class="flex items-center justify-center">
                    <Logo class="size-8 text-muted-900 dark:text-white" />
                  </NuxtLink>
                  <!-- Workspace Dropdown -->
                  <div ref="target" class="group/workspace relative z-10 ms-auto w-full max-w-[170px] md:ms-0 me-4 md:me-0 md:max-w-[240px]">
                    <button
                      type="button"
                      class="w-full max-w-[170px] rounded-lg py-1.5 pe-3 ps-2 border border-muted-200 dark:border-muted-800 transition-colors duration-300 group-hover/workspace:bg-muted-100 dark:group-hover/workspace:bg-muted-900/60 md:max-w-[240px]"
                      :class="open && 'bg-muted-100 dark:bg-muted-900/60'"
                      @click="openDropdown()"
                    >
                      <span class="flex w-full items-center gap-3 text-start">
                        <BaseAvatar size="xxs" :src="selectedWorkspace?.logo" class="grayscale" />
                        <div>
                          <BaseText size="sm" class="line-clamp-1 block text-muted-800 dark:text-muted-200">
                            {{ selectedWorkspace?.name }}
                          </BaseText>
                        </div>
                        <Icon
                          name="lucide:chevrons-up-down"
                          class="ms-auto size-4 text-muted-400 transition-transform duration-300"
                          :class="open && 'rotate-180'"
                        />
                      </span>
                    </button>
                    <Transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-in"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <div
                        v-if="open"
                        class="absolute end-0 top-12 w-full min-w-[280px] overflow-hidden rounded-xl border border-muted-200 bg-white shadow-xl shadow-muted-400/10 dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-800/10 md:start-0 md:min-w-[575px]"
                      >
                        <div class="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-muted-200 md:dark:divide-muted-800">
                          <div>
                            <div class="font-sans flex items-center border-b border-muted-200 dark:border-muted-800">
                              <div class="shrink-0 size-8 flex items-center justify-center">
                                <Icon name="lucide:search" class="size-4 text-muted-400 dark:text-muted-100" />
                              </div>
                              <input type="text" class="h-10 px-2 w-full border-none outline-none bg-transparent text-sm text-muted-700 dark:text-muted-100" placeholder="Find workspace..." />
                              <button type="button" class="me-2 ms-auto rounded-lg border border-muted-200 px-2 py-0.5 dark:border-muted-800">
                                <BaseText size="xs">
                                  Esc
                                </BaseText>
                              </button>
                            </div>
                            <div class="flex h-[calc(100%_-_2.5rem)] flex-col p-3">
                              <BaseHeading
                                as="h4"
                                size="sm"
                                weight="medium"
                                class="text-muted-400"
                              >
                                Workspaces
                              </BaseHeading>
                              <div class="my-3 xs:nui-slimscroll xs:max-h-[128px] xs:min-h-[128px]">
                                <ul class="space-y-1">
                                  <li v-for="workspace in workspaces" :key="workspace.id">
                                    <button
                                      type="button"
                                      class="flex w-full items-center gap-2 rounded-lg py-2 pe-4 ps-2 transition-colors duration-200 hover:bg-muted-100 dark:hover:bg-muted-800"
                                      @click="setWorkspace(workspace)"
                                    >
                                      <BaseAvatar size="xxs" :src="workspace.logo" class="grayscale" />
                                      <BaseText size="sm">
                                        {{ workspace.name }}
                                      </BaseText>
                                      <Icon
                                        v-if="selectedWorkspace === workspace"
                                        name="lucide:check"
                                        class="ms-auto size-4 text-muted-900 dark:text-muted-100"
                                      />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div class="mt-auto">
                                <BaseButton rounded="md" class="w-full">
                                  <Icon name="lucide:plus" class="size-4" />
                                  <span>Create Workspace</span>
                                </BaseButton>
                              </div>
                            </div>
                          </div>
                          <div class="block">
                            <div class="font-sans flex items-center border-b border-muted-200 dark:border-muted-800">
                              <div class="shrink-0 size-8 flex items-center justify-center">
                                <Icon name="lucide:search" class="size-4 text-muted-400 dark:text-muted-100" />
                              </div>
                              <input type="text" class="h-10 px-2 w-full border-none outline-none bg-transparent text-sm text-muted-700 dark:text-muted-100" placeholder="Find project..." />
                              <button type="button" class="me-2 ms-auto rounded-lg border border-muted-200 px-2 py-0.5 dark:border-muted-800">
                                <BaseText size="xs">
                                  Esc
                                </BaseText>
                              </button>
                            </div>
                            <div class="flex h-[calc(100%_-_2.5rem)] flex-col p-3">
                              <BaseHeading
                                as="h4"
                                size="sm"
                                weight="medium"
                                class="text-muted-400"
                              >
                                Projects
                              </BaseHeading>
                              <div class="my-3 xs:nui-slimscroll xs:max-h-[128px] xs:min-h-[128px]">
                                <ul>
                                  <li>
                                    <div>
                                      <BaseHeading size="sm" weight="medium">
                                        No projects yet
                                      </BaseHeading>
                                      <BaseParagraph size="xs" class="text-muted-400">
                                        This workspace has no projects.
                                      </BaseParagraph>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div class="mt-auto">
                                <BaseButton
                                  rounded="md"
                                  variant="dark"
                                  class="w-full"
                                >
                                  <Icon name="lucide:plus" class="size-4" />
                                  <span>Create Project</span>
                                </BaseButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
              <!-- Menu -->
              <div class="row items-center transition-colors duration-300 dark:bg-muted-950 z-0 block bg-transparent">
                <!--Toolbar-->
                <div class="flex items-center justify-end gap-2">
                  <div role="button" class="cursor-pointer h-8 w-48 hidden md:flex items-center justify-between bg-white dark:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:ring-muted-300 dark:hover:ring-muted-700 gap-2 ps-3 pe-1 py-1 rounded-md ring-1 ring-muted-200 dark:ring-muted-800 transition-colors duration-300">
                    <div class="pointer-events-none">
                      <span class="font-sans text-sm">
                        Search...
                      </span>
                    </div>
                    <div class="flex gap-1">
                      <BaseKbd
                        size="sm"
                        variant="default"
                        class="!font-semibold h-6!"
                      >
                        Ctrl
                      </BaseKbd>
                      <BaseKbd
                        size="sm"
                        variant="default"
                        class="!px-2 !font-semibold h-6!"
                      >
                        K
                      </BaseKbd>
                    </div>
                  </div>
                  <BaseDropdown variant="default" :bindings="{
                    content: {
                      align: 'end',
                      sideOffset: 10,
                    }
                  }">
                    <template #button>
                      <button
                        type="button"
                      >

                        <img src="/img/people/29.jpg" class="size-8 rounded-full object-cover grayscale" />
                      </button>
                    </template>
                    <BaseDropdownItem>Leads</BaseDropdownItem>
                    <BaseDropdownItem>Projects</BaseDropdownItem>
                    <BaseDropdownItem>Team</BaseDropdownItem>
                    <BaseDropdownItem>Reports</BaseDropdownItem>
                    <BaseDropdownItem>
                      Settings
                      <template #end>
                        <BaseKbd size="sm">
                          <span class="text-xs font-mono">⌘</span>
                        </BaseKbd>
                        <BaseKbd size="sm">
                          <span class="text-xs font-mono px-0.5">P</span>
                        </BaseKbd>
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
              </div>
            </div>
          </nav>
          <!-- Menu links -->
          <div class="mx-auto flex w-full px-4 md:px-6 items-center border-b border-muted-200 dark:border-muted-800">
            <div class="flex gap-6 overflow-x-auto lg:overflow-x-hidden">
              <NuxtLink
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.to"
                class="flex items-center justify-center border-b-2 border-transparent py-3 font-sans text-sm text-center text-muted-400 transition-colors duration-300 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400"
                exact-active-class="!border-muted-900 dark:!border-muted-100 !text-muted-800 dark:!text-muted-100"
              >
                <BaseText size="sm">
                  {{ item.name }}
                </BaseText>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!--Content-->
        <div class="px-4 md:px-6 py-6 w-full">
          <div class="mb-4">
            <BaseHeading
              as="h2"
              size="3xl"
              weight="medium"
              class="text-muted-900 dark:text-white">
              Dashboard
            </BaseHeading>
            <div class="mt-4">
              <ul class="inline-flex items-center p-1 rounded-xl bg-muted-200/50 dark:bg-muted-800 text-sm text-muted-400 dark:text-muted-400">
                <li>
                  <a to="#" class="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 bg-white rounded-lg font-medium text-muted-900">
                    Overview
                  </a>
                </li>
                <li>
                  <a to="#" class="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 text-muted-400 dark:text-muted-400 hover:text-muted-500 dark:hover:text-muted-500">
                    Performance
                  </a>
                </li>
                <li>
                  <a to="#" class="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 text-muted-400 dark:text-muted-400 hover:text-muted-500 dark:hover:text-muted-500">
                    Statistics
                  </a>
                </li>
                <li>
                  <a to="#" class="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 text-muted-400 dark:text-muted-400 hover:text-muted-500 dark:hover:text-muted-500">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <!-- Tile -->
            <div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">
              <BaseCard
                rounded="lg"
                class="px-4 py-5 shadow-sm shadow-muted-200 dark:shadow-muted-800"
              >
                <div class="flex gap-4">
                  <div class="relative">
                    <BaseProgressCircle
                      v-model="progressCircle"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="lucide:dollar-sign"
                      class="block absolute start-1/2 top-1/2 size-4 -mt-1 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <BaseParagraph
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mb-2"
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
                </div>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">
              <BaseCard
                rounded="lg"
                class="px-4 py-5 shadow-sm shadow-muted-200 dark:shadow-muted-800"
              >
                <div class="flex gap-4">
                  <div class="relative">
                    <BaseProgressCircle
                      v-model="progressCircle"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="lucide:dollar-sign"
                      class="block absolute start-1/2 top-1/2 size-4 -mt-1 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <BaseParagraph
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mb-2"
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
                </div>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">
              <BaseCard
                rounded="lg"
                class="px-4 py-5 shadow-sm shadow-muted-200 dark:shadow-muted-800"
              >
                <div class="flex gap-4">
                  <div class="relative">
                    <BaseProgressCircle
                      v-model="progressCircle"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="lucide:dollar-sign"
                      class="block absolute start-1/2 top-1/2 size-4 -mt-1 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <BaseParagraph
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mb-2"
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
                </div>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">
              <BaseCard
                rounded="lg"
                class="px-4 py-5 shadow-sm shadow-muted-200 dark:shadow-muted-800"
              >
                <div class="flex gap-4">
                  <div class="relative">
                    <BaseProgressCircle
                      v-model="progressCircle"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="lucide:dollar-sign"
                      class="block absolute start-1/2 top-1/2 size-4 -mt-1 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <BaseParagraph
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mb-2"
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
                </div>
              </BaseCard>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 mt-4">
            <div class="lg:col-span-7 col-span-12 space-y-4">
              <BaseCard
                rounded="lg"
                class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
              >
                <div class="flex flex-col gap-4 pt-8">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="none"
                    class="text-muted-400 uppercase"
                  >
                    Account Balance
                  </BaseHeading>
                  <p>
                    <span
                      class="text-muted-800 font-sans text-4xl font-medium before:text-xl before:content-['$'] dark:text-white"
                    >
                      9,543.12
                    </span>
                  </p>
                  <div class="flex items-center gap-x-2">
                    <Icon
                      name="lucide:arrow-up"
                      class="size-4"
                    />
                    <span class="text-muted-400 font-sans text-sm">
                      $149.32 Today, Sep 25
                    </span>
                  </div>
                </div>
                <ApexChart v-bind="areaChart" />
              </BaseCard>
            </div>
            <div class="lg:col-span-5 col-span-12 space-y-4">
              <ShowcaseWidgetDirectory />
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>