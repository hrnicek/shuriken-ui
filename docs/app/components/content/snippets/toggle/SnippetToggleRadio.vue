<script setup lang="ts">
const plans = [
  { value: 'free', label: 'Free', price: '0€', description: 'Limited access to courses and content' },
  { value: 'monthly', label: 'Monthly', price: '3.99€', description: 'Access to all courses and content' },
  { value: 'yearly', label: 'Yearly', price: '39.99€', description: 'Access to live mentoring content' },
]

const selectedPlan = ref(plans[0])
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <RadioGroupRoot
          v-model="selectedPlan"
          name="plan"
          class="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <RadioGroupItem
            v-for="plan in plans"
            :key="plan.label"
            :value="plan.value"
            :default-checked="plan.value === selectedPlan.value"
            class="relative overflow-hidden text-start bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700 rounded-lg ring-2 ring-transparent data-[state=checked]:ring-primary-500 focus-visible:nui-focus"
          >
            <RadioGroupIndicator class="absolute top-3 end-3 z-10 ms-auto text-white starting:opacity-0 transition-opacity duration-150">
              <div class="size-5 flex items-center justify-center rounded-full bg-primary-500">
                <Icon name="lucide:check" class="size-3" />
              </div>
            </RadioGroupIndicator>

            <div class="p-4">
              <BaseParagraph size="xs" weight="semibold" tracking="wide" class="uppercase text-muted-600 dark:text-muted-400">
                {{ plan.label }}
              </BaseParagraph>
              <BaseParagraph size="2xl" lead="none" weight="bold" class="mt-2 text-muted-900 dark:text-white">
                {{ plan.price }}
              </BaseParagraph>
              <div class="mt-4">
                <BaseParagraph size="sm" lead="tight" class="text-muted-700 dark:text-muted-300">
                  {{ plan.description }}
                </BaseParagraph>
              </div>
            </div>
          </RadioGroupItem>
        </RadioGroupRoot>
      </div>
    </div>
  </div>
</template>
