export interface BaseInputFileProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder to display for the file input.
   */
  placeholder?: string

  /**
   * Whether the input is disabled.
   */
  disabled?: boolean

  /**
   * Allows multiple files to be selected.
   */
  multiple?: boolean

  /**
   * Method to return the text value of the file input.
   */
  textValue?: (fileList?: FileList | null) => string

  /**
   * The variant of the input.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'primary'

  /**
   * The radius of the file input.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    button?: string | string[]
    text?: string | string[]
    placeholder?: string | string[]
  }
}
export type BaseInputFileConfig = {
  variant: NonNullable<BaseInputFileProps['variant']>
  rounded: NonNullable<BaseInputFileProps['rounded']>
  size: NonNullable<BaseInputFileProps['size']>
}
