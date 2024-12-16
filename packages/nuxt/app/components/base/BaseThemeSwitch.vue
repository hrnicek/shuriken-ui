<script setup lang="ts">
const props = withDefaults(
  defineProps<{
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
  }>(),
  {
    id: undefined,
    disableTransitions: undefined,
    variant: undefined,
  },
)

const id = useNinjaId(() => props.id)
const disableTransitions = useNuiDefaultProperty(
  props,
  'BaseThemeSwitch',
  'disableTransitions',
)
const variant = useNuiDefaultProperty(props, 'BaseThemeSwitch', 'variant')
const iconSun = useNuiDefaultIcon('sun')
const iconMoon = useNuiDefaultIcon('moon')

const variants = {
  'default-low': 'bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
  'default-high': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
}

const colorMode = useColorMode()
const isDark = computed({
  get() {
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
  <label :for="id" class="relative block h-6 w-14 scale-[0.8] rounded-full" 
    :class="[
      variant === 'default-low' && 'bg-muted-200 dark:bg-muted-700',
      variant === 'default-high' && 'bg-muted-200 dark:bg-muted-800',
    ]">
    <input
      :id="id"
      v-model="isDark"
      class="peer absolute start-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
      type="checkbox"
    >
    <span class="absolute -start-1 -top-2 -ms-1 flex items-center justify-center peer-checked:ms-[45%] peer-checked:rotate-[360deg] h-10 w-10 rounded-full transition-all duration-300 peer-checked:[&>.sun]:hidden peer-not-checked:[&>.moon]:hidden peer-checked:[&>.moon]:block peer-not-checked:[&>.sun]:block" :class="variants[variant]">
      <Icon :name="iconSun" class="sun pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
    </span>
  </label>
</template>

<style>
.nui-no-transition * {
  transition-property: none !important;
  transition-duration: 0 !important;
}
</style>
