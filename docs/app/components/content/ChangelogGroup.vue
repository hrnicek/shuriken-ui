<script lang="ts" setup>
const props = defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="py-6">
    <BaseHeading
      v-if="'title' in $slots || props.title"
      as="h2"
      size="2xl"
      weight="medium"
      class="mb-1"
    >
      <MDCSlot :use="$slots.title" unwrap="p">
        {{ props.title }}
      </MDCSlot>
    </BaseHeading>
    <BaseParagraph
      v-if="'subtitle' in $slots || props.subtitle"
      size="xs"
      class="tacking-wider mb-4 text-muted-500 dark:text-muted-400"
    >
      <MDCSlot :use="$slots.subtitle" unwrap="p">
        {{ props.subtitle }}
      </MDCSlot>
    </BaseParagraph>
    <div>
      <ul class="space-y-3">
        <MDCSlot :use="$slots.default" unwrap="p" />
      </ul>
    </div>
  </div>
</template>
