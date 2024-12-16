<script setup lang="ts">
import { NuxtLink } from '#components';

definePageMeta({
  title: 'BaseDropdown',
  icon: 'system-uicons:maximise',
  description: 'Dropdown component',
  section: 'base',
})

const checked = ref(false)
const checked2 = ref(false)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseDropdown">
      <NuiPreview title="Size" description="Dropdown menu sizes">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown label="Dropdown">
            <BaseDropdownItem
              to="#"
              :as="NuxtLink"
            >
              Profile
            </BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <span class="text-xs">⇧⌘P</span>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown label="Dropdown" size="lg">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Composition example" description="Combine dropdown with items, labels, checkboxes, and submenus">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown
            label="Dropdown"
            contrast="default"
            arrow
          >
            <BaseDropdownLabel>
              Header
            </BaseDropdownLabel>  
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            />

            <BaseDropdownDivider />
            <BaseDropdownLabel>
              Header
            </BaseDropdownLabel>  
            <BaseDropdownSub
              title="More Tools"
              text="View more tools"
            >
              <BaseDropdownLabel>
                Header
              </BaseDropdownLabel>  
              <BaseDropdownCheckbox
                v-model="checked"
                title="Profile"
                text="View your profile"
              />
              <BaseDropdownCheckbox
                title="Projects"
                text="View your projects"
                disabled
              />
              <BaseDropdownCheckbox
                v-model="checked2"
                title="Team"
                text="Manage your team"
              />
            </BaseDropdownSub>
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            >
              <template #end>
                <div class="flex gap-0.5">
                  <BaseKbd size="xs">ctrl</BaseKbd>
                  <BaseKbd size="xs">N</BaseKbd>
                </div>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Button slot" description="Use any button component as a trigger">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown arrow>
            <template #button>
              <BaseButton
                variant="primary"
                size="icon-md"
                rounded="full"
                class="group"
              >
                <Icon name="ph:plus" class="block h-5 w-5 transition-transform group-data-[state=open]:rotate-45" />
              </BaseButton>
            </template>

            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 

            <BaseDropdownArrow :width="6" :height="6" />
          </BaseDropdown>

          <BaseDropdown
            label="Dropdown"
            arrow
          >
            <template #button>
              <BaseButton
                variant="ghost-high"
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
      </NuiPreview>

      <NuiPreview
        title="Button: start"
        description="Dropdown button start position"
      >
        <div class="flex justify-start w-full">
          <BaseDropdown variant="button" label="Dropdown" :bindings="{
            content: {
              align: 'start',
            }
          }">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Button: end"
        description="Dropdown button end position"
      >
        <div class="flex justify-end w-full">
          <BaseDropdown variant="button" label="Dropdown" :bindings="{
            content: {
              align: 'end',
            }
          }">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Context: start"
        description="Dropdown context start position"
      >
        <div class="flex justify-start w-full">
          <BaseDropdown variant="context" label="Dropdown" orientation="start">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Context: end"
        description="Dropdown context end position"
      >
        <div class="flex justify-end w-full">
          <BaseDropdown variant="context" label="Dropdown" orientation="end">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Text: start"
        description="Dropdown text start position"
      >
        <div class="flex justify-start w-full gap-8">
          <BaseDropdown variant="text" label="Dropdown" orientation="start">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            />
          </BaseDropdown>
          <BaseDropdown
            variant="text"
            button-color="info"
            label="Dropdown"
          >
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Text: end" description="Dropdown text end position">
        <div class="flex justify-end w-full">
          <BaseDropdown variant="text" label="Dropdown" orientation="end">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            />
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            />
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: icon" description="Dropdown icon slot">
        <div class="flex justify-start gap-6 w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
            >
              <template #start>
                <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
            >
              <template #start>
                <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
            >
              <template #start>
                <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            >
              <template #start>
                <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>

          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              title="Projects"
              text="View your projects"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              title="Team"
              text="Manage your team"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: avatar" description="Dropdown avatar slot">
        <div class="flex justify-start w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              title="Lana Jensen"
              text="Software Engineer"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              title="Shawn Miller"
              text="Product Manager"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              title="John Marynski"
              text="Sales Manager"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              title="Garry Porter"
              text="CEO - Founder"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Menu header" description="Dropdown menu header">
        <div class="flex justify-start w-full">
          <BaseDropdown
            label="Dropdown"
            header-label="My Team"
          >
            <BaseDropdownItem
              title="Lana Jensen"
              text="Software Engineer"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              title="Shawn Miller"
              text="Product Manager"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              title="John Marynski"
              text="Sales Manager"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              title="Garry Porter"
              text="CEO - Founder"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Menu in portal mode"
        description="Menu is teleported to the body instead of the parent element"
      >
        <div class="flex w-full justify-start">
          <BaseDropdown
            label="Dropdown"
            :float-options="{ portal: true }"
          >
            <BaseDropdownItem
              title="Lana Jensen"
              text="Software Engineer"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              title="Shawn Miller"
              text="Product Manager"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              title="John Marynski"
              text="Sales Manager"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              title="Garry Porter"
              text="CEO - Founder"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
