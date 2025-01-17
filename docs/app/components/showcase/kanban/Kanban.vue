<script setup lang="ts">
import { Container, Draggable } from 'vue3-smooth-dnd'
import { project } from '~/data/kanban'

interface ColumnContent {
  title: string
  tasks: any[]
}

interface Column {
  [key: string]: ColumnContent
}

const columns = reactive<Column>({
  new: {
    title: 'New',
    tasks: [],
  },
  inProgress: {
    title: 'In Progress',
    tasks: [],
  },
  blocked: {
    title: 'Blocked',
    tasks: [],
  },
  onHold: {
    title: 'On Hold',
    tasks: [],
  },
  inReview: {
    title: 'In Review',
    tasks: [],
  },
  done: {
    title: 'Done',
    tasks: [],
  },
})

const tasks = ref(project.tasks)

if (tasks.value) {
  for (const task of tasks.value) {
    switch (task.status) {
      case 0:
        columns.new?.tasks.push(task)
        break
      case 1:
        columns.inProgress?.tasks.push(task)
        break
      case 2:
        columns.blocked?.tasks.push(task)
        break
      case 3:
        columns.onHold?.tasks.push(task)
        break
      case 4:
        columns.inReview?.tasks.push(task)
        break
      case 5:
        columns.done?.tasks.push(task)
        break
    }
  }
}

const board = computed(() => Object.values(columns || {}))

const currentTask = ref()

function openTaskPanel(id: number, tasks: any) {
  currentTask.value = tasks.find((task: any) => task.id === id)
}

function onDrop(column: ColumnContent, dropResult: any) {
  if (
    typeof dropResult?.addedIndex !== 'number'
    || typeof dropResult?.removedIndex !== 'number'
  ) {
    return
  }
  if (dropResult.addedIndex === dropResult.removedIndex) {
    return
  }

  let itemToAdd

  if (dropResult.removedIndex !== null) {
    itemToAdd = column.tasks.splice(dropResult.removedIndex, 1)[0]
  }
  if (dropResult.addedIndex !== null) {
    column.tasks.splice(dropResult.addedIndex, 0, itemToAdd)
  }
}
</script>

<template>
  <div>
    <BaseCard
      rounded="lg"
      class="shadow-sm shadow-muted-200 dark:shadow-muted-800 overflow-hidden"
    >
      <div class="w-full h-[825px] flex flex-col">
        <!-- Navigation -->
        <div class="w-full bg-white transition-all duration-300 dark:bg-muted-950 border-b border-muted-200 dark:border-muted-800">
          <nav class="relative mx-auto w-full px-4 md:px-6">
            <div class="flex w-full items-center justify-between h-16 flex-row">
              <div class="grow w-auto">
                <div class="flex h-16 w-full items-center gap-x-4">
                  <!-- Logo -->
                  <NuxtLink
                    to="/"
                    class="flex items-center justify-center"
                  >
                    <Logo class="size-8 text-muted-900 dark:text-white" />
                  </NuxtLink>
                  <!-- Workspace Dropdown -->
                  <ShowcaseDashboardWorkspaceDropdown />
                </div>
              </div>
              <!-- Menu -->
              <div class="row items-center transition-colors duration-300 dark:bg-muted-950 z-0 block bg-transparent">
                <!-- Toolbar -->
                <div class="flex items-center justify-end gap-2">
                  <div
                    role="button"
                    class="cursor-pointer h-8 w-48 hidden md:flex items-center justify-between bg-white dark:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:ring-muted-300 dark:hover:ring-muted-700 gap-2 ps-3 pe-1 py-1 rounded-md ring-1 ring-muted-200 dark:ring-muted-800 transition-colors duration-300"
                  >
                    <div class="pointer-events-none">
                      <span class="font-sans text-sm">
                        Search...
                      </span>
                    </div>
                    <div class="flex gap-1">
                      <BaseKbd
                        size="sm"
                        variant="default"
                        class="!font-semibold h-6!"
                      >
                        Ctrl
                      </BaseKbd>
                      <BaseKbd
                        size="sm"
                        variant="default"
                        class="!px-2 !font-semibold h-6!"
                      >
                        K
                      </BaseKbd>
                    </div>
                  </div>
                  <BaseDropdown
                    variant="default"
                    :bindings="{
                      content: {
                        align: 'end',
                        sideOffset: 10,
                      },
                    }"
                  >
                    <template #button>
                      <button
                        type="button"
                      >
                        <img
                          src="/img/people/29.jpg"
                          class="size-8 rounded-full object-cover grayscale"
                        >
                      </button>
                    </template>
                    <BaseDropdownItem>Leads</BaseDropdownItem>
                    <BaseDropdownItem>Projects</BaseDropdownItem>
                    <BaseDropdownItem>Team</BaseDropdownItem>
                    <BaseDropdownItem>Reports</BaseDropdownItem>
                    <BaseDropdownItem>
                      Settings
                      <template #end>
                        <BaseKbd size="sm">
                          <span class="text-xs font-mono">⌘</span>
                        </BaseKbd>
                        <BaseKbd size="sm">
                          <span class="text-xs font-mono px-0.5">P</span>
                        </BaseKbd>
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- Submenu -->
        <div class="w-full bg-white transition-all duration-300 dark:bg-muted-950 overflow-hidden">
          <div class="flex items-center justify-between h-14 w-full px-4 md:px-6">
            <div>
              <BaseParagraph
                weight="medium"
                class="text-muted-900 dark:text-white"
              >
                {{ project.name }}
              </BaseParagraph>
            </div>
            <div class="">
              <BaseAvatarGroup
                :avatars="project.team"
                size="xs"
                :limit="4"
                class="grayscale"
              />
            </div>
          </div>
        </div>
        <!-- Content -->
        <div class="grow h-[calc(100%_-_7.5rem)] flex w-full ps-4 md:ps-6 space-x-6 bg-white overflow-x-auto nui-slimscroll transition-all duration-300 dark:bg-muted-950">
          <!-- Column -->
          <div
            v-for="column in board"
            :key="column.title"
            class="flex h-full w-72 shrink-0 flex-col"
          >
            <!-- Column header -->
            <div class="flex h-14 shrink-0 items-center px-2">
              <!-- Column title -->
              <span class="block font-sans text-sm font-semibold">{{
                column.title
              }}</span>
              <!-- Column count -->
              <span
                class="text-muted-600 dark:text-muted-400 ms-2 flex size-5 items-center justify-center text-sm font-semibold"
              >{{ column.tasks.length }}</span>
              <!-- Column action -->
              <button
                type="button"
                class="cursor-pointer text-muted-900 dark:text-white hover:bg-muted-900/20 dark:hover:bg-white/20 ms-auto flex size-6 items-center justify-center rounded-full transition-colors duration-300"
              >
                <Icon
                  name="lucide:plus"
                  class="size-4"
                />
              </button>
            </div>
            <!-- Scrollable area -->
            <div class="nui-slimscroll overflow-auto pb-10 pe-2">
              <Container
                tag="div"
                class="flex flex-col gap-y-4"
                orientation="vertical"
                :group-name="column.title"
                drag-class="transform rotate-2 transform-gpu"
                drop-class="opacity-40"
                :drop-placeholder="{
                  className:
                    'mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4',
                }"
                @drop="(dropResult: any) => onDrop(column, dropResult)"
              >
                <!-- Board card -->
                <template v-if="column.tasks.length > 0">
                  <Draggable
                    v-for="task in column.tasks"
                    :key="task.id"
                  >
                    <div
                      role="button"
                      tabindex="0"
                      class="border-muted-300 dark:border-muted-800 dark:bg-muted-950 shadow-sm shadow-muted-200 dark:shadow-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white"
                      draggable="true"
                      @click="() => openTaskPanel(task.id, project?.tasks)"
                    >
                      <div class="relative mb-2">
                        <div
                          class="mb-2 flex w-full items-center justify-between gap-2"
                        >
                          <BaseTag
                            rounded="full"
                            color="muted"
                            class="m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                          >
                            Task #{{ task.id }}
                          </BaseTag>
                          <BaseText
                            size="xs"
                            weight="medium"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            {{
                              task.created
                            }}
                          </BaseText>
                        </div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="medium"
                          class="line-clamp-2"
                        >
                          <span>{{ task.name }}</span>
                        </BaseHeading>
                      </div>
                      <div
                        class="text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium"
                      >
                        <div class="flex items-center gap-2">
                          <BaseAvatar
                            :src="task.assignee.src"
                            size="xxs"
                            class="shrink-0 grayscale"
                          />
                          <BaseText
                            size="xs"
                            weight="medium"
                            class="text-muted-600 dark:text-muted-400"
                          >
                            {{
                              task.assignee.tooltip
                            }}
                          </BaseText>
                        </div>
                        <div class="text-muted-400 flex items-center gap-3">
                          <div
                            v-if="task.checklist.length > 0"
                            :data-nui-tooltip="`${task.checklist.length} subtask${
                              task.checklist.length > 1 ? 's' : ''
                            } in checklist`"
                            data-nui-tooltip-position="start"
                          >
                            <Icon
                              name="solar:check-square-linear"
                              class="size-4"
                            />
                          </div>
                          <div
                            v-if="task.files.length > 0"
                            :data-nui-tooltip="`${task.files.length} file${
                              task.files.length > 1 ? 's' : ''
                            } uploaded`"
                            data-nui-tooltip-position="start"
                          >
                            <Icon
                              name="solar:document-text-linear"
                              class="size-4"
                            />
                          </div>
                          <div
                            v-if="task.comments.length > 0"
                            :data-nui-tooltip="`${task.comments.length} comment${
                              task.comments.length > 1 ? 's' : ''
                            }`"
                            data-nui-tooltip-position="start"
                          >
                            <Icon
                              name="solar:chat-round-unread-linear"
                              class="size-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                </template>
                <!-- Placeholder -->
                <div v-else>
                  <div
                    class="text-muted-400 mt-10 flex items-center justify-center"
                  >
                    <Icon
                      name="ph:kanban-thin"
                      class="size-12"
                    />
                  </div>
                  <div class="mt-2 text-center">
                    <BaseHeading
                      as="h4"
                      size="md"
                      weight="medium"
                      class="mb-1"
                    >
                      <span>Nothing to show</span>
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mx-auto max-w-[220px] !font-sans"
                    >
                      <span>There are no pending tasks to show in here for now.</span>
                    </BaseParagraph>
                    <button
                      class="text-muted-900 dark:text-white mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                    >
                      <Icon
                        name="lucide:plus"
                        class="size-3"
                      />
                      <span>New Task</span>
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <!-- Add Column -->
          <div class="flex w-72 shrink-0 flex-col">
            <!-- Column header -->
            <div class="flex h-14 shrink-0 items-center px-2">
              <!-- Column title -->
              <span class="block font-sans text-sm font-semibold">Customize</span>
            </div>
            <!-- Add button -->
            <div class="w-full">
              <button
                class="cursor-pointer text-muted-500 dark:text-muted-400 hover:text-muted-900 dark:hover:text-white border-muted-300 dark:border-muted-600 hover:border-muted-900 dark:hover:border-white flex h-12 w-full items-center justify-center gap-x-2 rounded-lg border-2 border-dashed px-6 font-sans transition-colors duration-300 hover:border-solid"
              >
                <Icon
                  name="solar:widget-add-linear"
                  class="size-5"
                />
                <span class="text-sm">Manage columns</span>
              </button>
            </div>
          </div>
          <div class="w-6 shrink-0" />
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<style>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}
</style>
