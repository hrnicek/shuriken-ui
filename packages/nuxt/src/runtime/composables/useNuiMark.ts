import type { MaybeRefOrGetter } from 'vue'
import { escapeHtml } from '@vue/shared'

import { computed, toValue } from 'vue'

export function useNuiMark(
  _text?: MaybeRefOrGetter<string | undefined>,
  _search?: MaybeRefOrGetter<string | undefined>,
  _classes?: MaybeRefOrGetter<string | undefined>,
) {
  return computed(() => {
    const text = toValue(_text)
    const classes = toValue(_classes)
    const search = toValue(_search)

    if (!text) {
      return ''
    }

    if (!search) {
      return escapeHtml(text)
    }

    const regex = new RegExp(search, 'gi')

    return text?.replace(regex, (part) => {
      return `<mark class="${classes}">${escapeHtml(part)}</mark>`
    }) ?? ''
  })
}
