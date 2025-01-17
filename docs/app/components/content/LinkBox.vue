<script setup lang="ts">
const props = defineProps<{
  to: string
  title?: string
  icon?: string
}>()
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="group/link"
  >
    <BaseCard
      color="default-contrast"
      rounded="md"
      class="flex gap-3 p-4 group-hover/link:!border-muted-800 group-hover/link:shadow-lg group-hover/link:shadow-muted-300/30 dark:group-hover/link:border-muted-100! dark:group-hover/link:shadow-muted-800/20 transition-colors duration-200"
    >
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
    </BaseCard>
  </NuxtLink>
</template>
