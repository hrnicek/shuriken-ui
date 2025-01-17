<script setup lang="ts">
definePageMeta({
  title: 'BaseToast',
  icon: 'system-uicons:duplicate-alt',
  description: 'Toast component',
  section: 'base',
})

const { add } = useNuiToasts()

const log = console.log
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTooltip">
      <NuiPreview title="Button" description="Test tooltip">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton @click="add({
            title: 'Toast title',
            duration: 50000,
          })">
            Show toast
          </BaseButton>

          <BaseButton @click="add({
            title: 'Toast title',
            description: 'Toast description',
            icon: 'lucide:check',
            onSwipeStart: (e) => log('Swipe start', e),
            onSwipeMove: (e) => log('Swipe move', e),
            onSwipeEnd: (e) => log('Swipe end', e),
            onSwipeCancel: (e) => log('Swipe cancel', e),
            onEscapeKeyDown: (e) => {
              e.preventDefault()
              log('Escape key down', e)
            },
          })">
            Show toast without escape
          </BaseButton>

          <BaseButton @click="add({
            title: 'Toast title',
            description: 'Toast description',
            icon: 'lucide:check',
            variant: 'destructive',
          })">
            Show toast with icon
          </BaseButton>

          <BaseButton @click="add({
            title: 'Toast title',
            description: 'Toast long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long description',
            icon: 'lucide:check',
          })">
            Show toast with long description
          </BaseButton>
          
          <BaseButton @click="add({
            title: 'Toast title',
            description: 'Toast description',
            icon: 'lucide:check',
            actions: [
              {
                label: 'Action',
                variant: 'primary',
                icon: 'lucide:check',
                onClick: () => {
                  log('Action clicked')
                },
              },
            ],
          })">
            Show toast with actions
          </BaseButton>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
