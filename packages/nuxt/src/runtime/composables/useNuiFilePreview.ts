import type { Ref, MaybeRefOrGetter } from 'vue'
import { ref, watchEffect, toValue } from 'vue'

const previewMap = new WeakMap<File, Ref<string | undefined>>()

/**
 * @deprecated
 */
export function useNuiFilePreview(
  _file: MaybeRefOrGetter<File | null | undefined>,
) {
  const preview = ref<string>()
  
  watchEffect(() => {
    const file = toValue(_file)
    if (!file) {
      preview.value = undefined
      return
    }

    if (previewMap.has(file)) {
      preview.value = previewMap.get(file)?.value
      return
    }

    const reader = new FileReader()

    const listener = () => {
      preview.value = reader.result?.toString() ?? ''
      reader.removeEventListener('load', listener)
    }
    reader.addEventListener('load', listener)
    reader.readAsDataURL(file)

    previewMap.set(file, preview)

    return () => {
      reader.removeEventListener('load', listener)
    }
  })

  return preview
}
