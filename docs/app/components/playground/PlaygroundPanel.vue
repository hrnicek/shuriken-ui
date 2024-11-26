<script setup lang="ts">
import { switchColorShades, primaryPresets, mutedPresets } from '~/utils/bundles/color-switcher'

const props = defineProps<{
  open?: boolean
  loading?: boolean
}>()

const emit = defineEmits(['close', 'generate', 'primaryChanged', 'mutedChanged'])

const { rounded } = usePlayground()

const currentPrimary = ref('violet')
const currentMuted = ref('slate')

function switchPrimary(color: (typeof primaryPresets)[number]) {
  currentPrimary.value = color.name
  switchColorShades('primary', color.name)
  emit('primaryChanged', color.name)
}
function switchMuted(color: (typeof mutedPresets)[number]) {
  currentMuted.value = color.name
  switchColorShades('muted', color.name)
  emit('mutedChanged', color.name)
}
</script>

<template>
  <BaseCard
    color="default-contrast"
    rounded="lg"
    shadow="flat"
    class="fixed end-4 top-20 z-40 w-[calc(100%_-_32px)] p-6 md:end-6 md:top-20 md:w-[380px] lg:static lg:w-full"
    :class="props.open ? 'translate-x-0' : 'translate-x-[480px] lg:translate-x-0'"
  >
    <div class="mb-6 flex items-center">
      <BaseHeading as="h3" size="md">
        Configuration
      </BaseHeading>
      <div class="ms-auto lg:hidden">
        <BaseButtonIcon
          size="sm"
          rounded="md"
          @click="emit('close')"
        >
          <Icon name="lucide:x" class="h-4 w-4" />
        </BaseButtonIcon>
      </div>
    </div>
    <div class="mb-3">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        class="text-muted-700 dark:text-muted-200"
      >
        Primary color
      </BaseHeading>
    </div>
    <div class="mb-6 flex flex-wrap gap-x-3 gap-y-1">
      <div v-for="color in primaryPresets" :key="color.name">
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200"
          :class="[currentPrimary === color.name ? 'relative z-10 ring-1 ring-muted-800 dark:ring-muted-100' : 'ring-0']"
          @click="() => switchPrimary(color)"
        >
          <span
            class="block h-6 w-6 shrink-0 rounded-full"
            :class="color.class"
            :data-nui-tooltip="color.label"
          />
        </button>
      </div>
    </div>
    <div class="mb-3">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        class="text-muted-700 dark:text-muted-200"
      >
        Gray shade
      </BaseHeading>
    </div>
    <div class="mb-6 flex flex-wrap gap-x-3 gap-y-2">
      <div v-for="color in mutedPresets" :key="color.name">
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200"
          :class="[currentMuted === color.name ? 'relative z-10 ring-1 ring-muted-800 dark:ring-muted-100' : 'ring-0']"
          @click="() => switchMuted(color)"
        >
          <span
            class="block h-6 w-6 shrink-0 rounded-full"
            :class="color.class"
            :data-nui-tooltip="color.label"
          />
        </button>
      </div>
    </div>
    <div class="mb-6 flex items-center gap-3">
      <BaseThemeSwitch />
      <div>
        <BaseHeading
          as="h5"
          size="sm"
          weight="medium"
          class="text-muted-700 dark:text-muted-200"
        >
          Dark/Light mode
        </BaseHeading>
        <BaseParagraph size="xs" class="text-muted-400 dark:text-muted-500">
          Switch between light and dark mode.
        </BaseParagraph>
      </div>
    </div>
    <div class="mb-3">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        class="text-muted-700 dark:text-muted-200"
      >
        Border radius
      </BaseHeading>
    </div>
    <div class="mb-6 flex w-full gap-2">
      <button
        type="button"
        class="flex flex-1 items-center justify-center"
        @click="rounded = 'none'"
      >
        <span class="flex flex-col items-center gap-1">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-900">
            <RoundedNone class="h-6 w-6" :class="rounded === 'none' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans text-xs font-medium" :class="rounded === 'none' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">none</span>
        </span>
      </button>
      <button
        type="button"
        class="flex flex-1 items-center justify-center"
        @click="rounded = 'sm'"
      >
        <span class="flex flex-col items-center gap-1">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-900">
            <RoundedSm class="h-6 w-6" :class="rounded === 'sm' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans text-xs font-medium" :class="rounded === 'sm' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">sm</span>
        </span>
      </button><button
        type="button"
        class="flex flex-1 items-center justify-center"
        @click="rounded = 'md'"
      >
        <span class="flex flex-col items-center gap-1">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-900">
            <RoundedMd class="h-6 w-6" :class="rounded === 'md' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans text-xs font-medium" :class="rounded === 'md' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">md</span>
        </span>
      </button>
      <button
        type="button"
        class="flex flex-1 items-center justify-center"
        @click="rounded = 'lg'"
      >
        <span class="flex flex-col items-center gap-1">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-900">
            <RoundedLg class="h-6 w-6" :class="rounded === 'lg' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans text-xs font-medium" :class="rounded === 'lg' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">lg</span>
        </span>
      </button>
      <button
        type="button"
        class="flex flex-1 items-center justify-center"
        @click="rounded = 'full'"
      >
        <span class="flex flex-col items-center gap-1">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-900">
            <RoundedFull class="h-6 w-6" :class="rounded === 'full' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-500 dark:text-muted-100'" />
          </span>
          <span class="font-sans text-xs font-medium" :class="rounded === 'full' ? 'text-primary-500 dark:text-primary-400' : 'text-muted-400 dark:text-muted-500'">full</span>
        </span>
      </button>
    </div>
    <div>
      <BaseButton
        :loading="props.loading"
        :color="props.loading ? 'default' : 'none'"
        size="md"
        class="w-full bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-900 dark:hover:bg-muted-800"
        @click="emit('generate')"
      >
        Generate Configuration
      </BaseButton>
    </div>
  </BaseCard>
</template>
