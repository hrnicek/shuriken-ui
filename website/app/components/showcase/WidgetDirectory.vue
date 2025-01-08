<script setup lang="ts">
const directory: any = {
  A: [
    {
      id: 1,
      name: 'Judith Artmann',
      email: 'judith.artmann@mail.com',
      title: 'Project Manager',
      status: 'online',
      photo: '/img/people/32.jpg',
    },
    {
      id: 2,
      name: 'James Aguirre',
      email: 'james.aguirre@mail.com',
      title: 'UX Designer',
      status: 'offline',
      photo: '/img/people/25.jpg',
    },
    {
      id: 3,
      name: 'Clark Atkinson',
      email: 'clark.atkinson@mail.com',
      title: 'Frontend Developer',
      status: 'offline',
      photo: '/img/people/27.jpg',},
    {
      id: 4,
      name: 'Fabricio Andrews',
      email: 'fabricio.andrews@mail.com',
      title: 'Backend Developer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  B: [
    {
      id: 5,
      name: 'Angela Beaver',
      email: 'angela.beaver@mail.com',
      title: 'UI Designer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Yvette Blanchard',
      email: 'yvette.blanchard@mail.com',
      title: 'QA Engineer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 7,
      name: 'Lawrence Brooks',
      email: 'lawrence.brooks@mail.com',
      title: 'DevOps Engineer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  C: [
    {
      id: 8,
      name: 'Jeffrey Clark',
      email: 'jeffrey.clark@mail.com',
      title: 'Fullstack Developer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 9,
      name: 'Kathryn Cooper',
      email: 'kathryn.cooper@mail.com',
      title: 'Product Manager',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  E: [
    {
      id: 10,
      name: 'Alicia Edwards',
      email: 'alicia.edwards@mail.com',
      title: 'Data Analyst',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 11,
      name: 'Benjamin Emerson',
      email: 'benjamin.emerson@mail.com',
      title: 'Software Engineer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 12,
      name: 'Jillian Erics',
      email: 'jillian.erics@mail.com',
      title: 'UI/UX Designer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 13,
      name: 'Chelsea Evans',
      email: 'chelsea.evans@mail.com',
      title: 'Product Designer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  G: [
    {
      id: 14,
      name: 'Michael Gillard',
      email: 'micheal.gillard@mail.com',
      title: 'Product Manager',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 15,
      name: 'Dries Giuessepe',
      email: 'dries.giuessepe@mail.com',
      title: 'Software Engineer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  M: [
    {
      id: 16,
      name: 'Jenny Harrison',
      email: 'jenny.harrison@mail.com',
      title: 'QA Engineer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 17,
      name: 'Lindsay Hatley',
      email: 'lindsay.hatley@mail.com',
      title: 'Frontend Developer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 18,
      name: 'Anna Hill',
      email: 'anna.hill@mail.com',
      title: 'Backend Developer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  S: [
    {
      id: 19,
      name: 'Courtney Samuels',
      email: 'courtney.samuels@mail.com',
      title: 'UI Designer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 20,
      name: 'Tom Simpson',
      email: 'tom.simpson@mail.com',
      title: 'QA Engineer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  T: [
    {
      id: 21,
      name: 'Floyd Thompson',
      email: 'floyd.thompson@mail.com',
      title: 'Product Designer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 22,
      name: 'Leonard Timmons',
      email: 'leonard.timmons@mail.com',
      title: 'Product Manager',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 23,
      name: 'Whitney Trudeau',
      email: 'whitney.trudeau@mail.com',
      title: 'Software Engineer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  W: [
    {
      id: 24,
      name: 'Kristin Watson',
      email: 'kristin.watson@mail.com',
      title: 'Frontend Developer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 25,
      name: 'Emily Wilson',
      email: 'emily.wilson@mail.com',
      title: 'Backend Developer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  Y: [
    {
      id: 26,
      name: 'Emma Young',
      email: 'emma.young@mail.com',
      title: 'UI/UX Designer',
      status: 'offline',
      photo:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
}

const filter = ref('')

// Filter by name and title
const filteredDirectory = computed(() => {
  return Object.keys(directory).reduce((acc, letter) => {
    const filtered = directory[letter].filter((person: any) => {
      return person.name.toLowerCase().includes(filter.value.toLowerCase()) ||
        person.title.toLowerCase().includes(filter.value.toLowerCase())
    })

    if (filtered.length) {
      acc[letter] = filtered
    }

    return acc
  }, {} as any)
})
</script>

<template>
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="mb-6 flex items-center justify-between">
      <div class="space-y-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>User directory </span>
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          Enter your account info to sign in
        </BaseParagraph>
      </div>
      <!-- Filter -->
      <div class="w-full max-w-[200px]">
        <BaseField class="w-full">
          <div class="relative">
            <div class="flex w-full">
              <div class="border-s border-y rounded-s-md border-muted-300 dark:border-muted-800 h-10 ps-3 pe-2 -me-2 flex items-center justify-center">
                <Icon name="lucide:search" class="size-4 text-muted-500" />
              </div>
              <div class="grow relative">
                <BaseFieldController>
                  <BaseInput v-model="filter" size="md" class="border-s-0 rounded-s-none" placeholder="Search users..." />
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
    </div>
    <div v-if="Object.keys(filteredDirectory).length === 0">
      <div class="flex flex-col gap-3 py-24">
        <div class="text-center">
          <Icon name="arcticons:anycubic" class="size-16 mx-auto mb-4 text-muted-500" aria-hidden="true" />
          <BaseHeading as="h3" class="text-lg font-semibold text-muted-900 dark:text-white">
            No results found
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400 max-w-xs mx-auto">
            Try adjusting your search or filter to find what you're looking for.
          </BaseParagraph>
        </div>
      </div>
    </div>
    <div v-else class="h-[370px]">
      <div class="h-full overflow-y-auto pe-2 nui-slimscroll" aria-label="Directory">
        <div v-for="letter in Object.keys(filteredDirectory)" :key="letter" class="relative">
          <div class="sticky top-0 z-10 rounded-md border border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-900 px-3 py-1.5 text-sm/6 font-semibold text-muted-900 dark:text-white">
            <h3>{{ letter }}</h3>
          </div>
          <ul role="list" class="divide-y divide-muted-100 dark:divide-muted-800/70">
            <li v-for="person in filteredDirectory[letter as any]" :key="person.email" class="flex gap-x-4 px-3 py-5">
              <div class="flex gap-x-4 items-center min-w-0">
                <BaseAvatar size="sm" :src="person.photo" class="grayscale" />
                <div class="min-w-0">
                  <BaseParagraph size="sm" weight="medium" class="text-muted-900 dark:text-white">{{ person.name }}</BaseParagraph>
                  <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">{{ person.email }}</BaseParagraph>
                </div>
              </div>
              <div class="flex shrink-0 items-center gap-x-6 ms-auto">
                <div class="hidden sm:flex sm:flex-col sm:items-end">
                  <BaseParagraph size="xs" weight="medium" class="text-muted-900 dark:text-white">{{ person.title }}</BaseParagraph>
                  <div class="mt-1 flex items-center gap-x-1.5">
                    <div class="relative flex items-center justify-center">
                      <BaseChip position="static" size="xs" color="custom" class="relative top-[1px]" :class="person.status === 'online' ? 'text-muted-900 dark:text-white' : 'text-muted-300 dark:text-muted-600'" :pulse="person.status === 'online'" />
                    </div>
                    <BaseParagraph size="xs" class="capitalize text-muted-500 dark:text-muted-300">{{ person.status }}</BaseParagraph>
                  </div>
                </div>
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
                        class="cursor-pointer"
                      >
                        <Icon name="lucide:more-horizontal" class="size-4" />
                      </BaseButton>
                    </template>
                    
                    <BaseDropdownItem>Send message</BaseDropdownItem> 
                    <BaseDropdownItem>View profile</BaseDropdownItem> 
                    <BaseDropdownSeparator />
                    <BaseDropdownItem>Invite to workspace</BaseDropdownItem> 
                  </BaseDropdown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BaseCard>
</template>