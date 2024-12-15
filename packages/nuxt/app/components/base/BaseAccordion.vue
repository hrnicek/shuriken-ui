<script setup lang="ts" generic="T extends unknown">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the accordion.
     */
    items: {
      /**
       * The title of the accordion item.
       */
      title: string
      /**
       * The content of the accordion item.
       */
      content: T
    }[]

    /**
     * Indexes of the items that should be opened by default.
     */
    openItems?: number[]

    /**
     * Whether if multiple elements in the accordion can be opened at same time or not.
     */
    exclusive?: boolean

    /**
     * Defines the icon used for accordion item toggle action
     *
     * @default 'dot'
     */
    action?: 'dot' | 'chevron' | 'plus'

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the details element.
       */
      details?: string | string[]

      /**
       * CSS classes to apply to the summary element.
       */
      summary?: string | string[]

      /**
       * CSS classes to apply to the header element.
       */
      header?: string | string[]

      /**
       * CSS classes to apply to the content element.
       */
      content?: string | string[]
    }
  }>(),
  {
    action: 'dot',
    openItems: () => [],
    classes: () => ({}),
  },
)
const emits = defineEmits<{
  (
    event: 'open',
    item: {
      /**
       * The title of the accordion item.
       */
      title: string
      /**
       * The content of the accordion item.
       */
      content: T
    },
  ): void
}>()

defineSlots<{
  'accordion-item': (props: {
    index: number
    item: { title: string, content: T }
    toggle: (index: number) => void
  }) => any
  'accordion-item-summary': (props: {
    index: number
    item: { title: string, content: T }
    toggle: (index: number) => void
  }) => any
  'accordion-item-content': (props: {
    index: number
    item: { title: string, content: T }
    toggle: (index: number) => void
  }) => any
}>()
const action = useNuiDefaultProperty(props, 'BaseAccordion', 'action')


const internalOpenItems = ref(props.exclusive ? props.openItems?.[0] ?? 0 : props.openItems)
</script>

<template>
  <AccordionRoot
    v-model="internalOpenItems"
    :type="props.exclusive ? 'single' : 'multiple'"
    collapsible
  >
    <AccordionItem
      v-for="(item, key) in items"
      :key="key"
      class="w-full block transition-colors duration-300"
      :class="[
        props.classes?.wrapper,
      ]"
      :value="key"
    >
      <div
        class="relative"
        :class="props.classes?.details"
      >
        <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
          <AccordionHeader
            class="cursor-pointer list-none outline-none"
            :class="props.classes?.summary"
          >
            <slot
              name="accordion-item-summary"
              :item="item"
              :index="key"
              :toggle="toggle"
            >
              <AccordionTrigger
                class="flex items-center justify-between w-full py-3 rounded-md hover:bg-muted-50 dark:hover:bg-muted-700 px-4 cursor-pointer nui-focus"
                :class="props.classes?.header" 
              >
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-800 dark:text-white"
                >
                  {{ item.title }}
                </BaseHeading>

                <div
                  v-if="props.action === 'dot' || action === 'dot'"
                  class="ms-2"
                > 
                  <BaseChip
                    position="static"
                    size="md"
                    :color="toggle ? 'primary' : 'muted'"
                  />
                </div>

                <div
                  v-else-if="props.action === 'chevron' || action === 'chevron'"
                  class="ms-2 flex items-center justify-center size-8 rounded-full border border-transparent dark:border-transparent bg-white dark:bg-muted-700/60 transition-all duration-300"
                >
                  <IconChevronDown class="nui-accordion-chevron-icon" />
                </div>
                <div
                  v-else-if="props.action === 'plus' || action === 'plus'"
                  class="ms-2 flex items-center justify-center size-8 rounded-full border border-transparent dark:border-transparent bg-white dark:bg-muted-700/60 transition-all duration-300"
                >
                  <IconPlus class="nui-accordion-plus-icon" />
                </div>
              </AccordionTrigger>
            </slot>
          </AccordionHeader>
          <AccordionContent class="px-4 pb-4 font-sans text-sm text-muted-500 dark:text-muted-400" :class="props.classes?.content">
            <div class="mt-3">
              <slot
                name="accordion-item-content"
                :item="item"
                :index="key"
                :toggle="toggle"
              >
                <BaseParagraph size="sm" lead="tight">
                  {{ item.content }}
                </BaseParagraph>
              </slot>
            </div>
          </AccordionContent>
        </slot>
      </div>
    </AccordionItem>
  </AccordionRoot>
</template>
