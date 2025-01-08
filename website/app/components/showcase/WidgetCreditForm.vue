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
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
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
    <form action="" class="mt-4 space-y-4">
      <!-- Name -->
      <BaseField required> 
        <div class="w-full inline-flex mb-2">
          <BaseFieldLabel class="flex items-center justify-between w-full">
            <div>
              <span>Name</span>
              <BaseFieldRequiredIndicator  />
            </div>
          </BaseFieldLabel>
        </div>
        <div class="relative">
          <BaseFieldController>
            <BaseInput placeholder="Ex: John Smith" />
          </BaseFieldController>
          <div class="absolute z-0 end-4 top-3 pointer-events-none" >
            <BaseFieldLoadingIndicator/>
            <BaseFieldSuccessIndicator />
            <BaseFieldErrorIndicator />
          </div>
        </div>
      </BaseField>
      <!-- City -->
      <BaseField > 
        <div class="w-full inline-flex mb-2">
          <BaseFieldLabel class="flex items-center justify-between w-full">
            <div>
              <span>City</span>
              <BaseFieldRequiredIndicator  />
            </div>
          </BaseFieldLabel>
        </div>
        <div class="relative">
          <BaseFieldController>
            <BaseInput placeholder="Ex: Los Angeles" />
          </BaseFieldController>
          <div class="absolute z-0 end-4 top-3 pointer-events-none" >
            <BaseFieldLoadingIndicator/>
            <BaseFieldSuccessIndicator />
            <BaseFieldErrorIndicator />
          </div>
        </div>
      </BaseField>
      <!-- Card Number -->
      <BaseField > 
        <div class="w-full inline-flex mb-2">
          <BaseFieldLabel class="flex items-center justify-between w-full">
            <div>
              <span>Card Number</span>
              <BaseFieldRequiredIndicator  />
            </div>
          </BaseFieldLabel>
        </div>
        <div class="relative">
          <BaseFieldController>
            <BaseInput placeholder="Ex: 4242 4242 4242 4242" />
          </BaseFieldController>
          <div class="absolute z-0 end-4 top-3 pointer-events-none" >
            <BaseFieldLoadingIndicator/>
            <BaseFieldSuccessIndicator />
            <BaseFieldErrorIndicator />
          </div>
        </div>
      </BaseField>
      <!-- Expiry Date -->
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Month -->
        <BaseField> 
          <div class="w-full inline-flex mb-2">
            <BaseFieldLabel class="flex items-center justify-between w-full">
              <div>
                <span>Expires</span>
                <BaseFieldRequiredIndicator  />
              </div>
            </BaseFieldLabel>
          </div>
          <div class="relative">
            <BaseFieldController>
              <BaseSelect placeholder="Month">
                <BaseSelectItem value="1">01</BaseSelectItem>
                <BaseSelectItem value="2">02</BaseSelectItem>
                <BaseSelectItem value="3">03</BaseSelectItem>
                <BaseSelectItem value="4">04</BaseSelectItem>
                <BaseSelectItem value="5">05</BaseSelectItem>
                <BaseSelectItem value="6">06</BaseSelectItem>
                <BaseSelectItem value="7">07</BaseSelectItem>
                <BaseSelectItem value="8">08</BaseSelectItem>
                <BaseSelectItem value="9">09</BaseSelectItem>
                <BaseSelectItem value="10">10</BaseSelectItem>
                <BaseSelectItem value="11">11</BaseSelectItem>
                <BaseSelectItem value="12">12</BaseSelectItem>
              </BaseSelect>
            </BaseFieldController>
            <div class="absolute z-0 end-10 top-3 pointer-events-none" >
              <BaseFieldLoadingIndicator/>
              <BaseFieldSuccessIndicator />
              <BaseFieldErrorIndicator />
            </div>
          </div>
        </BaseField>
        <!-- year -->
        <BaseField> 
          <div class="w-full inline-flex mb-2">
            <BaseFieldLabel class="flex items-center justify-between w-full">
              <div>
                <span>Year</span>
                <BaseFieldRequiredIndicator  />
              </div>
            </BaseFieldLabel>
          </div>
          <div class="relative">
            <BaseFieldController>
              <BaseSelect placeholder="Year">
                <BaseSelectItem value="2025">2025</BaseSelectItem>
                <BaseSelectItem value="2026">2026</BaseSelectItem>
                <BaseSelectItem value="2027">2027</BaseSelectItem>
                <BaseSelectItem value="2028">2028</BaseSelectItem>
                <BaseSelectItem value="2029">2029</BaseSelectItem>
                <BaseSelectItem value="2030">2030</BaseSelectItem>
              </BaseSelect>
            </BaseFieldController>
            <div class="absolute z-0 end-10 top-3 pointer-events-none" >
              <BaseFieldLoadingIndicator/>
              <BaseFieldSuccessIndicator />
              <BaseFieldErrorIndicator />
            </div>
          </div>
        </BaseField>
        <!-- Name -->
        <BaseField > 
          <div class="w-full inline-flex mb-2">
            <BaseFieldLabel class="flex items-center justify-between w-full">
              <div>
                <span>CVC</span>
                <BaseFieldRequiredIndicator  />
              </div>
            </BaseFieldLabel>
          </div>
          <div class="relative">
            <BaseFieldController>
              <BaseInput placeholder="Ex: 379" />
            </BaseFieldController>
            <div class="absolute z-0 end-4 top-3 pointer-events-none" >
              <BaseFieldLoadingIndicator/>
              <BaseFieldSuccessIndicator />
              <BaseFieldErrorIndicator />
            </div>
          </div>
        </BaseField>
      </div>
      <div class="mt-6">
        <BaseButton variant="dark" rounded="md" class="w-full">
          Send Payment
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>