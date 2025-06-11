<script lang="ts">
import { useMounted } from '@vueuse/core'
import { RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { computed } from 'vue'
import { useInertiaConfig } from '../composables/useInertiaConfig'
import { useColorMode } from '../composables/useColorMode'

export interface BaseThemeSystemProps {
  id?: string
  transitions?: boolean
  variant?: 'default'
}
export const variants = {
  default: 'bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800',
} as const satisfies Record<NonNullable<BaseThemeSystemProps['variant']>, string>
export const trackVariants = {
  default: 'bg-muted-100 dark:bg-muted-800',
} as const satisfies Record<NonNullable<BaseThemeSystemProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseThemeSystemProps>(), {
  id: undefined,
  transitions: false,
  variant: 'default',
})

const iconSun = useInertiaConfig('icon', 'sun')
const iconMoon = useInertiaConfig('icon', 'moon')
const iconScreen = useInertiaConfig('icon', 'screen')

const isMounted = useMounted()
const colorMode = useColorMode()
const preference = computed({
  get() {
    if (!isMounted.value)
      return 'system'
    return colorMode.preference.value
  },
  set(value) {
    if (typeof window !== 'undefined' && props.transitions === false)
      document.documentElement.classList.add('nui-no-transition')
    colorMode.preference.value = value
    if (typeof window !== 'undefined' && props.transitions === false) {
      setTimeout(() => {
        document.documentElement.classList.remove('nui-no-transition')
      }, 0)
    }
  },
})
</script>

<template>
  <RadioGroupRoot
    v-model="preference"
    class="relative p-1 rounded-full max-w-[104px]"
    :class="trackVariants[variant]"
  >
    <div class="relative flex">
      <RadioGroupItem
        class="relative z-10 size-8 flex items-center justify-center focus-visible:nui-focus rounded-full"
        value="system"
        @click="preference = 'system'"
      >
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconScreen" :class="preference === 'system' ? 'text-primary-base' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </RadioGroupItem>
      <RadioGroupItem
        class="relative z-10 size-8 flex items-center justify-center focus-visible:nui-focus rounded-full"
        value="light"
        @click="preference = 'light'"
      >
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconSun" :class="preference === 'light' ? 'text-yellow-400' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </RadioGroupItem>
      <RadioGroupItem
        class="relative z-10 size-8 flex items-center justify-center focus-visible:nui-focus rounded-full"
        value="dark"
        @click="preference = 'dark'"
      >
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconMoon" :class="preference === 'dark' ? 'text-yellow-400' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </RadioGroupItem>
      <div
        class="absolute top-0 left-0 w-8 h-8 rounded-full z-0 transition-all duration-300"
        :class="[
          preference === 'system' && 'ml-0',
          preference === 'light' && 'ml-[33.3%]',
          preference === 'dark' && 'ml-[66.6%]',
          props.variant && variants[variant],
        ]"
      />
    </div>
  </RadioGroupRoot>
</template>
