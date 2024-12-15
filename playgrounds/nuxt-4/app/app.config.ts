export default defineAppConfig({
  icon: {
    mode: 'svg',
  },
  nui: {
    icons: {
      sun: 'material-symbols:wb-sunny-outline-rounded',
      moon: 'material-symbols-light:dark-mode-outline-rounded',
    },
    BaseButton: {
      variant: 'solid',
      rounded: 'sm',
      color: 'default',
      size: 'md',
    },
    BaseMessage: {
      color: 'default',
      rounded: 'sm',
    },
  },
})
