<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
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
