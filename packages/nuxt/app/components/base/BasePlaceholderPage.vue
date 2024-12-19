<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The title of the placeholder.
     */
    title: string

    /**
     * The subtitle of the placeholder.
     */
    subtitle?: string

    /**
     * The size of the featured image.
     *
     * @default 'xs'
     */
    imageSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the inner element.
       */
      inner?: string | string[]

      /**
       * CSS classes to apply to the img element.
       */
      img?: string | string[]

      /**
       * CSS classes to apply to the content element.
       */
      content?: string | string[]

      /**
       * CSS classes to apply to the title element.
       */
      title?: string | string[]

      /**
       * CSS classes to apply to the subtitle element.
       */
      subtitle?: string | string[]
    }
  }>(),
  {
    subtitle: undefined,
    imageSize: undefined,
    classes: () => ({}),
  },
)

const imageSize = useNuiDefaultProperty(
  props,
  'BasePlaceholderPage',
  'imageSize',
)

const sizes = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
} as const
</script>

<template>
  <div
    class="flex mx-auto min-h-[400px] items-center justify-center"
    :class="[imageSize && sizes[imageSize], props.classes?.wrapper]"
  >
    <div class="mx-auto w-full text-center" :class="props.classes?.inner">
      <div
        v-if="'image' in $slots"
        class="mx-auto block"
        :class="props.classes?.img"
      >
        <slot name="image" />
      </div>
      <div class="mx-auto max-w-sm" :class="props.classes?.content">
        <h4
          class="font-heading font-medium text-lg text-muted-900 dark:text-white mb-1 mt-4"
          :class="props.classes?.title"
        >
          {{ props.title }}
        </h4>
        <p
          v-if="props.subtitle"
          class="text-sm text-muted-600 dark:text-muted-400 mb-4"
          :class="props.classes?.subtitle"
        >
          {{ props.subtitle }}
        </p>
        <slot />
      </div>
    </div>
  </div>
</template>
