<script setup lang="ts">
import type { BaseAvatarProps, BaseAvatarSlots } from '../types'
import { BaseAvatar as theme } from '#build/shuriken-ui/theme'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

const props = withDefaults(defineProps<BaseAvatarProps>(), {
  src: undefined,
  srcDark: undefined,
  badgeSrc: undefined,
  text: '?',
  size: theme.defaults.size,
  rounded: theme.defaults.rounded,
  mask: undefined,
  classes: () => ({}),
})
const slots = defineSlots<BaseAvatarSlots>()

const forward = useForwardProps(reactiveOmit(props, ['src', 'srcDark', 'badgeSrc', 'text', 'size', 'rounded', 'mask', 'bindings']))

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
    <div class="relative flex items-center justify-center overflow-hidden text-center h-full w-full transition-all duration-300">
      <slot>
        <AvatarImage
          v-if="props.src"
          v-bind="props.bindings?.image"
          :src="props.src"
          class="object-cover h-full max-h-full w-full max-w-full shadow-xs"
          :class="[
            props.rounded && theme.radiuses[props.rounded],
            props.srcDark ? 'dark:hidden' : '',
          ]"
        />

        <AvatarImage
          v-if="props.src && props.srcDark"
          v-bind="props.bindings?.dark"
          :src="props.srcDark"
          class="object-cover h-full max-h-full w-full max-w-full shadow-xs hidden dark:block"
          :class="[props.rounded && theme.radiuses[props.rounded]]"
        />

        <AvatarFallback
          v-bind="props.bindings?.fallback"
          class="font-sans font-medium text-center uppercase"
          :class="[
            theme.textSizes[props.size]
          ]"
        >
          {{ props.text }}
        </AvatarFallback>
      </slot>
    </div>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      class="absolute z-10 block overflow-hidden rounded-full bg-white dark:bg-muted-800"
      :class="[
        theme.badgeSize[props.size],
        badgePosition,
      ]"
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
