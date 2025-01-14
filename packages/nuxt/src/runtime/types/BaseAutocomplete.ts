import type {
  ComboboxRootProps,
  ComboboxRootEmits,
  ComboboxAnchorProps,
  ComboboxCancelProps,
  ComboboxTriggerProps,
  ComboboxPortalProps,
  ComboboxContentProps,
  ComboboxViewportProps,
  ComboboxEmptyProps,
  AcceptableValue,
} from 'reka-ui'

export interface BaseAutocompleteProps<T = AcceptableValue> extends ComboboxRootProps<T> {
  /**
   * The variant of the autocomplete
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The radius of the component.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the autocomplete component.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Display the clear button to reset the query.
   *
   * @default false
   */
  clearable?: boolean
  
  /**
   * Bindings presets 
   *
   * @default 'inline'
   */
  preset?: 'inline' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    anchor?: ComboboxAnchorProps
    trigger?: ComboboxTriggerProps
    portal?: ComboboxPortalProps
    content?: ComboboxContentProps
    viewport?: ComboboxViewportProps
    empty?: ComboboxEmptyProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    anchor?: string | string[]
    cancel?: string | string[]
    trigger?: string | string[]
    content?: string | string[]
    viewport?: string | string[]
    empty?: string | string[]
  }
}
export interface BaseAutocompleteEmits<T = AcceptableValue> extends ComboboxRootEmits<T> {}
export type BaseAutocompleteSlots = {
  default(): any
  input(): any
  empty(): any
}
export type BaseAutocompleteConfig = {
  variant: NonNullable<BaseAutocompleteProps['variant']>
  rounded: NonNullable<BaseAutocompleteProps['rounded']>
  size: NonNullable<BaseAutocompleteProps['size']>
  preset: NonNullable<BaseAutocompleteProps['preset']>
}

export interface BaseAutocompleteContext {
  variant: NonNullable<BaseAutocompleteProps['variant']>
  rounded: NonNullable<BaseAutocompleteProps['rounded']>
  size: NonNullable<BaseAutocompleteProps['size']>
}
