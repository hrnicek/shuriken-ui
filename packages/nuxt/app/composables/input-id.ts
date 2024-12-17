import type { MaybeRefOrGetter } from 'vue'

export function useNinjaId(id?: MaybeRefOrGetter<string | undefined>) {
  return computed(() => toValue(id) || useId())
}
