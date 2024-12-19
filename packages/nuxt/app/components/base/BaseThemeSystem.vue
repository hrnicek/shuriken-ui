<script lang="ts">
export interface BaseThemeSystemProps {
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
   * @default 'default-low'
   */
  variant?: 'default-low' | 'default-high'
}

export const variants = {
  'default-low': 'bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700',
  'default-high': 'bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800',
} as const

export const trackVariants = {
  'default-low': 'bg-muted-100 dark:bg-muted-700',
  'default-high': 'bg-muted-100 dark:bg-muted-800',
} as const
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseThemeSystemProps>(), {
  id: undefined,
  disableTransitions: undefined,
  variant: undefined,
})

const id = useNinjaId(() => props.id)
const disableTransitions = useNuiDefaultProperty(
  props,
  'BaseThemeSystem',
  'disableTransitions',
)

const variant = useNuiDefaultProperty(props, 'BaseThemeSystem', 'variant')
const iconSun = useNuiDefaultIcon('sun')
const iconMoon = useNuiDefaultIcon('moon')
const iconMonitor = useNuiDefaultIcon('monitor')

const colorMode = useColorMode()
const isTheme = computed({
  get() {
    return colorMode.value
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
  <!--SwitchRoot 
    :id 
    v-model="isTheme" 
    class="nui-focus relative block shrink-0 overflow-hidden rounded-full size-9 focus-visible:outline-2 ring-2 ring-transparent ring-offset-muted-200 dark:ring-offset-muted-900 transition-all duration-300"
  >
    <SwitchThumb class="relative block rounded-full size-9 data-[state=checked]:[&>.sun]:translate-y-[-150%] data-[state=checked]:[&>.sun]:opacity-0 data-[state=checked]:[&>.moon]:-translate-y-1/2 opacity-100 data-[state=checked]:[&>.moon]:-translate-y-1/2 data-[state=checked]:[&>.moon]:opacity-100 data-[state=unchecked]:[&>.moon]:translate-y-[-150%] data-[state=unchecked]:[&>.moon]:opacity-0"
      :class="variants[variant]">
      <Icon :name="iconSun" class="sun pointer-events-none absolute start-1/2 top-1/2 block -translate-y-1/2 translate-x-[-50%] rtl:translate-x-[50%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none absolute start-1/2 top-1/2 block translate-x-[-50%] rtl:translate-x-[45%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
    </SwitchThumb>
  </SwitchRoot-->

  <div class="relative p-1 rounded-full max-w-[104px]" :class="trackVariants[variant]">
    <div class="relative flex">
      <button class="relative z-10 h-8 w-8 flex items-center justify-center" role="option" @click="$colorMode.preference = 'system'">
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconMonitor" :class="$colorMode.preference === 'system' ? 'text-yellow-400' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </button>
      <button class="relative z-10 h-8 w-8 flex items-center justify-center" role="option" @click="$colorMode.preference = 'light'">
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconSun" :class="$colorMode.preference === 'light' ? 'text-yellow-400' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </button>
      <button class="relative z-10 h-8 w-8 flex items-center justify-center" role="option" @click="$colorMode.preference = 'dark'">
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconMoon" :class="$colorMode.preference === 'dark' ? 'text-yellow-400' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </button>
      <div
        class="absolute top-0 left-0 w-8 h-8 rounded-full z-0 transition-all duration-300"
        :class="[
          $colorMode.preference === 'system' && 'ml-0',
          $colorMode.preference === 'light' && 'ml-[33.3%]',
          $colorMode.preference === 'dark' && 'ml-[66.6%]',
          variants[variant],
        ]"
      >
      </div>
    </div>
  </div>
</template>
