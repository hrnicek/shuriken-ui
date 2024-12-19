<script setup lang="ts">
definePageMeta({
  title: 'BaseProgress',
  icon: 'system-uicons:reset-temporary',
  description: 'Progress component',
  section: 'base',
})

const progress = ref(25)
const progressCircle = ref(25)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseProgress">
      <NuiPreview title="Bar" description="Progress component bar">
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="Default progress bar"
            size="sm"
            :value="progress"
            variant="primary-high"
          />
          <div class="flex justify-between gap-2">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 25 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 25"
            >
              25%
            </BaseButton
              size="sm"
              rounded="md">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 50 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 50"
            >
              50%
            </BaseButton
              size="sm"
              rounded="md">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 75 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 75"
            >
              75%
            </BaseButton
              size="sm"
              rounded="md">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 100 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 100"
            >
              100%
            </BaseButton
              size="sm"
              rounded="md">
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Circle" description="Progress component circle">
        <div class="max-w-xs space-y-4">
          <div class="flex items-end gap-2">
            <BaseProgressCircle
              title="Dark circle progress bar"
              :size="35"
              :value="progressCircle"
              variant="dark-high"
            />
            <BaseProgressCircle
              title="Primary circle progress bar"
              :size="45"
              :value="progressCircle"
              variant="primary-high"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="55"
              :value="progressCircle"
              variant="none"
              :classes="{
                wrapper: 'text-muted-200 dark:text-muted-900',
                progress: 'text-cyan-500',
              }"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="75"
              :value="progressCircle"
              variant="none"
              :classes="{
                wrapper: 'text-muted-200 dark:text-muted-900',
                progress: 'text-yellow-400',
              }"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="85"
              :value="progressCircle"
              variant="none"
              :classes="{
                wrapper: 'text-muted-200 dark:text-muted-900',
                progress: 'text-pink-500',
              }"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="95"
              :value="progressCircle"
              variant="none"
              :classes="{
                wrapper: 'text-muted-200 dark:text-muted-900',
                progress: 'text-lime-500',
              }"
            />
          </div>
          <div class="flex justify-between gap-2">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 25 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 25"
            >
              25%
            </BaseButton
              size="sm"
              rounded="md">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 50 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 50"
            >
              50%
            </BaseButton
              size="sm"
              rounded="md">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 75 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 75"
            >
              75%
            </BaseButton
              size="sm"
              rounded="md">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 100
                  && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 100"
            >
              100%
            </BaseButton
              size="sm"
              rounded="md">
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Bar: size" description="Progress component bar sizes">
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="xs progress bar"
            size="xs"
            :value="78"
            variant="primary-high"
          />
          <BaseProgress
            title="sm progress bar"
            size="sm"
            :value="78"
            variant="primary-high"
          />
          <BaseProgress
            title="md progress bar"
            size="md"
            :value="78"
            variant="primary-high"
          />
          <BaseProgress
            title="lg progress bar"
            size="lg"
            :value="78"
            variant="primary-high"
          />
          <BaseProgress
            title="xl progress bar"
            size="xl"
            :value="78"
            variant="primary-high"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Bar: colors"
        description="Progress component bar colors"
      >
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="primary progress bar"
            size="sm"
            :value="78"
            variant="primary-high"
          />
          <BaseProgress
            title="dark progress bar"
            size="sm"
            :value="78"
            variant="dark-high"
          />
          <BaseProgress
            title="custom progress bar"
            size="sm"
            :value="78"
            variant="none"
            :classes="{
              wrapper: 'bg-muted-200 dark:bg-muted-900',
              progress: 'bg-yellow-400',
            }"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Bar: indeterminate"
        description="Progress component bar indeterminate"
      >
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="indeterminate primary progress bar"
            size="sm"
            variant="primary-high"
          />
          <BaseProgress
            title="indeterminate success progress bar"
            size="sm"
            variant="dark-high"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
