<script setup lang="ts">
import type { BaseAvatarProps, BaseAvatarSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { BaseAvatar as theme } from '../theme'
import { tm } from '../utils/tw-merge'

const props = withDefaults(defineProps<BaseAvatarProps>(), {
  src: undefined,
  srcDark: undefined,
  alt: undefined,
  badgeSrc: undefined,
  text: '?',
  size: theme.defaults.size,
  rounded: theme.defaults.rounded,
  mask: undefined,
  bindings: () => ({}),
  classes: () => ({}),
})
const slots = defineSlots<BaseAvatarSlots>()

const forward = useForwardProps(reactiveOmit(props, ['src', 'srcDark', 'badgeSrc', 'text', 'size', 'rounded', 'mask', 'bindings', 'classes']))

const badgePosition = computed(() => {
  if (props.rounded === 'full') {
    return 'bottom-0 end-0'
  }
  if (props.size === '4xl') {
    return '-bottom-2 -end-2'
  }
  else if (['2xl', '3xl'].includes(props.size)) {
    return '-bottom-1.5 -end-1.5'
  }
  else if (['xs', 'sm', 'md', 'lg', 'xl'].includes(props.size)) {
    return '-bottom-1 -end-1'
  }

  return ''
})
</script>

<template>
  <AvatarRoot
    v-bind="forward"
    class="relative inline-flex shrink-0 items-center justify-center outline-none"
    :class="[
      props.size && theme.sizes[props.size],
      props.rounded && theme.radiuses[props.rounded],
      props.mask
        && (props.rounded === 'none' || rounded === 'none')
        && `nui-mask ${theme.masks[props.mask]}`,
    ]"
  >
    <AvatarImage
      v-if="props.src"
      v-bind="props.bindings?.image || {}"
      :src="props.src"
      :alt="props.alt"
      :class="tm([
        'object-cover h-full max-h-full w-full max-w-full shadow-xs',
        props.rounded && theme.radiuses[props.rounded],
        props.srcDark ? 'dark:hidden' : '',
        props.classes.image,
      ])"
    />

    <AvatarImage
      v-if="props.src && props.srcDark"
      v-bind="props.bindings?.image || {}"
      :src="props.srcDark"
      :alt="props.alt"
      :class="tm([
        'object-cover h-full max-h-full w-full max-w-full shadow-xs hidden dark:block',
        props.rounded && theme.radiuses[props.rounded],
        props.classes.dark,
      ])"
    />

    <AvatarFallback
      v-bind="props.bindings?.fallback"
      :class="tm([
        'font-sans font-medium text-center uppercase line-clamp-1 break-all',
        theme.textSizes[props.size],
        props.classes.fallback,
      ])"
    >
      <slot>
        {{ props.text }}
      </slot>
    </AvatarFallback>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      :class="tm([
        'absolute z-auto block overflow-hidden rounded-full bg-white dark:bg-muted-800',
        theme.badgeSize[props.size],
        badgePosition,
        props.classes.badge,
      ])"
    >
      <slot name="badge">
        <img
          v-if="props.badgeSrc"
          :src="props.badgeSrc"
          class="relative scale-90 object-cover h-full w-full rounded-full"
          alt=""
        >
      </slot>
    </div>
  </AvatarRoot>
</template>
