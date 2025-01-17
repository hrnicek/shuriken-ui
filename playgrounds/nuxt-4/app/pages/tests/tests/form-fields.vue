<script setup lang="ts">
definePageMeta({
  title: 'Input forms',
  icon: 'lucide:wrench',
  description: 'Check how v-model works with components',
  section: 'tests',
})
const disabled = ref(false)
</script>
<template>
  <div>
    <NuiPreviewContainer title="Forms">
      <NuiPreview title="Form" description="Form sumbission">
        <form class=" max-w-2xl">
          <BaseCheckbox label="disable" v-model="disabled" />
          <fieldset class="grid grid-cols-2 gap-8" :disabled>
            <BaseField name="first-name" required>
              <BaseFieldLabel>
                <span>First name</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>

              <div class="relative w-full">
                <BaseFieldController>
                  <BaseInput class="w-full" autocomplete="given-name" />
                </BaseFieldController>
                <div class="absolute z-10 end-4 top-3" >
                  <BaseFieldLoadingIndicator/>
                  <BaseFieldSuccessIndicator />
                  <BaseFieldErrorIndicator />
                </div>
              </div>
            </BaseField>
            
            <BaseField name="last-name" required>
              <BaseFieldLabel>
                <span>Last name</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>

              <div class="relative w-full">
                <BaseFieldController>
                  <BaseInput class="w-full" autocomplete="family-name" />
                </BaseFieldController>
                <div class="absolute z-10 end-4 top-3" >
                  <BaseFieldLoadingIndicator/>
                  <BaseFieldSuccessIndicator />
                  <BaseFieldErrorIndicator />
                </div>
              </div>
            </BaseField>

            
            <BaseField name="email" required class="col-span-2">
              <BaseFieldLabel>
                <span>Email</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>

              <div class="relative w-full">
                <BaseFieldController>
                  <BaseInput type="email" class="w-full" autocomplete="email" />
                </BaseFieldController>
                <div class="absolute z-10 end-4 top-3" >
                  <BaseFieldLoadingIndicator/>
                  <BaseFieldSuccessIndicator />
                  <BaseFieldErrorIndicator />
                </div>
              </div>
            </BaseField>

            <BaseField name="tier" required>
              <BaseFieldLabel>
                <span>Select tier</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>

              <div class="relative w-full">
                <BaseFieldController>
                  <BaseSelect>
                    <BaseSelectItem value="1">Option 1</BaseSelectItem>
                    <BaseSelectItem value="2">Option 2</BaseSelectItem>
                    <BaseSelectItem value="3">Option 3</BaseSelectItem>
                  </BaseSelect>
                </BaseFieldController>
                <div class="absolute z-10 end-4 top-3" >
                  <BaseFieldLoadingIndicator/>
                  <BaseFieldSuccessIndicator />
                  <BaseFieldErrorIndicator />
                </div>
              </div>
            </BaseField>

            <BaseField name="agree-terms" class="col-span-2">
              <BaseFieldLabel>
                <span>Aggree ?</span> 
                <BaseFieldRequiredIndicator  />
              </BaseFieldLabel>

              <div class="relative w-full">
                <BaseFieldController>
                  <BaseSwitchBall />
                </BaseFieldController>
                <div class="absolute z-10 end-4 top-3" >
                  <BaseFieldLoadingIndicator/>
                  <BaseFieldSuccessIndicator />
                  <BaseFieldErrorIndicator />
                </div>
              </div>
            </BaseField>
          </fieldset>

          <div class="col-span-2">
            <BaseButton type="submit" class="w-full">Submit</BaseButton>
          </div>
        </form>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>