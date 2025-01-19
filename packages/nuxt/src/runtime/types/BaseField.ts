import type { NuiFieldContext } from '../composables/useNuiField'
import type { BasePrimitiveFieldProps } from './BasePrimitiveField'

export interface BaseFieldProps extends BasePrimitiveFieldProps {
  label?: string
  description?: string
  hint?: string
  error?: string
}

export interface BaseFieldSlots {
  default: (props: {
    inputRef: (el: any) => void
    inputAttrs: Record<string, any>
  }) => any
  label: () => any
  description: () => any
  hint: () => any
  error: () => any
}
