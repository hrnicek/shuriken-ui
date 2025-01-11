<script setup lang="ts">
const props = defineProps<{
    fullname: string
    number: string
    expiryYear: string
    expiryMonth: string
    cvc: string
  }>()
</script>

<template>
  <div
    class="border-muted-300 dark:border-muted-800 shadow-muted-400/10 dark:shadow-muted-800/10 relative h-[200px] w-full max-w-[315px] rounded-xl border bg-white dark:bg-muted-900 p-6 shadow-xl"
  >
    <!--Card content-->
    <div class="flex h-full flex-col gap-3">
      <div class="flex items-center gap-2">
        <div class="bg-muted-200 dark:bg-muted-700 size-2 rounded-full" />
        <span class="text-muted-400 font-sans text-sm"> Mastercard </span>
      </div>
      <div class="mt-auto space-y-1">
        <img
          class="mb-3 w-11 grayscale"
          src="/img/vector/chip.svg"
          alt="Card chip"
          width="44"
          height="31"
        >
        <div>
          <h5 class="font-heading text-muted-500 text-sm">
            {{ props.fullname }}
          </h5>
        </div>
        <div>
          <p class="font-heading text-muted-400 text-xs">
            <span>{{ props.number }}</span>
          </p>
        </div>
        <div
          class="font-heading text-muted-400 flex w-full items-center gap-2 text-xs"
        >
          <div class="flex items-center gap-2">
            <span>EXP</span>
            <span>{{ props.expiryMonth }}/{{ props.expiryYear }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>CVC</span>
            <span>{{ props.cvc }}</span>
          </div>
        </div>
      </div>
    </div>

    <!--Mastercard-->
    <div class="absolute end-5 top-4 flex">
      <Icon name="logos:mastercard" class="size-10 grayscale" />
    </div>

    <!--Logo-->
    <div class="absolute bottom-6 end-5 flex">
      <Logo id="logo-credit-card"  class="text-muted-900 dark:text-white size-10" />
    </div>
  </div>
</template>