import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module "../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}