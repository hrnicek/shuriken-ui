<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-4">
          <BaseDropdown variant="default" label="Default dropdown">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown variant="muted" label="Muted dropdown">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
          <BaseDropdown variant="primary" label="Primary dropdown">
            <BaseDropdownItem>Leads</BaseDropdownItem>
            <BaseDropdownItem>Projects</BaseDropdownItem>
            <BaseDropdownItem>Team</BaseDropdownItem>
            <BaseDropdownItem>Reports</BaseDropdownItem>
            <BaseDropdownItem>
              Settings
              <template #end>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono">⌘</span>
                </BaseKbd>
                <BaseKbd size="sm">
                  <span class="text-xs font-mono px-0.5">P</span>
                </BaseKbd>
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
