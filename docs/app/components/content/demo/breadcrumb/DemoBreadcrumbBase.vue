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
  <div class="flex items-center px-4 pt-4">
    <BaseBreadcrumb :items="breadcrumb" />
  </div>
</template>
