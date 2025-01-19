<script setup lang="ts">
definePageMeta({
  title: 'BaseInput',
  icon: 'system-uicons:calendar-move',
  description: 'Input component',
  section: 'form',
})

const fieldsRounded = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
})


const fieldsType = reactive({
  text: undefined,
  password: undefined,
  email: undefined,
  tel: undefined,
  url: undefined,
  search: undefined,
  number: undefined,
  numberModifier: undefined,
  color: undefined,
  date: undefined,
  month: undefined,
  time: undefined,
  week: undefined,
  datetimeLocal: undefined,
})

const amount = ref<number | undefined>(undefined)
const taxes = ref('With taxes')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseInput">
      <NuiPreview title="Radius" description="Inputs radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInput
            v-model="fieldsRounded.first"
            rounded="none"
            placeholder="Rounded: none"
          />
          <BaseInput
            v-model="fieldsRounded.second"
            rounded="sm"
            placeholder="Rounded: sm"
          />
          <BaseInput
            v-model="fieldsRounded.third"
            rounded="md"
            placeholder="Rounded: md"
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            rounded="lg"
            placeholder="Rounded: lg"
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            rounded="full"
            placeholder="Rounded: full"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Input component sizes">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="sm"
              rounded="md"
              placeholder="Size: sm"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              placeholder="Size: md"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="lg"
              rounded="md"
              placeholder="Size: lg"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="xl"
              rounded="md"
              placeholder="Size: xl"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variants"
        description="Input component variants"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-2xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              variant="default"
              size="md"
              rounded="md"
              label="Size: sm"
              placeholder="Default variant"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              variant="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Muted variant"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Input component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-2xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="md"
              rounded="md"
              placeholder="Error"
              aria-invalid="true"
              required
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              variant="muted"
              placeholder="Error"
              aria-invalid="true"
              required
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Input component disabled state">
        <div class="flex flex-wrap items-end gap-3 max-w-2xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="md"
              rounded="md"
              placeholder="Disabled"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              variant="muted"
              placeholder="Disabled"
              disabled
            />
          </div>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Type" description="Input component type with validation">
        <form class="grid grid-cols-4 gap-3 max-w-2xl">
          <div class="flex-1">
            <BaseInput type="text" name="text" required placeholder="text" v-model="fieldsType.text" />
          </div>
          <div class="flex-1">
            <BaseInput type="password" name="password" required placeholder="password" v-model="fieldsType.password" />
          </div>
          <div class="flex-1">
            <BaseInput type="email" name="email" required placeholder="email" v-model="fieldsType.email" />
          </div>
          <div class="flex-1">
            <BaseInput type="tel" name="tel" required placeholder="tel" v-model="fieldsType.tel" />
          </div>
          <div class="flex-1">
            <BaseInput type="url" name="url" required placeholder="url" v-model="fieldsType.url" />
          </div>
          <div class="flex-1">
            <BaseInput type="search" name="search" required placeholder="search" v-model="fieldsType.search" />
          </div>
          <div class="flex-1">
            <BaseInput type="number" name="number" required placeholder="number" v-model="fieldsType.number" />
          </div>
          <div class="flex-1">
            <BaseInput type="number" name="number-modifier" required placeholder="number" v-model.number="fieldsType.numberModifier" />
          </div>
          <div class="flex-1">
            <BaseInput type="color" name="color" required placeholder="color" v-model="fieldsType.color" />
          </div>
          <div class="flex-1">
            <BaseInput type="date" name="date" required placeholder="date" v-model="fieldsType.date" />
          </div>
          <div class="flex-1">
            <BaseInput type="month" name="month" required placeholder="month" v-model="fieldsType.month" />
          </div>
          <div class="flex-1">
            <BaseInput type="time" name="time" required placeholder="time" v-model="fieldsType.time" />
          </div>
          <div class="flex-1">
            <BaseInput type="week" name="week" required placeholder="week" v-model="fieldsType.week" />
          </div>
          <div class="flex-1">
            <BaseInput type="datetime-local" name="datetime-local" required placeholder="datetime-local" v-model="fieldsType.datetimeLocal" />
          </div>
          <div>
            <BaseButton type="submit">Submit</BaseButton>
          </div>
        </form>
        <pre>{{ fieldsType }}</pre>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
