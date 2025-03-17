<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    to: '#',
  },
  {
    label: 'Laptops',
    to: '#',
  },
]
</script>

<template>
  <div class="flex items-center px-4 pt-4">
    <BaseBreadcrumb :items="breadcrumb">
      <Icon
        name="lucide:arrow-right"
        class="block h-3 w-3"
      />
    </BaseBreadcrumb>
  </div>
</template>
