export interface BaseThemeSwitchProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * Enables transitions when toggling between light and dark mode.
   */
  transitions?: boolean

  /**
   * The variant of the Switch.
   */
  variant?: 'default'
}

export type BaseThemeSwitchConfig = {
  variant: NonNullable<BaseThemeSwitchProps['variant']>
  transitions: NonNullable<BaseThemeSwitchProps['transitions']>
}
