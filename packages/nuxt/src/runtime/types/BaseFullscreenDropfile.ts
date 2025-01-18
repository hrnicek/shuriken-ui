export interface BaseFullscreenDropfileProps {
  /**
   * Label to display when file is being dropped.
   */
  label?: string

  /**
   * Icon to display when file is being dropped.
   */
  icon?: string

  /**
   * The form input identifier.
   */
  id?: string

  /**
   * Disables the input.
   */
  disabled?: boolean

  /**
   * Allows multiple files to be selected.
   */
  multiple?: boolean

  /**
   * Allows to filter files when dropped.
   */
  filterFileDropped?: (file: File) => boolean

  /**
   * Defines the color of the icon
   *
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'dark'
}

export interface BaseFullscreenDropfileEmits {}
export interface BaseFullscreenDropfileSlots {
  default: () => any
}

export interface BaseFullscreenDropfileConfig {
  variant: NonNullable<BaseFullscreenDropfileProps['variant']>
}
