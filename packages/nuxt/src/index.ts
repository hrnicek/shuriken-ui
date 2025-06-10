export { default as Accordion } from "./runtime/components/Accordion.vue"
export { default as AccordionItem } from "./runtime/components/AccordionItem.vue"
export { default as Autocomplete } from "./runtime/components/Autocomplete.vue"
export { default as AutocompleteGroup } from "./runtime/components/AutocompleteGroup.vue"
export { default as AutocompleteItem } from "./runtime/components/AutocompleteItem.vue"
export { default as AutocompleteLabel } from "./runtime/components/AutocompleteLabel.vue"
export { default as AutocompleteSeparator } from "./runtime/components/AutocompleteSeparator.vue"
export { default as Avatar } from "./runtime/components/Avatar.vue"
export { default as AvatarGroup } from "./runtime/components/AvatarGroup.vue"
export { default as Breadcrumb } from "./runtime/components/Breadcrumb.vue"
export { default as Button } from "./runtime/components/Button.vue"
export { default as Card } from "./runtime/components/Card.vue"
export { default as Checkbox } from "./runtime/components/Checkbox.vue"
export { default as CheckboxGroup } from "./runtime/components/CheckboxGroup.vue"
export { default as Chip } from "./runtime/components/Chip.vue"
export { default as Dropdown } from "./runtime/components/Dropdown.vue"
export { default as DropdownArrow } from "./runtime/components/DropdownArrow.vue"
export { default as DropdownCheckbox } from "./runtime/components/DropdownCheckbox.vue"
export { default as DropdownItem } from "./runtime/components/DropdownItem.vue"
export { default as DropdownLabel } from "./runtime/components/DropdownLabel.vue"
export { default as DropdownRadioGroup } from "./runtime/components/DropdownRadioGroup.vue"
export { default as DropdownRadioItem } from "./runtime/components/DropdownRadioItem.vue"
export { default as DropdownSeparator } from "./runtime/components/DropdownSeparator.vue"
export { default as DropdownSub } from "./runtime/components/DropdownSub.vue"
export { default as Field } from "./runtime/components/Field.vue"
export { default as Heading } from "./runtime/components/Heading.vue"
export { default as IconBox } from "./runtime/components/IconBox.vue"
export { default as Input } from "./runtime/components/Input.vue"
export { default as InputFile } from "./runtime/components/InputFile.vue"
export { default as InputNumber } from "./runtime/components/InputNumber.vue"
export { default as Kbd } from "./runtime/components/Kbd.vue"
export { default as Link } from "./runtime/components/Link.vue"
export { default as List } from "./runtime/components/List.vue"
export { default as ListItem } from "./runtime/components/ListItem.vue"
export { default as Message } from "./runtime/components/Message.vue"
export { default as Pagination } from "./runtime/components/Pagination.vue"
export { default as PaginationButtonFirst } from "./runtime/components/PaginationButtonFirst.vue"
export { default as PaginationButtonLast } from "./runtime/components/PaginationButtonLast.vue"
export { default as PaginationButtonNext } from "./runtime/components/PaginationButtonNext.vue"
export { default as PaginationButtonPrev } from "./runtime/components/PaginationButtonPrev.vue"
export { default as PaginationItems } from "./runtime/components/PaginationItems.vue"
export { default as Paragraph } from "./runtime/components/Paragraph.vue"
export { default as PlaceholderPage } from "./runtime/components/PlaceholderPage.vue"
export { default as Placeload } from "./runtime/components/Placeload.vue"
export { default as Popover } from "./runtime/components/Popover.vue"
export { default as PrimitiveField } from "./runtime/components/PrimitiveField.vue"
export { default as PrimitiveFieldController } from "./runtime/components/PrimitiveFieldController.vue"
export { default as PrimitiveFieldDescription } from "./runtime/components/PrimitiveFieldDescription.vue"
export { default as PrimitiveFieldError } from "./runtime/components/PrimitiveFieldError.vue"
export { default as PrimitiveFieldErrorIndicator } from "./runtime/components/PrimitiveFieldErrorIndicator.vue"
export { default as PrimitiveFieldLabel } from "./runtime/components/PrimitiveFieldLabel.vue"
export { default as PrimitiveFieldLoadingIndicator } from "./runtime/components/PrimitiveFieldLoadingIndicator.vue"
export { default as PrimitiveFieldRequiredIndicator } from "./runtime/components/PrimitiveFieldRequiredIndicator.vue"
export { default as PrimitiveFieldSuccessIndicator } from "./runtime/components/PrimitiveFieldSuccessIndicator.vue"
export { default as Progress } from "./runtime/components/Progress.vue"
export { default as ProgressCircle } from "./runtime/components/ProgressCircle.vue"
export { default as Prose } from "./runtime/components/Prose.vue"
export { default as Providers } from "./runtime/components/Providers.vue"
export { default as Radio } from "./runtime/components/Radio.vue"
export { default as RadioGroup } from "./runtime/components/RadioGroup.vue"
export { default as Select } from "./runtime/components/Select.vue"
export { default as SelectGroup } from "./runtime/components/SelectGroup.vue"
export { default as SelectItem } from "./runtime/components/SelectItem.vue"
export { default as SelectLabel } from "./runtime/components/SelectLabel.vue"
export { default as SelectSeparator } from "./runtime/components/SelectSeparator.vue"
export { default as Slider } from "./runtime/components/Slider.vue"
export { default as Snack } from "./runtime/components/Snack.vue"
export { default as SwitchBall } from "./runtime/components/SwitchBall.vue"
export { default as SwitchThin } from "./runtime/components/SwitchThin.vue"
export { default as Tabs } from "./runtime/components/Tabs.vue"
export { default as TabsContent } from "./runtime/components/TabsContent.vue"
export { default as TabsTrigger } from "./runtime/components/TabsTrigger.vue"
export { default as Tag } from "./runtime/components/Tag.vue"
export { default as Text } from "./runtime/components/Text.vue"
export { default as Textarea } from "./runtime/components/Textarea.vue"
export { default as ThemeSwitch } from "./runtime/components/ThemeSwitch.vue"
export { default as ThemeSystem } from "./runtime/components/ThemeSystem.vue"
export { default as ThemeToggle } from "./runtime/components/ThemeToggle.vue"
export { default as Toast } from "./runtime/components/Toast.vue"
export { default as ToastProvider } from "./runtime/components/ToastProvider.vue"
export { default as Tooltip } from "./runtime/components/Tooltip.vue"

export interface ShurikenUIOptions {
  prefix?: string
  config?: Record<string, any>
}

export const defaultConfig = {
  icon: {
    sun: 'nui-icon:sun',
    moon: 'nui-icon:moon',
    screen: 'nui-icon:screen-duotone',
    spiner: 'nui-icon:spiner',
    required: 'lucide:asterisk',
    ellipsis: 'lucide:ellipsis',
    alert: 'lucide:alert-octagon',
    close: 'lucide:x',
    check: 'lucide:check',
    plus: 'lucide:plus',
    minus: 'lucide:minus',
    chevronUp: 'lucide:chevron-up',
    chevronDown: 'lucide:chevron-down',
    chevronLeft: 'lucide:chevron-left',
    chevronFirst: 'lucide:chevron-first',
    chevronRight: 'lucide:chevron-right',
    chevronLast: 'lucide:chevron-last',
  },
}

export const nuiConfigSymbol = Symbol('nui-config')

export function createShurikenUI(options: ShurikenUIOptions = {}) {
  return {
    install(app: import('vue').App) {
      const prefix = options.prefix ?? 'Base'
      const config = Object.assign({}, defaultConfig, options.config)
      app.provide(nuiConfigSymbol, config)
      const comps = {
      Accordion: Accordion,
      AccordionItem: AccordionItem,
      Autocomplete: Autocomplete,
      AutocompleteGroup: AutocompleteGroup,
      AutocompleteItem: AutocompleteItem,
      AutocompleteLabel: AutocompleteLabel,
      AutocompleteSeparator: AutocompleteSeparator,
      Avatar: Avatar,
      AvatarGroup: AvatarGroup,
      Breadcrumb: Breadcrumb,
      Button: Button,
      Card: Card,
      Checkbox: Checkbox,
      CheckboxGroup: CheckboxGroup,
      Chip: Chip,
      Dropdown: Dropdown,
      DropdownArrow: DropdownArrow,
      DropdownCheckbox: DropdownCheckbox,
      DropdownItem: DropdownItem,
      DropdownLabel: DropdownLabel,
      DropdownRadioGroup: DropdownRadioGroup,
      DropdownRadioItem: DropdownRadioItem,
      DropdownSeparator: DropdownSeparator,
      DropdownSub: DropdownSub,
      Field: Field,
      Heading: Heading,
      IconBox: IconBox,
      Input: Input,
      InputFile: InputFile,
      InputNumber: InputNumber,
      Kbd: Kbd,
      Link: Link,
      List: List,
      ListItem: ListItem,
      Message: Message,
      Pagination: Pagination,
      PaginationButtonFirst: PaginationButtonFirst,
      PaginationButtonLast: PaginationButtonLast,
      PaginationButtonNext: PaginationButtonNext,
      PaginationButtonPrev: PaginationButtonPrev,
      PaginationItems: PaginationItems,
      Paragraph: Paragraph,
      PlaceholderPage: PlaceholderPage,
      Placeload: Placeload,
      Popover: Popover,
      PrimitiveField: PrimitiveField,
      PrimitiveFieldController: PrimitiveFieldController,
      PrimitiveFieldDescription: PrimitiveFieldDescription,
      PrimitiveFieldError: PrimitiveFieldError,
      PrimitiveFieldErrorIndicator: PrimitiveFieldErrorIndicator,
      PrimitiveFieldLabel: PrimitiveFieldLabel,
      PrimitiveFieldLoadingIndicator: PrimitiveFieldLoadingIndicator,
      PrimitiveFieldRequiredIndicator: PrimitiveFieldRequiredIndicator,
      PrimitiveFieldSuccessIndicator: PrimitiveFieldSuccessIndicator,
      Progress: Progress,
      ProgressCircle: ProgressCircle,
      Prose: Prose,
      Providers: Providers,
      Radio: Radio,
      RadioGroup: RadioGroup,
      Select: Select,
      SelectGroup: SelectGroup,
      SelectItem: SelectItem,
      SelectLabel: SelectLabel,
      SelectSeparator: SelectSeparator,
      Slider: Slider,
      Snack: Snack,
      SwitchBall: SwitchBall,
      SwitchThin: SwitchThin,
      Tabs: Tabs,
      TabsContent: TabsContent,
      TabsTrigger: TabsTrigger,
      Tag: Tag,
      Text: Text,
      Textarea: Textarea,
      ThemeSwitch: ThemeSwitch,
      ThemeSystem: ThemeSystem,
      ThemeToggle: ThemeToggle,
      Toast: Toast,
      ToastProvider: ToastProvider,
      Tooltip: Tooltip,

      }
      for (const [name, comp] of Object.entries(comps)) {
        app.component(`${prefix}${name}`, comp as any)
      }
    },
  } as import('vue').Plugin
}

export default createShurikenUI
