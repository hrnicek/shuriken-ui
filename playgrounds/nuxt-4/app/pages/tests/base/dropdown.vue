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
const selection = ref('first')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseDropdown">
      <NuiPreview title="Variants & Sizes" description="Dropdown menu variants and menu sizes">
        <div class="flex justify-start gap-4 w-full">
          <BaseDropdown variant="default-low" label="Default low">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown variant="default-high" label="Default high" :classes="{ menu: 'w-72' }">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem> 
          </BaseDropdown>
          <BaseDropdown variant="muted-low" label="Muted low">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown variant="muted-high" label="Muted high" :classes="{ menu: 'w-72' }">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem> 
          </BaseDropdown>
          <BaseDropdown variant="primary-low" label="Primary low">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown variant="primary-high" label="Primary high" :classes="{ menu: 'w-72' }">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem> 
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Nested menus" description="Dropdown menu sizes">
        <div class="flex justify-start gap-4 w-full">
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
        </div>
      </NuiPreview>

      
      <NuiPreview title="Arrow and menu spacing">
        <div class="flex justify-start gap-4 w-full">
          <BaseDropdown label="Default spacing">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
          </BaseDropdown>
          <BaseDropdown label="With top arrow">
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
      </NuiPreview>

      <NuiPreview title="Composition example" description="Combine dropdown with items, labels, checkboxes, and submenus">
        <div class="flex justify-start gap-4 w-full">
          <BaseDropdown
            label="Custom dropdown"
            rounded="md"
            :classes="{ menu: 'w-72' }"
            :bindings="{ content: { sideOffset: 10 } }"
          >
            <BaseDropdownLabel>Label</BaseDropdownLabel>  
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
                v-model="checked"
                title="Profile"
              />
              <BaseDropdownCheckbox
                title="Projects"
                disabled
              />
              <BaseDropdownCheckbox
                v-model="checked2"
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
                      <BaseKbd variant="default-high" size="sm">alt</BaseKbd>
                      <BaseKbd variant="default-high" size="sm">1</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
                <BaseDropdownRadioItem value="second">
                  Second
                  <template #end>
                    <div class="flex gap-0.5">
                      <BaseKbd variant="default-high" size="sm">alt</BaseKbd>
                      <BaseKbd variant="default-high" size="sm">2</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
                <BaseDropdownRadioItem value="third">
                  Third
                  <template #end>
                    <div class="flex gap-0.5">
                      <BaseKbd variant="default-high" size="sm">alt</BaseKbd>
                      <BaseKbd variant="default-high" size="sm">3</BaseKbd>
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
                  <BaseKbd variant="default-high" size="sm">ctrl</BaseKbd>
                  <BaseKbd variant="default-high" size="sm">k</BaseKbd>
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
      </NuiPreview>

      <NuiPreview title="Button slot" description="Use any button component as a trigger">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown>
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

          <BaseDropdown>
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
        title="Content: align"
        description="Dropdown button start position"
      >
        <div class="flex justify-start gap-4 w-full">
          <BaseDropdown label="Start align" :bindings="{
            content: {
              align: 'start',
            }
          }">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="Center align" :bindings="{
            content: {
              align: 'center',
            }
          }">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="End align" :bindings="{
            content: {
              align: 'end',
            }
          }">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
            <BaseDropdownArrow />
          </BaseDropdown>
        </div>
      </NuiPreview>


      <NuiPreview
        title="Content: side"
        description="Dropdown button start position"
      >
        <div class="flex justify-start gap-4 w-full">
          <BaseDropdown :bindings="{
            content: {
              side: 'top',
              disableUpdateOnLayoutShift: true,
            }
          }">
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
          <BaseDropdown :bindings="{
            content: {
              side: 'right',
            }
          }">
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
          <BaseDropdown :bindings="{
            content: {
              side: 'bottom',
            }
          }">
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
          <BaseDropdown :bindings="{
            content: {
              side: 'left',
            }
          }">
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
      </NuiPreview>

      <NuiPreview title="Slot: icon" description="Dropdown icon slot">
        <div class="flex justify-start gap-4 w-full">
          <BaseDropdown label="Dropdown" rounded="md" :classes="{ menu: 'w-72' }">
            <BaseDropdownItem
              title="Profile"
              text="View your profile"
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
      </NuiPreview>

      <NuiPreview title="Slot: avatar" description="Dropdown avatar slot">
        <div class="flex justify-start w-full">
          <BaseDropdown label="Dropdown" rounded="md" :classes="{ menu: 'w-72' }">
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

            <BaseDropdownSeparator />

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
        title="Disable portal mode"
        description="Content is not teleported to the body"
      >
        <div class="flex w-full justify-start gap-8">
          <BaseDropdown label="Fixed position" :bindings="{
            portal: {
              disabled: true,
            },
            content: {
              positionStrategy: 'fixed',
            }
          }">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="Absolute position" :bindings="{
            portal: {
              disabled: true,
            },
            content: {
              positionStrategy: 'absolute',
            }
          }">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
            <BaseDropdownArrow />
          </BaseDropdown>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
