<script setup lang="ts">
const preferences = ref([
  {
    id: '1',
    name: 'Notifications',
    description: 'Receive e-mail notifications',
    checked: true,
  },
  {
    id: '2',
    name: 'API Access',
    description: 'Enable access to the API',
    checked: false,
  },
  {
    id: '3',
    name: 'Auto Updates',
    description: 'Keep up to date',
    checked: true,
  },
  {
    id: '4',
    name: 'Backup',
    description: 'Automatic backups',
    checked: false,
  },
])
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
          <span>Settings</span>
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          Manage your preferences here
        </BaseParagraph>
      </div>
    </div>
    <div>
      <ul class="space-y-4">
        <li v-for="preference in preferences" :key="preference.id">
          <div class="flex items-center">
            <div class="font-sans">
              <p class="block text-sm font-medium text-muted-800 dark:text-muted-100">
                {{ preference.name }}
              </p>
              <p class="block text-xs text-muted-500 dark:text-muted-400">
                {{ preference.description }}
              </p>
            </div>
            <div class="ms-auto">
              <BaseSwitchBall
                v-model="preference.checked"
                :id="preference.id"
                variant="dark"
              />
            </div>
          </div>
        </li>
      </ul>
      <div class="mt-6">
        <BaseButton rounded="md" class="w-full">
          Save Preferences
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>
