import type {
  AcceptableValue,
  SelectContentProps,
  SelectPortalProps,
  SelectRootEmits,
  SelectRootProps,
  SelectTriggerProps,
  SelectViewportProps,
} from 'reka-ui'
import type { BaseSelectItemProps } from './BaseSelectItem'

export interface BaseSelectProps<T = AcceptableValue> extends SelectRootProps<T> {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder to display for the select input.
   */
  placeholder?: string

  /**
   * The defaults items to display for the select input.
   */
  items?: BaseSelectItemProps[]

  /**
   * The variant of the select input.
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the select input.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the select input.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Bindings presets
   */
  preset?: 'aligned' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps
    portal?: SelectPortalProps
    content?: SelectContentProps
    viewport?: SelectViewportProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    text?: string | string[]
    icon?: string | string[]
    content?: string | string[]
    buttonUp?: string | string[]
    buttonDown?: string | string[]
    viewport?: string | string[]
  }
}
export interface BaseSelectEmits<T = AcceptableValue> extends SelectRootEmits<T> {}
export interface BaseSelectSlots<T = AcceptableValue> {
  'default': () => any
  'label': () => any
  'value': (props: { selectedLabel: string[], modelValue: T | T[] }) => any
  'content-start': () => any
  'content-end': () => any
  'viewport-start': () => any
  'viewport-end': () => any
}
export interface BaseSelectConfig {
  variant: NonNullable<BaseSelectProps['variant']>
  rounded: NonNullable<BaseSelectProps['rounded']>
  size: NonNullable<BaseSelectProps['size']>
  preset: NonNullable<BaseSelectProps['preset']>
}

export interface BaseSelectContext {
  variant: NonNullable<BaseSelectProps['variant']>
  rounded: NonNullable<BaseSelectProps['rounded']>
  size: NonNullable<BaseSelectProps['size']>
}
