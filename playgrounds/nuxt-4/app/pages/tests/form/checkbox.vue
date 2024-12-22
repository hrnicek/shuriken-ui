<script setup lang="ts">
definePageMeta({
  title: 'BaseCheckbox',
  icon: 'system-uicons:checkbox-checked',
  description: 'Checkbox component',
  section: 'form',
})

const options = reactive({
  first: 'indeterminate' as 'indeterminate' | boolean,
  second: true,
  third: false,
  fourth: true,
  fifth: 'indeterminate' as 'indeterminate' | boolean,
  sixth: true,
  seventh: true,
  eighth: false,
  nineth: true,
  tenth: true,
  eleventh: true,
})

const disabledValue = ref(true)
const customValue = ref(false)
const multipleValue = ref(['Option 1', 'Option 4'])

const value = ref([])

function reset() {
  value.value = []
}
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseCheckbox">
      <NuiPreview
        title="Variants"
        description="Checkbox component variants"
      >
        <div
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseCheckbox
            v-model="options.first"
            label="Default"
            data-testid="checkbox-1"
            variant="default"
          />
          <BaseCheckbox
            v-model="options.second"
            label="Primary"
            variant="primary"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Dark"
            variant="dark"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Checkbox component disabled state"
      >
        <BaseCheckbox v-model="disabledValue" disabled label="I'm disabled" />
      </NuiPreview>

      <NuiPreview
        title="Value: custom"
        description="Checkbox component custom value"
      >
        <BaseCheckbox
          v-model="customValue"
          name="true-false"
            label="Custom value"
        />
      </NuiPreview>

      <NuiPreview
        title="Value: multiple"
        description="Checkbox component multiple values"
      >
        <BaseCheckboxGroup v-model="multipleValue" class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseCheckbox
            name="multiple-demo-1"
            label="Option 1"
            value="Option 1"
          />

          <BaseCheckbox
            name="multiple-demo-2"
            label="Option 2"
            value="Option 2"
          />

          <BaseCheckbox
            name="multiple-demo-3"
            label="Option 3"
            value="Option 3"
          />

          <BaseCheckbox
            name="multiple-demo-4"
            label="Option 4"
            value="Option 4"
          />
        </BaseCheckboxGroup>
      </NuiPreview>

      <NuiPreview
        title="Custom colors"
        description="Checkbox component custom colors"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-2xl md:grid-cols-4"
        >
          <BaseCheckbox
            v-model="options.first"
            label="Custom color"
            variant="none"
            :classes="{ box: 'bg-green-500/10 dark:bg-green-500/20 border-1 border-muted-300 dark:border-muted-700 text-green-700 text-green-500 dark:text-green-400' }"
          />
          <BaseCheckbox
            v-model="options.second"
            label="Custom color"
            variant="none"
            :classes="{ box: 'bg-red-500/10 dark:bg-red-500/20 border-1 border-muted-300 dark:border-muted-700 text-red-700 text-red-500 dark:text-red-400' }"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Custom color"
            variant="none"
            :classes="{ box: 'bg-cyan-500/10 dark:bg-cyan-500/20 border-1 border-muted-300 dark:border-muted-700 text-cyan-700 text-cyan-500 dark:text-cyan-400' }"
          />
          <BaseCheckbox
            v-model="options.fourth"
            label="Custom color"
            variant="none"
            :classes="{ box: 'bg-amber-500/10 dark:bg-amber-500/20 border-1 border-muted-300 dark:border-muted-700 text-amber-700 text-amber-500 dark:text-amber-400' }"
          />
        </BaseFocusLoop>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
