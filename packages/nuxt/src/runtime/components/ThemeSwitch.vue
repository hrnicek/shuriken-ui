<script setup lang="ts">
import type { BaseThemeSwitchProps } from '../types';
import { BaseThemeSwitch as theme } from '@shuriken-ui/theme-iga';
import { useMounted } from '@vueuse/core'
import { useNinjaId } from '../composables/input-id';
import { useNuiConfig } from '../composables/default-property';

const props = withDefaults(defineProps<BaseThemeSwitchProps>(), {
  id: undefined,
  disableTransitions: theme.defaults.disableTransitions,
  variant: theme.defaults.variant,
})

const id = useNinjaId(() => props.id)
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
    class="focus-visible:nui-focus relative block h-6 w-14 scale-[0.8] rounded-full focus-visible:outline-2 ring-2 ring-transparent ring-offset-muted-200 dark:ring-offset-muted-900" 
    :class="theme.background[variant]"
  >
    <SwitchThumb
      class="absolute -start-1 -top-2 -ms-1 flex items-center justify-center data-[state=checked]:ms-[45%] data-[state=checked]:rotate-[360deg] h-10 w-10 rounded-full transition-all duration-300 data-[state=checked]:[&>.sun]:hidden data-[state=unchecked]:[&>.moon]:hidden data-[state=checked]:[&>.moon]:block data-[state=unchecked]:[&>.sun]:block"
      :class="theme.variants[variant]"
    >
      <Icon :name="iconSun" class="sun pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
    </SwitchThumb>
  </SwitchRoot>
</template>
