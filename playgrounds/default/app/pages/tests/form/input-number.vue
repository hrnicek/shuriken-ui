<script setup lang="ts">
definePageMeta({
  title: 'BaseInputNumber',
  icon: 'system-uicons:calendar-move',
  description: 'Input number component',
  section: 'form',
})

const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
  sixth: 0,
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseInputNumber">
      <NuiPreview title="Format" description="Number value formatting">
        <div class="grid grid-cols-4 max-w-3xl gap-4">
          <BaseInputNumber
            :default-value="5"
            label="Default"
            placeholder="Quantity"
          />
          <BaseInputNumber
            :default-value="5"
            :format-options="{
              signDisplay: 'exceptZero',
              minimumFractionDigits: 1,
            }"
            placeholder="Decimal"
          />
          <BaseInputNumber
            :default-value="0.05"
            :step="0.01"
            :format-options="{
              style: 'percent',
            }"
            placeholder="Percent"
          />
          <BaseInputNumber
            :default-value="5"
            :step="1"
            :format-options="{
              style: 'currency',
              currency: 'EUR',
              currencyDisplay: 'code',
              currencySign: 'accounting',
            }"
            placeholder="EUR"
          />
        </div>
      </NuiPreview>


      <NuiPreview title="Format: fr" description="Number value formatting">
        <div class="grid grid-cols-4 max-w-3xl gap-4">
          <BaseInputNumber
            :default-value="5"
            locale="fr"
            placeholder="Quantity"
          />
          <BaseInputNumber
            :default-value="5"
            locale="fr"
            :format-options="{
              signDisplay: 'exceptZero',
              minimumFractionDigits: 1,
              roundingMode: 'expand'
            }"
            placeholder="Decimal"
          />
          <BaseInputNumber
            :default-value="0.05"
            locale="fr"
            :step="0.01"
            :format-options="{
              style: 'percent',
            }"
            placeholder="Percent"
          />
          <BaseInputNumber
            :default-value="5.1"
            locale="fr"
            :step="0.01"
            :format-options="{
              style: 'currency',
              currency: 'EUR',
              currencyDisplay: 'symbol',
              currencySign: 'standard',
            }"
            placeholder="EUR"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Inputs border radiuses">
        <div class="grid grid-cols-3 max-w-2xl gap-4">
          <BaseInputNumber
            v-model="fields.first"
            rounded="none"
            label="Rounded: none"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.second"
            rounded="sm"
            label="Rounded: sm"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.third"
            rounded="md"
            label="Rounded: md"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.fourth"
            rounded="lg"
            label="Rounded: lg"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.fourth"
            rounded="full"
            label="Rounded: full"
            placeholder="Quantity"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Input component sizes">
        <div class="grid grid-cols-4 max-w-5xl gap-4">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variants"
        description="Input component variants"
      >
        <div class="grid grid-cols-4 max-w-5xl gap-4">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              variant="default"
              size="md"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              variant="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Input component disabled state">
        <div class="grid grid-cols-4 max-w-5xl gap-4">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              variant="default"
              size="md"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              variant="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              disabled
            />
          </div>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
