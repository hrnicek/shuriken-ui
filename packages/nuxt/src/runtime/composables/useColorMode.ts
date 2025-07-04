import { computed, watchEffect } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

export interface ColorMode {
  value: ReturnType<typeof computed>
  preference: ReturnType<typeof useStorage>
}

export function useColorMode(): ColorMode {
  const preference = useStorage<'system' | 'light' | 'dark'>('color-mode', 'system')
  const preferred = usePreferredDark()
  const value = computed(() => {
    return preference.value === 'system'
      ? preferred.value ? 'dark' : 'light'
      : preference.value
  })
  watchEffect(() => {
    if (typeof document !== 'undefined')
      document.documentElement.classList.toggle('dark', value.value === 'dark')
  })
  return { value, preference }
}
