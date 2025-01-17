export default defineNuxtConfig({
  compatibilityDate: '2024-11-08',
  modules: ['@shuriken-ui/nuxt', 'nuxt-component-meta'],
  typescript: {
    includeWorkspace: true,
  },
  componentMeta: {
    globalsOnly: false,
    debug: 2,
    exclude: [
      (component: any) => !component.pascalName.startsWith('Base'),
    ],
    checkerOptions: {
      schema: {
        ignore: ['KeyboardEvent'],
      },
    },
  },
})