import type { PrimitiveProps } from 'reka-ui'
import type { Ref } from 'vue'

export interface BaseFieldContext {
  state: Ref<'idle' | 'loading' | 'success' | 'error'>
  id: Ref<string>
  idLabel: Ref<string | undefined>
  idDescription: Ref<string | undefined>
  idError: Ref<string | undefined>
  name: Ref<string | undefined>
  required: Ref<boolean>
  disabled: Ref<boolean>
}

export interface BaseFieldProps extends PrimitiveProps {
  // orientation?: 'horizontal' | 'vertical'
  state?: 'idle' | 'loading' | 'success' | 'error'
  id?: string
  name?: string
  required?: boolean
  disabled?: boolean
  modelValue?: any
}

export interface BaseFieldSlots {
  default: () => any
}
