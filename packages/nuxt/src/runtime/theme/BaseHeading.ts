import type { BaseHeadingConfig } from '@shuriken-ui/nuxt'

export { leads, sizes, trackings, weights } from './BaseText'
export const defaults = {
  size: 'md',
  lead: 'normal',
  weight: 'normal',
  tracking: 'normal',
} as const satisfies BaseHeadingConfig
