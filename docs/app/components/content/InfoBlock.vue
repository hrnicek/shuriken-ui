<script setup lang="ts">
const props = defineProps<{
  icon?: string
  title?: string
}>()
</script>

<template>
  <div class="py-6">
    <BaseCard
      rounded="md"
      color="muted-contrast"
      class="!border-muted-300 p-4 dark:!border-muted-800 md:p-6"
    >
      <div class="flex gap-3">
        <div v-if="'icon' in $slots || props.icon">
          <slot name="icon">
            <Icon
              v-if="props.icon"
              :name="props.icon"
              class="h-6 w-6 text-muted-500 dark:text-muted-600"
            />
          </slot>
        </div>
        <div>
          <BaseHeading
            v-if="'title' in $slots || props.title"
            as="h5"
            size="md"
            weight="medium"
            class="mb-1"
          >
            <slot name="title">
              {{ props.title }}
            </slot>
          </BaseHeading>
          <BaseParagraph
            v-if="'default' in $slots"
            size="sm"
            class="text-muted-500 dark:text-muted-400"
          >
            <slot />
          </BaseParagraph>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
