<script lang="ts">
import type {
  DropdownMenuRootProps,
  DropdownMenuRootEmits,
  DropdownMenuContentProps,
  DropdownMenuTriggerProps,
  DropdownMenuPortalProps,
} from 'reka-ui'

interface BaseDropdownProps extends DropdownMenuRootProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string

  /**
   * Disables the dropdown.
   */
  disabled?: boolean

  /**
   * Show an arrow on the dropdown.
   */
  arrow?: boolean

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

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * CSS classes to apply to the headless ui menu element.
     */
    menuWrapper?: string | string[]

    /**
     * CSS classes to apply to the dropdown menu element.
     */
    menu?: string | string[]

    /**
     * CSS classes to apply to the header element.
     */
    header?: string | string[]

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[]
  },

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    content?: DropdownMenuContentProps,
    trigger?: DropdownMenuTriggerProps,
    portal?: DropdownMenuPortalProps,
  },
}
interface BaseDropdownEmits extends DropdownMenuRootEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseDropdownProps>(), {
  color: undefined,
  rounded: undefined,
  size: undefined,
  label: '',
  modal: undefined,
  open: undefined,
  defaultOpen: undefined,
  classes: () => ({}),
  bindings: () => ({}),
})
const emits = defineEmits<BaseDropdownEmits>()

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

const root = useForwardPropsEmits(reactiveOmit(props, ['label', 'disabled', 'arrow', 'color', 'rounded', 'size', 'classes', 'bindings']), emits)
</script>

<template>
  <DropdownMenuRoot v-bind="root">
    <div class="nui-dropdown" :class="props.classes?.wrapper">
      <div
        class="nui-dropdown-menu-wrapper"
        :class="props.classes?.menuWrapper"
      >
          <DropdownMenuTrigger 
            v-bind="{
              asChild: true,
              disabled: props.disabled,
              ...(props.bindings?.trigger || {}),
            }"
          >
            <slot name="button">
              <BaseButton
                :rounded="props.rounded ? props.rounded : rounded"
                :disabled="props.disabled"
                class="group"
              >
                <slot name="label">
                  <span>{{ props.label }}</span>
                </slot>
                <Icon
                  name="lucide:chevron-down"
                  class="nui-dropdown-chevron group-data-[state=open]:rotate-180"
                />
              </BaseButton>
            </slot>
          </DropdownMenuTrigger>
          <DropdownMenuPortal v-bind="props.bindings?.portal">
            <Transition
              enter-active-class="transition-opacity duration-100 ease-out"
              enter-from-class="opacity-0"
              enter-to-class=" opacity-100"
              leave-active-class="transition-opacity duration-75 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <DropdownMenuContent
                class="nui-dropdown-menu"
                v-bind="{
                  align: 'start',
                  ...(props.bindings?.content || {}),
                }"
                :class="[
                  size && sizes[size],
                  rounded && radiuses[rounded],
                  color && colors[color],
                  props.classes?.menu,
                ]"
              >
                <div class="nui-dropdown-menu-content" :class="props.classes?.content">
                  <slot />
                  <BaseDropdownArrow v-if="arrow" />
                </div>
              </DropdownMenuContent>
            </Transition>
          </DropdownMenuPortal>
      </div>
    </div>
  </DropdownMenuRoot>
</template>
