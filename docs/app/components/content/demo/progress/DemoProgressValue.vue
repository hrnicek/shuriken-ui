<script setup lang="ts">
const progress = ref(50)
</script>

<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <BaseProgress
        v-model="progress"
        title="Default progress bar"
        size="sm"
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
  </div>
</template>
