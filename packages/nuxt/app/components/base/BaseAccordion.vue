<script setup lang="ts">
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
      content: string
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
     * The variant of the accordion.
     *
     * @default 'default-high'
     */
     variant?: 'default-low' | 'default-high'

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
      content: string
    },
  ): void
}>()

defineSlots<{
  'accordion-item': (props: {
    index: number
    item: { title: string, content: string }
  }) => any
  'accordion-item-summary': (props: {
    index: number
    item: { title: string, content: string }
  }) => any
  'accordion-item-content': (props: {
    index: number
    item: { title: string, content: string }
  }) => any
}>()

const variant = useNuiDefaultProperty(props, 'BaseAccordion', 'variant')
const action = useNuiDefaultProperty(props, 'BaseAccordion', 'action')

const iconChevron = useNuiDefaultIcon('chevronDown')
const iconPlus = useNuiDefaultIcon('plus')


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
      :value="item.content"
    >
      <div
        class="relative"
        :class="props.classes?.details"
      >
        <slot name="accordion-item" :item="item" :index="key">
          <AccordionHeader
            class="cursor-pointer list-none outline-none"
            :class="props.classes?.summary"
          >
            <slot
              name="accordion-item-summary"
              :item="item"
              :index="key"
            >
              <AccordionTrigger
                class="flex group/trigger items-center justify-between w-full py-3 rounded-md px-4 cursor-pointer nui-focus"
                :class="[
                  props.classes?.header,
                  variant === 'default-low' && 'hover:bg-muted-50 dark:hover:bg-muted-700',
                  variant === 'default-high' && 'hover:bg-muted-50 dark:hover:bg-muted-800',
                ]" 
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
                    color="custom"
                    class="text-muted-200 dark:text-muted-600 group-data-[state=open]/trigger:text-primary-500"
                  />
                </div>

                <div
                  v-else-if="props.action === 'chevron' || action === 'chevron'"
                  class="ms-2 text-muted-500 dark:text-muted-300 flex items-center justify-center size-5 group-data-[state=open]/trigger:rotate-180 transition-all duration-300"
                >
                  <Icon :name="iconChevron" class="text-base" />
                </div>
                <div
                  v-else-if="props.action === 'plus' || action === 'plus'"
                  class="ms-2 text-muted-500 dark:text-muted-300 flex items-center justify-center size-5 group-data-[state=open]/trigger:rotate-45 transition-all duration-300"
                >
                  <Icon :name="iconPlus" class="text-base" />
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
