<script lang="ts">
import type { 
  SelectRootProps,
  SelectRootEmits,
  SelectTriggerProps,
  SelectPortalProps,
  SelectContentProps,
  SelectViewportProps,
} from 'reka-ui'

export interface BaseSelectProps extends SelectRootProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The label text for the select input.
   */
  label?: string

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean

  /**
   * An icon to display in the select input.
   */
  icon?: string

  /**
   * The placeholder to display for the select input.
   */
  placeholder?: string

  /**
   * Whether the select input is in a loading state.
   */
  loading?: boolean

  /**
   * Whether the color of the input should change when it is focused.
   */
  colorFocus?: boolean

  /**
   * An error message to display, or a boolean indicating whether there is an error.
   */
  error?: string | boolean

  /**
   * The contrast of the select input.
   *
   * @default 'default'
   */
  contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

  /**
   * The radius of the select input.
   *
   * @since 2.0.0
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the select input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Classes to apply to the select input.
   */
  classes?: {
    /**
     * A class or classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * A class or classes to apply to the outer element.
     */
    outer?: string | string[]

    /**
     * A class or classes to apply to the label element.
     */
    label?: string | string[]

    /**
     * A class or classes to apply to the select element.
     */
    select?: string | string[]

    /**
     * A class or classes to apply to the chevron element.
     */
    chevron?: string | string[]

    /**
     * A class or classes to apply to the icon element.
     */
    icon?: string | string[]

    /**
     * A class or classes to apply to the error element.
     */
    error?: string | string[]
  }

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps,
    portal?: SelectPortalProps,
    content?: SelectContentProps,
    viewport?: SelectViewportProps,
  },
}
export interface BaseSelectEmits extends SelectRootEmits {}
export type BaseSelectSlots = {
  default(): any
  label(): any
}

export const radiuses = {
  none: '',
  sm: 'nui-select-rounded-sm',
  md: 'nui-select-rounded-md',
  lg: 'nui-select-rounded-lg',
  full: 'nui-select-rounded-full',
} as const

export const sizes = {
  sm: 'nui-select-sm',
  md: 'nui-select-md',
  lg: 'nui-select-lg',
  xl: 'nui-select-xl',
} as const

export const contrasts = {
  'default': 'nui-select-default',
  'default-contrast': 'nui-select-default-contrast',
  'muted': 'nui-select-muted',
  'muted-contrast': 'nui-select-muted-contrast',
} as const
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseSelectProps>(), {
  id: undefined,
  rounded: undefined,
  size: undefined,
  contrast: undefined,
  label: '',
  icon: undefined,
  placeholder: '',
  error: false,
  
  autocomplete: undefined,
  name: undefined,
  by: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  dir: undefined,

  bindings: () => ({}),
  classes: () => ({}),
})
const emits = defineEmits<BaseSelectEmits>()
const slots = defineSlots<BaseSelectSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const contrast = useNuiDefaultProperty(props, 'BaseSelect', 'contrast')
const rounded = useNuiDefaultProperty(props, 'BaseSelect', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseSelect', 'size')

const iconChevronDown = useNuiDefaultIcon('chevronDown')
const iconChevronUp = useNuiDefaultIcon('chevronUp')

const forward = useForwardPropsEmits(reactiveOmit(props, [
  'id',
  'placeholder', 
  'colorFocus', 
  'contrast', 
  'rounded',
  'size',
  'classes',
  'bindings',
]), emits)
</script>

<template>
  <SelectRoot :id v-bind="forward">
    <SelectTrigger
      class="nui-focus w-full flex min-w-[160px] items-center justify-between rounded-lg px-[15px] text-xs leading-none h-10 gap-[5px] bg-white dark:bg-muted-900 dark:border-muted-600 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700 outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-invalid:border-red-500!"
      v-bind="{ ...attrs, ...(props.bindings?.trigger || {}) }"
    >
      <SelectValue :placeholder="props.placeholder" />
      <Icon :name="iconChevronDown" class="size-4" />
    </SelectTrigger>

    <SelectPortal v-bind="props.bindings?.portal">
      <SelectContent
        class="min-w-[160px] bg-white rounded-lg border shadow-sm will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
        v-bind="{
          sideOffset: 5,
          ...(props.bindings?.content || {}),
        }"
      >
        <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <Icon :name="iconChevronUp" />
        </SelectScrollUpButton>

        <SelectViewport v-bind="props.bindings?.viewport" class="p-[5px]">
          <slot />
        </SelectViewport> 

        <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <Icon :name="iconChevronDown" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
