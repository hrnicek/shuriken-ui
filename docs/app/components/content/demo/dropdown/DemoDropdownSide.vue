<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-4">
          <BaseDropdown
            :bindings="{
              content: {
                side: 'top',
                sideOffset: 0,
              },
            }"
          >
            <template #button>
              <BaseButton
                size="icon-md"
                class="group"
              >
                <Icon name="lucide:arrow-up" class="text-base block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="text-base hidden mx-auto transition-transform group-data-[state=open]:block" />
              </BaseButton>
            </template>

            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown
            :bindings="{
              content: {
                side: 'right',
                sideOffset: 0,
              },
            }"
          >
            <template #button>
              <BaseButton
                size="icon-md"
                class="group"
              >
                <Icon name="lucide:arrow-right" class="text-base block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="text-base hidden mx-auto transition-transform group-data-[state=open]:block" />
              </BaseButton>
            </template>
            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown
            :bindings="{
              content: {
                side: 'bottom',
                sideOffset: 0,
              },
            }"
          >
            <template #button>
              <BaseButton
                size="icon-md"
                class="group"
              >
                <Icon name="lucide:arrow-down" class="text-base block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="text-base hidden mx-auto transition-transform group-data-[state=open]:block" />
              </BaseButton>
            </template>
            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown
            :bindings="{
              content: {
                side: 'left',
                sideOffset: 0,
              },
            }"
          >
            <template #button>
              <BaseButton
                size="icon-md"
                class="group"
              >
                <Icon name="lucide:arrow-left" class="text-base block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="text-base hidden mx-auto transition-transform group-data-[state=open]:block" />
              </BaseButton>
            </template>
            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>
            <BaseDropdownArrow />
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
