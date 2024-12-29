<script lang="ts">
export interface BaseThemeToggleProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * Disables transitions when toggling between light and dark mode.
   *
   * @default false
   */
  disableTransitions?: boolean
  /**
   * The variant of the toggle.
   *
   * @default 'default'
   */
  variant?: 'default'
}

export const variants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
// }
</script>

<script setup lang="ts">
import { useMounted } from '@vueuse/core'

const props = withDefaults(defineProps<BaseThemeToggleProps>(), {
  id: undefined,
  disableTransitions: undefined,
  variant: undefined,
})

const id = useNinjaId(() => props.id)
const disableTransitions = useNuiConfig('BaseThemeToggle', 'disableTransitions', () => props.disableTransitions)
const variant = useNuiConfig('BaseThemeToggle', 'variant', () => props.variant)
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
    if (import.meta.browser && disableTransitions.value) {
      document.documentElement.classList.add('nui-no-transition')
    }

    colorMode.preference = value ? 'dark' : 'light'

    // re-enable transitions
    if (import.meta.browser && disableTransitions.value) {
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
    class="nui-focus relative block shrink-0 overflow-hidden rounded-full size-9 focus-visible:outline-2 ring-2 ring-transparent ring-offset-muted-200 dark:ring-offset-muted-900 transition-all duration-300"
  >
    <SwitchThumb class="relative block rounded-full size-9 data-[state=checked]:[&>.sun]:translate-y-[-150%] data-[state=checked]:[&>.sun]:opacity-0 data-[state=checked]:[&>.moon]:-translate-y-1/2 opacity-100 data-[state=checked]:[&>.moon]:-translate-y-1/2 data-[state=checked]:[&>.moon]:opacity-100 data-[state=unchecked]:[&>.moon]:translate-y-[-150%] data-[state=unchecked]:[&>.moon]:opacity-0"
      :class="variants[variant]">
      <Icon :name="iconSun" class="sun pointer-events-none absolute start-1/2 top-1/2 block -translate-y-1/2 translate-x-[-50%] rtl:translate-x-[50%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none absolute start-1/2 top-1/2 block translate-x-[-50%] rtl:translate-x-[45%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
    </SwitchThumb>
  </SwitchRoot>
</template>
