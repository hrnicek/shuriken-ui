<script setup lang="ts">
import type { BaseThemeSystemProps } from '../types';
import { BaseThemeSystem as theme } from '@shuriken-ui/theme-iga';
import { useMounted } from '@vueuse/core'
import { computed } from 'vue'
import { useColorMode } from '#imports'
import { useNuiConfig } from '../composables/useNuiConfig';

const props = withDefaults(defineProps<BaseThemeSystemProps>(), {
  id: undefined,
  transitions: theme.defaults.transitions,
  variant: theme.defaults.variant,
})

const iconSun = useNuiConfig('icon', 'sun')
const iconMoon = useNuiConfig('icon', 'moon')
const iconScreen = useNuiConfig('icon', 'screen')

const isMounted = useMounted()
const colorMode = useColorMode()
const preference = computed({
  get() {
    if (!isMounted.value) {
      return 'system'
    }
    return colorMode.preference
  },
  set(value) {
    // disable transitions
    if (import.meta.browser && props.transitions === false) {
      document.documentElement.classList.add('nui-no-transition')
    }

    colorMode.preference = value

    // re-enable transitions
    if (import.meta.browser && props.transitions === false) {
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
    :class="theme.trackVariants[variant]"
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
          props.variant && theme.variants[variant],
        ]"
      >
      </div>
    </div>
  </RadioGroupRoot>
</template>
