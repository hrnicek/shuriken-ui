<script setup lang="ts">
const progressCircle = ref(25)
</script>

<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle
          v-model="progressCircle"
          title="Dark circle progress bar"
          :size="35"
          variant="dark"
        />
        <BaseProgressCircle
          v-model="progressCircle"
          title="Primary circle progress bar"
          :size="45"
          variant="primary"
        />
        <BaseProgressCircle
          v-model="progressCircle"
          title="Custom color circle progress bar"
          :size="55"
          variant="none"
          class="text-cyan-500 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
        <BaseProgressCircle
          v-model="progressCircle"
          title="Custom color circle progress bar"
          :size="75"
          variant="none"
          class="text-yellow-400 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
        <BaseProgressCircle
          v-model="progressCircle"
          title="Custom color circle progress bar"
          :size="85"
          variant="none"
          class="text-pink-500 *:first:text-muted-200 *:dark:first:text-muted-900"
        />
        <BaseProgressCircle
          v-model="progressCircle"
          title="Custom color circle progress bar"
          :size="95"
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
  </div>
</template>
