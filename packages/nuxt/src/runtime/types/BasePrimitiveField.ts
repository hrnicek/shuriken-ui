import type { NuiFieldContext } from '../composables/useNuiField'

export interface BasePrimitiveFieldProps {
  // orientation?: 'horizontal' | 'vertical'
  state?: 'idle' | 'loading' | 'success' | 'error'
  id?: string
  name?: string
  required?: boolean
  disabled?: boolean
  fieldset?: boolean
}

export interface BasePrimitiveFieldSlots {
  default: (props: {
    inputRef: (el: any) => void
    inputAttrs: Record<string, any>
  }) => any
}
