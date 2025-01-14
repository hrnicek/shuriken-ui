<script setup lang="ts">
const checkedOne = ref(false)
const checkedTwo = ref(false)
const selection = ref('first')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-4">
          <BaseDropdown label="Inner Submenus">
            <BaseDropdownLabel>Label</BaseDropdownLabel> 
            <BaseDropdownSub>
              <template #title>
                Profile
              </template>
              <BaseDropdownLabel>Label</BaseDropdownLabel> 
              <BaseDropdownItem>Profile</BaseDropdownItem> 
              <BaseDropdownItem>General</BaseDropdownItem> 
              <BaseDropdownItem>Billing</BaseDropdownItem> 
              <BaseDropdownItem>Support</BaseDropdownItem> 
            </BaseDropdownSub>
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownSub>
              <template #title>
                Settings
              </template>
              <BaseDropdownLabel>Label</BaseDropdownLabel> 
              <BaseDropdownItem>General</BaseDropdownItem> 
              <BaseDropdownItem>Users</BaseDropdownItem> 
              <BaseDropdownItem>Permissions</BaseDropdownItem> 
              <BaseDropdownItem>Security</BaseDropdownItem>
            </BaseDropdownSub>
          </BaseDropdown>

          <BaseDropdown label="Radio">
            <BaseDropdownRadioGroup v-model="selection">
              <BaseDropdownRadioItem value="first">
                First
                <template #end>
                  <div class="flex gap-0.5">
                    <BaseKbd variant="default" size="sm">⌘</BaseKbd>
                    <BaseKbd variant="default" size="sm">1</BaseKbd>
                  </div>
                </template>
              </BaseDropdownRadioItem>
              <BaseDropdownRadioItem value="second">
                Second
                <template #end>
                  <div class="flex gap-0.5">
                    <BaseKbd variant="default" size="sm">⌘</BaseKbd>
                    <BaseKbd variant="default" size="sm">2</BaseKbd>
                  </div>
                </template>
              </BaseDropdownRadioItem>
              <BaseDropdownRadioItem value="third">
                Third
                <template #end>
                  <div class="flex gap-0.5">
                    <BaseKbd variant="default" size="sm">⌘</BaseKbd>
                    <BaseKbd variant="default" size="sm">3</BaseKbd>
                  </div>
                </template>
              </BaseDropdownRadioItem>
            </BaseDropdownRadioGroup>
          </BaseDropdown>

          <BaseDropdown label="Checkbox">
            <BaseDropdownCheckbox
              v-model="checkedOne"
              title="Profile"
            />
            <BaseDropdownCheckbox
              title="Projects"
              disabled
            />
            <BaseDropdownCheckbox
              v-model="checkedTwo"
              title="Team"
            />
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
