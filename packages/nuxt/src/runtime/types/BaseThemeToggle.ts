export interface BaseThemeToggleProps {
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

export type BaseThemeToggleConfig = {
  variant: NonNullable<BaseThemeToggleProps['variant']>
  transitions: NonNullable<BaseThemeToggleProps['transitions']>
}

