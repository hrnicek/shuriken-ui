<script setup lang="ts">
import { NuxtLink } from '#components';

const checkedOne = ref(false)
const checkedTwo = ref(false)
const selection = ref('first')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-4">
          <BaseDropdown
            label="Custom dropdown"
            rounded="md"
          >
            <BaseDropdownLabel class="w-72">Label</BaseDropdownLabel>  
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
              to="#"
              :as="NuxtLink"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
              to="#"
              :as="NuxtLink"
            />
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
              to="#"
              :as="NuxtLink"
            />

            <BaseDropdownSeparator />
            <BaseDropdownLabel>Label</BaseDropdownLabel>  
            <BaseDropdownSub
              title="Checkbox"
              text="View more tools"
            >
              <BaseDropdownLabel>Label</BaseDropdownLabel>  
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
            </BaseDropdownSub>
            <BaseDropdownSub
              title="Radio"
              text="View more tools"
            >
              <BaseDropdownLabel>Label</BaseDropdownLabel>  
              <BaseDropdownRadioGroup v-model="selection">
                <BaseDropdownRadioItem value="first">
                  First
                  <template #end>
                    <div class="flex gap-0.5">
                      <BaseKbd variant="default" size="sm">alt</BaseKbd>
                      <BaseKbd variant="default" size="sm">1</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
                <BaseDropdownRadioItem value="second">
                  Second
                  <template #end>
                    <div class="flex gap-0.5">
                      <BaseKbd variant="default" size="sm">alt</BaseKbd>
                      <BaseKbd variant="default" size="sm">2</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
                <BaseDropdownRadioItem value="third">
                  Third
                  <template #end>
                    <div class="flex gap-0.5">
                      <BaseKbd variant="default" size="sm">alt</BaseKbd>
                      <BaseKbd variant="default" size="sm">3</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
              </BaseDropdownRadioGroup>
            </BaseDropdownSub>
            <BaseDropdownItem
              title="Settings"
            >
              <template #end>
                <div class="flex gap-0.5">
                  <BaseKbd variant="default" size="sm">ctrl</BaseKbd>
                  <BaseKbd variant="default" size="sm">k</BaseKbd>
                </div>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          
          <BaseDropdown
            label="Scrollable menu"
            contrast="default"
          >
            <BaseDropdownLabel>Label</BaseDropdownLabel>  
            <BaseDropdownItem v-for="i in 50">Item {{ i }} ...</BaseDropdownItem> 
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
