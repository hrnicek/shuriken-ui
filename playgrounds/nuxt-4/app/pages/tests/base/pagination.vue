<script setup lang="ts">
definePageMeta({
  title: 'BasePagination',
  icon: 'system-uicons:circle-menu',
  description: 'Pagination component',
  section: 'base',
})

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

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
</script>

<template>
  <div>
    <NuiPreviewContainer title="BasePagination">
      <NuiPreview
        title="Pagination size"
        description="Pagination component size example"
      >
        <BasePagination
          :items-per-page="8"
          :total="512"
          v-model:page="page"
          :sibling-count="2"
          size="sm"
        />
      </NuiPreview>

      <NuiPreview
        title="Pagination radius"
        description="Pagination component radius example"
      >
        <BasePagination
          :items-per-page="8"
          :total="512"
          v-model:page="page"
          :sibling-count="3"
          rounded="md"
        />
      </NuiPreview>

      <NuiPreview
        title="Pagination unwrapped"
        description="Pagination component radius example"
      >
        <BasePagination
          :items-per-page="8"
          :total="512"
          v-model:page="page"
          :sibling-count="1"
          rounded="md"
          size="sm"
          variant="dark"
          :wrapped="false"
        />
      </NuiPreview>

      <NuiPreview
        title="Variant: primary"
        description="Pagination component primary variant"
      >
        <BasePagination
          :items-per-page="8"
          :total="512"
          v-model:page="page"
          :sibling-count="1"
          rounded="full"
          variant="primary"
        />
      </NuiPreview>

      <NuiPreview
        title="Variant: dark"
        description="Pagination component dark variant"
      >
        <BasePagination
          :items-per-page="8"
          :total="1_000_000"
          v-model:page="page"
          :sibling-count="1"
          rounded="lg"
          variant="dark"
          size="sm"
        />
      </NuiPreview>

      <NuiPreview
        title="Slot usage"
        description="Pagination component slots example"
      >
        <BasePagination
          :items-per-page="8"
          :total="1_000_000"
          v-model:page="page"
          :sibling-count="1"
          rounded="full"
          variant="dark"
        >
          <template #page="{ page }">
            {{ formatter.format(page) }}
          </template>
          <template #ellipsis>
            <Icon name="lucide:ellipsis" />
          </template>
        </BasePagination> 
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
