<script setup lang="ts">
definePageMeta({
  title: 'BaseSwitch',
  icon: 'system-uicons:toggle',
  description: 'Select component',
  section: 'form',
})

const thinValues = reactive({
  one: true,
  two: true,
  three: true,
  four: true,
  five: true,
  six: true,
  seven: true,
})

const ballValues = reactive({
  one: true,
  two: true,
  three: true,
  four: true,
  five: true,
  six: true,
  seven: true,
})

const thinSublabelValue = ref(true)
const ballSublabelValue = ref(true)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseSwitch">
      <NuiPreview title="Thin variants" description="Switch thin component">
        <div
          class="grid grid-cols-2 gap-6 md:max-w-2xl md:grid-cols-4"
        >
          <BaseSwitchThin v-model="thinValues.one"
            variant="default">
            Default
          </BaseSwitchThin>
          <BaseSwitchThin
            v-model="thinValues.two"
            variant="primary"
          >
            Primary
          </BaseSwitchThin>
          <BaseSwitchThin
            v-model="thinValues.three"
            variant="dark"
          >
            Warning
          </BaseSwitchThin>
        </div>
      </NuiPreview>

      <NuiPreview title="Custom variants" description="Switch thin custom variants">
        <div
          class="grid grid-cols-2 gap-6 md:max-w-4xl md:grid-cols-4"
        >
          <BaseSwitchThin
            v-model="thinValues.one"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:peer-data-[state=checked]:bg-green-500 *:last:dark:peer-data-[state=checked]:bg-green-500 *:last:bg-muted-300 *:last:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchThin>
          <BaseSwitchThin 
            v-model="thinValues.two"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:peer-data-[state=checked]:bg-pink-500 *:last:dark:peer-data-[state=checked]:bg-pink-500 *:last:bg-muted-300 *:last:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchThin>
          <BaseSwitchThin
            v-model="thinValues.three"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:peer-data-[state=checked]:bg-amber-500 *:last:dark:peer-data-[state=checked]:bg-amber-500 *:last:bg-muted-300 *:last:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchThin>
          <BaseSwitchThin
            v-model="thinValues.four"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:peer-data-[state=checked]:bg-violet-500 *:last:dark:peer-data-[state=checked]:bg-violet-500 *:last:bg-muted-300 *:last:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchThin>
        </div>
      </NuiPreview>

      <NuiPreview title="Thin: sublabel" description="Switch thin sublabel">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchThin
            v-model="thinSublabelValue"
            variant="primary"
          >
            Primary

            <template #sublabel>
              This is a primary switch 
            </template>
          </BaseSwitchThin>
        </div>
      </NuiPreview>

      <NuiPreview title="Ball variants" description="Switch ball component variants">
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-2xl md:grid-cols-4"
        >
          <BaseSwitchBall
            v-model="ballValues.one"
            variant="default"
          >
            Default
          </BaseSwitchBall>
          <BaseSwitchBall
            v-model="ballValues.three"
            variant="primary"
          >
            Primary
          </BaseSwitchBall> 
          <BaseSwitchBall
            v-model="ballValues.four"
            id="dark"
            variant="dark"
          >
            Dark
          </BaseSwitchBall>
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Custom variants" description="Switch ball custom variants">
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-3xl md:grid-cols-4"
        >
          <BaseSwitchBall
            v-model="ballValues.one"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-green-500 *:dark:peer-data-[state=checked]:bg-green-500 *:bg-muted-300 *:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchBall> 
          <BaseSwitchBall
            v-model="ballValues.two"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-pink-500 *:dark:peer-data-[state=checked]:bg-pink-500 *:bg-muted-300 *:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchBall> 
          <BaseSwitchBall
            v-model="ballValues.three"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-amber-500 *:dark:peer-data-[state=checked]:bg-amber-500 *:bg-muted-300 *:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchBall> 
          <BaseSwitchBall
            v-model="ballValues.four"
            variant="none"
            class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-violet-500 *:dark:peer-data-[state=checked]:bg-violet-500 *:bg-muted-300 *:dark:bg-muted-600"
          >
            Custom variant
          </BaseSwitchBall>
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Ball: sublabel" description="Switch thin sublabel">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchBall
            v-model="ballSublabelValue"
            label="Primary"
            variant="primary"
          >
            Primary

            <template #sublabel>
              This is a primary switch 
            </template>
          </BaseSwitchBall>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
