<script setup lang="ts">
definePageMeta({
  title: 'BaseTextarea',
  icon: 'system-uicons:document-justified',
  description: 'Textarea component',
  section: 'form',
})

const fields = reactive({
  first: 'foo bar',
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
      <NuiPreview title="Sizes" description="Textarea component sizes">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-2">
          <BaseTextarea
            v-model="fields.first"
            size="sm"
            placeholder="Textarea: sm"
            autogrow
          />
          <BaseInput size="sm" placeholder="Input: sm" />

          <BaseTextarea
            v-model="fields.second"
            size="md"
            placeholder="Textarea: md"
            autogrow
          />
          <BaseInput size="md" placeholder="Input: md" />

          <BaseTextarea
            v-model="fields.third"
            size="lg"
            placeholder="Textarea: lg"
            autogrow
          />
          <BaseInput size="lg" placeholder="Input: lg" />

          <BaseTextarea
            v-model="fields.fourth"
            size="xl"
            placeholder="Textarea: xl"
            autogrow
          />
          <BaseInput size="xl" placeholder="Input: xl" />
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
            placeholder="Write a message..."
            autogrow
          />
          <BaseTextarea
            v-model="value"
            placeholder="Write a message..."
            variant="muted"
            autogrow
          />
        </div>
      </NuiPreview>
      <NuiPreview
        title="Lazy"
        description="Model modifiers"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-2 mt-10">
          <BaseTextarea
            v-model.lazy="value"
            placeholder="Write a message..."
          />
          <pre>{{ { value } }}</pre>

          
          <BaseTextarea
            v-model.trim="value"
            placeholder="Write a message..."
          />
          <pre>{{ { value } }}</pre>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
