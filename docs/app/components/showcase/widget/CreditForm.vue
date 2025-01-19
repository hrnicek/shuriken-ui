<script setup lang="ts">

</script>

<template>
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="mb-6 flex items-center">
      <div class="space-y-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Pay with credit card</span>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-600 dark:text-muted-400"
        >
          Enter your credit card information
        </BaseParagraph>
      </div>
    </div>
    <div class="flex items-center justify-center px-2 py-4 bg-muted-100 dark:bg-muted-800/20 rounded-2xl">
      <ShowcaseWidgetCreditCard
        fullname="John Smith"
        number="4242 4242 4242 4242"
        expiry-month="11"
        expiry-year="25"
        cvc="317"
      />
    </div>
    <form
      action=""
      class="mt-4 space-y-4"
    >
      <!-- Name -->
      <BaseField
        id="name"
        v-slot="{ inputAttrs, inputRef }"
        label="Name"
      >
        <BaseInput :ref="inputRef" v-bind="inputAttrs" placeholder="Ex: John Smith" />
      </BaseField>
      <!-- City -->
      <BaseField
        id="city"
        v-slot="{ inputAttrs, inputRef }"
        label="City"
      >
        <BaseInput :ref="inputRef" v-bind="inputAttrs" placeholder="Ex: Los Angeles" />
      </BaseField>
      <!-- Card Number -->
      <BaseField
        id="card-number"
        v-slot="{ inputAttrs, inputRef }"
        label="Card Number"
      >
        <BaseInput :ref="inputRef" v-bind="inputAttrs" placeholder="Ex: 4242 4242 4242 4242" />
      </BaseField>
      <!-- Expiry Date -->
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Month -->
        <BaseField
          id="expires"
          v-slot="{ inputAttrs, inputRef }"
          label="Expires"
        >
          <BaseSelect :ref="inputRef" v-bind="inputAttrs" placeholder="Month">
            <BaseSelectItem value="1">
              01
            </BaseSelectItem>
            <BaseSelectItem value="2">
              02
            </BaseSelectItem>
            <BaseSelectItem value="3">
              03
            </BaseSelectItem>
            <BaseSelectItem value="4">
              04
            </BaseSelectItem>
            <BaseSelectItem value="5">
              05
            </BaseSelectItem>
            <BaseSelectItem value="6">
              06
            </BaseSelectItem>
            <BaseSelectItem value="7">
              07
            </BaseSelectItem>
            <BaseSelectItem value="8">
              08
            </BaseSelectItem>
            <BaseSelectItem value="9">
              09
            </BaseSelectItem>
            <BaseSelectItem value="10">
              10
            </BaseSelectItem>
            <BaseSelectItem value="11">
              11
            </BaseSelectItem>
            <BaseSelectItem value="12">
              12
            </BaseSelectItem>
          </BaseSelect>
        </BaseField>
        <!-- year -->
        <BaseField
          id="year"
          v-slot="{ inputAttrs, inputRef }"
          label="Year"
        >
          <BaseSelect :ref="inputRef" v-bind="inputAttrs" placeholder="Year">
            <BaseSelectItem value="2025">
              2025
            </BaseSelectItem>
            <BaseSelectItem value="2026">
              2026
            </BaseSelectItem>
            <BaseSelectItem value="2027">
              2027
            </BaseSelectItem>
            <BaseSelectItem value="2028">
              2028
            </BaseSelectItem>
            <BaseSelectItem value="2029">
              2029
            </BaseSelectItem>
            <BaseSelectItem value="2030">
              2030
            </BaseSelectItem>
          </BaseSelect>
        </BaseField>
        <!-- CVC -->
        <BaseField
          id="cvc"
          v-slot="{ inputAttrs, inputRef }"
          label="CVC"
        >
          <BaseInput :ref="inputRef" v-bind="inputAttrs" placeholder="Ex: 379" />
        </BaseField>
      </div>
      <div class="mt-6">
        <BaseButton
          variant="dark"
          rounded="md"
          class="w-full"
        >
          Send Payment
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>
