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
   * @default 'default'
   */
  variant?: 'default'
}

export const variants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700',
// } as const

export const trackVariants = {
  'default': 'bg-muted-100 dark:bg-muted-800',
} as const

// @todo: low-contrast-theme
// export const trackVariants = {
//   'default': 'bg-muted-100 dark:bg-muted-700',
// } as const
</script>

<script setup lang="ts">
import { useMounted } from '@vueuse/core'

const props = withDefaults(defineProps<BaseThemeSystemProps>(), {
  id: undefined,
  disableTransitions: undefined,
  variant: undefined,
})

const disableTransitions = useNuiDefaultProperty(
  props,
  'BaseThemeSystem',
  'disableTransitions',
)

const variant = useNuiDefaultProperty(props, 'BaseThemeSystem', 'variant')
const iconSun = useNuiDefaultIcon('sun')
const iconMoon = useNuiDefaultIcon('moon')
const iconScreen = useNuiDefaultIcon('screen')

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
    if (import.meta.browser && disableTransitions.value) {
      document.documentElement.classList.add('nui-no-transition')
    }

    colorMode.preference = value

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
  <RadioGroupRoot v-model="preference" class="relative p-1 rounded-full max-w-[104px]" :class="trackVariants[variant]">
    <div class="relative flex">
      <RadioGroupItem class="relative z-10 size-8 flex items-center justify-center nui-focus rounded-full" value="system" @click="preference = 'system'">
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconScreen" :class="preference === 'system' ? 'text-primary-500' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </RadioGroupItem>
      <RadioGroupItem class="relative z-10 size-8 flex items-center justify-center nui-focus rounded-full" value="light" @click="preference = 'light'">
        <span class="pointer-events-none">
          <Icon class="text-lg" :name="iconSun" :class="preference === 'light' ? 'text-yellow-400' : 'text-muted-400 dark:text-muted-500'" />
        </span>
      </RadioGroupItem>
      <RadioGroupItem class="relative z-10 size-8 flex items-center justify-center nui-focus rounded-full" value="dark" @click="preference = 'dark'">
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
          variant && variants[variant],
        ]"
      >
      </div>
    </div>
  </RadioGroupRoot>
</template>
