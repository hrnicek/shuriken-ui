export interface BaseThemeSwitchProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * Disables transitions when toggling between light and dark mode.
   */
  disableTransitions?: boolean

  /**
   * The variant of the Switch.
   */
  variant?: 'default'
}

export type BaseThemeSwitchConfig = {
  variant: NonNullable<BaseThemeSwitchProps['variant']>
  disableTransitions: NonNullable<BaseThemeSwitchProps['disableTransitions']>
}
