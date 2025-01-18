import type {
  AcceptableValue,
  ComboboxAnchorProps,
  ComboboxContentProps,
  ComboboxEmptyProps,
  ComboboxPortalProps,
  ComboboxRootEmits,
  ComboboxRootProps,
  ComboboxTriggerProps,
  ComboboxViewportProps,
} from 'reka-ui'

export interface BaseAutocompleteProps<T = AcceptableValue> extends ComboboxRootProps<T> {
  /**
   * The controlled value of the filter.
   */
  query?: string

  /**
   * The default query value when uncontrolled.
   */
  // defaultQuery?: string

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
export interface BaseAutocompleteEmits<T = AcceptableValue> extends ComboboxRootEmits<T> {
  'update:query': [value: string]
}
export interface BaseAutocompleteSlots<T = AcceptableValue> {
  'default': () => any
  'empty': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'content-start': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'content-end': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'viewport-start': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
  'viewport-end': (props: {
    open: boolean
    query: string
    modelValue: T | T[]
  }) => any
}
export interface BaseAutocompleteConfig {
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
