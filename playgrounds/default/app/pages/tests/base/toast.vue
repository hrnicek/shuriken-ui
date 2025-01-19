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
            description: 'Mensarum enim voragines et varias voluptatum inlecebras, ne longius progrediar',
            duration: 50000,
          })">
            Show toast
          </BaseButton>

          <BaseButton @click="add({
            title: 'Toast title',
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
            description: 'Mensarum enim voragines et varias voluptatum inlecebras, ne longius progrediar',
            icon: 'lucide:check',
            progress: true,
            duration: 50000,
          })">
            Show toast with icon
          </BaseButton>

          <BaseButton @click="add({
            title: 'Toast title',
            description: 'Mensarum enim voragines et varias voluptatum inlecebras, ne longius progrediar, praetermitto illuc transiturus quod quidam per ampla spatia urbis subversasque ...',
            icon: 'lucide:check',
            actions: [
              {
                label: 'Action',
                variant: 'primary',
                onClick: () => {
                  log('Action clicked')
                },
              },
            ],
          })">
            Show toast with long description
          </BaseButton>
          
          <BaseButton @click="add({
            title: 'Toast title',
            description: 'Mensarum enim voragines et varias voluptatum inlecebras, ne longius progrediar',
            icon: 'lucide:check',
            actions: [
              {
                label: 'Action',
                // variant: 'primary',
                onClick: () => {
                  log('Action clicked')
                },
              },
              {
                label: 'Bar',
                variant: 'destructive',
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
