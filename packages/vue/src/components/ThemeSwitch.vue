<script lang="ts">
import { useMounted } from '@vueuse/core'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { computed } from 'vue'
import { useInertiaConfig } from '../composables/useInertiaConfig'
import { useColorMode } from '../composables/useColorMode'
import { useNuiId } from '../composables/useNuiId'

export interface BaseThemeSwitchProps {
  id?: string
  transitions?: boolean
  variant?: 'default'
}
export const variants = {
  default: 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
} as const satisfies Record<NonNullable<BaseThemeSwitchProps['variant']>, string>
export const background = {
  default: 'bg-muted-200 dark:bg-muted-800',
} as const satisfies Record<NonNullable<BaseThemeSwitchProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseThemeSwitchProps>(), {
  id: undefined,
  transitions: false,
  variant: 'default',
})

const id = useNuiId(() => props.id)
const iconSun = useInertiaConfig('icon', 'sun')
const iconMoon = useInertiaConfig('icon', 'moon')

const colorMode = useColorMode()
const isMounted = useMounted()
const isDark = computed({
  get() {
    if (!isMounted.value)
      return false
    return colorMode.value.value === 'dark'
  },
  set(value) {
    if (typeof window !== 'undefined' && props.transitions === false)
      document.documentElement.classList.add('nui-no-transition')
    colorMode.preference.value = value ? 'dark' : 'light'
    if (typeof window !== 'undefined' && props.transitions === false) {
      setTimeout(() => {
        document.documentElement.classList.remove('nui-no-transition')
      }, 0)
    }
  },
})
</script>

<template>
  <SwitchRoot
    :id="id"
    v-model="isDark"
    class="focus-visible:nui-focus relative block h-6 w-14 scale-[0.8] rounded-full focus-visible:outline-2 ring-2 ring-transparent ring-offset-muted-200 dark:ring-offset-muted-900"
    :class="background[variant]"
  >
    <SwitchThumb
      class="absolute -start-1 -top-2 -ms-1 flex items-center justify-center data-[state=checked]:ms-[45%] data-[state=checked]:rotate-[360deg] h-10 w-10 rounded-full transition-all duration-300 data-[state=checked]:[&>.sun]:hidden data-[state=unchecked]:[&>.moon]:hidden data-[state=checked]:[&>.moon]:block data-[state=unchecked]:[&>.sun]:block"
      :class="variants[variant]"
    >
      <Icon :name="iconSun" class="sun pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
      <Icon :name="iconMoon" class="moon pointer-events-none text-yellow-400 dark:text-yellow-400 h-6 w-6 transition-all duration-300" />
    </SwitchThumb>
  </SwitchRoot>
</template>
