<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the breadcrumb.
     *
     * If not provided, the breadcrumb will be generated
     * from the current route using page meta under `breadcrumb` key.
     */
    items?: {
      /**
       * The route to navigate to when the item is clicked.
       */
      to?: RouteLocationRaw

      /**
       * The label to display for the item.
       */
      label?: string

      /**
       * Whether to hide the label for the item.
       */
      hideLabel?: boolean

      /**
       * CSS classes to apply to the icon.
       */
      iconClasses?: string | string[]
    }[]

    /**
     * Defines the hover color of the breadcrumb links
     *
     * @default 'primary'
     */
    variant?: 'primary' | 'dark'
  }>(),
  {
    items: undefined,
    color: undefined,
  },
)

const variant = useNuiConfig('BaseBreadcrumb', 'variant', () => props.variant)

const route = useRoute()
const router = useRouter()

const items = computed(() => {
  if (props.items) {
    return props.items
  }

  const breadcrumbItems: any[] = []
  const indexRoute = router.resolve('/')

  if (indexRoute?.meta?.breadcrumb === false) {
    // skip breadcrumb item
  }
  else if (indexRoute?.meta?.breadcrumb) {
    const breadcrumbItem = indexRoute.meta.breadcrumb
    breadcrumbItems.push({
      to: indexRoute.path,
      ...breadcrumbItem,
    })
  }
  else if (indexRoute?.meta?.title) {
    breadcrumbItems.push({
      label: indexRoute.meta.title as string,
      to: indexRoute.path,
    })
  }

  for (const matched of route.matched) {
    if (matched?.meta?.breadcrumb === false) {
      // skip breadcrumb item
    }
    else if (matched?.meta?.breadcrumb) {
      const breadcrumbItem = matched.meta.breadcrumb
      breadcrumbItems.push({
        to: matched.path,
        ...breadcrumbItem,
      })
    }
    else if (matched?.meta?.title) {
      breadcrumbItems.push({
        label: matched.meta.title as string,
        to: matched.path,
      })
    }
  }

  return breadcrumbItems
})
</script>

<template>
  <nav
    class="block"
  >
    <ul class="mb-6 flex items-center font-sans text-[0.85rem]">
      <li class="me-3 sm:hidden">
        <BaseDropdown
          size="md"
        >
          <template #button>
            <BaseButton
              size="icon-sm"
              rounded="full"
              class="group"
            >
              <Icon name="lucide:ellipsis" class="block text-base transition-transform group-data-[state=open]:rotate-45" />
            </BaseButton>
          </template>
          <BaseDropdownItem
            v-for="(item, index) in items.slice(0, items.length - 1)"
            :key="index"
            :to="item.to"
            class="flex items-center gap-x-1"
          >
            {{ item.label }}
          </BaseDropdownItem>
        </BaseDropdown>
      </li>
      <template v-for="(item, index) in items" :key="index">
        <li
          class="not-last:hidden not-last:sm:flex last:flex last:text-muted-500 dark:last:text-muted-400"
          :class="[
            index !== items.length - 1 ? 'hidden sm:flex' : 'flex',
          ]"
        >
          <slot name="link" v-bind="{ item, index }">
            <NuxtLink
              :to="item.to"
              class="hover:underline underline-offset-4 text-[0.85rem] flex items-center gap-x-1 text-muted-500 dark:text-muted-400 transition-colors duration-300"
              :class="[
                item.to && variant === 'primary' && 'hover:text-[var(--primary-heavy)] focus:text-[var(--primary-heavy)] dark:hover:text-[var(--primary-light)] dark:focus:text-[var(--primary-light)]',
                item.to && variant === 'dark' && 'hover:text-muted-900 focus:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100',
              ]"
            >
              <slot name="label" v-bind="{ item, index }">
                <span :class="[item.hideLabel && 'sr-only']">
                  {{ item.label }}
                </span>
              </slot>
            </NuxtLink>
          </slot>
        </li>
        <li class="not-last:hidden not-last:sm:flex last:flex last:text-muted-500 dark:last:text-muted-400">
          <div class="text-[0.85rem] flex items-center gap-x-1 text-muted-500 dark:text-muted-400 transition-colors duration-300">
            <span v-if="index < items.length - 1" class="text-muted-500 dark:text-muted-400 px-2">
              <slot>·</slot>
            </span>
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>
