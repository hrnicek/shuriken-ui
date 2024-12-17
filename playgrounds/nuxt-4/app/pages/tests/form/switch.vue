<script setup lang="ts">
definePageMeta({
  title: 'BaseSwitch',
  icon: 'system-uicons:toggle',
  description: 'Select component',
  section: 'form',
})

const thinValues = reactive({
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
  dark: true,
  black: true,
})

const ballValues = reactive({
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
  dark: true,
  black: true,
})

const thinSublabelValue = ref(true)
const ballSublabelValue = ref(true)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseSwitch">
      <NuiPreview title="Thin: default" description="Switch thin component">
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseSwitchThin
            v-model="thinValues.primary"
            color="primary"
          >
            Primary
          </BaseSwitchThin>
          <BaseSwitchThin v-model="thinValues.info"  color="info">
            Info
          </BaseSwitchThin>
          <BaseSwitchThin
            v-model="thinValues.success"
            color="success"
          >
            Success
          </BaseSwitchThin>
          <BaseSwitchThin
            v-model="thinValues.warning"
            color="warning"
          >
            Warning
          </BaseSwitchThin>
          <BaseSwitchThin
            v-model="thinValues.danger"
            color="danger"
          >
            Danger
          </BaseSwitchThin>
          <BaseSwitchThin v-model="thinValues.dark" label="Dark" color="dark" />
          <BaseSwitchThin
            v-model="thinValues.black"
            color="black"
          >
            Black
          </BaseSwitchThin>
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Thin: sublabel" description="Switch thin sublabel">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchThin
            v-model="thinSublabelValue"
            color="primary"
          >
            Primary

            <template #sublabel>
              This is a primary switch 
            </template>
          </BaseSwitchThin>
        </div>
      </NuiPreview>

      <NuiPreview title="Ball: default" description="Switch thin component">
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseSwitchBall
            v-model="ballValues.primary"
            color="primary"
          >
            Primary
          </BaseSwitchBall> 
          <BaseSwitchBall v-model="ballValues.info" label="Info" color="info">
            Info
          </BaseSwitchBall>
          <BaseSwitchBall
            v-model="ballValues.success"
            color="success"
          >
            Success
          </BaseSwitchBall>
          <BaseSwitchBall
            v-model="ballValues.warning"
            color="warning"
          >
            Warning
          </BaseSwitchBall>
          <BaseSwitchBall
            v-model="ballValues.danger"
            color="danger"
          >
            Danger
          </BaseSwitchBall>
          <BaseSwitchBall
            v-model="ballValues.dark"
            id="dark"
            color="dark"
          >
            Dark
          </BaseSwitchBall>
          <BaseSwitchBall
            v-model="ballValues.black"
            color="black"
          >
            Black
          </BaseSwitchBall>
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Ball: sublabel" description="Switch thin sublabel">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchBall
            v-model="ballSublabelValue"
            label="Primary"
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
