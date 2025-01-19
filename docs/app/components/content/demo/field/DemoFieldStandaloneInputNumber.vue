<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-xs items-end gap-4">
          <BaseField
            id="quantity"
            v-slot="{ inputAttrs, inputRef }"
            label="Quantity"
            class="w-full"
          >
            <BaseInputNumber :ref="inputRef" v-bind="inputAttrs" placeholder="placeholder" />
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
