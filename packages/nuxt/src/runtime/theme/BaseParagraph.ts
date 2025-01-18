import type { BaseParagraphConfig } from '@shuriken-ui/nuxt'

export { leads, sizes, trackings, weights } from './BaseText'
export const defaults = {
  as: 'p',
  size: 'md',
  lead: 'normal',
  weight: 'normal',
  tracking: 'normal',
} as const satisfies BaseParagraphConfig
