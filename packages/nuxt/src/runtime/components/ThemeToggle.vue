<script setup lang="ts">
import type { BaseThemeToggleProps } from '../types';
import { BaseThemeToggle as theme } from '#build/shuriken-ui/theme';
import { useMounted } from '@vueuse/core'
import { computed } from 'vue'
import { useColorMode } from '#imports'

import { useNinjaId } from '../composables/input-id';
import { useNuiConfig } from '../composables/default-property';

const props = withDefaults(defineProps<BaseThemeToggleProps>(), {
  id: undefined,
  disableTransitions: theme.defaults.disableTransitions,
  variant: theme.defaults.variant,
})

const id = useNinjaId(() => props.id)
// const disableTransitions = useNuiConfig('BaseThemeToggle', 'disableTransitions', () => props.disableTransitions)
// const variant = useNuiConfig('BaseThemeToggle', 'variant', () => props.variant)
const iconSun = useNuiConfig('icon', 'sun')
const iconMoon = useNuiConfig('icon', 'moon')

const colorMode = useColorMode()
const isMounted = useMounted()
const isDark = computed({
  get() {
    if (!isMounted.value) {
      return false
    }
    return colorMode.value === 'dark'
  },
  set(value) {
    // disable transitions
    if (import.meta.browser && props.disableTransitions) {
      document.documentElement.classList.add('nui-no-transition')
    }

    colorMode.preference = value ? 'dark' : 'light'

    // re-enable transitions
    if (import.meta.browser && props.disableTransitions) {
      setTimeout(() => {
        document.documentElement.classList.remove('nui-no-transition')
      }, 0)
    }
  },
})
</script>

<template>
  <SwitchRoot 
    :id 
    v-model="isDark" 
    class="focus-visible:nui-focus relative block shrink-0 overflow-hidden rounded-full size-9 focus-visible:outline-2 ring-2 ring-transparent ring-offset-muted-200 dark:ring-offset-muted-900 transition-all duration-300"
  >
    <SwitchThumb
      class="relative block rounded-full size-9 data-[state=checked]:[&>.sun]:translate-y-[-150%] data-[state=checked]:[&>.sun]:opacity-0 data-[state=checked]:[&>.moon]:-translate-y-1/2 opacity-100 data-[state=checked]:[&>.moon]:-translate-y-1/2 data-[state=checked]:[&>.moon]:opacity-100 data-[state=unchecked]:[&>.moon]:translate-y-[-150%] data-[state=unchecked]:[&>.moon]:opacity-0"
      :class="theme.variants[props.variant]"
    >
      <Icon :name="iconSun" class="sun pointer-events-none absolute start-1/2 top-1/2 block -translate-y-1/2 translate-x-[-50%] rtl:translate-x-[50%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none absolute start-1/2 top-1/2 block translate-x-[-50%] rtl:translate-x-[45%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
    </SwitchThumb>
  </SwitchRoot>
</template>
