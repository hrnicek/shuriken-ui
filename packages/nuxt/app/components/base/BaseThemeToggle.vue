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
  'BaseThemeToggle',
  'disableTransitions',
)

const variant = useNuiDefaultProperty(props, 'BaseThemeToggle', 'variant')
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
  <label
    class="nui-focus relative block shrink-0 overflow-hidden rounded-full size-9 focus-visible:outline-2 ring-2 ring-transparent ring-offset-muted-200 dark:ring-offset-muted-900 transition-all duration-300"
    :for="id"
  >
    <input
      :id="id"
      v-model="isDark"
      type="checkbox"
      class="peer absolute start-0 top-0 z-[2] h-full w-full cursor-pointer opacity-0"
    >
    <span class="relative block rounded-full size-9 peer-checked:[&>.sun]:translate-y-[-150%] peer-checked:[&>.sun]:opacity-0 peer-checked:[&>.moon]:-translate-y-1/2 opacity-100 peer-checked:[&>.moon]:-translate-y-1/2 peer-checked:[&>.moon]:opacity-100 peer-not-checked:[&>.moon]:translate-y-[-150%] peer-not-checked:[&>.moon]:opacity-0"
      :class="variants[variant]">
      <Icon :name="iconSun" class="sun pointer-events-none absolute start-1/2 top-1/2 block -translate-y-1/2 translate-x-[-50%] rtl:translate-x-[50%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none absolute start-1/2 top-1/2 block translate-x-[-50%] rtl:translate-x-[45%] h-5 w-5 text-yellow-400 dark:text-yellow-400 transition-all duration-300" />
    </span>
  </label>
</template>

<style>
.nui-no-transition * {
  transition-property: none !important;
  transition-duration: 0 !important;
}
</style>
