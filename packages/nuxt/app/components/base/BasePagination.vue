<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The number of items to display per page.
     */
    itemPerPage: number

    /**
     * The total number of items.
     */
    totalItems: number

    /**
     * The maximum number of links to display.
     */
    maxLinksDisplayed?: number

    /**
     * Whether to disable routing.
     */
    noRouter?: boolean

    /**
     * The query key to use for routing.
     */
    routerQueryKey?: string

    /**
     * The icon to show for the previous button.
     */
    previousIcon?: string

    /**
     * The icon to show for the next button.
     */
    nextIcon?: string

    /**
     * The ellipsis to show when there are too many links.
     */
    ellipsis?: string

    /**
     * The color of the pagination active button.
     *
     * @since 3.0.0
     * @default 'primary'
     */
    color?: 'primary' | 'dark' | 'black'

    /**
     * The radius of the pagination.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the list element.
       */
      list?: string | string[]

      /**
       * CSS classes to apply to the link element.
       */
      link?: string | string[]

      /**
       * CSS classes to apply to the ellipsis element.
       */
      ellipsis?: string | string[]

      /**
       * CSS classes to apply to the buttons element.
       */
      buttons?: string | string[]

      /**
       * CSS classes to apply to the button element.
       */
      button?: string | string[]
    }
  }>(),
  {
    rounded: undefined,
    color: undefined,
    maxLinksDisplayed: 3,
    routerQueryKey: 'page',
    previousIcon: 'lucide:chevron-left',
    nextIcon: 'lucide:chevron-right',
    ellipsis: '…',
    classes: () => ({}),
  },
)

const color = useNuiDefaultProperty(props, 'BasePagination', 'color')
const rounded = useNuiDefaultProperty(props, 'BasePagination', 'rounded')


const currentPage = defineModel('currentPage', {
  type: Number,
  default: 4,
})

const radiuses = {
  none: '',
  sm: 'nui-pagination-rounded-sm',
  md: 'nui-pagination-rounded-md',
  lg: 'nui-pagination-rounded-lg',
  full: 'nui-pagination-rounded-full',
}

const colors = {
  primary: 'nui-pagination-primary',
  dark: 'nui-pagination-dark',
  black: 'nui-pagination-black',
}
</script>

<template>
  <PaginationRoot
    v-model:page="currentPage"
    :total="props.totalItems"
    :items-per-page="props.itemPerPage"
    :sibling-count="Math.round((props.maxLinksDisplayed - 1) / 2)"
    show-edges
  >
    <PaginationList
      v-slot="{ items }" 
      class="nui-pagination"
      :class="[
        rounded && radiuses[rounded],
        color && colors[color],
        props.classes?.wrapper,
      ]"
    >
      <ul
        class="nui-pagination-list"
        :class="[rounded && radiuses[rounded], props.classes?.list]"
      >
        <slot name="before-pagination" />

        <template v-for="(page, index) in items">
          <PaginationListItem
            v-if="page.type === 'page'"
            :key="index"
            :value="page.value"
            class="nui-pagination-link"
            :class="[
              currentPage === page && 'nui-pagination-active',
              rounded && radiuses[rounded],
              props.classes?.link,
            ]"
          >
            {{ page.value }}
          </PaginationListItem>
          <PaginationEllipsis
            v-else
            :key="page.type"
            :index="index"
            class="nui-pagination-ellipsis"
          >
            &#8230;
          </PaginationEllipsis>
        </template>

        <slot name="after-pagination" />
      </ul>

      <div
        class="nui-pagination-buttons"
        :class="[rounded && radiuses[rounded], props.classes?.buttons]"
      >
        <slot name="before-navigation" />

        <PaginationPrev class="nui-pagination-button">
          <slot name="previous-icon">
            <Icon :name="previousIcon" class="pagination-button-icon" />
          </slot>
        </PaginationPrev>

        <PaginationNext class="nui-pagination-button">
          <slot name="next-icon">
            <Icon :name="nextIcon" class="pagination-button-icon" />
          </slot>
        </PaginationNext>
        <!-- <NuxtLink
          :to="paginatedLink(currentPage - 1)"
          tabindex="0"
          class="nui-pagination-button"
          :class="props.classes?.button"
          @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
          @click="(e: any) => handleLinkClick(e, currentPage - 1)"
        >
          <slot name="previous-icon">
            <Icon :name="previousIcon" class="pagination-button-icon" />
          </slot>
        </NuxtLink>

        <NuxtLink
          :to="paginatedLink(currentPage + 1)"
          tabindex="0"
          class="nui-pagination-button"
          :class="props.classes?.button"
          @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
          @click="(e: any) => handleLinkClick(e, currentPage + 1)"
        >
          <slot name="next-icon">
            <Icon :name="nextIcon" class="pagination-button-icon" />
          </slot>
        </NuxtLink> -->
        <slot name="after-navigation" />
      </div>
    </PaginationList>
  </PaginationRoot>
</template>
