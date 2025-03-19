<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { BaseAvatarProps } from './Avatar.vue'
import { reactiveOmit } from '@vueuse/core'

import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { radiuses, sizes } from './Avatar.vue'

export interface BaseAvatarGroupProps extends PrimitiveProps {
  /**
   * The avatars to display.
   */
  avatars: BaseAvatarProps[]

  /**
   * The maximum number of avatars to display.
   */
  limit?: number

  /**
   * The size of the avatars.
   */
  size?: BaseAvatarProps['size']

  /**
   * The radius of the image.
   */
  rounded?: BaseAvatarProps['rounded']
}
export interface BaseAvatarGroupSlots {
  default: () => any
}

export const spacings = {
  'xxs': 'not-first:-ms-2 hover:-ms-3 hover:me-2 focus:-ms-3 focus:me-2 first:hover:-ms-3 first:hover:me-2 first:focus:-ms-3 first:focus:me-2',
  'xs': 'not-first:-ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2 first:hover:-ms-2 first:hover:me-2 first:focus:-ms-2 first:focus:me-2',
  'sm': 'not-first:-ms-3 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2 first:hover:-ms-2 first:hover:me-2 first:focus:-ms-2 first:focus:me-2',
  'md': 'not-first:-ms-4 hover:-ms-7 hover:me-3 focus:-ms-3 first:hover:-ms-3 first:hover:me-3 first:focus:-ms-3 first:focus:me-3',
  'lg': 'not-first:-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:first:hover:me-4 first:focus:me-4',
  'xl': 'not-first:-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '2xl': 'not-first:-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '3xl': 'not-first:-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '4xl': 'not-first:-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
} as const satisfies Record<NonNullable<BaseAvatarGroupProps['size']>, string>

export const counters = {
  'xxs': '-ms-2 text-xs',
  'xs': '-ms-2 text-sm',
  'sm': '-ms-3 text-sm',
  'md': '-ms-4 text-lg',
  'lg': '-ms-5 text-xl',
  'xl': '-ms-5 text-xl',
  '2xl': '-ms-5 text-xl',
  '3xl': '-ms-5 text-xl',
  '4xl': '-ms-5 text-xl',
} as const satisfies Record<NonNullable<BaseAvatarGroupProps['size']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseAvatarGroupProps>(), {
  limit: 4,
  size: 'sm',
  rounded: 'full',
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
  >
    <slot>
      <div
        v-for="avatar in avatarDisplay"
        :key="typeof avatar === 'string' ? avatar : avatar.src"
        class="relative flex shrink-0 items-center justify-center bg-white dark:bg-muted-800 transition-all duration-100 ease-in"
        :class="[
          rounded && radiuses[rounded],
          size && sizes[size],
          size && spacings[size],
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
          rounded && radiuses[rounded],
          size && sizes[size],
          size && counters[size],
          size && spacings[size],
        ]"
      >
        <div
          class="relative scale-90 inline-flex items-center justify-center h-full w-full bg-muted-200 dark:bg-muted-700 border border-white dark:border-muted-800"
          :class="[
            rounded && radiuses[rounded],
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
