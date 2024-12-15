<script setup lang="ts" generic="T extends object">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the component.
     */
    item?: T

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

    /**
     * CSS Class applied to the matching part of the text.
     */
    mark?: string

    /**
     * The radius of the component.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The properties to use for the value, label, sublabel, media, and icon of the options items.
     */
    properties?: {
      /**
       * The property to use for the label of the options.
       */
      label?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the sublabel of the options.
       */
      sublabel?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the media of the options.
       */
      media?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the icon of the options.
       */
      icon?: T extends object ? keyof T | ((arg: T) => string) : string
    }
  }>(),
  {
    item: undefined,
    rounded: undefined,
    mark: 'nui-mark',
    selectedIcon: undefined,
    properties: () =>
      ({
        label: 'label',
        sublabel: 'sublabel',
        media: 'media',
        icon: 'icon',
      }) as any,
  },
)

defineSlots<{
  'selected-icon': () => any
}>()

const rounded = useNuiDefaultProperty(props, 'BaseAutocompleteItem', 'rounded')

const iconSelected = useNuiDefaultIcon('check', () => props.selectedIcon)

const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-xl',
}

const inputContext = inject('BaseAutocompleteContext', {
  query: '',
})

const label = computed(() => {
  if (props.item == null || props.properties == null)
    return null
  if (typeof props.properties.label === 'string')
    return (props.item as any)[props.properties.label]
  if (typeof props.properties.label === 'function')
    return props.properties.label(props.item)

  return null
})

const sublabel = computed(() => {
  if (props.item == null || props.properties == null)
    return null
  if (typeof props.properties.sublabel === 'string')
    return (props.item as any)[props.properties.sublabel]
  if (typeof props.properties.sublabel === 'function')
    return props.properties.sublabel(props.item)
  return null
})

const media = computed(() => {
  if (props.item == null || props.properties == null)
    return null
  if (typeof props.properties.media === 'string')
    return (props.item as any)[props.properties.media]
  if (typeof props.properties.media === 'function')
    return props.properties.media(props.item)
  return null
})

const icon = computed(() => {
  if (props.item == null || props.properties == null)
    return null
  if (typeof props.properties.icon === 'string')
    return (props.item as any)[props.properties.icon]
  if (typeof props.properties.icon === 'function')
    return props.properties.icon(props.item)
  return null
})

const query = computed(() => inputContext.query)
const mark = computed(() => props.mark)
const markedLabel = useNinjaMark(() => label.value, query, mark)
const markedSublabel = useNinjaMark(() => sublabel.value, query, mark)
</script>

<template>
  <div
    class="flex cursor-pointer items-center p-2 transition-colors duration-300"
    :class="[
      props.active ? 'bg-muted-100 dark:bg-muted-700' : '',
      rounded && radiuses[rounded],
    ]"
  >
    <div v-if="media && !icon" class="me-3 shrink-0 flex items-center justify-center">
      <BaseAvatar  :src="media" size="xs" />
    </div>
    <div
      v-else-if="icon && !media"
      class="me-3 shrink-0 flex items-center justify-center"
    >
      <Icon
        :name="icon"
        class="size-4"
        :class="[props.selected ? 'text-primary-500' : 'text-muted-500']"
      />
    </div>
    <div>
      <BaseHeading
        as="h4"
        :weight="props.selected ? 'semibold' : 'normal'"
        size="sm"
        lead="snug"
        class="text-muted-800 dark:text-white"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="markedLabel" />
      </BaseHeading>
      <BaseParagraph v-if="sublabel" size="xs" lead="none" class="text-muted-400">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="markedSublabel" />
      </BaseParagraph>
    </div>
    <div
      v-show="props.selected"
      class="ms-auto flex items-center justify-center"
      :class="[media && 'size-8', icon && 'size-8']"
    >
      <slot name="selected-icon">
        <Icon :name="iconSelected" class="text-success-500 block size-4" />
      </slot>
    </div>
  </div>
</template>
