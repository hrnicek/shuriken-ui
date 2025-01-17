<script setup lang="ts">
const route = useRoute()
const open = ref(false)
const isMobileOpen = ref(false)

// #region Demo data
const home = route.fullPath
const menuItems = [
  {
    name: 'Dashboard',
    icon: 'solar:spedometer-middle-linear',
    children: [
      {
        name: 'Analytics',
        to: home,
      },
      {
        name: 'Reports',
        to: '/',
      },
      {
        name: 'Forecast',
        to: '/',
      },
    ],
  },
  {
    name: 'Storefront',
    icon: 'solar:shop-linear',
    children: [
      {
        name: 'Overview',
        to: '/',
      },
      {
        name: 'Customers',
        to: '/',
      },
      {
        name: 'Orders',
        to: '/',
      },
    ],
  },
  {
    name: 'Payments',
    icon: 'solar:card-linear',
    children: [
      {
        name: 'Gateways',
        to: '/',
      },
      {
        name: 'Statistics',
        to: '/',
      },
      {
        name: 'API Endpoints',
        to: '/',
      },
    ],
  },
  {
    name: 'Products',
    icon: 'solar:box-minimalistic-linear',
    activePath: '/',
    to: '/',
  },
  {
    name: 'Messages',
    icon: 'solar:chat-round-unread-linear',
    activePath: '/',
    to: '/',
  },
]
// #endregion

const form = reactive({
  username: 'christinaOne',
  firstName: 'Christina',
  lastName: 'Keller',
  email: 'christina.keller@mail.com',
  jobTitle: 'UI/UX Designer',
  country: 'United States',
  website: 'christina-one.com',
  bio: '',
  showProfile: true,
})
</script>

<template>
  <div>
    <BaseCard
      rounded="lg"
      class="shadow-sm shadow-muted-200 dark:shadow-muted-800 overflow-hidden"
    >
      <div class="w-full h-[815px] flex flex-col lg:flex-row">
        <!-- Sidebar -->
        <aside
          class="relative z-50 hidden md:portrait:hidden md:landscape:flex lg:flex h-full w-[260px] flex-col bg-muted-900 shadow-lg transition-transform duration-300 dark:border-e dark:border-muted-800 dark:bg-muted-950"
          :class="[
            isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          ]"
        >
          <div class="flex h-16 items-center px-4">
            <div class="flex h-10 w-full items-center">
              <NuxtLink to="/">
                <LogoText class="h-6 text-white" />
              </NuxtLink>
            </div>
          </div>
          <div class="mt-6 flex w-full flex-col items-center gap-4 px-4 pb-6">
            <template
              v-for="(item, index) in menuItems"
              :key="item.name"
            >
              <CollapsibleRoot
                v-if="item.children"
                v-model:open="open"
                :default-open="index === 0"
                class="group w-full"
              >
                <CollapsibleTrigger
                  class="group/button flex w-full items-center justify-between rounded-xl group-data-[state=open]:bg-muted-800 dark:group-data-[state=open]:bg-muted-900 group-data-[state=open]:text-white group-data-[state=closed]:text-muted-500 group-data-[state=closed]:hover:bg-muted-800/50 dark:group-data-[state=closed]:hover:bg-muted-900/50 group-data-[state=closed]:hover:text-muted-100"
                >
                  <div
                    class="z-10 flex h-10 w-full items-center pe-4 ps-3"
                  >
                    <Icon
                      :name="item.icon"
                      class="size-5 text-muted-300"
                    />
                    <span class="ms-4 text-sm">{{ item.name }}</span>
                  </div>
                  <div
                    class="me-2 flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-500 transition hover:text-white group-hover/button:bg-muted-900 dark:group-hover/button:bg-muted-950 group-data-[state=open]:-rotate-90"
                  >
                    <Icon
                      name="lucide:chevron-left"
                      class="size-4 text-muted-300"
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent class="flex w-full flex-col overflow-hidden ps-5 transition-all">
                  <div
                    v-for="child in item.children"
                    :key="child.name"
                    class="relative mt-2 ps-4"
                  >
                    <div class="absolute bottom-4 left-0 h-16 w-4 rounded-bl-xl border-b-4 border-s-4 border-muted-800 dark:border-muted-900" />
                    <NuxtLink
                      :to="child.to"
                      class="relative flex h-10 w-full items-center rounded-xl pe-4 ps-5 text-muted-500 hover:bg-muted-800/50 hover:text-white dark:hover:bg-muted-900/50"
                      exact-active-class="!bg-muted-800 dark:!bg-muted-900 !text-muted-100"
                    >
                      <span class="text-sm">{{ child.name }}</span>
                    </NuxtLink>
                  </div>
                </CollapsibleContent>
              </CollapsibleRoot>
              <NuxtLink
                v-else
                :to="item.to"
                class="z-10 flex h-10 w-full items-center rounded-xl pe-4 ps-3 text-muted-500 hover:bg-muted-800/50 hover:text-white dark:hover:bg-muted-900/50"
              >
                <Icon
                  :name="item.icon"
                  class="size-5 text-muted-300"
                />
                <span class="ms-4 text-sm">{{ item.name }}</span>
              </NuxtLink>
            </template>
          </div>
          <div class="mt-auto w-full p-4">
            <NuxtLink
              to="/"
              class="z-10 flex h-10 w-full items-center rounded-xl pe-4 ps-3 text-muted-500 hover:bg-muted-800/50 hover:text-white dark:hover:bg-muted-900/50"
              exact-active-class="!bg-muted-800 dark:!bg-muted-900 !text-muted-100"
            >
              <Icon
                name="solar:widget-add-linear"
                class="size-5 text-muted-300"
              />
              <span class="ms-4 text-sm">Settings</span>
            </NuxtLink>
          </div>
        </aside>
        <!-- Content -->
        <div class="grow lg:max-h-full h-full flex flex-col">
          <!-- Header -->
          <div class="shrink-0 h-16 flex items-center justify-between px-4 md:px-6">
            <div class="flex items-center gap-3">
              <!-- Menu -->
              <div class="lg:portrait:block lg:hidden">
                <BaseButton
                  size="icon-sm"
                  variant="ghost"
                  rounded="md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="!size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                </BaseButton>
              </div>
              <!-- Workspace Dropdown -->
              <ShowcaseDashboardWorkspaceDropdown />
            </div>
            <div class="flex items-center justify-end gap-3">
              <div
                role="button"
                class="cursor-pointer h-8 w-48 hidden md:flex items-center justify-between bg-white dark:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:ring-muted-300 dark:hover:ring-muted-700 gap-2 ps-3 pe-1 py-1 rounded-md ring-1 ring-muted-200 dark:ring-muted-800 transition-colors duration-300"
              >
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
              <BaseDropdown
                variant="default"
                :bindings="{
                  content: {
                    align: 'end',
                    sideOffset: 10,
                  },
                }"
              >
                <template #button>
                  <button
                    type="button"
                  >
                    <img
                      src="/img/people/29.jpg"
                      class="size-8 rounded-full object-cover grayscale"
                    >
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
          <!-- Content -->
          <div class="grow w-full px-4 md:px-6 py-6">
            <!-- Title -->
            <div class="max-w-md">
              <BaseHeading
                as="h3"
                size="lg"
                weight="semibold"
                class="text-muted-900 dark:text-white"
              >
                Manage your account
              </BaseHeading>
              <BaseParagraph
                size="sm"
                weight="medium"
                lead="normal"
                class="text-muted-500 dark:text-muted-400 mt-2"
              >
                Make sure to check your preferences and update your account settings, accordingly to your needs.
              </BaseParagraph>
            </div>
            <!-- Links -->
            <div class="w-full overflow-x-auto pb-1 mt-8">
              <div class="border-muted-300 dark:border-muted-800 border-b">
                <nav class="-mb-px flex space-x-10">
                  <NuxtLink
                    to="/examples/forms"
                    class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
                    exact-active-class="border-muted-900! text-muted-900! dark:border-white! dark:text-white!"
                  >
                    Profile
                  </NuxtLink>
                  <a
                    href="#"
                    class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
                  >
                    Workspaces
                  </a>
                  <a
                    href="#"
                    class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
                  >
                    Wallet
                  </a>
                  <a
                    href="#"
                    class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
                  >
                    Integrations
                  </a>
                  <a
                    href="#"
                    class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
                  >
                    Billing
                  </a>
                </nav>
              </div>
            </div>
            <!-- Content -->
            <div>
              <div class="mt-6 space-y-1">
                <BaseParagraph
                  size="md"
                  weight="medium"
                  class="text-muted-900 dark:text-muted-200"
                >
                  Personal info
                </BaseParagraph>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Tell us a bit about yourself
                </BaseParagraph>
              </div>

              <form
                action="#"
                method="POST"
                class="mt-12 max-w-3xl"
              >
                <div class="space-y-8">
                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Profile Photo </label>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <div class="flex items-center space-x-6">
                        <BaseAvatar
                          src="/img/people/29.jpg"
                          size="md"
                          rounded="none"
                          mask="blob"
                          class="grayscale"
                        />
                        <BaseButton
                          rounded="md"
                          size="sm"
                        >
                          Remove
                        </BaseButton>
                        <BaseButton
                          rounded="md"
                          size="sm"
                          variant="dark"
                        >
                          Update
                        </BaseButton>
                      </div>
                    </div>
                  </div>

                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> First & Last Name </label>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <div class="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                        <!-- First Name -->
                        <BaseField required>
                          <div class="relative">
                            <BaseFieldController>
                              <BaseInput
                                v-model="form.firstName"
                                rounded="md"
                                placeholder="First Name"
                              />
                            </BaseFieldController>
                            <div class="absolute z-0 end-4 top-3 pointer-events-none">
                              <BaseFieldLoadingIndicator />
                              <BaseFieldSuccessIndicator />
                              <BaseFieldErrorIndicator />
                            </div>
                          </div>
                        </BaseField>
                        <!-- Last Name -->
                        <BaseField required>
                          <div class="relative">
                            <BaseFieldController>
                              <BaseInput
                                v-model="form.lastName"
                                rounded="md"
                                placeholder="Last Name"
                              />
                            </BaseFieldController>
                            <div class="absolute z-0 end-4 top-3 pointer-events-none">
                              <BaseFieldLoadingIndicator />
                              <BaseFieldSuccessIndicator />
                              <BaseFieldErrorIndicator />
                            </div>
                          </div>
                        </BaseField>
                      </div>
                    </div>
                  </div>

                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Email Address </label>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <!-- Last Name -->
                      <BaseField required>
                        <div class="relative">
                          <BaseFieldController>
                            <BaseInput
                              v-model="form.email"
                              rounded="md"
                              placeholder="Email Address"
                            />
                          </BaseFieldController>
                          <div class="absolute z-0 end-4 top-3 pointer-events-none">
                            <BaseFieldLoadingIndicator />
                            <BaseFieldSuccessIndicator />
                            <BaseFieldErrorIndicator />
                          </div>
                        </div>
                      </BaseField>
                    </div>
                  </div>

                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Write Your Bio </label>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <BaseTextarea
                        v-model="form.bio"
                        rounded="md"
                        placeholder="Short bio..."
                      />
                    </div>
                  </div>

                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <div class="sm:mt-px sm:pt-2">
                      <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Username </label>
                      <BaseParagraph
                        size="xs"
                        weight="medium"
                        class="text-muted-400"
                      >
                        You can change it later
                      </BaseParagraph>
                    </div>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <BaseField class="w-full">
                        <div class="relative">
                          <div class="flex w-full">
                            <BaseButton
                              variant="muted"
                              class="rounded-e-none w-28"
                            >
                              <span class="text-sm font-medium">users/</span>
                            </BaseButton>
                            <div class="grow relative">
                              <BaseFieldController>
                                <BaseInput
                                  v-model="form.username"
                                  class="border-s-none rounded-s-none"
                                  placeholder="Username..."
                                />
                              </BaseFieldController>
                            </div>
                          </div>
                          <div class="absolute z-0 end-4 top-3 pointer-events-none">
                            <BaseFieldLoadingIndicator />
                            <BaseFieldSuccessIndicator />
                            <BaseFieldErrorIndicator />
                          </div>
                        </div>
                      </BaseField>
                    </div>
                  </div>

                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Website </label>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <BaseField class="w-full">
                        <div class="relative">
                          <div class="flex w-full">
                            <BaseButton
                              variant="muted"
                              class="rounded-e-none w-28"
                            >
                              <span class="text-sm font-medium">https://</span>
                            </BaseButton>
                            <div class="grow relative">
                              <BaseFieldController>
                                <BaseInput
                                  v-model="form.website"
                                  class="border-s-none rounded-s-none"
                                  placeholder="Website..."
                                />
                              </BaseFieldController>
                            </div>
                          </div>
                          <div class="absolute z-0 end-4 top-3 pointer-events-none">
                            <BaseFieldLoadingIndicator />
                            <BaseFieldSuccessIndicator />
                            <BaseFieldErrorIndicator />
                          </div>
                        </div>
                      </BaseField>
                    </div>
                  </div>

                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Job Title </label>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <BaseInput
                        v-model="form.jobTitle"
                        type="text"
                        placeholder="Job Title"
                        rounded="md"
                        size="lg"
                        contrast="default-contrast"
                      />

                      <div class="relative mt-2 flex items-center">
                        <BaseCheckbox
                          v-model="form.showProfile"
                          color="primary"
                          label="Show this on my profile "
                        />
                      </div>
                    </div>
                  </div>

                  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Country </label>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <BaseSelect
                        v-model="form.country"
                        contrast="default-contrast"
                        size="lg"
                        rounded="md"
                      >
                        <option value="">
                          Select a country
                        </option>
                        <option value="United States">
                          United States
                        </option>
                        <option value="Canada">
                          Canada
                        </option>
                        <option value="United Kingdom">
                          United Kingdom
                        </option>
                        <option value="France">
                          France
                        </option>
                        <option value="China">
                          China
                        </option>
                      </BaseSelect>
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-12">
                  <BaseButton
                    size="lg"
                    rounded="md"
                    color="primary"
                    class="w-full md:w-48"
                  >
                    Update Profile
                  </BaseButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
