<script setup lang="ts">
/**
 * Here we use the useLayoutSwitcher() composable to load available layouts.
 * We also load colors from Tailwind and Shuriken UI.
 * We use the switchColorShades() function to dynamically change the colors.
 */
import { switchColorShades, primaryPresets, mutedPresets } from '~/utils/bundles/color-switcher'

const route = useRoute()
const isSwitcherOpen = useState('switcher-open', () => false)
const currentPrimary = ref('violet')
const currentMuted = ref('slate')

// Close the modal when the primary or muted color changes
watch([currentPrimary, currentMuted], closeModal)


function closeModal() {
  isSwitcherOpen.value = false
}
function switchPrimary(color: (typeof primaryPresets)[number]) {
  currentPrimary.value = color.name
  switchColorShades('primary', color.name)
}
function switchMuted(color: (typeof mutedPresets)[number]) {
  currentMuted.value = color.name
  switchColorShades('muted', color.name)
}
</script>

<template>
  <Modal
    :open="isSwitcherOpen"
    rounded="lg"
    size="md"
    @close="isSwitcherOpen = false"
  >
    <template #header>
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3
          class="font-heading text-lg font-medium leading-6 text-muted-900 dark:text-white"
        >
          Theme configuration
        </h3>

        <BaseButtonClose
          rounded="full"
          size="sm"
          color="default"
          @click="closeModal"
        />
      </div>
    </template>

    <!-- Body -->
    <div
      class="nui-slimscroll max-h-[550px] overflow-y-auto px-4 pb-4 md:px-6 md:pb-6"
    >
      <div class="grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex flex-col gap-4"
        >
          <div>
            <BaseHeading
              as="h4"
              size="xs"
              weight="semibold"
              class="text-muted-900 dark:text-white"
            >
              Color selection
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-400">
              Select a primary color
            </BaseParagraph>
          </div>
          <div class="space-y-1">
            <div class="grid grid-cols-1 gap-x-4 gap-y-0 sm:grid-cols-2">
              <div v-for="color in primaryPresets" :key="color.name">
                <button
                  type="button"
                  class="group flex w-full items-center gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-100 dark:hover:bg-muted-700/70"
                  :class="[
                    currentPrimary === color.name
                      ? 'relative z-10 ring-1 ring-primary-500'
                      : 'ring-0',
                  ]"
                  @click="() => switchPrimary(color)"
                >
                  <span
                    class="block h-6 w-6 shrink-0 rounded-lg"
                    :class="color.class"
                  />
                  <BaseText size="sm">
                    {{ color.label }}
                  </BaseText>
                </button>
              </div>
            </div>
            <hr class="!my-4 border-muted-200 dark:border-muted-700">
            <div>
              <button
                type="button"
                class="group flex w-full items-center gap-3 rounded-lg p-2"
              >
                <span
                  class="block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900"
                />
                <BaseText size="sm">
                  Gray shade
                </BaseText>
              </button>
              <div class="flex items-center px-2 pt-2">
                <BaseText
                  size="xs"
                  class="text-muted-400"
                >
                  Pick a shade
                </BaseText>
                <div class="ml-auto flex items-center justify-end gap-2">
                  <button
                    v-for="color in mutedPresets"
                    :key="color.name"
                    type="button"
                    class="block h-6 w-6 rounded-full"
                    :class="[
                      color.class,
                      currentMuted === color.name
                        ? 'ring-1 ring-primary-500'
                        : 'ring-0',
                    ]"
                    :data-nui-tooltip="color.label"
                    @click="() => switchMuted(color)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
