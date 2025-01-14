export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('error', (error) => {
    console.log('???')
    console.error(error)
  })
})
