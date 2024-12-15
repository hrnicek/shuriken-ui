import type { AppConfig } from 'nuxt/schema'

export function useNuiDefaultProperty<
  T extends Record<string, unknown>,
  C extends keyof AppConfig['nui'],
  K extends keyof T,
>(properties: T, component: C, property: K): ComputedRef<NonNullable<T[K]>> {
  const config = useAppConfig().nui as any
  return computed(() => (properties?.[property] ?? config?.[component]?.[property]) as NonNullable<T[K]>)
}

export function useNuiDefaultIcon(
  kind: keyof AppConfig['nui']['icons'],
  value?: MaybeRefOrGetter<string | undefined>,
) {
  const config = useAppConfig().nui
  return computed(() => toValue(value) ?? config?.icons?.[kind])
}
