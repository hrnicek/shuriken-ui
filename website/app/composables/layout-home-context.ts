import type { InjectionKey } from 'vue'

interface LayoutDefaultContext {
  isMobileOpen: Ref<boolean>
}

const LayoutDefaultContextSymbol = Symbol('LayoutDefaultContext') as InjectionKey<LayoutDefaultContext>

export function createLayoutDefaultContext(): LayoutDefaultContext {
  const isMobileOpen = ref(false)
  const context = {
    isMobileOpen,
  }
  provide(LayoutDefaultContextSymbol, context)
  return context
}

export function useLayoutDefaultContext() {
  const context = inject(LayoutDefaultContextSymbol)
  if (!context) {
    throw new Error('You need to create the context first using the useLayoutDefaultContext() function')
  }
  return context
}