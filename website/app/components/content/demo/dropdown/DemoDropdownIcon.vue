<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-8">
          <BaseDropdown label="Dropdown" rounded="md">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
              class="w-72"
            >
              <template #start>
                <Icon name="solar:user-rounded-linear" class="me-2 block text-[1.15rem]" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            >
              <template #start>
                <Icon name="solar:case-linear" class="me-2 block text-[1.15rem]" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            >
              <template #start>
                <Icon name="solar:widget-3-linear" class="me-2 block text-[1.15rem]" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownSeparator />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            >
              <template #start>
                <Icon name="solar:settings-linear" class="me-2 block text-[1.15rem]" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
