export interface BaseInputProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The type of input.
   */
  type?: string

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string

  /**
   * The variant of the input.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the input.
   *
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface BaseInputConfig {
  variant: NonNullable<BaseInputProps['variant']>
  rounded: NonNullable<BaseInputProps['rounded']>
  size: NonNullable<BaseInputProps['size']>
}
