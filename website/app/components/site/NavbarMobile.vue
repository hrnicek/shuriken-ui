<script setup lang="ts">
const { isMobileOpen } = useLayoutDefaultContext()
</script>

<template>
  <div :class="isMobileOpen ? 'pointer-events-auto' : 'pointer-events-none'">
    <div
      role="button" 
      class="fixed lg:hidden inset-0 h-full w-full bg-muted-900 z-[98] transition-opacity duration-300"
      :class="[
        isMobileOpen ? 'opacity-80' : 'opacity-0',
      ]"
      @click="isMobileOpen = false"
    >
    </div>
    <div 
      class="fixed lg:hidden bottom-0 inset-x-0 h-[calc(100dvh_-_40%)] w-full bg-muted-900/80 z-[99] bg-white rounded-t-2xl transition-transform duration-300"
      :class="[
        isMobileOpen ? 'translate-y-0' : 'translate-y-full',
      ]"
    >
    </div>
  </div>
</template>