<script setup lang="ts">
const checked = ref(true)
</script>

<template>
  <div class="shrink-0 w-full h-10 flex items-center gap-4 px-4 md:px-6 border-b border-muted-200 dark:border-muted-800">
    <BaseDropdown
      label="Custom dropdown"
      rounded="md"
    >
      <template #button>
        <button type="button" class="font-sans text-sm font-medium px-2 py-1 rounded-md text-muted-600 hover:text-muted-900 data-[state=open]:font-semibold data-[state=open]:text-muted-900 hover:bg-muted-100 data-[state=open]:bg-muted-100">
          <span>Menu</span>
        </button>
      </template>
      <BaseDropdownItem> 
        <span>About Songster</span>
      </BaseDropdownItem>
      <BaseDropdownItem> 
        <span>Preferences</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">U</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownSeparator />
      <BaseDropdownItem> 
        <span>Hide Songster</span>
      </BaseDropdownItem>
      <BaseDropdownItem> 
        <span>Quit Songster</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">Q</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
    <BaseDropdown
      label="Custom dropdown"
      rounded="md"
    >
      <template #button>
        <button type="button" class="font-sans text-sm font-medium px-2 py-1 rounded-md text-muted-600 data-[state=open]:font-semibold data-[state=open]:text-muted-900 data-[state=open]:bg-muted-100">
          <span>File</span>
        </button>
      </template>
      <BaseDropdownSub>
        <template #title>
          New
        </template>
        <BaseDropdownItem>
          <span>Playlist</span>
          <template #end>
            <div class="flex gap-0.5">
              <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
              <BaseKbd variant="default" size="sm" class="font-medium">N</BaseKbd>
            </div>
          </template>
        </BaseDropdownItem> 
        <BaseDropdownItem>
          <span>From selection</span>
          <template #end>
            <div class="flex gap-0.5">
              <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
              <BaseKbd variant="default" size="sm" class="font-medium">⇧</BaseKbd>
              <BaseKbd variant="default" size="sm" class="font-medium">N</BaseKbd>
            </div>
          </template>
        </BaseDropdownItem> 
        <BaseDropdownItem disabled>
          Auto playlist
        </BaseDropdownItem> 
        <BaseDropdownItem>
          New folder
        </BaseDropdownItem>
      </BaseDropdownSub>
      <BaseDropdownItem> 
        <span>Open URL</span>
      </BaseDropdownItem>
      <BaseDropdownItem> 
        <span>Close window</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">W</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownSeparator />
      <BaseDropdownItem> 
        <span>Library</span>
      </BaseDropdownItem>
      <BaseDropdownItem> 
        <span>Import...</span>
      </BaseDropdownItem>
      <BaseDropdownItem> 
        <span>Show in finder</span>
      </BaseDropdownItem>
      <BaseDropdownItem> 
        <span>Convert</span>
      </BaseDropdownItem>
      <BaseDropdownSeparator />
      <BaseDropdownItem> 
        <span>Print</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">P</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
    <BaseDropdown
      label="Custom dropdown"
      rounded="md"
    >
      <template #button>
        <button type="button" class="font-sans text-sm font-medium px-2 py-1 rounded-md text-muted-600 hover:text-muted-900 data-[state=open]:font-semibold data-[state=open]:text-muted-900 hover:bg-muted-100 data-[state=open]:bg-muted-100">
          <span>Edit</span>
        </button>
      </template>
      <BaseDropdownItem disabled> 
        <span>Undo</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">Z</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownItem disabled> 
        <span>Redo</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">⇧</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">Z</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownSeparator />
      <BaseDropdownItem disabled> 
        <span>Cut</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">X</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownItem disabled> 
        <span>Copy</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">C</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownItem disabled> 
        <span>Paste</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">V</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownSeparator />
      <BaseDropdownItem> 
        <span>Select all</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">A</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
      <BaseDropdownItem disabled> 
        <span>Deselect all</span>
        <template #end>
          <div class="flex gap-0.5">
            <BaseKbd variant="default" size="sm" class="font-medium">⌘</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">⇧</BaseKbd>
            <BaseKbd variant="default" size="sm" class="font-medium">A</BaseKbd>
          </div>
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
    <BaseDropdown
      label="Custom dropdown"
      rounded="md"
    >
      <template #button>
        <button type="button" class="font-sans text-sm font-medium px-2 py-1 rounded-md text-muted-600 hover:text-muted-900 data-[state=open]:font-semibold data-[state=open]:text-muted-900 hover:bg-muted-100 data-[state=open]:bg-muted-100">
          <span>View</span>
        </button>
      </template>
      <BaseDropdownCheckbox
        v-model="checked"
        title="Show playing next"
      />
      <BaseDropdownCheckbox
        v-model="checked"
        title="Show lyrics"
      />
      <BaseDropdownSeparator />
      <BaseDropdownItem disabled> 
        <span>Show status bar</span>
      </BaseDropdownItem>
      <BaseDropdownItem> 
        <span>Hide sidebar</span>
      </BaseDropdownItem>
      <BaseDropdownItem disabled> 
        <span>Full screen</span>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>