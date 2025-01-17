<script setup lang="ts">
const { isMobileOpen } = createLayoutDefaultContext()
</script>

<template>
  <div class="bg-white dark:bg-black">
    <SiteNavbarMobile />
    <div :class="isMobileOpen ? 'bg-black lg:bg-white dark:lg:bg-black' : 'bg-white dark:bg-black'">
      <div
        class="transition-all duration-300"
        :class="isMobileOpen ? 'content-transform' : ''"
      >
        <SiteNavbar />
        <div class="bg-white dark:bg-black relative w-full px-4 md:px-6 min-h-screen">
          <div class="relative z-10 mx-auto max-w-[1536px]">
            <div class="pb-24">
              <!-- Content -->
              <div class="relative">
                <div>
                  <slot />
                </div>
              </div>
            </div>
            <SiteBottom />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
