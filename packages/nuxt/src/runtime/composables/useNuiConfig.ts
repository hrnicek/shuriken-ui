import type { AppConfig } from 'nuxt/schema'
import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { useAppConfig } from '#imports'
import { computed, toValue } from 'vue'

type NuiConfig = AppConfig['nui']
type NuiConfigSection = keyof NuiConfig

export function useNuiConfig<T = string, S extends NuiConfigSection = NuiConfigSection>(
  section: S,
  key: keyof NuiConfig[S],
  defaultValue?: MaybeRefOrGetter<T>,
): ComputedRef<NonNullable<T>> {
  return computed(() => {
    const config = useAppConfig().nui as any
    const value = toValue(defaultValue)

    if (import.meta.dev && config?.[section]?.[key] === undefined) {
      console.warn(`Default ShurikenUI configuration "${String(section)}.${String(key)}" not found`)
    }

    return value ?? config?.[section]?.[key]
  })
}
