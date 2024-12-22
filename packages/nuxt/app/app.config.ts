export default defineAppConfig({
  nui: {
    icons: {
      sun: 'nui-icon:sun',
      moon: 'nui-icon:moon',
      screen: 'nui-icon:screen-duotone',
      spiner: 'nui-icon:spiner',
      required: 'lucide:asterisk',
      alert: 'lucide:triangle-alert',
      close: 'lucide:x',
      check: 'lucide:check',
      plus: 'lucide:plus',
      minus: 'lucide:minus',
      chevronUp: 'lucide:chevron-up',
      chevronDown: 'lucide:chevron-down',
      chevronLeft: 'lucide:chevron-left',
      chevronRight: 'lucide:chevron-right',
      empty: '',
    },

    // #region base
    BaseAccordion: {
      /**
       * Default variant for the accordion
       *
       * @type {'default'}
       */
      variant: 'default',
      /**
       * The action icon of the accordion.
       *
       * @type {'dot' | 'chevron' | 'plus'}
       */
      action: 'dot',
    },
    BaseAvatar: {
      /**
       * The radius of the avatar.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'full',
      /**
       * The size of the avatar.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'}
       */
      size: 'sm',
    },
    BaseAvatarGroup: {
      /**
       * The limit of avatars to display.
       *
       * @type {number}
       */
      limit: 4,
      /**
       * The size of the avatar group.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'}
       */
      size: 'sm',
    },
    BaseBreadcrumb: {
      /**
       * Defines the hover color of the breadcrumb links
       *
       * @type {'primary' | 'dark'}
       */
      variant: 'primary',
    },
    BaseButton: {
      /**
       * Default rounded for the BaseButton component
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'md',
      /**
       * Default size for the BaseButton component
       *
       * @type {'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'md',
      /**
       * Default variant for the BaseButton component
       *
       * @type {'default' | 'muted' | 'ghost' | 'muted' | 'primary' | 'destructive' | 'dark' | 'link' | 'none'}
       */
      variant: 'default',
    },
    BaseCard: {
      /**
       * Default variant for the BaseCard component
       *
       * @type {'default' | 'muted' | 'none'}
       */
      variant: 'default',
      /**
       * Default rounded for the BaseCard component
       *
       * @type {'none' | 'sm' | 'md' | 'lg'}
       */
      rounded: 'sm',
    },
    BaseDropdown: {
      /**
       * The color of the dropdown.
       *
       * @type {'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary-low' | 'primary-high' | 'none'}
       */
      variant: 'default-high',
      /**
       * Default rounded for the BaseDropdown component
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
    },
    BaseDropdownSeparator: {},
    BaseDropdownItem: {
      /**
       * The hover color of the dropdown item inner elements.
       *
       * @type {'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary-low' | 'primary-high' | 'none'}
       */
      variant: 'default-high',
      /**
       * The radius of the dropdown item.
       *
       * @type {'none' | 'sm' | 'md' | 'lg'}
       */
      rounded: 'sm',
    },
    BaseHeading: {
      /**
       * The tag of the heading.
       *
       * @type {string}
       */
      as: 'p',
      /**
       * The lead of the heading.
       *
       * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
       */
      size: 'xl',
      /**
       * The weight of the heading.
       *
       * @type {'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'}
       */
      lead: 'normal',
      /**
       * The size of the heading.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'}
       */
      weight: 'semibold',
      /**
       * The size of the heading.
       *
       * @type {'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'}
       */
      tracking: 'normal',
    },
    BaseIconBox: {
      /**
       * The variant of the icon box.
       *
       * @type {'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary' | 'dark' | 'custom'}
       */
      variant: 'default-low',
      /**
       * The size of the icon box.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}
       */
      size: 'xs',
      /**
       * The radius of the icon box.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
    },
    BaseKbd: {
      /**
       * The variant of the kbd.
       *
       * @type {'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'custom'}
       */
      variant: 'default-high',
      /**
       * The size of the kbd.
       *
       * @type {'sm' | 'md' | 'lg'}
       */
      size: 'md',
    },
    BaseLink: {},
    BaseList: {},
    BaseListItem: {},
    BaseMessage: {
      /**
       * The color of the message.
       *
       * @type {'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary-low' | 'primary-high' | 'info-low' | 'info-high' | 'success-low' | 'success-high' | 'warning-low' | 'warning-high' | 'destructive-low' | 'destructive-high'}
       */
      variant: 'default-high',
      /**
       * The radius of the message.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The default icons of the message.
       *
       * @type {{
          'default-low'?: string
          'default-high'?: string
          'muted-low'?: string
          'muted-high'?: string
          'info-low'?: string
          'info-high'?: string
          'success-low'?: string
          'success-high'?: string
          'warning-low'?: string
          'warning-high'?: string
          'destructive-low'?: string
          'destructive-high'?: string
          'primary-low?: string
          'primary-high?: string
        }}
       */
      defaultIcons: {
        'default-low': 'akar-icons:info-fill',
        'default-high': 'akar-icons:info-fill',
        'muted-low': 'akar-icons:info-fill',
        'muted-high': 'akar-icons:info-fill',
        'info-low': 'akar-icons:info-fill',
        'info-high': 'akar-icons:info-fill',
        'success-low': 'carbon:checkmark-filled',
        'success-high': 'carbon:checkmark-filled',
        'warning-low': 'ci:warning',
        'warning-high': 'ci:warning',
        'destructive-low': 'ph:warning-octagon-fill',
        'destructive-high': 'ph:warning-octagon-fill',
        'primary-low': 'akar-icons:info-fill',
        'primary-high': 'akar-icons:info-fill',
      },
    },
    BasePagination: {
      /**
       * The variant of the pagination.
       *
       * @type {'primary-low' | 'primary-high' | 'dark-low' | 'dark-high'}
       */
      variant: 'primary-low',
      /**
       * The size of the pagination.
       *
       * @type {'sm' | 'md' | 'lg'}
       */
      size: 'md',
      /**
       * The radius of the pagination.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * Wether the pagination is wrapped.
       *
       * @type {boolean}
       */
      wrapped: true,
    },
    BaseParagraph: {
      /**
       * The tag of the paragraph.
       *
       * @type {string}
       */
      as: 'p',
      /**
       * The lead of the paragraph.
       *
       * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
       */
      size: 'md',
      /**
       * The weight of the paragraph.
       *
       * @type {'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'}
       */
      lead: 'normal',
      /**
       * The size of the paragraph.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'}
       */
      weight: 'normal',
      /**
       * The size of the paragraph.
       *
       * @type {'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'}
       */
      tracking: 'normal',
    },
    BasePlaceholderPage: {
      /**
       * The size of the placeholder image.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
       */
      imageSize: 'xs',
    },
    BasePlaceload: {},
    BaseProgress: {
      /**
       * The variant of the progress.
       *
       * @type {'primary-low' | 'primary-high' | 'dark-low' | 'dark-high' | 'none'}
       */
      variant: 'primary-high',
      /**
       * The radius of the progress.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'full',
      /**
       * The size of the progress.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'sm',
    },
    BaseProgressCircle: {
      /**
       * The variant of the progress circle.
       *
       * @type {'primary-low' | 'primary-high' | 'dark-low' | 'dark-high' | 'none'}
       */
      variant: 'primary-high',
    },
    BaseProse: {
      /**
       * The radius of the prose.
       *
       * @type {'none' | 'sm' | 'md' | 'lg'}
       */
      rounded: 'none',
    },
    BaseSnack: {
      /**
       * The variant of the snack.
       *
       * @type {'default-low' | 'default-high' | 'muted-low' | 'muted-high'}
       */
      variant: 'default-high',
      /**
       * The size of the snack.
       *
       * @type {'xs' | 'sm' | 'md'}
       */
      size: 'md',
    },
    BaseTabs: {
      /**
       * The color of the active tab.
       *
       * @type {'primary-low' | 'primary-high' | 'dark-low' | 'dark-high' | 'muted-low' | 'muted-high'}
       */
      variant: 'primary-high',
      /**
       * The alignment of the tabs.
       *
       * @type {'start' | 'center' | 'end'}
       */
      justify: 'start',
      /**
       * The type of the tabs.
       *
       * @type {'tabs' | 'box'}
       */
      /**
       * The radius of the progress.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'md',
      type: 'tabs',
    },
    BaseTabSlider: {
      /**
       * The color of the active tab.
       *
       * @type {'default' | 'default-contrast' | 'primary' | 'light' | 'dark' | 'black'}
       */
      color: 'default',
      /**
       * The alignment of the tabs.
       *
       * @type {'start' | 'center' | 'end'}
       */
      justify: 'start',
      /**
       * The radius of the tabs.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'lg',
      /**
       * The size of the tabs.
       *
       * @type {'sm' | 'md'}
       */
      size: 'md',
    },
    BaseTag: {
      /**
       * The variant of the tag.
       *
       * @type {'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary' | 'custom'}
       */
      variant: 'default-low',
      /**
       * The size of the tag.
       *
       * @type {'sm' | 'md'}
       */
      size: 'sm',
      /**
       * The radius of the tag.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'full',
    },
    BaseText: {
      /**
       * The lead of the span.
       *
       * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
       */
      size: 'md',
      /**
       * The weight of the span.
       *
       * @type {'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'}
       */
      lead: 'normal',
      /**
       * The size of the span.
       *
       * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'}
       */
      weight: 'normal',
      /**
       * The size of the span.
       *
       * @type {'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'}
       */
      tracking: 'normal',
    },
    BaseThemeSwitch: {
      /**
       * Disables transitions when toggling between light and dark mode.
       *
       * @type {boolean}
       */
      disableTransitions: false,
      /**
       * The variant of the switch.
       *
       * @type {'default-low' | 'default-high'}
       */
      variant: 'default-low',
    },
    BaseThemeToggle: {
      /**
       * Disables transitions when toggling between light and dark mode.
       *
       * @type {boolean}
       */
      disableTransitions: false,
      /**
       * The variant of the toggle.
       *
       * @type {'default-low' | 'default-high'}
       */
      variant: 'default-low',
    },
    BaseThemeSystem: {
      /**
       * Disables transitions when toggling between light and dark mode.
       *
       * @type {boolean}
       */
      disableTransitions: false,
      /**
       * The variant of the toggle.
       *
       * @type {'default-low' | 'default-high'}
       */
      variant: 'default-low',
    },
    // #endregion

    // #region form
    BaseAutocomplete: {
      variant: 'default-low',
      /**
       * The contrast of the autocomplete.
       *
       * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
       */
      contrast: 'default',
      /**
       * Translation strings.
       *
       * @type {Record<'empty' | 'pending', string>}
       */
      i18n: {
        empty: 'Nothing found.',
        pending: 'Loading ...',
      },
      /**
       * The radius of the autocomplete.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The size of the autocomplete.
       *
       * @type {'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'md',
    },
    BaseAutocompleteItem: {
      /**
       * The radius of the autocomplete item.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
    },
    BaseCheckbox: {
      /**
       * Default variant for the BaseCheckbox component
       *
       * @type {'default-low' | 'default-high' | 'primary' | 'dark' | 'none'}
       */
      variant: 'default-high',
    },
    BaseCheckboxAnimated: {
      /**
       * Default color for the BaseCheckbox component
       *
       * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'muted' | 'dark' | 'black'}
       */
      color: 'primary',
    },
    BaseCheckboxHeadless: {},
    BaseFullscreenDropfile: {
      /**
       * The color of the icon.
       *
       * @type {'primary' | 'dark' | 'black'}
       */
      color: 'primary',
    },
    BaseInput: {
      /**
       * The contrast of the input.
       *
       * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
       */
      contrast: 'default',
      /**
       * The radius of the input.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The size of the input.
       *
       * @type {'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'md',
    },
    BaseInputFile: {
      /**
       * The contrast of the input.
       *
       * @type {'default' | 'default-contrast'}
       */
      contrast: 'default',
      /**
       * The radius of the input.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The size of the input.
       *
       * @type {'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'md',
      /**
       * The translation strings for the input file.
       *
       * @type {{ empty: string; invalid: string; multiple: string }}
       */
      i18n: {
        empty: 'No file chosen',
        invalid: 'Invalid file selected',
        multiple: '{count} files selected',
      },
    },
    BaseInputFileHeadless: {},
    BaseInputNumber: {
      /**
       * The contrast of the input.
       *
       * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
       */
      contrast: 'default',
      /**
       * The radius of the input.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The size of the input.
       *
       * @type {'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'md',
    },
    BaseInputHelpText: {
      /**
       * The color of the text.
       *
       * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
       */
      color: 'default',
    },
    BaseListbox: {
      /**
       * The contrast of the input.
       *
       * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
       */
      contrast: 'default',
      /**
       * The placement of the dropdown via floating-ui
       *
       * @type {'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'}
       */
      placement: 'bottom-start',
      /**
       * The radius of the input.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The size of the input.
       *
       * @type {'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'md',
    },
    BaseListboxItem: {},
    BaseRadio: {
      /**
       * Default variant for the BaseRadio component
       *
       * @type {'default-low' | 'default-high' | 'primary' | 'dark' | 'none'}
       */
      variant: 'default-high',
    },
    BaseSelect: {
      /**
       * The contrast of the select.
       *
       * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
       */
      contrast: 'default',
      /**
       * The radius of the select.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The size of the select.
       *
       * @type {'sm' | 'md' | 'lg' | 'xl'}
       */
      size: 'md',
    },
    BaseSwitchBall: {
      /**
       * The variant of the switch.
       *
       * @type {'default-low' | 'default-high' | 'primary' | 'dark' | 'none'}
       */
      variant: 'default-high',
    },
    BaseSwitchThin: {
      /**
       * The variant of the switch.
       *
       * @type {'default-low' | 'default-high' | 'primary' | 'dark' | 'none'}
       */
      variant: 'default-high',
    },
    BaseTextarea: {
      /**
       * The contrast of the textarea.
       *
       * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
       */
      contrast: 'default',
      /**
       * The radius of the textarea.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
      /**
       * The size of the textarea.
       *
       * @type {'sm' | 'md' | 'lg'}
       */
      size: 'md',
    },
    BaseTreeSelectItem: {
      /**
       * The radius of the tree select item.
       *
       * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
       */
      rounded: 'sm',
    },
  },
})