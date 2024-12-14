<script lang="ts">
import type { 
  DropdownMenuSubProps,
  DropdownMenuSubEmits,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
  DropdownMenuPortalProps,
} from 'reka-ui'

interface BaseDropdownSubProps extends DropdownMenuSubProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * The color of the dropdown.buttonSize
   *
   * @default 'default'
   */
  color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'none'

  /**
   * The radius of the dropdown button.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the dropdown.
   *
   * @default 'md'
   */
  size?: 'md' | 'lg'

  bindings?: {
    trigger?: DropdownMenuSubTriggerProps,
    content?: DropdownMenuSubContentProps,
    portal?: DropdownMenuPortalProps,
  }
}
</script>

<script setup lang="ts">
import { 
  useForwardPropsEmits,
} from 'reka-ui'
import { 
  reactiveOmit,
} from '@vueuse/core'

const props = defineProps<BaseDropdownSubProps>()
const emit = defineEmits<DropdownMenuSubEmits>()

const color = useNuiDefaultProperty(props, 'BaseDropdown', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseDropdown', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseDropdown', 'size')

const sizes = {
  md: 'nui-dropdown-menu-md',
  lg: 'nui-dropdown-menu-lg',
}

const radiuses = {
  none: '',
  sm: 'nui-dropdown-menu-rounded-sm',
  md: 'nui-dropdown-menu-rounded-md',
  lg: 'nui-dropdown-menu-rounded-lg',
  full: 'nui-dropdown-menu-rounded-lg',
}

const colors = {
  'default': 'nui-dropdown-menu-default',
  'default-contrast': 'nui-dropdown-menu-default-contrast',
  'muted': 'nui-dropdown-menu-muted',
  'muted-contrast': 'nui-dropdown-menu-muted-contrast',
  'primary': 'nui-dropdown-menu-primary',
  'info': 'nui-dropdown-menu-info',
  'success': 'nui-dropdown-menu-success',
  'warning': 'nui-dropdown-menu-warning',
  'danger': 'nui-dropdown-menu-danger',
  'none': '',
}

const root = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'color', 'rounded', 'size', 'bindings']), emit)
</script>

<template>
  <DropdownMenuSub v-bind="root">
    <DropdownMenuSubTrigger
      v-bind="props.bindings?.trigger"
      class="nui-dropdown-item nui-dropdown-item-rounded-sm nui-dropdown-item-default nui-dropdown-item-primary"
    >
      <div class="flex items-center justify-between w-full">
        <div class="nui-dropdown-item-content">
          <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
            <slot name="title">
              {{ props.title }}
            </slot>
          </div>
          <p
            v-if="'text' in $slots || props.text"
            class="text-muted-400 font-sans text-xs"
          >
            <slot name="text">
              {{ props.text }}
            </slot>
          </p>
        </div>
        <Icon name="radix-icons:chevron-right" />
      </div>
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal v-bind="props.bindings?.portal">
      <DropdownMenuSubContent
        class="nui-dropdown-menu"
        :class="[
          size && sizes[size],
          rounded && radiuses[rounded],
          color && colors[color],
        ]"
        v-bind="{
          sideOffset: 2,
          alignOffset: -5,
          ...(props.bindings?.content || {}),
        }"
      >
        <div class="nui-dropdown-menu-content">
          <slot />
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>
</template>