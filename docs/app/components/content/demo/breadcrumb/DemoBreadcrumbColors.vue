<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]
</script>

<template>
  <div class="flex flex-col space-y-2 px-4 pt-4">
    <BaseBreadcrumb
      :items="breadcrumb"
      variant="primary"
    >
      /
    </BaseBreadcrumb>
    <BaseBreadcrumb
      :items="breadcrumb"
      variant="dark"
    >
      /
    </BaseBreadcrumb>
  </div>
</template>
