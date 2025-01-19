<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseField
            id="options"
            v-slot="{ inputAttrs, inputRef }"
            label="Search an option"
            class="w-full"
          >
            <BaseAutocomplete
              :ref="inputRef"
              v-bind="inputAttrs"
              placeholder="autocomplete placeholder"
              clearable
            >
              <BaseAutocompleteItem value="1">
                Option 1
              </BaseAutocompleteItem>
              <BaseAutocompleteItem value="2">
                Option 2
              </BaseAutocompleteItem>
              <BaseAutocompleteItem value="3">
                Option 3
              </BaseAutocompleteItem>
              <BaseAutocompleteItem value="4">
                Option 4
              </BaseAutocompleteItem>
              <BaseAutocompleteItem value="5">
                Option 5
              </BaseAutocompleteItem>
              <BaseAutocompleteItem value="6">
                Option 6
              </BaseAutocompleteItem>
            </BaseAutocomplete>
          </BaseField>
        </div>
      </div>
    </div>
  </div>
</template>
