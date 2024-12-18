<script setup lang="ts">
definePageMeta({
  title: 'BaseField',
  icon: 'system-uicons:calendar-move',
  description: 'Field component',
  section: 'form',
})

const value1 = ref('1')
const value2 = ref('')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseField">
      <NuiPreview title="Base" description="Base field component">
        <div class="grid grid-cols-4 gap-4">
          <BaseField state="loading">
            <BaseFieldLabel>
              Label 
              <BaseFieldRequiredIndicator />
            </BaseFieldLabel>
            
            <div class="relative">
              <BaseFieldController>
                <BaseInput v-model="value1" />
              </BaseFieldController>
              <BaseFieldLoadingIndicator class="absolute end-4 top-3" />
            </div>
            <BaseFieldDescription>
              Description
            </BaseFieldDescription>
          </BaseField>

          <BaseField required state="error">
            <BaseFieldLabel>
              Label
              <BaseFieldRequiredIndicator />
            </BaseFieldLabel>

            <div class="relative">
              <BaseFieldController>
                <BaseInput v-model="value2" />
              </BaseFieldController>
              <BaseFieldLoadingIndicator class="absolute z-10 end-4 top-3" />
            </div>
            <BaseFieldDescription>
              Description
            </BaseFieldDescription>
            <BaseFieldError>
              Error
            </BaseFieldError>
          </BaseField>

          <BaseField required state="error">
            <BaseFieldLabel>
              Label
              <BaseFieldRequiredIndicator />
            </BaseFieldLabel>

            <div class="relative">
              <BaseFieldController>
                <BaseInputNumber />
              </BaseFieldController>
              <BaseFieldLoadingIndicator class="absolute z-10 end-20 top-3" />
            </div>
            <BaseFieldError>
              Error
            </BaseFieldError>
          </BaseField>

          <BaseField required state="error">
            <BaseFieldLabel>
              Label
              <BaseFieldRequiredIndicator />
            </BaseFieldLabel>

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
              Error
            </BaseFieldError>
          </BaseField>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>