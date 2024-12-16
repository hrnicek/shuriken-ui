<script setup lang="ts">
definePageMeta({
  title: 'BasePagination',
  icon: 'system-uicons:circle-menu',
  description: 'Pagination component',
  section: 'base',
})

const route = useRoute()
const router = useRouter()
const currentPage = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.push({ query: { ...route.query, page: value } })
  },
})

</script>

<template>
  <div>
    <NuiPreviewContainer title="BasePagination">
      <NuiPreview
        title="Pagination size"
        description="Pagination component size example"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          v-model:current-page="currentPage"
          :max-links-displayed="5"
          size="sm"
        />
      </NuiPreview>

      <NuiPreview
        title="Pagination radius"
        description="Pagination component radius example"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          v-model:current-page="currentPage"
          :max-links-displayed="5"
          rounded="sm"
        />
      </NuiPreview>

      <NuiPreview
        title="Pagination unwrapped"
        description="Pagination component radius example"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          v-model:current-page="currentPage"
          :max-links-displayed="5"
          rounded="md"
          size="sm"
          :wrapped="false"
        />
      </NuiPreview>

      <NuiPreview
        title="Variant: primary low"
        description="Pagination component primary low variant"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          v-model:current-page="currentPage"
          :max-links-displayed="5"
          rounded="lg"
          variant="primary-low"
          size="sm"
        />
      </NuiPreview>

      <NuiPreview
        title="Variant: primary high"
        description="Pagination component primary high variant"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          v-model:current-page="currentPage"
          :max-links-displayed="5"
          rounded="full"
          variant="primary-high"
        />
      </NuiPreview>

      <NuiPreview
        title="Variant: dark low"
        description="Pagination component dark variant"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="1000000"
          v-model:current-page="currentPage"
          :max-links-displayed="5"
          rounded="lg"
          variant="dark-low"
          size="sm"
        />
      </NuiPreview>

      <NuiPreview
        title="Variant: dark high"
        description="Pagination component dark variant"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="1000000"
          v-model:current-page="currentPage"
          :max-links-displayed="5"
          rounded="full"
          variant="dark-high"
        />
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
