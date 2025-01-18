export interface BaseThemeSystemProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * Enables transitions when toggling between light and dark mode.
   */
  transitions?: boolean

  /**
   * The variant of the toggle.
   */
  variant?: 'default'
}

export interface BaseThemeSystemConfig {
  variant: NonNullable<BaseThemeSystemProps['variant']>
  transitions: NonNullable<BaseThemeSystemProps['transitions']>
}
