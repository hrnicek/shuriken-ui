<script setup lang="ts">
const users = [
  {
    id: '1',
    name: 'Erin Lindford',
    role: 'Product Manager',
    photo: '/img/people/44.jpg',
  },
  {
    id: '2',
    name: 'Sierra Brooks',
    role: 'Director, Sales',
    photo: '/img/people/58.jpg',
  },
  {
    id: '3',
    name: 'Esther Howard',
    role: 'Frontend Developer',
    photo: '/img/people/17.jpg',
  },
  {
    id: '4',
    name: 'Armin Kalar',
    role: 'Backend Developer',
    photo: '/img/people/41.jpg',
  },
]

const selectedUsers = ref([users[0]])
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <CheckboxGroupRoot v-model="selectedUsers" class="w-full grid md:grid-cols-2 gap-4">
          <CheckboxRoot
            v-for="user of users"
            :key="user.id"
            name="instruments"
            :value="user.id"
            class="group/checkbox focus-visible:nui-focus rounded-md"
          >
            <BaseCard rounded="md" class="relative w-full p-4 ring-2 ring-transparent group-data-[state=checked]/checkbox:ring-primary-500">
              <div class="flex items-center gap-3">
                <BaseAvatar
                  :src="user.photo"
                  :alt="user.name"
                />
                <div class="text-start">
                  <BaseHeading as="h5" size="sm" weight="medium">
                    {{ user.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" weight="medium" class="text-muted-600 dark:text-muted-400">
                    {{ user.role }}
                  </BaseParagraph>
                </div>
              </div>
              <CheckboxIndicator class="absolute top-3 end-3 z-10 ms-auto text-white starting:opacity-0 transition-opacity duration-150">
                <div class="size-5 flex items-center justify-center rounded-full bg-primary-500">
                  <Icon name="lucide:check" class="size-3" />
                </div>
              </CheckboxIndicator>
            </BaseCard>
          </CheckboxRoot>
        </CheckboxGroupRoot>
      </div>
    </div>
  </div>
</template>
