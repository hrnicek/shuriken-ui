export interface BaseThemeToggleProps {
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

export type BaseThemeToggleConfig = {
  variant: NonNullable<BaseThemeToggleProps['variant']>
  disableTransitions: NonNullable<BaseThemeToggleProps['disableTransitions']>
}

