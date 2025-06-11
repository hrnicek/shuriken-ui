<script lang="ts">
export interface BaseBreadcrumbProps {
    items?: {
      href?: string | { url: string; method?: string }
    label?: string
    hideLabel?: boolean
    icon?: string
    iconClasses?: string | string[]
  }[]
  variant?: 'primary' | 'dark'
}
export interface BaseBreadcrumbSlots {
  default: () => any
  link: (props: { item: any, index: number }) => any
  label: (props: { item: any, index: number }) => any
}
export interface BaseBreadcrumbConfig {
  variant: NonNullable<BaseBreadcrumbProps['variant']>
}
</script>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
const props = withDefaults(defineProps<BaseBreadcrumbProps>(), {
  items: () => [],
  color: undefined,
  variant: 'primary',
})
const slots = defineSlots<BaseBreadcrumbSlots>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="mb-6 flex items-center font-sans text-[0.85rem]">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex last:text-muted-500 dark:last:text-muted-400"
      >
        <Link
          v-if="item.href"
          :href="item.href as any"
          class="focus-visible:nui-focus hover:underline underline-offset-4 text-[0.85rem] flex items-center gap-x-1 text-muted-500 dark:text-muted-400 transition-colors duration-100"
          :class="[
            props.variant === 'primary' && 'hover:text-primary-heavy focus:text-primary-heavy dark:hover:text-primary-light dark:focus:text-primary-light',
            props.variant === 'dark' && 'hover:text-muted-900 focus:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100',
          ]"
        >
          <Icon v-if="item.icon" :name="item.icon" />
          <span :class="[item.hideLabel && 'sr-only']">
            {{ item.label }}
          </span>
        </Link>
        <span
          v-else
          class="focus-visible:nui-focus text-[0.85rem] flex items-center gap-x-1 text-muted-500 dark:text-muted-400 transition-colors duration-100"
        >
          <Icon v-if="item.icon" :name="item.icon" />
          <span :class="[item.hideLabel && 'sr-only']">
            {{ item.label }}
          </span>
        </span>
        <div
          v-if="index < items.length - 1"
          class="text-[0.85rem] flex items-center gap-x-1 text-muted-500 dark:text-muted-400 transition-colors duration-300"
          aria-hidden="true"
        >
          <span class="text-muted-500 dark:text-muted-400 px-2">
            <slot>·</slot>
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>
