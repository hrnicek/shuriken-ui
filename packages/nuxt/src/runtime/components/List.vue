<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    /**
     * If the list should be ordered.
     */
    ordered: {
      type: Boolean,
      default: false,
    },
    /**
     * Force the list to be media.
     */
    media: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    return () => {
      const ordered = props.ordered ? 'list-decimal' : 'list-disc'
      const children = slots.default?.()
      const hasMedia
        = props.media
        ?? children?.some((vnode) => {
          return typeof vnode.type !== 'string'
        })

      return h(
        props.ordered ? 'ol' : 'ul',
        {
          class: [
            'relative',
            hasMedia && 'space-y-4 marker:text-muted-700 dark:marker:text-muted-400',
            !hasMedia && `space-y-2 font-sans text-sm marker:text-muted-700 dark:marker:text-muted-400 ${ordered}`,
          ],
        },
        children,
      )
    }
  },
})
</script>
