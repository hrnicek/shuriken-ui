<script lang="ts">
export interface BaseThemeSwitchProps {
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
// } as const
</script>

<script setup lang="ts">
import { useMounted } from '@vueuse/core'

const props = withDefaults(defineProps<BaseThemeSwitchProps>(), {
  id: undefined,
  disableTransitions: undefined,
  variant: undefined,
})

const id = useNinjaId(() => props.id)
const disableTransitions = useNuiDefaultProperty(
  props,
  'BaseThemeSwitch',
  'disableTransitions',
)
const variant = useNuiDefaultProperty(props, 'BaseThemeSwitch', 'variant')
const iconSun = useNuiDefaultIcon('sun')
const iconMoon = useNuiDefaultIcon('moon')

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
    class="nui-focus relative block h-6 w-14 scale-[0.8] rounded-full focus-visible:outline-2 ring-2 ring-transparent ring-offset-muted-200 dark:ring-offset-muted-900" 
    :class="[
      // @todo: low-contrast-theme
      // variant === 'default-low' && 'bg-muted-200 dark:bg-muted-700',
      variant === 'default' && 'bg-muted-200 dark:bg-muted-800',
    ]"
  >
    <SwitchThumb
      class="absolute -start-1 -top-2 -ms-1 flex items-center justify-center data-[state=checked]:ms-[45%] data-[state=checked]:rotate-[360deg] h-10 w-10 rounded-full transition-all duration-300 data-[state=checked]:[&>.sun]:hidden data-[state=unchecked]:[&>.moon]:hidden data-[state=checked]:[&>.moon]:block data-[state=unchecked]:[&>.sun]:block" :class="variants[variant]"
    >
      <Icon :name="iconSun" class="sun pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
    </SwitchThumb>
  </SwitchRoot>
</template>
