<script setup lang="ts">
definePageMeta({
  title: 'BasePrimitiveField',
  icon: 'system-uicons:calendar-move',
  description: 'Field component',
  section: 'form',
})

const states = ['idle', 'loading', 'success', 'error'] as const

const value0 = ref()
const value1 = ref('1')
const value2 = ref('')
const valueSliderRange = ref([3, 42, 84])
</script>

<template>
  <div>
    <NuiPreviewContainer title="BasePrimitiveField">
            
      <NuiPreview title="Vertical" description="Vertical field component">
        <div class="grid grid-cols-2 gap-8 max-w-2xl">
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" state="loading">
            <BasePrimitiveFieldLabel class="mb-2">
              <span>Loading</span> 
              <BasePrimitiveFieldRequiredIndicator  />
            </BasePrimitiveFieldLabel>
            
            <div class="relative w-full has-focus:nui-focus rounded-md">
              <div class="flex w-full">
                <BaseIconBox variant="default" size="sm" class="rounded-e-none border-e-0">
                  <Icon name="lucide:user" class="size-4 text-muted-500" />
                </BaseIconBox>
                <div class="grow">
                  <BaseInput class="rounded-s-none! w-full focus:ring-transparent!" v-bind="inputAttrs" :ref="inputRef" />
                </div>
              </div>
              <div class="absolute z-0 end-4 top-3 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
            <BasePrimitiveFieldDescription class="inline-block mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </BasePrimitiveFieldDescription>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" required state="error">
            <div class="w-full inline-flex">
              <BasePrimitiveFieldLabel class="mb-2">
                <span>Error</span>
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              
              <BasePrimitiveFieldError class="ms-auto">
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>

            <div class="relative">
              <BaseInput v-bind="inputAttrs" :ref="inputRef" />
              <div class="absolute z-0 end-4 top-3 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
            <BasePrimitiveFieldDescription class="inline-block mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </BasePrimitiveFieldDescription>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" required state="error">
            <BasePrimitiveFieldLabel class="mb-2">
              <span>Number</span>
              <BasePrimitiveFieldRequiredIndicator  />
            </BasePrimitiveFieldLabel>

            <div class="relative">
              <BaseInputNumber v-bind="inputAttrs" :ref="inputRef" />
              <div class="absolute z-0 end-12 top-3 pointer-events-none">
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
            <BasePrimitiveFieldError>
              The input is invalid because ...
            </BasePrimitiveFieldError>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" required state="error" fieldset>
            <BasePrimitiveFieldLabel class="mb-2">
              <span>Select</span>
              <BasePrimitiveFieldRequiredIndicator  />
            </BasePrimitiveFieldLabel>

            <div class="relative">
              <BaseSelect v-model="value1" v-bind="inputAttrs" :ref="inputRef">
                <BaseSelectItem value="1">Option 1</BaseSelectItem>
                <BaseSelectItem value="2">Option 2</BaseSelectItem>
                <BaseSelectItem value="3">Option 3</BaseSelectItem>
                <BaseSelectItem value="4">Option 4</BaseSelectItem>
              </BaseSelect>
              <div class="absolute z-0 end-10 top-3 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator>
                  <Icon name="lucide:badge-alert" class="size-4 text-amber-500" />
                </BasePrimitiveFieldErrorIndicator>  
              </div>
            </div>
            <BasePrimitiveFieldError>
              The input is invalid because ...
            </BasePrimitiveFieldError>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="col-span-2" required state="loading">
            <div class="relative">
              <BasePrimitiveFieldLabel class="mb-2">
                <span>Textarea</span>
                <BasePrimitiveFieldRequiredIndicator as-child>
                  <span class="text-xs ms-1">(Requis)</span>
                </BasePrimitiveFieldRequiredIndicator>
              </BasePrimitiveFieldLabel>
              <div class="absolute z-0 end-1 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div class="relative">
              <BaseTextarea v-bind="inputAttrs" :ref="inputRef" />
            </div>
            <BasePrimitiveFieldDescription class="inline-block mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </BasePrimitiveFieldDescription>
            <BasePrimitiveFieldError>
              The input is invalid because ...
            </BasePrimitiveFieldError>
          </BasePrimitiveField>
          
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" required state="loading" fieldset>
            <div class="flex mb-4 relative">
              <div class="flex flex-col gap-1 w-full">
                <BasePrimitiveFieldLabel>
                  <span>Radio</span> 
                  <BasePrimitiveFieldRequiredIndicator  />
                </BasePrimitiveFieldLabel>
                <BasePrimitiveFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
                </BasePrimitiveFieldDescription>
              </div>
              <div class="flex items-center justify-center">
                <BasePrimitiveFieldLoadingIndicator class="ms-3" />
                <BasePrimitiveFieldSuccessIndicator class="ms-3" />
                <BasePrimitiveFieldErrorIndicator class="ms-3" />
              </div>
            </div>

            <BaseRadioGroup class="relative flex flex-col gap-2 mt-2" v-bind="inputAttrs" :ref="inputRef">
              <BaseRadio value="1">Option 21</BaseRadio>
              <BaseRadio value="2">Option 2</BaseRadio>
              <BaseRadio value="3">Option 3</BaseRadio>
            </BaseRadioGroup>
          </BasePrimitiveField>
          
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" required state="error" fieldset>
            <div class="flex mb-4 relative">
              <div class="flex flex-col gap-1 w-full">
                <BasePrimitiveFieldLabel>
                  <span>Checkbox</span> 
                  <BasePrimitiveFieldRequiredIndicator  />
                </BasePrimitiveFieldLabel>
                <BasePrimitiveFieldDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                  <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
                </BasePrimitiveFieldDescription>
              </div>
              <div class="flex items-center justify-center">
                <BasePrimitiveFieldLoadingIndicator class="ms-3" />
                <BasePrimitiveFieldSuccessIndicator class="ms-3" />
                <BasePrimitiveFieldErrorIndicator class="ms-3" />
              </div>
            </div>

            <BaseCheckboxGroup class="relative flex flex-col gap-2 mt-2" v-bind="inputAttrs" :ref="inputRef">
              <BaseCheckbox value="1">Option 1</BaseCheckbox>
              <BaseCheckbox value="2">Option 2</BaseCheckbox>
              <BaseCheckbox value="3">Option 3</BaseCheckbox>
            </BaseCheckboxGroup>

            <BasePrimitiveFieldError class="mt-12">
              The input is invalid because ...
            </BasePrimitiveFieldError>
          </BasePrimitiveField>
        </div>
      </NuiPreview>

      <NuiPreview title="Horizontal" description="Horizontal field component">
        <div class="grid grid-cols-3 gap-8 gap-x-10 max-w-2xl">
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="col-span-3">
            <div class="relative">
              <div class="flex">
                <BaseInput placeholder="Firstname" class="border-e-transparent! rounded-e-none!" />
                <BaseInput placeholder="Lastname" class="rounded-s-none!" />
              </div>
              <div class="absolute z-0 end-4 top-3 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3" state="loading">
            <div class="flex flex-col justify-center gap-1 relative">
              <BasePrimitiveFieldLabel>
                <span>Loading</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
            
            <div class="col-span-2">
              <div class="relative">
                <BaseInput v-model="value1" v-bind="inputAttrs" :ref="inputRef" />
                <div class="absolute z-0 end-4 top-3 pointer-events-none" >
                  <BasePrimitiveFieldLoadingIndicator/>
                  <BasePrimitiveFieldSuccessIndicator />
                  <BasePrimitiveFieldErrorIndicator />
                </div>
              </div>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3"  required state="error">
            <div class="flex flex-col justify-center gap-1 relative">
              <BasePrimitiveFieldLabel>
                <span>Error</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseInput v-model="value2" v-bind="inputAttrs" :ref="inputRef" />
                <BasePrimitiveFieldLoadingIndicator class="absolute z-0 end-4 top-3 pointer-events-none" />
              </div>
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="col-span-3">
            <div class="relative">
              <BaseInput placeholder="Firstname" v-bind="inputAttrs" :ref="inputRef" />
              <div class="absolute z-0 end-4 top-3 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
          </BasePrimitiveField>
          
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3"  required state="error">
            <div class="flex flex-col justify-center gap-1 relative">
              <BasePrimitiveFieldLabel>
                <span>Error</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseInput v-model="value2" v-bind="inputAttrs" :ref="inputRef" />
                <BasePrimitiveFieldLoadingIndicator class="absolute z-0 end-4 top-3 pointer-events-none" />
              </div>
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3" required state="error">
            <div class="flex flex-col justify-center gap-1 relative">
              <BasePrimitiveFieldLabel>
                <span>Number</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseInputNumber v-bind="inputAttrs" :ref="inputRef" />
                <BasePrimitiveFieldLoadingIndicator class="absolute z-0 end-12 top-3 pointer-events-none" />
              </div>
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3" required state="error" fieldset>
            <div class="flex flex-col justify-center gap-1 relative">
              <BasePrimitiveFieldLabel>
                <span>Select</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseSelect v-model="value1" v-bind="inputAttrs" :ref="inputRef">
                  <BaseSelectItem value="1">Option 1</BaseSelectItem>
                  <BaseSelectItem value="2">Option 2</BaseSelectItem>
                  <BaseSelectItem value="3">Option 3</BaseSelectItem>
                </BaseSelect>
                <BasePrimitiveFieldLoadingIndicator class="absolute z-0 end-20 top-3 pointer-events-none" />
              </div>
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3" required state="loading">
            <div class="flex flex-col justify-start mt-2 gap-1 relative">
              <BasePrimitiveFieldLabel>
                <span>Textarea</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div class="col-span-2">
              <div class="relative">
                <BaseTextarea v-bind="inputAttrs" :ref="inputRef" />
              </div>
              <BasePrimitiveFieldError>
                Error
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>
          
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3 mb-4" required state="loading" fieldset>
            <div class="flex flex-col gap-1 mb-4 relative">
              <BasePrimitiveFieldLabel>
                <span>Radio</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <BaseRadioGroup class="relative flex flex-col gap-2" v-bind="inputAttrs" :ref="inputRef">
              <BaseRadio value="1">Option 12</BaseRadio>
              <BaseRadio value="2">Option 2</BaseRadio>
              <BaseRadio value="3">Option 3</BaseRadio>
            </BaseRadioGroup>
          </BasePrimitiveField>
          
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3 mb-4" required state="error" fieldset>
            <div class="relative flex flex-col gap-1 mb-4">
              <BasePrimitiveFieldLabel>
                <span>Checkbox</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div>
              <BaseCheckboxGroup class="relative flex flex-col gap-2" v-bind="inputAttrs" :ref="inputRef">
                <BaseCheckbox value="1">Option 1</BaseCheckbox>
                <BaseCheckbox value="2">Option 2</BaseCheckbox>
                <BaseCheckbox value="3">Option 3</BaseCheckbox>
              </BaseCheckboxGroup>
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>
          
          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3 mb-4" required state="error">
            <div class="relative flex flex-col gap-1 mb-4">
              <BasePrimitiveFieldLabel>
                <span>Switch</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div>
              <BaseSwitchBall v-bind="inputAttrs" :ref="inputRef" />
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3 mb-4" required state="error" fieldset>
            <div class="relative flex flex-col gap-1 mb-4">
              <BasePrimitiveFieldLabel>
                <span>Slider</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div>
              <BaseSlider v-bind="inputAttrs" :ref="inputRef" />
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>

          <BasePrimitiveField v-slot="{ inputRef, inputAttrs }" class="grid grid-cols-subgrid col-span-3 mb-4" required state="error" fieldset>
            <div class="relative flex flex-col gap-1 mb-4">
              <BasePrimitiveFieldLabel>
                <span>Slider range</span> 
                <BasePrimitiveFieldRequiredIndicator  />
              </BasePrimitiveFieldLabel>
              <BasePrimitiveFieldDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
                <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
              </BasePrimitiveFieldDescription>
              <div class="absolute z-0 end-0 top-0 pointer-events-none" >
                <BasePrimitiveFieldLoadingIndicator/>
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>

            <div>
              <BaseSlider variant="dark" v-model="valueSliderRange" v-bind="inputAttrs" :ref="inputRef" />
              <BasePrimitiveFieldError>
                The input is invalid because ...
              </BasePrimitiveFieldError>
            </div>
          </BasePrimitiveField>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>