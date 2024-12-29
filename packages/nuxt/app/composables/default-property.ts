import type { AppConfig } from 'nuxt/schema'
import { warn } from 'vue'

export function useNuiConfig<T = string>(
  section: string,
  key: string,
  defaultValue?: MaybeRefOrGetter<T>,
): ComputedRef<NonNullable<T>> {
  return computed(() => {
    const config = useAppConfig().nui as any

    if (import.meta.dev && config?.[section]?.[key] === undefined) {
      warn(`Default ShurikenUI configuration "${section}.${key}" not found`)
    }

    return toValue(defaultValue) ?? config?.[section]?.[key]
  })
}
