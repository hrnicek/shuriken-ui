import type { MaybeRefOrGetter } from 'vue'
import { computed, toValue, useId } from 'vue'

export function useNuiId(id?: MaybeRefOrGetter<string | undefined>) {
  const uid = useId()
  return computed(() => toValue(id) || uid)
}
