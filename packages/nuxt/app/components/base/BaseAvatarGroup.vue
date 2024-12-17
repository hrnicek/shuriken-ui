<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** An array of avatar objects. */
    avatars: {
      /** The source URL for the avatar image. */
      src?: string

      /** The source URL for the dark version of the avatar image. */
      srcDark?: string

      /** The text to display as the avatar. */
      text?: string
    }[]

    /**
     * The maximum number of avatars to display.
     *
     * @default 4
     */
    limit?: number

    /**
     * The size of the avatars.
     *
     * @default 'sm'
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

    /**
     * Optional CSS classes to apply to the component inner elements.
     *
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the outer element.
       */
      outer?: string | string[]

      /**
       * CSS classes to apply to the count element.
       */
      count?: string | string[]
    }
  }>(),
  {
    limit: undefined,
    size: undefined,
    classes: () => ({}),
  },
)

const sizes = {
  'xxs': 'size-6',
  'xs': 'size-8',
  'sm': 'size-10',
  'md': 'size-12',
  'lg': 'size-16',
  'xl': 'size-20',
  '2xl': 'size-24',
  '3xl': 'size-28',
  '4xl': 'size-32',
}

const spacings = {
  'xxs': '-ms-2 hover:-ms-3 hover:me-2 focus:-ms-3 focus:me-2 first:hover:-ms-3 first:hover:me-2 first:focus:-ms-3 first:focus:me-2',
  'xs': '-ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2 first:hover:-ms-2 first:hover:me-2 first:focus:-ms-2 first:focus:me-2',
  'sm': '-ms-3 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2 first:hover:-ms-2 first:hover:me-2 first:focus:-ms-2 first:focus:me-2',
  'md': '-ms-4 hover:-ms-7 hover:me-3 focus:-ms-3 first:hover:-ms-3 first:hover:me-3 first:focus:-ms-3 first:focus:me-3',
  'lg': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:first:hover:me-4 first:focus:me-4',
  'xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '2xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '3xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '4xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
}

const counters = {
  'xxs': '-ms-2 text-xs',
  'xs': '-ms-2 text-sm',
  'sm': '-ms-3 text-sm',
  'md': '-ms-4 text-lg',
  'lg': '-ms-5 text-xl',
  'xl': '-ms-5 text-xl',
  '2xl': '-ms-5 text-xl',
  '3xl': '-ms-5 text-xl',
  '4xl': '-ms-5 text-xl',
}

const size = useNuiDefaultProperty(props, 'BaseAvatarGroup', 'size')
const limit = useNuiDefaultProperty(props, 'BaseAvatarGroup', 'limit')

const avatarDisplay = computed(() => {
  if (
    props.avatars
    && limit.value !== undefined
    && props.avatars.length > limit.value
  ) {
    return props.avatars.slice(0, limit.value - 1)
  }
  return props.avatars
})
</script>

<template>
  <div
    class="flex"
    :class="[size && sizes[size], props.classes?.wrapper]"
  >
    <slot>
      <div
        v-for="avatar in avatarDisplay"
        :key="typeof avatar === 'string' ? avatar : avatar.src"
        class="relative flex shrink-0 items-center justify-center rounded-full bg-white dark:bg-muted-800 transition-all duration-100 ease-in"
        :class="[
          props.classes?.outer,
          size && sizes[size],
          size && spacings[size],
        ]"
      >
        <BaseAvatar
          v-bind="typeof avatar === 'string' ? { src: avatar } : avatar"
          :size="props.size"
          rounded="full"
          tabindex="0"
          class="bg-primary-500/20 text-primary-500 scale-90"
        />
      </div>
      <div
        v-if="limit !== undefined && avatars.length > limit"
        class="relative shrink-0 rounded-full bg-white dark:bg-muted-800 transition-all duration-100 ease-in"
        :class="[
          props.classes?.count,
          size && sizes[size],
          size && counters[size],
          size && spacings[size],

        ]"
      >
        <div class="relative scale-90 inline-flex items-center justify-center rounded-full h-full w-full bg-muted-200 dark:bg-muted-700 border border-white dark:border-muted-800">
          <span class="-ms-1 uppercase font-sans font-medium text-muted-500 dark:text-muted-300">
            +{{ avatars.length - limit + 1 }}
          </span>
        </div>
      </div>
    </slot>
  </div>
</template>
