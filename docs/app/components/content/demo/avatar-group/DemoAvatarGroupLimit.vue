<script setup lang="ts">
const people = [
  {
    src: '/img/people/19.jpg',
  },
  {
    src: '/img/people/30.jpg',
  },
  {
    src: '/img/people/42.jpg',
  },
  {
    src: '/img/people/29.jpg',
  },
  {
    src: '/img/people/44.jpg',
  },
  {
    src: '/img/people/39.jpg',
  },
  {
    src: '/img/people/16.jpg',
  },
  {
    src: '/img/people/17.jpg',
  },
]
</script>

<template>
  <div class="flex flex-wrap items-end gap-4 py-4 px-6">
    <BaseAvatarGroup
      size="sm"
      :avatars="people"
      :limit="8"
    />
  </div>
</template>
