import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { inject, computed, toValue } from 'vue'
import { nuiConfigSymbol, defaultConfig } from '../index'

type NuiConfig = typeof defaultConfig

type NuiConfigSection = keyof NuiConfig

export function useInertiaConfig<T = string, S extends NuiConfigSection = NuiConfigSection>(
  section: S,
  key: keyof NuiConfig[S],
  defaultValue?: MaybeRefOrGetter<T>,
): ComputedRef<NonNullable<T>> {
  return computed(() => {
    const config = inject(nuiConfigSymbol, defaultConfig) as any
    const value = toValue(defaultValue)

    return (config?.[section]?.[key]) ?? value
  })
}
