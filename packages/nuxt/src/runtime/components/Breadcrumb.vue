<script setup lang="ts">
import type { BaseBreadcrumbProps, BaseBreadcrumbSlots } from '../types'
import { BaseBreadcrumb as theme } from '#build/shuriken-ui/theme'
import { useRoute, useRouter } from '#imports'
import { computed } from 'vue'

const props = withDefaults(defineProps<BaseBreadcrumbProps>(), {
  items: undefined,
  color: undefined,
  variant: theme.defaults.variant,
})
const slots = defineSlots<BaseBreadcrumbSlots>()

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
  <nav aria-label="Breadcrumb">
    <BaseDropdown
      class="me-3 sm:hidden"
      size="md"
    >
      <template #button>
        <BaseButton
          size="icon-sm"
          rounded="full"
          class="group"
        >
          <Icon name="lucide:ellipsis" class="block text-base transition-transform group-data-[state=open]:rotate-90" />
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
    <ol class="mb-6 flex items-center font-sans text-[0.85rem]">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="not-last:hidden not-last:sm:flex last:flex last:text-muted-500 dark:last:text-muted-400"
        :class="[
          index !== items.length - 1 ? 'hidden sm:flex' : 'flex',
        ]"
      >
        <slot name="link" v-bind="{ item, index }">
          <NuxtLink
            :to="item.to"
            class="focus-visible:nui-focus hover:underline underline-offset-4 text-[0.85rem] flex items-center gap-x-1 text-muted-500 dark:text-muted-400 transition-colors duration-300"
            :class="[
              item.to && props.variant === 'primary' && 'hover:text-primary-heavy focus:text-primary-heavy dark:hover:text-primary-light dark:focus:text-primary-light',
              item.to && props.variant === 'dark' && 'hover:text-muted-900 focus:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100',
            ]"
          >
            <slot name="label" v-bind="{ item, index }">
              <span :class="[item.hideLabel && 'sr-only']">
                {{ item.label }}
              </span>
            </slot>
          </NuxtLink>
        </slot>
        <div v-if="index < items.length - 1" class="text-[0.85rem] flex items-center gap-x-1 text-muted-500 dark:text-muted-400 transition-colors duration-300">
          <span class="text-muted-500 dark:text-muted-400 px-2">
            <slot>·</slot>
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>
