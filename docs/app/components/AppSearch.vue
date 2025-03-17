<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import MiniSearch from 'minisearch'

const router = useRouter()
const isMacLike = useIsMacLike()
const isOpen = useState('search-open', () => false)
const search = ref('')

onKeyStroke('k', (event) => {
  const modifier = isMacLike.value ? event.metaKey : event.ctrlKey
  if (modifier) {
    event.preventDefault()

    isOpen.value = !isOpen.value
  }
})
const { data } = await useAsyncData('search', () => queryCollectionSearchSections('content'))

const miniSearch = new MiniSearch({
  fields: ['title', 'titles', 'content'],
  storeFields: ['title', 'titles', 'content'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})
// const metaKey = useMetaKey()
watchEffect(() => {
  miniSearch.removeAll()
  if (!data.value) {
    return
  }
  miniSearch.addAll(data.value)
})
const result = computed(() => miniSearch.search(toValue(search)).slice(0, 6))

function handleSelect(ev: CustomEvent) {
  ev.preventDefault()
  isOpen.value = false
  router.push(ev.detail.value?.id)
}
</script>

<template>
  <DialogRoot v-model:open="isOpen">
    <DialogPortal>
      <DialogOverlay class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0 starting:opacity-0 duration-150 transition-discrete transition-opacity z-[99]" />

      <DialogContent
        class="fixed top-[15%] left-[50%] max-h-[85vh] w-[90vw] max-w-xl translate-x-[-50%] overflow-hidden focus:outline-none z-[100]  starting:opacity-0 duration-150 transition-discrete transition-opacity"
      >
        <BaseCard rounded="lg">
          <VisuallyHidden>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>Search Shuriken UI documentation</DialogDescription>
          </VisuallyHidden>

          <ComboboxRoot :open="true">
            <div
              class="flex items-center gap-4 group"
              :class="[result?.length && 'border-b border-muted-200 dark:border-muted-800 mb-4']"
            >
              <div class="ps-4 py-3 text-muted-300 group-focus-within:text-muted-700 dark:text-muted-600 dark:group-focus-within:text-muted-300">
                <Icon name="lucide:search" class="size-4" />
              </div>

              <ComboboxInput
                v-model="search"
                placeholder="Search in docs..."
                class="bg-transparent w-full pe-4 py-3 outline-none placeholder-muted-400 dark:placeholder-muted-600"
                auto-focus
                @keydown.enter.prevent
              />
            </div>

            <ComboboxContent @escape-key-down="isOpen = false">
              <ComboboxEmpty v-if="!result?.length" class="text-center text-muted-500 px-4 pb-4">
                No result found for <strong>{{ search }}</strong>
              </ComboboxEmpty>

              <!-- <div v-if="status === 'pending'" class="flex items-center w-full justify-center text-muted-500 px-4 pt-8 pb-10">
                <Icon name="nui-icon:spiner" />
              </div> -->

              <ComboboxGroup v-else-if="result?.length" class="px-4 pb-4">
                <ComboboxItem
                  v-for="page in result"
                  :key="page?.slug"
                  :value="page"
                  @select="handleSelect"
                >
                  <AppSearchResult
                    :to="page?.id"
                    :search="search"
                    :title="page?.title"
                    :prefix="page?.titles?.join(' > ') ?? ''"
                    :content="page?.content ?? ''"
                  />
                </ComboboxItem>
              </ComboboxGroup>
            </ComboboxContent>
          </ComboboxRoot>
        </BaseCard>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
