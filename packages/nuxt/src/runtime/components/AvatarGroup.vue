<script setup lang="ts">
import type { BaseAvatarGroupProps, BaseAvatarGroupSlots } from '../types'
import { BaseAvatarGroup as theme } from '@shuriken-ui/theme-iga'

import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

const props = withDefaults(defineProps<BaseAvatarGroupProps>(), {
  limit: theme.defaults.limit,
  size: theme.defaults.size,
  rounded: theme.defaults.rounded,
})
const slots = defineSlots<BaseAvatarGroupSlots>()

const forward = useForwardProps(reactiveOmit(props, ['avatars', 'size', 'limit', 'rounded']))

const avatarDisplay = computed(() => {
  if (
    props.avatars
    && props.limit !== undefined
    && props.avatars.length > props.limit
  ) {
    return props.avatars.slice(0, props.limit - 1)
  }
  return props.avatars
})
</script>

<template>
  <Primitive
    v-bind="forward"
    class="flex"
    :class="[size && theme.sizes[size]]"
  >
    <slot>
      <div
        v-for="avatar in avatarDisplay"
        :key="typeof avatar === 'string' ? avatar : avatar.src"
        class="relative flex shrink-0 items-center justify-center bg-white dark:bg-muted-800 transition-all duration-100 ease-in"
        :class="[
          rounded && theme.radiuses[rounded],
          size && theme.sizes[size],
          size && theme.spacings[size],
        ]"
      >
        <BaseAvatar
          v-bind="avatar"
          :size="size"
          :rounded="rounded"
          tabindex="0"
          class="bg-primary-500/20 text-primary-500 scale-90"
        />
      </div>
      <div
        v-if="limit !== undefined && avatars.length > limit"
        class="relative shrink-0 bg-white dark:bg-muted-800 transition-all duration-100 ease-in"
        :class="[
          rounded && theme.radiuses[rounded],
          size && theme.sizes[size],
          size && theme.counters[size],
          size && theme.spacings[size],
        ]"
      >
        <div
          class="relative scale-90 inline-flex items-center justify-center h-full w-full bg-muted-200 dark:bg-muted-700 border border-white dark:border-muted-800"
          :class="[
            rounded && theme.radiuses[rounded],
          ]"
        >
          <span class="-ms-1 uppercase font-sans font-medium text-muted-500 dark:text-muted-300">
            +{{ avatars.length - limit + 1 }}
          </span>
        </div>
      </div>
    </slot>
  </Primitive>
</template>
