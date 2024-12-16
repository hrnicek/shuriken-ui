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
      <NuiPreview title="Size" description="Dropdown menu sizes">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown label="Dropdown">
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <span class="text-xs font-mono">⇧⌘P</span>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown label="Large" size="lg">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>
              Settings
              <template #end>
                <span class="text-xs font-mono">⇧⌘P</span>
              </template>
            </BaseDropdownItem> 
          </BaseDropdown>
          <BaseDropdown label="Disabled" disabled>
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>
              Settings
              <template #end>
                <span class="text-xs font-mono">⇧⌘P</span>
              </template>
            </BaseDropdownItem> 
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Color" description="Dropdown menu sizes">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown label="default" color="default">
            <BaseDropdownLabel>Label</BaseDropdownLabel> 
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownSub>
              <template #title>
                Settings
              </template>
              <BaseDropdownLabel>Label</BaseDropdownLabel> 
              <BaseDropdownItem>Profile</BaseDropdownItem> 
              <BaseDropdownItem>Projects</BaseDropdownItem> 
              <BaseDropdownItem>Team</BaseDropdownItem> 
              <BaseDropdownItem>Settings</BaseDropdownItem> 
            </BaseDropdownSub>
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="default-contrast" color="default-contrast">
            <BaseDropdownLabel>Label</BaseDropdownLabel> 
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownSub>
              <template #title>
                Settings
              </template>
              <BaseDropdownLabel>Label</BaseDropdownLabel> 
              <BaseDropdownItem>Profile</BaseDropdownItem> 
              <BaseDropdownItem>Projects</BaseDropdownItem> 
              <BaseDropdownItem>Team</BaseDropdownItem> 
              <BaseDropdownItem>Settings</BaseDropdownItem> 
            </BaseDropdownSub>
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="muted" color="muted">
            <BaseDropdownLabel>Label</BaseDropdownLabel> 
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownSub>
              <template #title>
                Settings
              </template>
              <BaseDropdownLabel>Label</BaseDropdownLabel> 
              <BaseDropdownItem>Profile</BaseDropdownItem> 
              <BaseDropdownItem>Projects</BaseDropdownItem> 
              <BaseDropdownItem>Team</BaseDropdownItem> 
              <BaseDropdownItem>Settings</BaseDropdownItem> 
            </BaseDropdownSub>
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="muted-contrast" color="muted-contrast">
            <BaseDropdownLabel>Label</BaseDropdownLabel> 
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownSub>
              <template #title>
                Settings
              </template>
              <BaseDropdownLabel>Label</BaseDropdownLabel> 
              <BaseDropdownItem>Profile</BaseDropdownItem> 
              <BaseDropdownItem>Projects</BaseDropdownItem> 
              <BaseDropdownItem>Team</BaseDropdownItem> 
              <BaseDropdownItem>Settings</BaseDropdownItem> 
            </BaseDropdownSub>
            <BaseDropdownArrow />
          </BaseDropdown>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Arrow and spacing example">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown label="Default" size="lg">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
          </BaseDropdown>
          <BaseDropdown label="With arrow" size="lg">
            <BaseDropdownItem>Profile</BaseDropdownItem> 
            <BaseDropdownItem>Projects</BaseDropdownItem> 
            <BaseDropdownItem>Team</BaseDropdownItem> 
            <BaseDropdownItem>Settings</BaseDropdownItem> 
            <BaseDropdownArrow />
          </BaseDropdown>
          <BaseDropdown label="With spacing" size="lg" :bindings="{ content: { sideOffset: 10 } }">
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

            <BaseDropdownDivider />
            <BaseDropdownLabel>Label</BaseDropdownLabel>  
            <BaseDropdownSub
              title="Checkbox"
              text="View more tools"
            >
              <BaseDropdownLabel>Label</BaseDropdownLabel>  
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
                      <BaseKbd variant="muted-high" size="sm">alt</BaseKbd>
                      <BaseKbd variant="muted-high" size="sm">1</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
                <BaseDropdownRadioItem value="second">
                  Second
                  <template #end>
                    <div class="flex gap-0.5">
                      <BaseKbd variant="muted-high" size="sm">alt</BaseKbd>
                      <BaseKbd variant="muted-high" size="sm">2</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
                <BaseDropdownRadioItem value="third">
                  Third
                  <template #end>
                    <div class="flex gap-0.5">
                      <BaseKbd variant="muted-high" size="sm">alt</BaseKbd>
                      <BaseKbd variant="muted-high" size="sm">3</BaseKbd>
                    </div>
                  </template>
                </BaseDropdownRadioItem>
              </BaseDropdownRadioGroup>
            </BaseDropdownSub>
            <BaseDropdownItem
              title="Settings"
              text="Set your preferences"
            >
              <template #end>
                <div class="flex gap-0.5">
                  <BaseKbd variant="muted-high" size="sm">ctrl</BaseKbd>
                  <BaseKbd variant="muted-high" size="sm">k</BaseKbd>
                </div>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          
          <BaseDropdown
            label="Scrollable"
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
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown label="Start" :bindings="{
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
          <BaseDropdown label="Center" :bindings="{
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
          <BaseDropdown label="End" :bindings="{
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
        <div class="flex justify-start gap-8 w-full">
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
                <Icon name="lucide:arrow-up" class="size-4 block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="size-4 hidden mx-auto transition-transform group-data-[state=open]:block" />
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
                <Icon name="lucide:arrow-right" class="size-4 block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="size-4 hidden mx-auto transition-transform group-data-[state=open]:block" />
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
                <Icon name="lucide:arrow-down" class="size-4 block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="size-4 hidden mx-auto transition-transform group-data-[state=open]:block" />
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
                <Icon name="lucide:arrow-left" class="size-4 block mx-auto transition-transform group-data-[state=open]:hidden" />
                <Icon name="lucide:x" class="size-4 hidden mx-auto transition-transform group-data-[state=open]:block" />
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
        <div class="flex justify-start gap-6 w-full">
          <BaseDropdown label="Dropdown">
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

          <BaseDropdown label="Dropdown">
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
          <BaseDropdown label="Dropdown">
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
