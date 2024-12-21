<script setup lang="ts">
definePageMeta({
  title: 'BaseField',
  icon: 'system-uicons:calendar-move',
  description: 'Field component',
  section: 'form',
})

const states = ['idle', 'loading', 'success', 'error'] as const

const value0 = ref()
const value1 = ref('1')
const value2 = ref('')
const value3 = ref('')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseField">
      <NuiPreview v-for="alt in ['default', 'disabled', 'full']" :title="`State: ${alt}`" description="Base field component">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <!-- BaseInput -->
          <BaseField v-for="state in states" :key="state" :state="state" :disabled="alt === 'disabled'" :required="alt === 'full'"> 
            <div v-if="alt === 'full'" class="w-full inline-flex">
              <BaseFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>BaseInput</span>
                  <BaseFieldRequiredIndicator  />
                </div>

                <div>
                  <BaseDropdown
                    :bindings="{
                      content: {
                        side: 'top',
                        align: 'center',
                      }
                    }"
                  >
                    <template #button>
                      <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
                    </template>

                    <BaseDropdownItem>Option 1</BaseDropdownItem>
                    <BaseDropdownArrow />
                  </BaseDropdown>
                </div>
              </BaseFieldLabel>
            </div>
            <div class="relative">
              <BaseFieldController>
                <BaseInput placeholder="placeholder" />
              </BaseFieldController>
              <div class="absolute z-10 end-4 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <template v-if="alt === 'full'">
              <div class="mt-2 flex flex-col">
                <BaseFieldError class="mb-1 block">
                  The input is invalid because ...
                </BaseFieldError>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
            </template>
          </BaseField>
          <!-- BaseInputNumber -->
          <BaseField v-for="state in states" :key="state" :state="state" :disabled="alt === 'disabled'" :required="alt === 'full'"> 
            <div v-if="alt === 'full'" class="w-full inline-flex">
              <BaseFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>BaseInputNumber</span>
                  <BaseFieldRequiredIndicator  />
                </div>

                <div>
                  <BaseDropdown
                    :bindings="{
                      content: {
                        side: 'top',
                        align: 'center',
                      }
                    }"
                  >
                    <template #button>
                      <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
                    </template>

                    <BaseDropdownItem>Option 1</BaseDropdownItem>
                    <BaseDropdownArrow />
                  </BaseDropdown>
                </div>
              </BaseFieldLabel>
            </div>
            <div class="relative">
              <BaseFieldController>
                <BaseInputNumber placeholder="placeholder" />
              </BaseFieldController>
              <div class="absolute z-10 end-20 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <template v-if="alt === 'full'">
              <div class="mt-2 flex flex-col">
                <BaseFieldError class="mb-1 block">
                  The input is invalid because ...
                </BaseFieldError>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
              
            </template>
          </BaseField>

          <!-- BaseInputFile -->
          <BaseField v-for="state in states" :key="state" :state="state" :disabled="alt === 'disabled'" :required="alt === 'full'"> 
            <div v-if="alt === 'full'" class="w-full inline-flex">
              <BaseFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>BaseInputFile</span>
                  <BaseFieldRequiredIndicator  />
                </div>

                <div>
                  <BaseDropdown
                    :bindings="{
                      content: {
                        side: 'top',
                        align: 'center',
                      }
                    }"
                  >
                    <template #button>
                      <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
                    </template>

                    <BaseDropdownItem>Option 1</BaseDropdownItem>
                    <BaseDropdownArrow />
                  </BaseDropdown>
                </div>
              </BaseFieldLabel>
            </div>
            <div class="relative">
              <BaseFieldController>
                <BaseInputFile placeholder="placeholder" />
              </BaseFieldController>
              <div class="absolute z-10 end-4 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <template v-if="alt === 'full'">
              <div class="mt-2 flex flex-col">
                <BaseFieldError class="mb-1 block">
                  The input is invalid because ...
                </BaseFieldError>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
            </template>
          </BaseField>
          
          <!-- BaseTextarea -->
          <BaseField v-for="state in states" :key="state" :state="state" :disabled="alt === 'disabled'" :required="alt === 'full'"> 
            <div v-if="alt === 'full'" class="w-full inline-flex">
              <BaseFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>BaseTextarea</span>
                  <BaseFieldRequiredIndicator  />
                </div>

                <div>
                  <BaseDropdown
                    :bindings="{
                      content: {
                        side: 'top',
                        align: 'center',
                      }
                    }"
                  >
                    <template #button>
                      <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
                    </template>

                    <BaseDropdownItem>Option 1</BaseDropdownItem>
                    <BaseDropdownArrow />
                  </BaseDropdown>
                </div>
              </BaseFieldLabel>
            </div>
            <div class="relative">
              <BaseFieldController>
                <BaseTextarea placeholder="placeholder" />
              </BaseFieldController>
              <div class="absolute z-10 end-4 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <template v-if="alt === 'full'">
              <div class="mt-2 flex flex-col">
                <BaseFieldError class=" mb-1 block">
                  The input is invalid because ...
                </BaseFieldError>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
            </template>
          </BaseField>

          <!-- BaseSelect -->
          <BaseField v-for="state in states" :key="state" :state="state" :disabled="alt === 'disabled'" :required="alt === 'full'"> 
            <div v-if="alt === 'full'" class="w-full inline-flex">
              <BaseFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>BaseSelect</span>
                  <BaseFieldRequiredIndicator  />
                </div>

                <div>
                  <BaseDropdown
                    :bindings="{
                      content: {
                        side: 'top',
                        align: 'center',
                      }
                    }"
                  >
                    <template #button>
                      <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
                    </template>

                    <BaseDropdownItem>Option 1</BaseDropdownItem>
                    <BaseDropdownArrow />
                  </BaseDropdown>
                </div>
              </BaseFieldLabel>
            </div>
            <div class="relative">
              <BaseFieldController>
                <BaseSelect v-model="value0" placeholder="select placeholder">
                  <BaseSelectItem value="1">Option 1</BaseSelectItem>
                  <BaseSelectItem value="2">Option 2</BaseSelectItem>
                  <BaseSelectItem value="3">Option 3</BaseSelectItem>
                  <BaseSelectItem value="4">Option 4</BaseSelectItem>
                </BaseSelect>
              </BaseFieldController>
              <div class="absolute z-10 end-10 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <template v-if="alt === 'full'">
              <div class="mt-2 flex flex-col">
                <BaseFieldError class="mb-1 block">
                  The input is invalid because ...
                </BaseFieldError>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
            </template>
          </BaseField>
          
          <!-- BaseAutocomplete -->
          <BaseField v-for="state in states" :key="state" :state="state" :disabled="alt === 'disabled'" :required="alt === 'full'"> 
            <div v-if="alt === 'full'" class="w-full inline-flex">
              <BaseFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>BaseAutocomplete</span>
                  <BaseFieldRequiredIndicator  />
                </div>

                <div>
                  <BaseDropdown
                    :bindings="{
                      content: {
                        side: 'top',
                        align: 'center',
                      }
                    }"
                  >
                    <template #button>
                      <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
                    </template>

                    <BaseDropdownItem>Option 1</BaseDropdownItem>
                    <BaseDropdownArrow />
                  </BaseDropdown>
                </div>
              </BaseFieldLabel>
            </div>
            <div class="relative">
              <BaseFieldController>
                <BaseAutocomplete
                  placeholder="autocomplete placeholder"
                >
                  <BaseAutocompleteItem value="1">Option 1</BaseAutocompleteItem>
                </BaseAutocomplete>
              </BaseFieldController>
              <div class="absolute z-10 end-4 top-2.5" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <template v-if="alt === 'full'">
              <div class="mt-2 flex flex-col">
                <BaseFieldError class="mb-1 block">
                  The input is invalid because ...
                </BaseFieldError>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
            </template>
          </BaseField>
        </div>
      </NuiPreview>
            
      <NuiPreview title="Vertical" description="Vertical field component">
        <div class="grid grid-cols-2 gap-8 max-w-2xl">
          <BaseField state="loading">
            <BaseFieldLabel>
              <span>Loading</span> 
              <BaseFieldRequiredIndicator  />
            </BaseFieldLabel>
            
            <div class="relative w-full">
              <div class="flex w-full">
                <BaseIconBox variant="default-high" size="sm" class="rounded-e-none border-e-0">
                  <Icon name="lucide:user" class="size-4 text-muted-500" />
                </BaseIconBox>
                <BaseFieldController>
                  <BaseInput class="rounded-s-none! w-full" :classes="{ wrapper: 'grow' }" />
                </BaseFieldController>
              </div>
              <div class="absolute z-10 end-4 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <BaseFieldDescription class="inline-block mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
            </BaseFieldDescription>
          </BaseField>

          <BaseField required state="error">
            <div class="w-full inline-flex">
              <BaseFieldLabel>
                <span>Error</span>
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              
              <BaseFieldError class="ms-auto">
                The input is invalid because ...
              </BaseFieldError>
            </div>

            <div class="relative">
              <BaseFieldController>
                <BaseInput />
              </BaseFieldController>
              <div class="absolute z-10 end-4 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <BaseFieldDescription class="inline-block mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
            </BaseFieldDescription>
          </BaseField>

          <BaseField required state="error">
            <BaseFieldLabel>
              <span>Number</span>
              <BaseFieldRequiredIndicator  />
            </BaseFieldLabel>

            <div class="relative">
              <BaseFieldController>
                <BaseInputNumber />
              </BaseFieldController>
              <div class="absolute z-10 end-20 top-3">
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            <BaseFieldError>
              The input is invalid because ...
            </BaseFieldError>
          </BaseField>

          <BaseField required state="error">
            <BaseFieldLabel>
              <span>Select</span>
              <BaseFieldRequiredIndicator  />
            </BaseFieldLabel>

            <div class="relative">
              <BaseFieldController>
                <BaseSelect v-model="value1">
                  <BaseSelectItem value="1">Option 1</BaseSelectItem>
                  <BaseSelectItem value="2">Option 2</BaseSelectItem>
                  <BaseSelectItem value="3">Option 3</BaseSelectItem>
                  <BaseSelectItem value="4">Option 4</BaseSelectItem>
                </BaseSelect>
              </BaseFieldController>
              <div class="absolute z-10 end-10 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator>
                  <Icon name="lucide:badge-alert" class="size-4 text-amber-500" />
                </BaseFieldErrorIndicator>  
              </div>
            </div>
            <BaseFieldError>
              The input is invalid because ...
            </BaseFieldError>
          </BaseField>

          <BaseField class="col-span-2" required state="loading">
            <div class="relative">
              <BaseFieldLabel>
                <span>Textarea</span>
                <BaseFieldRequiredIndicator as-child>
                  <span class="text-xs ms-1">(Requis)</span>
                </BaseFieldRequiredIndicator>
              </BaseFieldLabel>
              <div class="absolute z-10 end-1 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div class="relative">
              <BaseFieldController>
                <BaseTextarea />
              </BaseFieldController>
            </div>
            <BaseFieldDescription class="inline-block mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
            </BaseFieldDescription>
            <BaseFieldError>
              The input is invalid because ...
            </BaseFieldError>
          </BaseField>
          
          <BaseField required state="loading">
            <div class="flex mb-4 relative">
              <div class="flex flex-col gap-1 w-full">
                <BaseFieldLabel>
                  <span>Radio</span> 
                  <BaseFieldRequiredIndicator  />
                </BaseFieldLabel>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
              <div class="flex items-center justify-center">
                <BaseFieldLoadingIndicator class="ms-3" />
                <BaseFieldSuccessIndicator class="ms-3" />
                <BaseFieldErrorIndicator class="ms-3" />
              </div>
            </div>

            <BaseFieldController>
              <BaseRadioGroup class="relative flex flex-col gap-2 mt-2">
                <BaseRadio value="1">Option 21</BaseRadio>
                <BaseRadio value="2">Option 2</BaseRadio>
                <BaseRadio value="3">Option 3</BaseRadio>
              </BaseRadioGroup>
            </BaseFieldController>
          </BaseField>
          
          <BaseField required state="error">
            <div class="flex mb-4 relative">
              <div class="flex flex-col gap-1 w-full">
                <BaseFieldLabel>
                  <span>Checkbox</span> 
                  <BaseFieldRequiredIndicator  />
                </BaseFieldLabel>
                <BaseFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
                </BaseFieldDescription>
              </div>
              <div class="flex items-center justify-center">
                <BaseFieldLoadingIndicator class="ms-3" />
                <BaseFieldSuccessIndicator class="ms-3" />
                <BaseFieldErrorIndicator class="ms-3" />
              </div>
            </div>

            <BaseFieldController>
              <BaseCheckboxGroup class="relative flex flex-col gap-2 mt-2">
                <BaseCheckbox value="1">Option 1</BaseCheckbox>
                <BaseCheckbox value="2">Option 2</BaseCheckbox>
                <BaseCheckbox value="3">Option 3</BaseCheckbox>
              </BaseCheckboxGroup>
            </BaseFieldController>

            <BaseFieldError class="mt-12">
              The input is invalid because ...
            </BaseFieldError>
          </BaseField>
        </div>
      </NuiPreview>

      <NuiPreview title="Horizontal" description="Horizontal field component">
        <div class="grid grid-cols-3 gap-8 gap-x-10 max-w-2xl">
          <BaseField class="col-span-3">
            <div class="relative">
              <BaseFieldController>
                <BaseInput placeholder="Firstname" />
              </BaseFieldController>
              <div class="absolute z-10 end-4 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
          </BaseField>

          <BaseField class="col-span-3 mb-6">
            <div class="relative">
              <BaseFieldController>
                <BaseInput placeholder="Lastname" />
              </BaseFieldController>
              <div class="absolute z-10 end-4 top-3" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
          </BaseField>

          <BaseField class="grid grid-cols-subgrid col-span-3" state="loading">
            <div class="flex flex-col justify-center gap-1 relative">
              <BaseFieldLabel>
                <span>Loading</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>
            
            <div class="col-span-2">
              <div class="relative">
                <BaseFieldController>
                  <BaseInput v-model="value1" />
                </BaseFieldController>
                <div class="absolute z-10 end-4 top-3" >
                  <BaseFieldLoadingIndicator/>
                  <BaseFieldSuccessIndicator />
                  <BaseFieldErrorIndicator />
                </div>
              </div>
            </div>
          </BaseField>

          <BaseField class="grid grid-cols-subgrid col-span-3"  required state="error">
            <div class="flex flex-col justify-center gap-1 relative">
              <BaseFieldLabel>
                <span>Error</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseFieldController>
                  <BaseInput v-model="value2" />
                </BaseFieldController>
                <BaseFieldLoadingIndicator class="absolute z-10 end-4 top-3" />
              </div>
              <BaseFieldError>
                The input is invalid because ...
              </BaseFieldError>
            </div>
          </BaseField>

          <BaseField class="grid grid-cols-subgrid col-span-3" required state="error">
            <div class="flex flex-col justify-center gap-1 relative">
              <BaseFieldLabel>
                <span>Number</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseFieldController>
                  <BaseInputNumber />
                </BaseFieldController>
                <BaseFieldLoadingIndicator class="absolute z-10 end-20 top-3" />
              </div>
              <BaseFieldError>
                The input is invalid because ...
              </BaseFieldError>
            </div>
          </BaseField>

          <BaseField class="grid grid-cols-subgrid col-span-3" required state="error">
            <div class="flex flex-col justify-center gap-1 relative">
              <BaseFieldLabel>
                <span>Select</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseFieldController>
                  <BaseSelect v-model="value1">
                    <BaseSelectItem value="1">Option 1</BaseSelectItem>
                    <BaseSelectItem value="2">Option 2</BaseSelectItem>
                    <BaseSelectItem value="3">Option 3</BaseSelectItem>
                  </BaseSelect>
                </BaseFieldController>
                <BaseFieldLoadingIndicator class="absolute z-10 end-20 top-3" />
              </div>
              <BaseFieldError>
                The input is invalid because ...
              </BaseFieldError>
            </div>
          </BaseField>

          <BaseField class="grid grid-cols-subgrid col-span-3" required state="loading">
            <div class="flex flex-col justify-start mt-2 gap-1 relative">
              <BaseFieldLabel>
                <span>Textarea</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseFieldController>
                  <BaseTextarea />
                </BaseFieldController>
              </div>
              <BaseFieldError>
                Error
              </BaseFieldError>
            </div>
          </BaseField>
          
          <BaseField class="grid grid-cols-subgrid col-span-3 mb-4" required state="loading">
            <div class="flex flex-col gap-1 mb-4 relative">
              <BaseFieldLabel>
                <span>Radio</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <BaseFieldController>
              <BaseRadioGroup class="relative flex flex-col gap-2">
                <BaseRadio value="1">Option 12</BaseRadio>
                <BaseRadio value="2">Option 2</BaseRadio>
                <BaseRadio value="3">Option 3</BaseRadio>
              </BaseRadioGroup>
            </BaseFieldController>
          </BaseField>
          
          <BaseField class="grid grid-cols-subgrid col-span-3 mb-4" required state="error">
            <div class="relative flex flex-col gap-1 mb-4">
              <BaseFieldLabel>
                <span>Checkbox</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div>
              <BaseFieldController>
                <BaseCheckboxGroup class="relative flex flex-col gap-2">
                  <BaseCheckbox value="1">Option 1</BaseCheckbox>
                  <BaseCheckbox value="2">Option 2</BaseCheckbox>
                  <BaseCheckbox value="3">Option 3</BaseCheckbox>
                </BaseCheckboxGroup>
              </BaseFieldController>
              <BaseFieldError>
                The input is invalid because ...
              </BaseFieldError>
            </div>
          </BaseField>
          
          <BaseField class="grid grid-cols-subgrid col-span-3 mb-4" required state="error">
            <div class="relative flex flex-col gap-1 mb-4">
              <BaseFieldLabel>
                <span>Switch</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>
              <BaseFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-400 dark:text-primary-700">Learn more</BaseLink>
              </BaseFieldDescription>
              <div class="absolute z-10 end-0 top-0" >
                <BaseFieldLoadingIndicator/>
                <BaseFieldSuccessIndicator />
                <BaseFieldErrorIndicator />
              </div>
            </div>

            <div>
              <BaseFieldController>
                <BaseSwitchBall />
              </BaseFieldController>
              <BaseFieldError>
                The input is invalid because ...
              </BaseFieldError>
            </div>
          </BaseField>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>