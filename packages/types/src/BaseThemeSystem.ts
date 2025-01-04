export interface BaseThemeSystemProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * Disables transitions when toggling between light and dark mode.
   */
  disableTransitions?: boolean

  /**
   * The variant of the toggle.
   */
  variant?: 'default'
}

export type BaseThemeSystemConfig = {
  variant: NonNullable<BaseThemeSystemProps['variant']>
  disableTransitions: NonNullable<BaseThemeSystemProps['disableTransitions']>
}

