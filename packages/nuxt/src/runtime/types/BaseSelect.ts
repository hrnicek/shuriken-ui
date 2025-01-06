import type { 
  SelectRootProps,
  SelectRootEmits,
  SelectTriggerProps,
  SelectPortalProps,
  SelectContentProps,
  SelectViewportProps,
  AcceptableValue,
} from 'reka-ui'

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
   * The variant of the select input.
   *
   * @default 'default'
   */
   variant?: 'default' | 'muted' 

  /**
   * The radius of the select input.
   *
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the select input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Bindings presets
   *
   * @default 'aligned'
   */
  preset?: 'aligned' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps & Record<string, any>
    portal?: SelectPortalProps & Record<string, any>
    content?: SelectContentProps & Record<string, any>
    viewport?: SelectViewportProps & Record<string, any>
  },
}
export interface BaseSelectEmits<T = AcceptableValue> extends SelectRootEmits<T> {}
export type BaseSelectSlots = {
  default(): any
  label(): any
}
export type BaseSelectConfig = {
  variant: NonNullable<BaseSelectProps['variant']>
  rounded: NonNullable<BaseSelectProps['rounded']>
  size: NonNullable<BaseSelectProps['size']>
  preset: NonNullable<BaseSelectProps['preset']>
}

export interface BaseSelectContext {
  variant: NonNullable<BaseSelectProps['variant']>
  rounded: NonNullable<BaseSelectProps['rounded']>
}
