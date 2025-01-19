<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseField
            id="upload"
            v-slot="{ inputAttrs, inputRef }"
            label="Upload file"
            class="w-full"
          >
            <BaseInputFile :ref="inputRef" v-bind="inputAttrs" placeholder="placeholder" />
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
