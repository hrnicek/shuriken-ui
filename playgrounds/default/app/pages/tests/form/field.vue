<script setup lang="ts">
definePageMeta({
  title: 'BaseField',
  icon: 'system-uicons:calendar-move',
  description: 'Field component',
  section: 'form',
})
const disabled = ref(false)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseField">
      <BaseCheckbox v-model="disabled" label="Disabled" />
      
      <NuiPreview title="BaseInput">
        <div class="grid grid-cols-2 gap-y-12 gap-x-6 max-w-4xl">
          <BaseField
            :disabled
            label="Non input"
            hint="Optionel"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
          >
            <span>empty</span>
          </BaseField>
          
          <BaseField
            :disabled
            id="custom-id"
            label="Custom input"
            hint="Optionel"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <input type="text" placeholder="native input" v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>

          
          <BaseField
            :disabled
            label="Composed"
            hint="Optionel"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <div class="flex *:first:rounded-e-none *:first:border-e-0 *:last:rounded-s-none">
              <BaseInput placeholder="main input" v-bind="inputAttrs" :ref="inputRef" />
              <BaseInput :disabled placeholder="secondary" />
            </div>
          </BaseField>

          <BaseField
            :disabled
            label="Composed 2"
            hint="Optionel"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <div class="flex *:rounded-none *:border-e-0 *:first:rounded-s-md *:last:border-e *:last:rounded-e-md">
              <div 
              class="px-3 border text-input-default-text/60 bg-input-default-bg border-input-default-border flex items-center justify-center"
              :class="[disabled ? 'opacity-50' : '']"
              >
                <Icon name="lucide:search" class="size-4" />
              </div>
              <BaseInput placeholder="main input" v-bind="inputAttrs" :ref="inputRef" />
              <BaseInput :disabled placeholder="secondary" />
            </div>
          </BaseField>

          

          <BaseField
            :disabled
            label="Composed 3"
            hint="Optionel"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <div class="focus-within:nui-focus rounded-md flex *:rounded-none *:border-e-0 *:first:rounded-s-md *:last:border-e *:last:rounded-e-md">
              <div
                class="ps-3 border text-input-default-text/60 bg-input-default-bg border-input-default-border flex items-center justify-center"
                :class="[disabled ? 'opacity-50' : '']"
              >
                <Icon name="lucide:search" class="size-4" />
              </div>
              <BaseInput placeholder="main input" v-bind="inputAttrs" :ref="inputRef" class="focus-visible:ring-0  border-s-0" />
            </div>
          </BaseField>

          
          <BaseField
            :disabled
            label="Composed 4"
            hint="Optionel"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <div class="focus-within:nui-focus rounded-md flex *:rounded-none *:border-e-0 *:first:rounded-s-md *:last:border-e *:last:rounded-e-md">
              <div
                class="ps-3 border text-input-default-text/60 bg-input-default-bg border-input-default-border flex items-center justify-center"
                :class="[disabled ? 'opacity-50' : '']"
              >
                <Icon name="lucide:phone" class="size-4" />
              </div>
              <BaseInput placeholder="+33 123456789" v-bind="inputAttrs" :ref="inputRef" class="focus-visible:ring-0 border-s-0" />
              <BaseSelect class="focus:ring-0 border-s-0 w-32!" placeholder="Select">
                <BaseSelectItem value="1">FR</BaseSelectItem>
                <BaseSelectItem value="2">EN</BaseSelectItem>
                <BaseSelectItem value="3">IT</BaseSelectItem>
                <BaseSelectItem value="4">ES</BaseSelectItem>
              </BaseSelect>
            </div>
          </BaseField>
        </div>
      </NuiPreview>

      <NuiPreview title="BaseInput">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            label="label"
            hint="Optionel"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInput v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInput v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInput v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
          >
            <template #default="{ inputAttrs, inputRef }">
              <BaseInput v-bind="inputAttrs" :ref="inputRef" />
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      
      <NuiPreview title="BaseTextarea">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            hint="Hint"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseTextarea v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseTextarea v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseTextarea v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
          >
            <template #default="{ inputAttrs, inputRef }">
              <BaseTextarea v-bind="inputAttrs" :ref="inputRef" />
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      <NuiPreview title="BaseInputNumber">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            hint="Hint"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInputNumber v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInputNumber v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInputNumber v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
          >
            <template #default="{ inputAttrs, inputRef }">
              <BaseInputNumber v-bind="inputAttrs" :ref="inputRef" />
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      

      <NuiPreview title="BaseInputFile">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            hint="Hint"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInputFile v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInputFile v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseInputFile v-bind="inputAttrs" :ref="inputRef" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
          >
            <template #default="{ inputAttrs, inputRef }">
              <BaseInputFile v-bind="inputAttrs" :ref="inputRef" />
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      <NuiPreview title="BaseSlider">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            hint="Hint"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseSlider v-bind="inputAttrs" class="py-4" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseSlider v-bind="inputAttrs" class="py-4" />
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseSlider v-bind="inputAttrs" class="py-4" />
          </BaseField>
          <BaseField
            :disabled
            label="Lorem ipsum dolor sit amet consectetur adipiscing elit."
            error="Error message"
            state="error"
            required
            fieldset
          >
            <template #default="{ inputAttrs }">
              <BaseSlider v-bind="inputAttrs" class="py-4" />
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      

      <NuiPreview title="BaseRadioGroup">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseRadioGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
              <BaseRadio value="1">Option 21</BaseRadio>
              <BaseRadio value="2">Option 2</BaseRadio>
              <BaseRadio value="3">Option 3</BaseRadio>
            </BaseRadioGroup>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseRadioGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
              <BaseRadio value="1">Option 21</BaseRadio>
              <BaseRadio value="2">Option 2</BaseRadio>
              <BaseRadio value="3">Option 3</BaseRadio>
            </BaseRadioGroup>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseRadioGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
              <BaseRadio value="1">Option 21</BaseRadio>
              <BaseRadio value="2">Option 2</BaseRadio>
              <BaseRadio value="3">Option 3</BaseRadio>
            </BaseRadioGroup>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
            fieldset
          >
            <template #default="{ inputAttrs }">
              <BaseRadioGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
                <BaseRadio value="1">Option 21</BaseRadio>
                <BaseRadio value="2">Option 2</BaseRadio>
                <BaseRadio value="3">Option 3</BaseRadio>
              </BaseRadioGroup>
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      

      <NuiPreview title="BaseCheckboxGroup">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseCheckboxGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
              <BaseCheckbox value="1">Option 21</BaseCheckbox>
              <BaseCheckbox value="2">Option 2</BaseCheckbox>
              <BaseCheckbox value="3">Option 3</BaseCheckbox>
            </BaseCheckboxGroup>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseCheckboxGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
              <BaseCheckbox value="1">Option 21</BaseCheckbox>
              <BaseCheckbox value="2">Option 2</BaseCheckbox>
              <BaseCheckbox value="3">Option 3</BaseCheckbox>
            </BaseCheckboxGroup>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseCheckboxGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
              <BaseCheckbox value="1">Option 21</BaseCheckbox>
              <BaseCheckbox value="2">Option 2</BaseCheckbox>
              <BaseCheckbox value="3">Option 3</BaseCheckbox>
            </BaseCheckboxGroup>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
            fieldset
          >
            <template #default="{ inputAttrs }">
              <BaseCheckboxGroup v-bind="inputAttrs" class="relative flex flex-col gap-2 pt-2 pb-4">
                <BaseCheckbox value="1">Option 21</BaseCheckbox>
                <BaseCheckbox value="2">Option 2</BaseCheckbox>
                <BaseCheckbox value="3">Option 3</BaseCheckbox>
              </BaseCheckboxGroup>
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      <NuiPreview title="BaseSelect">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseSelect v-bind="inputAttrs">
              <BaseSelectItem value="1">Option 1</BaseSelectItem>
              <BaseSelectItem value="2">Option 2</BaseSelectItem>
              <BaseSelectItem value="3">Option 3</BaseSelectItem>
              
            </BaseSelect>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseSelect v-bind="inputAttrs">
              <BaseSelectItem value="1">Option 1</BaseSelectItem>
              <BaseSelectItem value="2">Option 2</BaseSelectItem>
              <BaseSelectItem value="3">Option 3</BaseSelectItem>
              
            </BaseSelect>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs }"
            fieldset
          >
            <BaseSelect v-bind="inputAttrs">
              <BaseSelectItem value="1">Option 1</BaseSelectItem>
              <BaseSelectItem value="2">Option 2</BaseSelectItem>
              <BaseSelectItem value="3">Option 3</BaseSelectItem>
              
            </BaseSelect>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
            fieldset
          >
            <template #default="{ inputAttrs }">
              <BaseSelect v-bind="inputAttrs">
                <BaseSelectItem value="1">Option 1</BaseSelectItem>
                <BaseSelectItem value="2">Option 2</BaseSelectItem>
                <BaseSelectItem value="3">Option 3</BaseSelectItem>
                
              </BaseSelect>
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>

      
      <NuiPreview title="BaseAutocomplete">
        <div class="grid grid-cols-4 gap-4 max-w-6xl">
          <BaseField
            :disabled
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseAutocomplete v-bind="inputAttrs" :ref="inputRef" >
              <BaseAutocompleteItem value="1">Option 1</BaseAutocompleteItem>
              <BaseAutocompleteItem value="2">Option 2</BaseAutocompleteItem>
              <BaseAutocompleteItem value="3">Option 3</BaseAutocompleteItem>
              
            </BaseAutocomplete>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="success"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseAutocomplete v-bind="inputAttrs" :ref="inputRef">
              <BaseAutocompleteItem value="1">Option 1</BaseAutocompleteItem>
              <BaseAutocompleteItem value="2">Option 2</BaseAutocompleteItem>
              <BaseAutocompleteItem value="3">Option 3</BaseAutocompleteItem>
              
            </BaseAutocomplete>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            hint="Hint"
            state="loading"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
            v-slot="{ inputAttrs, inputRef }"
          >
            <BaseAutocomplete v-bind="inputAttrs" :ref="inputRef">
              <BaseAutocompleteItem value="1">Option 1</BaseAutocompleteItem>
              <BaseAutocompleteItem value="2">Option 2</BaseAutocompleteItem>
              <BaseAutocompleteItem value="3">Option 3</BaseAutocompleteItem>
              
            </BaseAutocomplete>
          </BaseField>
          <BaseField
            :disabled
            label="Label"
            error="Error message"
            state="error"
            required
          >
            <template #default="{ inputAttrs, inputRef }">
              <BaseAutocomplete v-bind="inputAttrs" :ref="inputRef">
                <BaseAutocompleteItem value="1">Option 1</BaseAutocompleteItem>
                <BaseAutocompleteItem value="2">Option 2</BaseAutocompleteItem>
                <BaseAutocompleteItem value="3">Option 3</BaseAutocompleteItem>
                
              </BaseAutocomplete>
            </template>

            <template #hint>
              <BaseTooltip content="Hint">
                <Icon name="lucide:circle-help" class="size-4 text-muted-500" />
              </BaseTooltip>
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ...
              <BaseLink to="#" class="text-primary-600 dark:text-primary-400">Learn more</BaseLink>
            </template>
          </BaseField>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>