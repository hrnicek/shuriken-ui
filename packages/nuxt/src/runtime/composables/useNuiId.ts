import type { MaybeRefOrGetter } from 'vue'
import { useId, computed, toValue } from 'vue'

export function useNuiId(id?: MaybeRefOrGetter<string | undefined>) {
  const uid = useId()
  return computed(() => toValue(id) || uid)
}
