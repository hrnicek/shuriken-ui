<script setup lang="ts">
const conversations = ref([
  {
    id: 1,
    user: {
      name: 'Clark Smith',
      photo: '/img/people/3.jpg',
      role: 'UI/UX Designer',
      bio: 'Clark is a UI/UX Designer based in New York. He has 10+ years of experience in the field.',
      age: 32,
      location: 'New York',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Christina, I was wondering if you still had that design that you sent me a few days ago. I was thinking about using it for a project I’m working on.',
        time: '10:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Hey Clark, sure thing. I’ll send it to you right now. I can also send you the Figma file if you need it.',
        time: '10:09 am',
        attachments: [
          {
            type: 'link',
            image: '/img/ui/2.png',
            url: 'https://shurikenui.com',
            text: 'Figma design file by Christina',
          },
        ],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thanks for that. This looks completely amazing. I’ll let you know if I need anything else.',
        time: '1:39 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Almost forgot, what was that accounting company you mentioned the other day? I kinda fell in love with their design.',
        time: '1:48 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Oh yeah, that was Titan Accounting. They’re a great company. I’ve been working with them for a while now.',
        time: '2:06 pm',
        attachments: [
          {
            type: 'link',
            image: '/img/ui/1.png',
            url: 'https://shurikenui.com',
            text: 'Smart Accounting made easy for everyone',
          },
        ],
      },
      {
        type: 'received',
        text: 'Yeah, that\'s them. they really have a gorgeous branding. I\'ll check them out. Thanks for the tip!',
        time: '2:16 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Always happy to help! Let me know if you need anything else.',
        time: '2:26 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 2,
    user: {
      name: 'Hermann Mayer',
      photo: '/img/people/18.jpg',
      role: 'Project Manager',
      bio: 'Hermann is a Project Manager based in Berlin. He has 10+ years of experience in the field.',
      age: 28,
      location: 'Berlin',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Christina, did you receive that report that John wrote? I just approved it but I wanted to show it to you, just in case you have some insights to share.',
        time: '11:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Yeah, I\'ve got a copy on my inbox but I still didn\'t get a chance to read it and to take some notes.',
        time: '11:09 am',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Did you habe time to read it? The boss is asking for it and Iam not sure if I should send it.',
        time: '3:39 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Sorry if Iam annoying you btw. 🫡',
        time: '3:48 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Nah, don\'t be like that! You\'re not annoying me at all. I\'m just a bit busy right now. I\'ll send you my notes but yeah, I don\'t see anything preventing you from showing it to the boss.',
        time: '4:06 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Amazing! Thank you so much Christina! I really appreciate it. 🙏',
        time: '4:16 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'You\'re very welcome Hermann! Let me know if you need anything else.',
        time: '4:26 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 3,
    user: {
      name: 'Clarissa Miller',
      photo: '/img/people/15.jpg',
      role: 'Product Manager',
      bio: 'Clarissa is a Product Manager based in Seattle. She has 10+ years of experience in the field.',
      age: 31,
      location: 'Seattle',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Christina, the boss is putting me under pressure again. He wants me to send him the report that you wrote a few days ago. I was wondering if you still had that design that you sent me a few days ago. I was thinking about using it for a project I’m working on.',
        time: '11:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Clarissa! sure thing. I\'ll send it to you right now. weren\'t we supposed to have lunch together? I\'m free today if you want to grab a bite.',
        time: '11:09 am',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Sorry about yesterday, I was completely underwater. I’m free today as well. Let’s grab a bite at 2pm. I’ll send you the address.',
        time: '1:09 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'I want to try that little sushi place that I told you about. I’m starving!',
        time: '1:09 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Oh yeah! Let\'s do suchi! I\'m starving too. I\'ll see you at 2pm.\'',
        time: '1:12 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thank you so much and sorry again about yesterday. 🙏',
        time: '1:16 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Don\'t worry about it 😉 ',
        time: '4:26 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 4,
    user: {
      name: 'Joshua Stevens',
      photo: '/img/people/57.jpg',
      role: 'Frontend Developer',
      bio: 'Joshua is a Frontend Developer based in London. He has 10+ years of experience in the field',
      age: 43,
      location: 'London',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Christina, the client is giving me a hard time again. He wants me to present the proposal that you worked on last week. Do you still have that presentation? I was thinking about using it for this new project.',
        time: '9:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Hey, no problem. I still have it. I\'ll send it to you right now. How about we grab lunch today? I\'m free around noon.',
        time: '9:09 am',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Sorry about yesterday, I was swamped with work. I’m free today as well. Let’s grab lunch at 12pm. Meet you at the food court?',
        time: '11:09 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Sounds good. See you at 12pm at the food court.',
        time: '11:12 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thanks for understanding. And thank you for sending me the proposal. 🙏',
        time: '11:16 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'No problem. Let\'s chat more at lunch. 😉 ',
        time: '12:01 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 5,
    user: {
      name: 'Kendra Wilson',
      photo: undefined,
      role: 'Backend Developer',
      bio: 'Kendra is a Backend Developer based in Toronto. She has 10+ years of experience in the field',
      age: 26,
      location: 'Toronto',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey, I wanted to get your feedback on the new UI design for the login page. I\'ve made some updates based on the user testing data we collected last week.',
        time: '4:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Sure thing, I\'ll take a look at it now. Can you send me the updated version?',
        time: '4:09 pm',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'I\'ve sent the updated version to you. I also included some notes on the changes I made.',
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Thanks, I\'ll take a look now.',
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I think the updates look great. I especially like the new color scheme. But I think we should also add some hover effects to the buttons to make it more interactive.',
        time: '9:15 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thanks for the feedback, I\'ll add the hover effects to the buttons. Do you have time to meet later to discuss any other changes?',
        time: '9:20 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Sure, let\'s schedule a meeting for 1pm today.',
        time: '9:22 am',
        attachments: [],
      },
    ],
  },
  {
    id: 6,
    user: {
      name: 'Carolin Kottmann',
      photo: '/img/people/11.jpg',
      role: 'Product Manager',
      bio: 'Carolin is a Product manager based in Paris. She has 10+ years of experience in the field',
      age: 25,
      location: 'Paris',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey, have you had a chance to review the market research report for the new product launch?',
        time: '4:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Yes, I\'ve gone through it. The data looks promising. We should schedule a meeting to discuss next steps.',
        time: '4:09 pm',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I\'ve scheduled a meeting for tomorrow at 10am to discuss the launch strategy for the new product. Can you send me the latest version of the product roadmap before the meeting?',
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Sure, I\'ll send it to you now.',
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'I\'ve sent you the updated product roadmap. I\'ve also included some notes on the changes I made based on the market research.',
        time: '9:05 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Thanks, I\'ll review it before tomorrow\'s meeting.',
        time: '9:06 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Just a reminder, the meeting is tomorrow at 10am in the conference room.',
        time: '4:22 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 7,
    user: {
      name: 'Elon Musk',
      photo: '/img/people/60.jpg',
      role: 'Entrepreneur',
      bio: 'Elon is a serial entrepreneur and the founder of SpaceX and Tesla. He has 20+ years of experience in the field.',
      age: 41,
      location: 'Miami',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey, have you noticed any strange behavior with the server lately?',
        time: '2:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Yes, I\'ve been getting reports of slow response times. I\'ve started investigating but haven\'t found the root cause yet.',
        time: '2:09 pm',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I\'ve discovered that the server\'s disk space is almost full. I\'m going to schedule a maintenance window tonight to add more storage.',
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Okay, I\'ll make sure to inform the team and schedule any necessary downtime.',
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'I\'ve sent an email to the team and scheduled a two-hour maintenance window starting at 11pm tonight. Will that work for you?',
        time: '9:05 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Yes, that works for me. I\'ll make sure to have everything set up before the maintenance window.',
        time: '9:06 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I\'ve added the storage and the server is running smoothly again. I\'ll keep an eye on it and let you know if there are any further issues.',
        time: '2:22 pm',
        attachments: [],
      },
    ],
  },
])

const chatEl = useTemplateRef<HTMLElement>('chatEl')
const expanded = ref(false)
const loading = ref(false)
const search = ref('')
const message = ref('')
const messageLoading = ref(false)
const activeConversation = ref(1)

const selectedConversation = computed(() => {
  return conversations.value.find(
    conversation => conversation.id === activeConversation.value,
  )
})

onMounted(() => {
  setTimeout(() => {
    if (chatEl.value) {
      chatEl.value.scrollTo({
        top: chatEl.value.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, 300)
})

function selectConversation(id: number) {
  if (messageLoading.value)
    return

  loading.value = true
  message.value = ''

  setTimeout(() => {
    activeConversation.value = id
    loading.value = false
    setTimeout(() => {
      expanded.value = false

      if (chatEl.value) {
        chatEl.value.scrollTo({
          top: chatEl.value.scrollHeight,
          behavior: 'smooth',
        })
      }
    }, 300)
  }, 1000)
}

async function submitMessage() {
  if (!message.value)
    return
  if (messageLoading.value)
    return

  messageLoading.value = true

  const newMessage = {
    type: 'sent',
    text: message.value,
    time: 'Just now',
    attachments: [],
  }

  const index = conversations.value.findIndex(
    conversation => conversation.id === activeConversation.value,
  )

  await new Promise(resolve => setTimeout(resolve, 200))

  conversations.value[index]?.messages.push(newMessage)
  message.value = ''
  messageLoading.value = false

  await nextTick()

  if (chatEl.value) {
    chatEl.value.scrollTo({
      top: chatEl.value.scrollHeight,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div>
    <BaseCard rounded="lg" class="shadow-sm shadow-muted-200 dark:shadow-muted-800 overflow-hidden">
      <div class="w-full h-[815px] flex flex-col lg:flex-row">
        <!--Sidebar-->
        <div class="flex lg:flex-col h-16 lg:h-full w-full lg:w-16 bg-muted-50 dark:bg-muted-900/50 border-e border-muted-200 dark:border-muted-800">
          <NuxtLink to="/examples/dashboard" class="h-14 w-16 flex items-center justify-center">
            <Logo class="size-8" />
          </NuxtLink>
          <!--Menu-->
          <div class="ms-auto lg:mt-auto">
            <ul class="flex lg:block">
              <li>
                <a href="#" class="group/link h-14 w-16 flex items-center justify-center">
                  <span class="size-9 rounded-xl flex items-center justify-center group-hover/link:bg-muted-200 dark:group-hover/link:bg-muted-800 text-muted-400 dark:text-muted-600 group-hover/link:text-muted-700 dark:group-hover/link:text-muted-200 transition-colors duration-300">
                    <Icon name="lucide:search" class="size-4" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="group/link h-14 w-16 flex items-center justify-center">
                  <span class="size-9 rounded-xl flex items-center justify-center group-hover/link:bg-muted-200 dark:group-hover/link:bg-muted-800 text-muted-400 dark:text-muted-600 group-hover/link:text-muted-700 dark:group-hover/link:text-muted-200 transition-colors duration-300">
                    <Icon name="lucide:settings" class="size-4" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="group/link h-14 w-16 flex items-center justify-center">
                  <BaseAvatar src="/img/people/29.jpg" size="xs" class="grayscale" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--Sidebar-->
        <div class="shrink-0 flex lg:flex-col h-16 lg:h-full w-full lg:w-16 bg-white dark:bg-muted-950 border-b lg:border-e border-muted-200 dark:border-muted-800 overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-auto nui-slimscroll">
          <div class="shrink-0 h-16 lg:h-14 w-14 lg:w-16 flex items-center justify-center">
            <BaseButton size="icon-sm" rounded="full" variant="dark">
              <Icon name="lucide:plus" class="size-4" />
            </BaseButton>
          </div>
          <!-- List -->
          <ul class="flex lg:block">
            <li  v-for="conversation in conversations" :key="conversation.id">
              <button
                type="button"
                class="flex w-16 lg:w-16 h-16 lg:h-12 lg:my-2 shrink-0 items-center justify-center border-b-2 lg:border-b-0 lg:border-e-2 enabled:cursor-pointer"
                :class="
                  activeConversation === conversation.id
                    ? 'border-muted-900 dark:border-white'
                    : 'border-transparent'
                "
                @click="selectConversation(conversation.id)"
              >
                <BaseAvatar :src="conversation.user.photo" size="sm" :text="conversation.user.name.slice(0,1)" class="bg-muted-100 dark:bg-muted-800 grayscale" />
              </button>
            </li>
          </ul>
        </div>
        <!--Content-->
        <div class="grow max-h-[calc(100%_-_120px)] lg:max-h-full h-full flex flex-col">
          <div 
            ref="chatEl" 
            class="relative grow w-full px-4 md:px-6 pt-8 pb-16"
            :class="
              loading ? 'overflow-hidden' : 'overflow-x-hidden overflow-y-auto nui-slimscroll'
            "
          >
            <!-- Loader -->
            <div
              class="bg-white dark:bg-muted-950 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
              :class="loading ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            >
              <div class="mt-12 space-y-12">
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-48 rounded" />
                  </div>
                </div>
                <div
                  class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                >
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-64 rounded"
                    />
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-48 rounded"
                    />
                  </div>
                </div>
                <div
                  class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                >
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-56 rounded"
                    />
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-32 rounded"
                    />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-48 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Messages loop -->
            <div v-if="!loading" class="space-y-12">
              <div
                v-for="(item, index) in selectedConversation?.messages"
                :key="index"
                class="relative flex w-full gap-4"
                :class="[
                  item.type === 'received' ? 'flex-row' : 'flex-row-reverse',
                  item.type === 'separator' ? 'font-sans font-medium justify-center' : '',
                ]"
              >
                <template v-if="item.type !== 'separator'">
                  <div class="shrink-0">
                    <BaseAvatar
                      v-if="item.type === 'received'"
                      :src="selectedConversation?.user.photo"
                      size="xs"
                      :text="selectedConversation?.user.name.slice(0, 1)"
                      class="grayscale bg-muted-100 dark:bg-muted-800" 
                    />
                    <BaseAvatar
                      v-else-if="item.type === 'sent'"
                      src="/img/people/29.jpg"
                      size="xs"
                      class="grayscale"
                    />
                  </div>
                  <div class="flex max-w-md flex-col">
                    <div
                      class="bg-muted-100 dark:bg-muted-800 rounded-xl p-4"
                      :class="[
                        item.type === 'received' ? 'rounded-ss-none' : '',
                        item.type === 'sent' ? 'rounded-se-none' : '',
                      ]"
                    >
                      <p class="font-sans text-sm">
                        {{ item.text }}
                      </p>
                    </div>
                    <div
                      class="text-muted-400 mt-1 font-sans text-xs"
                      :class="item.type === 'received' ? 'text-right' : ''"
                    >
                      {{ item.time }}
                    </div>
                    <div
                      v-if="item.attachments.length > 0"
                      class="mt-2 space-y-2"
                    >
                      <template
                        v-for="(attachment, idx) in item.attachments"
                        :key="idx"
                      >
                        <div
                          v-if="attachment.type === 'image'"
                          class="dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2"
                          :class="item.type === 'sent' ? 'ms-auto' : ''"
                        >
                          <img
                            :src="attachment.image"
                            :alt="attachment.text"
                            class="rounded-xl grayscale"
                            width="304"
                            height="202"
                          >
                        </div>
                        <NuxtLink
                          v-else-if="attachment.type === 'link'"
                          :to="attachment.url"
                          class="dark:bg-muted-800 block max-w-xs rounded-2xl bg-white p-2"
                          :class="item.type === 'sent' ? 'ms-auto' : ''"
                        >
                          <img
                            :src="attachment.image"
                            :alt="attachment.text"
                            class="rounded-xl grayscale"
                            width="304"
                            height="202"
                          >
                          <div class="px-1 py-2">
                            <p
                              class="text-muted-800 dark:text-muted-100 font-sans"
                            >
                              {{ attachment.url?.replace(/(^\w+:|^)\/\//, '') }}
                            </p>
                            <p class="text-muted-400 font-sans text-xs">
                              {{ attachment.text }}
                            </p>
                          </div>
                        </NuxtLink>
                      </template>
                    </div>
                  </div>
                </template>
                <div v-else>
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div
                      class="border-muted-300/50 dark:border-muted-800 w-full border-t"
                    />
                  </div>
                  <div class="relative flex justify-center">
                    <span
                      class="bg-white dark:bg-muted-950 text-muted-400 px-3 font-sans text-xs uppercase"
                    >
                      {{ item.time }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shrink-0 w-full flex items-center pb-2 px-4 md:px-6 bg-white dark:bg-muted-950">
            <BaseTextarea
              size="md"
              placeholder="Write a message..."
              variant="muted"
              autogrow
            />
          </div>
        </div>
        <!--Panel-->
        <div class="w-80 h-full hidden lg:flex flex-col border-s border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-900/50">
          <div class="h-14 px-4 md:px-6 flex items-center">
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-500 dark:text-muted-400"
            >
              <span>Conversation with</span>
            </BaseHeading>
          </div>
          <div class="w-full grow px-4 md:px-6">
            <!-- Loader -->
            <div v-if="loading" class="mt-8">
              <div class="mb-3 flex items-center justify-center">
                <BasePlaceload
                  class="size-24 shrink-0 rounded-full"
                  :width="96"
                  :height="96"
                />
              </div>
              <div class="flex flex-col items-center">
                <BasePlaceload class="mb-2 h-3 w-full max-w-40 rounded" />
                <BasePlaceload class="mb-2 h-3 w-full max-w-24 rounded" />
                <div class="my-4 flex w-full flex-col items-center">
                  <BasePlaceload class="mb-2 h-2 w-full max-w-60 rounded" />
                  <BasePlaceload class="mb-2 h-2 w-full max-w-52 rounded" />
                </div>
                <div class="mb-6 flex w-full items-center justify-center">
                  <div class="px-4">
                    <BasePlaceload class="h-3 w-14 rounded" />
                  </div>
                  <div class="px-4">
                    <BasePlaceload class="h-3 w-14 rounded" />
                  </div>
                </div>
                <div class="w-full">
                  <BasePlaceload class="mx-auto mt-0 h-3 w-[7.5rem] rounded" />
                </div>
              </div>
            </div>
            <!-- User details -->
            <div v-else class="mt-8">
              <div class="flex items-center justify-center">
                <div class="relative">
                  <BaseChip color="custom" class="text-muted-900 dark:text-white" pulse :offset="12">
                    <BaseAvatar
                      :src="selectedConversation?.user.photo"
                      :alt="selectedConversation?.user.name"
                      :text="selectedConversation?.user.name.slice(0, 1)"
                      class="grayscale bg-muted-200/80 dark:bg-muted-800"
                      size="2xl"
                    />
                  </BaseChip>
                </div>
              </div>
              <div class="text-center">
                <BaseHeading
                  tag="h3"
                  size="lg"
                  class="mt-4"
                >
                  <span>{{ selectedConversation?.user.name }}</span>
                </BaseHeading>
                <BaseParagraph size="xs" weight="medium" class="text-muted-600 dark:text-muted-400">
                  <span>{{ selectedConversation?.user.role }}</span>
                </BaseParagraph>
                <div class="my-4">
                  <BaseParagraph
                    size="xs"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    <span>{{ selectedConversation?.user.bio }}</span>
                  </BaseParagraph>
                </div>
                <div
                  class="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x"
                >
                  <div class="flex items-center justify-center gap-2 px-4">
                    <Icon
                      name="solar:stopwatch-bold"
                      class="text-muted-400 size-5"
                    />
                    <span class="text-muted-400 font-sans text-xs">
                      Age: {{ selectedConversation?.user.age }}
                    </span>
                  </div>
                  <div class="flex items-center justify-center gap-2 px-4">
                    <Icon
                      name="solar:map-point-bold"
                      class="text-muted-400 size-5"
                    />
                    <span class="text-muted-400 font-sans text-xs">
                      {{ selectedConversation?.user.location }}
                    </span>
                  </div>
                </div>
                <div class="mt-4">
                  <a
                    href="#"
                    class="text-muted-900 dark:text-white mt-3 font-sans text-sm underline-offset-4 hover:underline"
                  >
                    {{ selectedConversation?.user.name }}'s profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>