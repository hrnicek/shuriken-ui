<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const page = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
</script>

<template>
  <div class="p-4">
    <BasePagination
      v-slot="{ items }"
      v-model:page="page"
      :items-per-page="8"
      :total="512"
      :sibling-count="2"
      size="sm"
      class="w-full justify-between"
    >
      <div class="flex gap-2">
        <BasePaginationButtonFirst />
        <BasePaginationButtonPrev />
      </div>
      <BasePaginationItems :items />
      <div class="flex gap-2">
        <BasePaginationButtonNext />
        <BasePaginationButtonLast />
      </div>
    </BasePagination>
  </div>
</template>
