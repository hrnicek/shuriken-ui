export interface BaseButtonProperties {
  type?: 'button' | 'submit' | 'reset'
  to?: string | Record<string, any>
  href?: string
  disabled?: boolean
  rel?: string
  target?: string
}

import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'

export function useInertiaButton(properties: BaseButtonProperties, {
  externalDefaultRelationship = 'noopener noreferrer',
  externalDefaultTarget = '_blank',
} = {}) {
  const is = computed(() =>
    properties.to || properties.href ? Link : 'button',
  )
  const type = computed(() => {
    if (is.value === 'button')
      return properties.type || 'button'
  })
  const external = computed(() => {
    const href = typeof properties.to === 'string' ? properties.to : properties.href
    if (typeof href === 'string')
      return href.startsWith('http')
    return false
  })
  const relationship = computed(() => {
    if (!external.value)
      return properties.rel
    return properties.rel ?? externalDefaultRelationship
  })
  const target = computed(() => {
    if (!external.value)
      return properties.target
    return properties.target ?? externalDefaultTarget
  })
  const attributes = computed(() => ({
    href: properties.disabled ? undefined : (properties.href || properties.to as any),
    disabled: properties.disabled,
    type: type.value,
    rel: relationship.value,
    target: target.value,
  }))

  return {
    attributes,
    is,
  }
}
