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
      status: 'online',
      photo: '/img/people/27.jpg',
    },
    {
      id: 4,
      name: 'Elen Adkins',
      email: 'elen.adkins@mail.com',
      title: 'Backend Developer',
      status: 'online',
      photo: '/img/people/52.jpg',
    },
  ],
  B: [
    {
      id: 5,
      name: 'Thomas Bertolino',
      email: 'thomas.bertolino@mail.com',
      title: 'UI Designer',
      status: 'offline',
      photo: '/img/people/49.jpg',
    },
    {
      id: 6,
      name: 'Amber Brenning',
      email: 'amber.brenning@mail.com',
      title: 'QA Engineer',
      status: 'offline',
      photo: '/img/people/30.jpg',
    },
    {
      id: 7,
      name: 'Nicoletta Barone',
      email: 'nicoletta.barone@mail.com',
      title: 'DevOps Engineer',
      status: 'online',
      photo: '/img/people/17.jpg',
    },
  ],
  C: [
    {
      id: 8,
      name: 'William Cheller',
      email: 'william.cheller@mail.com',
      title: 'Fullstack Developer',
      status: 'online',
      photo: '/img/people/37.jpg',
    },
    {
      id: 9,
      name: 'Luis Espinoza',
      email: 'luis.espinoza@mail.com',
      title: 'Product Manager',
      status: 'offline',
      photo: '/img/people/43.jpg',
    },
  ],
  E: [
    {
      id: 10,
      name: 'Lauren Edwards',
      email: 'lauren.edwards@mail.com',
      title: 'Data Analyst',
      status: 'online',
      photo: '/img/people/46.jpg',
    },
    {
      id: 11,
      name: 'Lakisha Erics',
      email: 'lakisha.erics@mail.com',
      title: 'Software Engineer',
      status: 'offline',
      photo: '/img/people/48.jpg',
    },
    {
      id: 12,
      name: 'Robert Emerson',
      email: 'robert.emerson@mail.com',
      title: 'UI/UX Designer',
      status: 'offline',
      photo: '/img/people/22.jpg',
    },
    {
      id: 13,
      name: 'Ryona Elkervez',
      email: 'ryona.elkervez@mail.com',
      title: 'Product Designer',
      status: 'offline',
      photo: '/img/people/28.jpg',
    },
  ],
  G: [
    {
      id: 14,
      name: 'Sally Grinson',
      email: 'sally.grinson@mail.com',
      title: 'Product Manager',
      status: 'offline',
      photo: '/img/people/11.jpg',
    },
    {
      id: 15,
      name: 'Emilia Galieni',
      email: 'emilia.galieni@mail.com',
      title: 'Software Engineer',
      status: 'offline',
      photo: '/img/people/21.jpg',
    },
  ],
  M: [
    {
      id: 16,
      name: 'John Maynard',
      email: 'john.maynard@mail.com',
      title: 'QA Engineer',
      status: 'offline',
      photo: '/img/people/23.jpg',
    },
    {
      id: 17,
      name: 'Billie Murphy',
      email: 'billie.murphy@mail.com',
      title: 'Frontend Developer',
      status: 'online',
      photo: '/img/people/34.jpg',
    },
    {
      id: 18,
      name: 'Beth Miller',
      email: 'beth.miller@mail.com',
      title: 'Backend Developer',
      status: 'online',
      photo: '/img/people/42.jpg',
    },
  ],
  S: [
    {
      id: 19,
      name: 'Joshua Settler',
      email: 'joshua.settler@mail.com',
      title: 'UI Designer',
      status: 'offline',
      photo: '/img/people/6.jpg',
    },
    {
      id: 20,
      name: 'Henry Smith',
      email: 'henry.smith@mail.com',
      title: 'QA Engineer',
      status: 'offline',
      photo: '/img/people/19.jpg',
    },
  ],
  T: [
    {
      id: 21,
      name: 'Gavin Thompson',
      email: 'gavin.thompson@mail.com',
      title: 'Product Designer',
      status: 'offline',
      photo: '/img/people/39.jpg',
    },
    {
      id: 22,
      name: 'Esteban Tovar',
      email: 'esteban.tovar@mail.com',
      title: 'Product Manager',
      status: 'offline',
      photo: '/img/people/59.jpg',
    },
    {
      id: 23,
      name: 'Myriam Toravela',
      email: 'myriam.toravela@mail.com',
      title: 'Software Engineer',
      status: 'online',
      photo: '/img/people/56.jpg',
    },
  ],
  W: [
    {
      id: 24,
      name: 'Edmund Walsh',
      email: 'edmund.walsh@mail.com',
      title: 'Frontend Developer',
      status: 'offline',
      photo: '/img/people/7.jpg',
    },
    {
      id: 25,
      name: 'Brittany Wilson',
      email: 'brittany.wilson@mail.com',
      title: 'Backend Developer',
      status: 'offline',
      photo: '/img/people/14.jpg',
    },
  ],
  Y: [
    {
      id: 26,
      name: 'George Yates',
      email: 'george.yates@mail.com',
      title: 'UI/UX Designer',
      status: 'offline',
      photo: '/img/people/47.jpg',
    },
  ],
}

const filter = ref('')

// Filter by name and title
const filteredDirectory = computed(() => {
  return Object.keys(directory).reduce((acc, letter) => {
    const filtered = directory[letter].filter((person: any) => {
      return person.name.toLowerCase().includes(filter.value.toLowerCase())
        || person.title.toLowerCase().includes(filter.value.toLowerCase())
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
        <BaseParagraph
          size="sm"
          class="text-muted-600 dark:text-muted-400"
        >
          Enter your account info to sign in
        </BaseParagraph>
      </div>
      <!-- Filter -->
      <div class="w-full max-w-[200px]">
        <BasePrimitiveField class="w-full">
          <div class="relative">
            <div class="flex w-full">
              <div class="border-s border-y rounded-s-md border-muted-300 dark:border-muted-800 bg-white dark:bg-muted-900 h-10 ps-3 pe-2 -me-2 flex items-center justify-center">
                <Icon
                  name="lucide:search"
                  class="size-4 text-muted-500"
                />
              </div>
              <div class="grow relative">
                <BasePrimitiveFieldController>
                  <BaseInput
                    v-model="filter"
                    size="md"
                    class="border-s-0 rounded-s-none"
                    placeholder="Search users..."
                  />
                </BasePrimitiveFieldController>
              </div>
            </div>
            <div class="absolute z-0 end-4 top-3 pointer-events-none">
              <BasePrimitiveFieldLoadingIndicator />
              <BasePrimitiveFieldSuccessIndicator />
              <BasePrimitiveFieldErrorIndicator />
            </div>
          </div>
        </BasePrimitiveField>
      </div>
    </div>
    <div v-if="Object.keys(filteredDirectory).length === 0">
      <div class="flex flex-col gap-3 py-24">
        <div class="text-center">
          <Icon
            name="arcticons:anycubic"
            class="size-16 mx-auto mb-4 text-muted-500"
            aria-hidden="true"
          />
          <BaseHeading
            as="h3"
            class="text-lg font-semibold text-muted-900 dark:text-white"
          >
            No results found
          </BaseHeading>
          <BaseParagraph
            size="sm"
            class="text-muted-600 dark:text-muted-400 max-w-xs mx-auto"
          >
            Try adjusting your search or filter to find what you're looking for.
          </BaseParagraph>
        </div>
      </div>
    </div>
    <div
      v-else
      class="h-[350px]"
    >
      <div
        class="h-full overflow-y-auto pe-2 nui-slimscroll"
        aria-label="Directory"
      >
        <div
          v-for="letter in Object.keys(filteredDirectory)"
          :key="letter"
          class="relative"
        >
          <div class="sticky top-0 z-10 rounded-md border border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-900 px-3 py-1.5 text-sm/6 font-semibold text-muted-900 dark:text-white">
            <h3>{{ letter }}</h3>
          </div>
          <ul
            role="list"
            class="divide-y divide-muted-100 dark:divide-muted-800/70"
          >
            <li
              v-for="person in filteredDirectory[letter as any]"
              :key="person.email"
              class="flex gap-x-4 px-3 py-5"
            >
              <div class="flex gap-x-4 items-center min-w-0">
                <BaseAvatar
                  size="sm"
                  :src="person.photo"
                  class="grayscale"
                />
                <div class="min-w-0">
                  <BaseParagraph
                    size="sm"
                    weight="medium"
                    class="text-muted-900 dark:text-white"
                  >
                    {{ person.name }}
                  </BaseParagraph>
                  <BaseParagraph
                    size="xs"
                    class="text-muted-600 dark:text-muted-400"
                  >
                    {{ person.email }}
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex shrink-0 items-center gap-x-6 ms-auto">
                <div class="hidden sm:flex sm:flex-col sm:items-end">
                  <BaseParagraph
                    size="xs"
                    weight="medium"
                    class="text-muted-900 dark:text-white"
                  >
                    {{ person.title }}
                  </BaseParagraph>
                  <div class="mt-1 flex items-center gap-x-1.5">
                    <div class="relative flex items-center justify-center">
                      <BaseChip
                        position="static"
                        size="xs"
                        color="custom"
                        class="relative top-[1px]"
                        :class="person.status === 'online' ? 'text-muted-900 dark:text-white' : 'text-muted-300 dark:text-muted-600'"
                        :pulse="person.status === 'online'"
                      />
                    </div>
                    <BaseParagraph
                      size="xs"
                      class="capitalize text-muted-500 dark:text-muted-300"
                    >
                      {{ person.status }}
                    </BaseParagraph>
                  </div>
                </div>
                <BaseDropdown
                  :bindings="{
                    content: {
                      sideOffset: 10,
                      align: 'end',
                    },
                  }"
                >
                  <template #button>
                    <BaseButton
                      variant="ghost"
                      size="icon-sm"
                      rounded="md"
                      class="cursor-pointer"
                    >
                      <Icon
                        name="lucide:more-horizontal"
                        class="size-4"
                      />
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
