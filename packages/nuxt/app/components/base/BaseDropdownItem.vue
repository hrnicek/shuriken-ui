<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { MenuItem } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The route to navigate to when the button is clicked.
     */
    to?: RouteLocationRaw

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

    /**
     * The value for the `rel` attribute on the button.
     */
    rel?: string

    /**
     * The value for the `target` attribute on the button.
     */
    target?: string

    /**
     * The type of button.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The title to display for the dropdown item.
     */
    title?: string

    /**
     * The text to display for the dropdown item.
     */
    text?: string

    /**
     * Whether the button is disabled.
     */
    disabled?: boolean

    /**
     * The hover color of the dropdown-item inner elements.
     *
     * @since 3.0.0
     * @default 'primary'
     */
    color?:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'dark'
      | 'black'

    /**
     * The contrast of the dropdown-item.
     *
     * @default 'default'
     */
    contrast?: 'default' | 'contrast'

    /**
     * The radius of the dropdown-item.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'

    /**
     * Optional CSS classes to apply to the wrapper and inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the title element.
       */
      title?: string | string[]

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[]
    }
  }>(),
  {
    to: undefined,
    href: undefined,
    rel: undefined,
    target: undefined,
    type: undefined,
    rounded: undefined,
    contrast: undefined,
    color: undefined,
    title: undefined,
    text: undefined,
    classes: () => ({
      title:
        'font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white',
      text: 'text-muted-400 font-sans text-xs',
    }),
  },
)

const color = useNuiDefaultProperty(props, 'BaseDropdownItem', 'color')
const contrast = useNuiDefaultProperty(props, 'BaseDropdownItem', 'contrast')
const rounded = useNuiDefaultProperty(props, 'BaseDropdownItem', 'rounded')

const radiuses = {
  none: '',
  sm: 'nui-dropdown-item-rounded-sm',
  md: 'nui-dropdown-item-rounded-md',
  lg: 'nui-dropdown-item-rounded-lg',
}

const contrasts = {
  default: 'nui-dropdown-item-default',
  contrast: 'nui-dropdown-item-contrast',
}

const colors = {
  primary: 'nui-dropdown-item-primary',
  info: 'nui-dropdown-item-info',
  success: 'nui-dropdown-item-success',
  warning: 'nui-dropdown-item-warning',
  danger: 'nui-dropdown-item-danger',
  dark: 'nui-dropdown-item-dark',
  black: 'nui-dropdown-item-black',
}

const { is, attributes } = useNinjaButton(props)
</script>

<template>
  <MenuItem
    v-slot="{ active, close }: { active: boolean; close: () => void }"
    as="div"
  >
    <component
      :is="is"
      v-bind="attributes"
      class="nui-dropdown-item"
      :class="[
        active && 'nui-active',
        rounded && radiuses[rounded],
        contrast && contrasts[contrast],
        color && colors[color],
        props.disabled && 'nui-dropdown-item-disabled',
        props.classes?.wrapper,
      ]"
      @click.passive="close"
    >
      <slot name="start" />
      <div class="nui-dropdown-item-content">
        <div :class="props.classes?.title">
          <slot v-bind="{ active, close }">
            {{ props.title }}
          </slot>
        </div>
        <p
          v-if="'text' in $slots || props.text"
          class="text-muted-400 font-sans text-xs"
          :class="props.classes?.text"
        >
          <slot name="text" v-bind="{ active, close }">
            {{ props.text }}
          </slot>
        </p>
      </div>
      <slot name="end" v-bind="{ active, close }" />
    </component>
  </MenuItem>
</template>
