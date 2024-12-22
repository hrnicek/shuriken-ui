<script setup lang="ts">
definePageMeta({
  title: 'BaseTextarea',
  icon: 'system-uicons:document-justified',
  description: 'Textarea component',
  section: 'form',
})

const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
})

const value = ref('')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTextarea">
      <NuiPreview title="Radius" description="Textarea component radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseTextarea
            v-model="fields.first"
            rounded="none"
            placeholder="Rounded: none"
          />
          <BaseTextarea
            v-model="fields.second"
            rounded="sm"
            placeholder="Rounded: sm"
          />
          <BaseTextarea
            v-model="fields.third"
            rounded="md"
            placeholder="Rounded: md"
          />
          <BaseTextarea
            v-model="fields.third"
            rounded="lg"
            placeholder="Rounded: lg"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variants"
        description="Textarea component variants"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="fields.third"
            rounded="md"
            placeholder="Variant: default"
          />
          <BaseTextarea
            v-model="fields.third"
            rounded="md"
            placeholder="Variant: muted"
            variant="muted"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Textarea component errors">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="fields.third"
            rounded="md"
            placeholder="Variant: default"
            required
            invalid
          />
          <BaseTextarea
            v-model="fields.third"
            rounded="md"
            placeholder="Variant: muted"
            variant="muted"
            required
            invalid
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Disabled"
        description="Textarea component disabled state"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="fields.third"
            rounded="md"
            placeholder="Variant: default"
            disabled
          />
          <BaseTextarea
            v-model="fields.third"
            rounded="md"
            placeholder="Variant: muted"
            variant="muted"
            disabled
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Autogrow"
        description="Resize textarea component automatically"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            size="sm"
            placeholder="Write a message..."
            autogrow
          />
          <BaseTextarea
            v-model="value"
            size="md"
            placeholder="Write a message..."
            variant="muted"
            autogrow
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
