<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-4">
          <BaseDropdown label="Start align" :bindings="{
            content: {
              align: 'start',
              sideOffset: 5,
            }
          }">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
          </BaseDropdown>
          <BaseDropdown label="Center align" :bindings="{
            content: {
              align: 'center',
              sideOffset: 5,
            }
          }">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
          </BaseDropdown>
          <BaseDropdown label="End align" :bindings="{
            content: {
              align: 'end',
              sideOffset: 5,
            }
          }">
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
