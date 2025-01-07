<script setup lang="ts">
const suppliers = ref([
  {
    name: 'Agro Supply',
    email: 'contact@agrosupply.co',
    pending: 879.12,
    status: 'ontime'
  },
  {
    name: 'Farmers Market',
    email: 'clients@farmersmarket.com',
    pending: 1548.97,
    status: 'delayed'
  },
  {
    name: 'Green Fields',
    email: 'supply@greenfields.com',
    pending: 2546.21,
    status: 'ontime'
  },
  {
    name: 'Organic Food',
    email: 'contact@organicfood.com',
    pending: 753.46,
    status: 'delayed'
  },
])

const columns = ref([
  {
    key: 'name',
    label: 'Name',
    active: true,
  },
  {
    key: 'email',
    label: 'Email',
    active: true,
  },
  {
    key: 'pending',
    label: 'Pending',
    active: true,
  },
])

const activeColumns = ref(['name', 'email', 'pending'])
const filter = ref('')

// Filter by name and email
const filteredSuppliers = computed(() => {
  return suppliers.value.filter((supplier) => {
    return supplier.name.toLowerCase().includes(filter.value.toLowerCase()) ||
      supplier.email.toLowerCase().includes(filter.value.toLowerCase())
  })
})

// Pagination
const route = useRoute()
const router = useRouter()
const page = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})

</script>

<template>
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="mb-6 flex items-center">
      <div class="space-y-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Table</span>
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          Enter your credit card information
        </BaseParagraph>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <!-- Filter -->
        <div class="w-full max-w-xs">
          <BaseField class="w-full">
            <div class="relative">
              <div class="flex w-full">
                <BaseIconBox variant="default" size="xs" class="rounded-e-none border-e-0!">
                  <Icon name="lucide:search" class="size-4 text-muted-500" />
                </BaseIconBox>
                <div class="grow relative">
                  <BaseFieldController>
                    <BaseInput v-model="filter" size="sm" class="border-s-none rounded-s-none" placeholder="Filter suppliers..." />
                  </BaseFieldController>
                </div>
              </div>
              <div class="absolute z-0 end-4 top-3 pointer-events-none" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
          </BaseField>
        </div>
        <!-- Columns -->
        <div>
          <BaseField>
            <div class="relative">
              <BaseFieldController>
                <BaseSelect v-model="activeColumns" multiple size="sm" placeholder="Columns">
                  <BaseSelectItem v-for="column in columns" :key="column.key" :value="column.key">{{ column.label }}</BaseSelectItem>
                </BaseSelect>
              </BaseFieldController>
              <div class="absolute z-0 end-10 top-3 pointer-events-none" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
          </BaseField>
        </div>
      </div>
      <!-- Table -->
      <div class="rounded-md border border-muted-300 dark:border-muted-800">
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead>
              <tr class="border-b border-muted-300 dark:border-muted-800">
                <th class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle">Name</th>
                <th class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle">Email</th>
                <th class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle">Pending</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="supplier in filteredSuppliers"
                :key="supplier.name"
                class="border-t first:border-t-none border-muted-300 dark:border-muted-800"
              >
                <td class="text-start h-11 px-4 align-middle">
                  <BaseParagraph size="sm" class="text-muted-900 dark:text-muted-100 font-medium">
                    {{ supplier.name }}
                  </BaseParagraph>
                </td>
                <td class="text-start h-11 px-4 align-middle">
                  <BaseParagraph size="xs" class="text-muted-700 dark:text-muted-400 font-medium">
                    <a :href="`mailto:${supplier.email}`" class="hover:text-muted-900 hover:underline underline-offset-4">{{ supplier.email }}</a>
                  </BaseParagraph>
                </td>
                <td class="text-start h-11 px-4 align-middle">
                  <BaseParagraph size="sm" class="text-muted-900 font-semibold dark:text-muted-100">
                    ${{ supplier.pending.toFixed(2) }}
                  </BaseParagraph>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Pagination -->
      <div class="relative">
        <BasePagination
          :items-per-page="8"
          :total="512"
          v-model:page="page"
          :sibling-count="1"
          rounded="md"
          size="sm"
          variant="dark"
          :wrapped="false"
        />
      </div>
    </div>
  </BaseCard>
</template>