export default defineNuxtConfig({
  compatibilityDate: '2024-11-08',
  modules: ['@shuriken-ui/nuxt', 'nuxt-component-meta'],
  componentMeta: {
    globalsOnly: false,
    debug: 2,
    exclude: [
      (component) => !component.pascalName.startsWith('Base'),
    ],
    checkerOptions: {
      schema: {
        ignore: ['KeyboardEvent'],
      },
    },
  },
})