<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-4">
          <BaseDropdown label="Default spacing">
            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown label="With top arrow" :bindings="{ content: { sideOffset: 0 } }">
            <BaseDropdownItem>Profile</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Settings</BaseDropdownItem>
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="With more spacing" :bindings="{ content: { sideOffset: 10 } }">
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
