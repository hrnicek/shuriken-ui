<script setup lang="ts">
const team = [
  {
    id: 1,
    photo: '/img/people/29.jpg',
    name: 'Jane Cooper',
    email: 'janecooper@mail.com',
    role: 'admin',
  },
  {
    id: 2,
    photo: '/img/people/30.jpg',
    name: 'Alan Smith',
    email: 'alansmith@mail.com',
    role: 'member',
  },
  {
    id: 3,
    photo: '/img/people/31.jpg',
    name: 'Kelly Johnson',
    email: 'kellyjohnson@mail.com',
    role: 'member',
  },
]
</script>

<template>
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="mb-8 flex items-center justify-between">
      <div class="space-y-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Team</span>
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          Manage member permissions
        </BaseParagraph>
      </div>
      <div class="relative">
        <BaseButton size="icon-sm" variant="dark" rounded="full">
          <Icon name="lucide:plus" class="size-4" />
        </BaseButton>
      </div>
    </div>
    <div>
      <ul class="space-y-6 mb-3">
        <li v-for="member in team" :key="member.id">
          <div class="flex items-center gap-2">
            <BaseAvatar
              size="xs"
              :src="member.photo"
              :alt="member.name"
              class="grayscale"
            />
            <div class="font-sans">
              <span class="block text-sm font-medium text-muted-800 dark:text-muted-100">
                {{ member.name }}
              </span>
              <span class="block text-xs text-muted-500 dark:text-muted-400">
                {{ member.email }}
              </span>
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
                    size="sm"
                    class="group cursor-pointer"
                  >
                    {{ member.role }} <Icon name="lucide:chevron-down" class="block h-4 w-4 ms-2 transition-transform group-data-[state=open]:rotate-180" />
                  </BaseButton>
                </template>
                
                <BaseDropdownItem>Admin</BaseDropdownItem> 
                <BaseDropdownItem>Manager</BaseDropdownItem> 
                <BaseDropdownItem>Member</BaseDropdownItem> 
                <BaseDropdownItem>Reader</BaseDropdownItem> 
              </BaseDropdown>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </BaseCard>
</template>