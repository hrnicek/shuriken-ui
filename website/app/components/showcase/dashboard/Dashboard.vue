
<script setup lang="ts">
const route = useRoute()
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
    to: '#',
  },
  {
    name: 'Products',
    activePath: '/',
    to: '#',
  },
  {
    name: 'Settings',
    activePath: '/',
    to: '#',
  },
]

const transactions = ref(84)
const profit = ref(26)
const newCustomers = ref(12)
const expenses = ref(46)
</script>

<template>
  <div>
    <BaseCard rounded="lg" class="shadow-sm shadow-muted-200 dark:shadow-muted-800 overflow-hidden">
      <div class="w-full h-[825px] flex flex-col">
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
                  <ShowcaseDashboardWorkspaceDropdown />
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
        <div class="px-4 md:px-6 pt-10 pb-6 w-full">
          <div class="mb-8">
            <BaseHeading
              as="h2"
              size="2xl"
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
                      v-model="transactions"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="solar:bag-smile-linear"
                      class="block absolute start-1/2 top-1/2 size-5 -mt-1 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <BaseParagraph
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mb-2"
                    >
                      <span>Transactions</span>
                    </BaseParagraph>
                    <BaseParagraph
                      size="2xl"
                      weight="bold"
                      lead="none"
                      class="text-muted-900 dark:text-white mb-2"
                    >
                      <span>$6,921.18</span>
                    </BaseParagraph>
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      lead="tight"
                      class="text-muted-500"
                    >
                      <span>+11% since last month</span>
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
                      v-model="profit"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="solar:crown-line-linear"
                      class="block absolute start-1/2 top-1/2 size-5 -mt-1 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <BaseParagraph
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mb-2"
                    >
                      <span>Profit</span>
                    </BaseParagraph>
                    <BaseParagraph
                      size="2xl"
                      weight="bold"
                      lead="none"
                      class="text-muted-900 dark:text-white mb-2"
                    >
                      <span>$1,679.49</span>
                    </BaseParagraph>
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      lead="tight"
                      class="text-muted-500"
                    >
                      <span>+2.3% since last month</span>
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
                      v-model="newCustomers"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="solar:shop-linear"
                      class="block absolute start-1/2 top-1/2 size-5 -mt-1 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <BaseParagraph
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mb-2"
                    >
                      <span>New Customers</span>
                    </BaseParagraph>
                    <BaseParagraph
                      size="2xl"
                      weight="bold"
                      lead="none"
                      class="text-muted-900 dark:text-white mb-2"
                    >
                      <span>741</span>
                    </BaseParagraph>
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      lead="tight"
                      class="text-muted-500"
                    >
                      <span>-1.2% since last month</span>
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
                      v-model="expenses"
                      :size="64"
                      :thickness="1"
                      variant="dark"
                    />
                    <Icon
                      name="solar:suitcase-lines-linear"
                      class="block absolute start-1/2 top-1/2 size-5 -mt-1 -translate-x-1/2 -translate-y-1/2"
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
                      <span>$3,148.62</span>
                    </BaseParagraph>
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      lead="tight"
                      class="text-muted-500"
                    >
                      <span>+5.1% since last month</span>
                    </BaseParagraph>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 mt-4">
            <div class="lg:col-span-7 col-span-12 space-y-4">
              <ShowcaseDashboardChartArea />
            </div>
            <div class="lg:col-span-5 col-span-12 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="relative">
                  <BaseCard rounded="lg" class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800">
                    <div class="mb-4 flex items-center">
                      <div class="flex items-center gap-2">
                        <BaseTag rounded="full">
                          <span class="inline-flex items-center gap-1">
                            <BaseChip position="static" size="xs" color="custom" pulse class="text-muted-900 dark:text-white" />
                            <span>Trending</span>
                          </span>
                        </BaseTag>
                      </div>
                      <div class="ms-auto">
                        <BaseDropdown
                          :bindings="{
                            content: {
                              sideOffset: 10,
                              align: 'end',
                            }
                          }"
                        >
                          <template #button>
                            <BaseButton
                              variant="ghost"
                              size="icon-sm"
                              rounded="md"
                            >
                              <Icon name="lucide:more-horizontal" class="size-4" />
                            </BaseButton>
                          </template>
                        
                          <BaseDropdownItem>View details</BaseDropdownItem>
                          <BaseDropdownItem>View history</BaseDropdownItem>
                          <BaseDropdownSeparator />
                          <BaseDropdownItem>Order stock</BaseDropdownItem>
                        </BaseDropdown>
                      </div>
                    </div>
                    <div class="mb-6">
                      <ShowcaseDashboardChartVectorOne
                        class="text-muted-200 dark:text-muted-700 mx-auto mb-4"
                      />
                    </div>
                    <div class="flex items-center gap-3">
                      <Icon name="logos:github-icon" class="size-5 grayscale" />
                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="semibold"
                          lead="none"
                          class="text-muted-800 dark:text-white"
                        >
                          <span>GTB</span>
                        </BaseHeading>
                      </div>
                      <div class="ms-auto flex items-center gap-1">
                        <BaseText size="lg" weight="medium"
                          class="text-black dark:text-white"
                        >
                          $119.21
                        </BaseText>
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="relative">
                  <BaseCard rounded="lg" class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800">
                    <div class="mb-4 flex items-center">
                      <div class="ms-auto">
                        <BaseDropdown
                          :bindings="{
                            content: {
                              sideOffset: 10,
                              align: 'end',
                            }
                          }"
                        >
                          <template #button>
                            <BaseButton
                              variant="ghost"
                              size="icon-sm"
                              rounded="md"
                            >
                              <Icon name="lucide:more-horizontal" class="size-4" />
                            </BaseButton>
                          </template>
                        
                          <BaseDropdownItem>View details</BaseDropdownItem>
                          <BaseDropdownItem>View history</BaseDropdownItem>
                          <BaseDropdownSeparator />
                          <BaseDropdownItem>Order stock</BaseDropdownItem>
                        </BaseDropdown>
                      </div>
                    </div>
                    <div class="mb-6">
                      <ShowcaseDashboardChartVectorTwo
                        class="text-muted-200 dark:text-muted-700 mx-auto mb-4"
                      />
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="logos:nuxt-icon" class="size-5 grayscale" />
                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="semibold"
                          lead="none"
                          class="text-muted-800 dark:text-white"
                        >
                          <span>NXT</span>
                        </BaseHeading>
                      </div>
                      <div class="ms-auto flex items-center gap-1">
                        <BaseText size="lg" weight="medium"
                          class="text-black dark:text-white"
                        >
                          $92.39
                        </BaseText>
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="relative">
                  <BaseCard rounded="lg" class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800">
                    <div class="mb-4 flex items-center">
                      <div class="ms-auto">
                        <BaseDropdown
                          :bindings="{
                            content: {
                              sideOffset: 10,
                              align: 'end',
                            }
                          }"
                        >
                          <template #button>
                            <BaseButton
                              variant="ghost"
                              size="icon-sm"
                              rounded="md"
                            >
                              <Icon name="lucide:more-horizontal" class="size-4" />
                            </BaseButton>
                          </template>
                        
                          <BaseDropdownItem>View details</BaseDropdownItem>
                          <BaseDropdownItem>View history</BaseDropdownItem>
                          <BaseDropdownSeparator />
                          <BaseDropdownItem>Order stock</BaseDropdownItem>
                        </BaseDropdown>
                      </div>
                    </div>
                    <div class="mb-6">
                      <ShowcaseDashboardChartVectorThree
                        class="text-muted-200 dark:text-muted-700 mx-auto mb-4"
                      />
                    </div>
                    <div class="flex items-center gap-3">
                      <Icon name="logos:tailwindcss-icon" class="size-5 grayscale" />
                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="semibold"
                          lead="none"
                          class="text-muted-800 dark:text-white"
                        >
                          <span>TSS</span>
                        </BaseHeading>
                      </div>
                      <div class="ms-auto flex items-center gap-1">
                        <BaseText size="lg" weight="medium"
                          class="text-black dark:text-white"
                        >
                          $513.19
                        </BaseText>
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="relative">
                  <BaseCard rounded="lg" class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800">
                    <div class="mb-4 flex items-center">
                      <div class="ms-auto">
                        <BaseDropdown
                          :bindings="{
                            content: {
                              sideOffset: 10,
                              align: 'end',
                            }
                          }"
                        >
                          <template #button>
                            <BaseButton
                              variant="ghost"
                              size="icon-sm"
                              rounded="md"
                            >
                              <Icon name="lucide:more-horizontal" class="size-4" />
                            </BaseButton>
                          </template>
                        
                          <BaseDropdownItem>View details</BaseDropdownItem>
                          <BaseDropdownItem>View history</BaseDropdownItem>
                          <BaseDropdownSeparator />
                          <BaseDropdownItem>Order stock</BaseDropdownItem>
                        </BaseDropdown>
                      </div>
                    </div>
                    <div class="mb-6">
                      <ShowcaseDashboardChartVectorOne
                        class="text-muted-200 dark:text-muted-700 mx-auto mb-4"
                      />
                    </div>
                    <div class="flex items-center gap-3">
                      <Icon name="logos:react" class="size-5 grayscale" />
                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="semibold"
                          lead="none"
                          class="text-muted-800 dark:text-white"
                        >
                          <span>RCT</span>
                        </BaseHeading>
                      </div>
                      <div class="ms-auto flex items-center gap-1">
                        <BaseText size="lg" weight="medium"
                          class="text-black dark:text-white"
                        >
                          $362.14
                        </BaseText>
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>