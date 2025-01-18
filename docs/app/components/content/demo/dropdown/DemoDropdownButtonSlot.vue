<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-white py-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-4">
          <BaseDropdown
            :bindings="{
              content: {
                sideOffset: 0,
              },
            }"
          >
            <template #button>
              <BaseButton
                variant="primary"
                size="icon-sm"
                rounded="full"
                class="group"
              >
                <Icon name="ph:plus" class="block text-base transition-transform group-data-[state=open]:rotate-45" />
              </BaseButton>
            </template>

            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>

            <BaseDropdownArrow :width="16" :height="8" />
          </BaseDropdown>

          <BaseDropdown
            :bindings="{
              content: {
                sideOffset: 0,
              },
            }"
          >
            <template #button>
              <BaseButton
                variant="ghost"
                size="sm"
                class="group"
              >
                Dropdown <Icon name="lucide:plus" class="block h-4 w-4 ms-2 transition-transform group-data-[state=open]:rotate-45" />
              </BaseButton>
            </template>

            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
