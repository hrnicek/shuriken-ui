export interface BaseChipProps {
  /** The position of the chip */
  position?: 'static' | 'absolute'

  /** The placement of the chip */
  placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'

  /** The offset of the chip */
  offset?: number

  /** The color of the chip */
  color?: 'primary' | 'muted' | 'custom'

  /** The size of the chip */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /** Add a pulse animation on the badge */
  pulse?: boolean
}

export interface BaseChipSlots {
  default: () => any
}

export interface BaseChipConfig {
  color: NonNullable<BaseChipProps['color']>
  position: NonNullable<BaseChipProps['position']>
  placement: NonNullable<BaseChipProps['placement']>
  size: NonNullable<BaseChipProps['size']>
}
