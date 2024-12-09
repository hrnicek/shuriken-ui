<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The values to display in the component.
     */
    value?: {
      /**
       * Internal value of the item.
       */
      value?: any

      /**
       * Optional label to display instead of the value.
       */
      label?: string

      /**
       * Optional sublabel to display for the item.
       */
      sublabel?: string

      /**
       * Optional media (such as an image URL) to display for the item.
       */
      media?: string

      /**
       * Optional icon to display for the item.
       */
      icon?: string
    }

    /**
     * The icon to show when the component is selected.
     */
    selectedIcon?: string

    /**
     * Whether the item is focus/hover or not.
     */
    active?: boolean

    /**
     * Whether the item is selected or not.
     */
    selected?: boolean
  }>(),
  {
    selectedIcon: 'lucide:check',
    value: () => ({}),
  },
)
</script>

<template>
  <div v-if="props.value.media" class="me-3">
    <BaseAvatar :src="props.value.media" size="xs" />
  </div>
  <div
    v-else-if="props.value.icon"
    class="me-3 shrink-0 flex items-center justify-center"
  >
    <Icon
      :name="props.value.icon"
      class="text-muted-400 group-hover/nui-listbox-option:text-primary-500 size-5 transition-colors duration-200"
    />
  </div>

  <div class="nui-listbox-option-inner">
    <BaseHeading
      as="h4"
      :weight="selected ? 'semibold' : 'normal'"
      size="sm"
      lead="snug"
      class="nui-listbox-heading"
    >
      {{ props.value.label ? props.value.label : props.value.value }}
    </BaseHeading>
    <BaseParagraph v-if="props.value.sublabel" lead="none" size="xs" class="nui-listbox-text">
      {{ props.value.sublabel }}
    </BaseParagraph>
  </div>
  <span v-if="selected" class="nui-listbox-selected-icon">
    <Icon :name="selectedIcon" class="nui-listbobx-selected-icon-inner" />
  </span>
</template>
