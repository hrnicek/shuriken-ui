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
            v-model="progress"
            variant="primary"
          />
          <div class="flex justify-between gap-2">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 0 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 0"
            >
              0%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 1 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 1"
            >
              1%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 25 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 25"
            >
              25%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 50 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 50"
            >
              50%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 75 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 75"
            >
              75%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progress === 100 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 100"
            >
              100%
            </BaseButton>
          </div>
        </div>
      </NuiPreview>
      <NuiPreview title="With max" description="Custom max value">
        <div class="max-w-xs space-y-4">
            <BaseProgressCircle
              title="Static progress bar with max value"
              :size="55"
              :model-value="1"
              :max="2"
            />

            <BaseProgressCircle
              title="Static progress bar with max value"
              :size="55"
              :model-value="1"
              :max="1"
            />

            <BaseProgress
              title="Static progress bar with max value"
              size="sm"
              :model-value="1"
              :max="2"
            />
            <BaseProgress
              title="Static progress bar with max value"
              size="sm"
              :model-value="1"
              :max="1"
            />
        </div>
      </NuiPreview>

      <NuiPreview title="Circle" description="Progress component circle">
        <div class="max-w-xs space-y-4">
          <div class="flex items-end gap-2">
            <BaseProgressCircle
              title="Dark circle progress bar"
              :size="35"
              v-model="progressCircle"
              variant="dark"
            />
            <BaseProgressCircle
              title="Primary circle progress bar"
              :size="45"
              v-model="progressCircle"
              variant="primary"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="55"
              v-model="progressCircle"
              variant="none"
              class="text-cyan-500 *:first:text-muted-200 *:dark:first:text-muted-900"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="75"
              v-model="progressCircle"
              variant="none"
              class="text-yellow-400 *:first:text-muted-200 *:dark:first:text-muted-900"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="85"
              v-model="progressCircle"
              variant="none"
              class="text-pink-500 *:first:text-muted-200 *:dark:first:text-muted-900"
            />
            <BaseProgressCircle
              title="Custom color circle progress bar"
              :size="95"
              v-model="progressCircle"
              variant="none"
              class="text-lime-500 *:first:text-muted-200 *:dark:first:text-muted-900"
            />
          </div>
          <div class="flex justify-between gap-2">
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 0 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 0"
            >
              0%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 1 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 1"
            >
              1%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 25 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 25"
            >
              25%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 50 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 50"
            >
              50%
            </BaseButton>
            <BaseButton
              size="sm"
              rounded="md"
              :class="
                progressCircle === 75 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 75"
            >
              75%
            </BaseButton>
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
            </BaseButton>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Bar: size" description="Progress component bar sizes">
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="xs progress bar"
            size="xs"
            :model-value="78"
            variant="primary"
          />
          <BaseProgress
            title="sm progress bar"
            size="sm"
            :model-value="78"
            variant="primary"
          />
          <BaseProgress
            title="md progress bar"
            size="md"
            :model-value="78"
            variant="primary"
          />
          <BaseProgress
            title="lg progress bar"
            size="lg"
            :model-value="78"
            variant="primary"
          />
          <BaseProgress
            title="xl progress bar"
            size="xl"
            :model-value="78"
            variant="primary"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Bar: colors"
        description="Progress component bar colors"
      >
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="Default progress bar"
            size="sm"
            :model-value="78"
          />
          <BaseProgress
            title="primary progress bar"
            size="sm"
            :model-value="78"
            variant="primary"
          />
          <BaseProgress
            title="dark progress bar"
            size="sm"
            :model-value="78"
            variant="dark"
          />
          <BaseProgress
            title="custom progress bar"
            size="sm"
            :model-value="78"
            variant="none"
            class="bg-muted-200 dark:bg-muted-900 *:first:bg-yellow-400"
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
            variant="primary"
          />
          <BaseProgress
            title="indeterminate success progress bar"
            size="sm"
            variant="dark"
          />
          <BaseProgressCircle
            title="indeterminate success progress bar"
            :size="42"
            :thickness="6"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
