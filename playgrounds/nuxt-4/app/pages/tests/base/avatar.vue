<script setup lang="ts">
definePageMeta({
  title: 'BaseAvatar',
  icon: 'system-uicons:user-male',
  description: 'Avatar component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseAvatar">
      <NuiPreview
        title="Avatars sizes"
        description="Avatar component sizes"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            size="xxs"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            size="xs"
            rounded="full"
          />
          <BaseAvatar src="https://tairo.cssninja.io/img/avatars/5.svg" />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="md"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            rounded="full"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1azeaze0.svg"
            size="4xl"
            rounded="full"
            :classes="{
              wrapper: 'bg-primary-500/20 text-primary-500',
            }"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Border radius" description="Avatar component radiuses">
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="lg"
            rounded="none"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="lg"
            rounded="sm"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/11.svg"
            size="lg"
            rounded="md"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/24.svg"
            size="lg"
            rounded="lg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="lg"
            rounded="full"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Avatar badge"
        description="Avatar component badge sizes and positions"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/20.svg"
            rounded="full"
            size="xxs"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            rounded="full"
            size="xs"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/5.svg"
            rounded="full"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            rounded="full"
            size="md"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            rounded="full"
            size="lg"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/8.svg"
            size="xl"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/16.svg"
            size="2xl"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            size="3xl"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
          <BaseAvatar
            rounded="full"
            src="https://tairo.cssninja.io/img/avatars/10.svg"
            size="4xl"
            badge-src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Fallback" description="Avatar component fallback">
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/hth3.svg"
            size="lg"
            text="ER"
            :classes="{
              wrapper: 'bg-yellow-400/20 text-yellow-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2trht.svg"
            size="lg"
            text="FG"
            :classes="{
              wrapper: 'bg-green-500/20 text-green-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1thrh1.svg"
            size="lg"
            text="GT"
            :classes="{
              wrapper: 'bg-sky-500/20 text-sky-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2htrh4.svg"
            size="lg"
            text="MB"
            :classes="{
              wrapper: 'bg-violet-500/20 text-violet-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1thr0.svg"
            size="lg"
            text="FY"
            :classes="{
              wrapper: 'bg-lime-500/20 text-lime-500',
            }"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Masks" description="Avatar component masks">
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/hth3.svg"
            size="lg"
            text="ER"
            rounded="none"
            mask="hex"
            :classes="{
              wrapper: 'bg-yellow-400/20 text-yellow-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/15.svg"
            size="lg"
            text="FG"
            rounded="none"
            mask="hexed"
            :classes="{
              wrapper: 'bg-green-500/20 text-green-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1thrh1.svg"
            size="lg"
            text="GT"
            rounded="none"
            mask="deca"
            :classes="{
              wrapper: 'bg-sky-500/20 text-sky-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="lg"
            text="MB"
            rounded="none"
            mask="blob"
            :classes="{
              wrapper: 'bg-violet-500/20 text-violet-500',
            }"
          />
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/1thr0.svg"
            size="lg"
            text="FY"
            rounded="none"
            mask="diamond"
            :classes="{
              wrapper: 'bg-lime-500/20 text-lime-500',
            }"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Avatars chips"
        description="Avatar component indicators"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseChip size="xs" placement="top-end" :offset="1" color="red">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/20.svg"
              size="xxs"
              rounded="full"
            />
          </BaseChip>
          <BaseChip size="xs" placement="top-end" :offset="1.5" color="green">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/1.svg"
              size="xs"
              rounded="full"
            />
          </BaseChip>
          <BaseChip size="sm" placement="top-end" :offset="2" color="yellow">
            <BaseAvatar src="https://tairo.cssninja.io/img/avatars/5.svg" />
          </BaseChip>
          <BaseChip size="sm" placement="top-end" :offset="3" color="primary">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/4.svg"
              size="md"
              rounded="full"
            />
          </BaseChip>
          <BaseChip size="md" placement="top-end" :offset="5" color="red">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/3.svg"
              size="lg"
              rounded="full"
            />
          </BaseChip>
          <BaseChip size="md" placement="top-end" :offset="7" color="pink">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/8.svg"
              size="xl"
              rounded="full"
            />
          </BaseChip>
          <BaseChip size="lg" placement="top-end" :offset="8" color="yellow">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/16.svg"
              size="2xl"
              rounded="full"
            />
          </BaseChip>
          <BaseChip size="lg" placement="top-end" :offset="10" color="green">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/2.svg"
              size="3xl"
              rounded="full"
            />
          </BaseChip>
          <BaseChip size="lg" placement="top-end" :offset="13" color="red">
            <BaseAvatar
              src="https://tairo.cssninja.io/img/avatars/10.svg"
              size="4xl"
              rounded="full"
            />
          </BaseChip>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
