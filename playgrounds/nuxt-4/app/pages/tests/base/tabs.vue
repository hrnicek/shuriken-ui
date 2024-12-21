<script setup lang="ts">
definePageMeta({
  title: 'BaseTabs',
  icon: 'system-uicons:browser-alt',
  description: 'Tabs component',
  section: 'base',
})

const selectedTab = ref('team')

const tabs = [
  {
    label: 'Team',
    value: 'team',
    icon: 'solar:users-group-rounded-linear',
  },
  {
    label: 'Projects',
    value: 'projects',
    icon: 'solar:case-linear',
  },
  {
    label: 'Tasks',
    value: 'tasks',
    icon: 'solar:scanner-2-linear',
  },
]

const tabsNoIcon = [
  {
    label: 'Team',
    value: 'team',
  },
  {
    label: 'Projects',
    value: 'projects',
  },
  {
    label: 'Tasks',
    value: 'tasks',
  },
]
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTabs">
      <NuiPreview title="Align: start" description="Tabs component start align">
        <div class="w-full gap-8 grid grid-cols-2 max-w-3xl">
          <BaseTabs
            default-value="team"
            variant="primary-low"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Disabled', value: 'tasks', disabled: true },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
          <BaseTabs
            default-value="team"
            variant="primary-high"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Disabled', value: 'tasks', disabled: true },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Align: center"
        description="Tabs component center align"
      >
        <div class="w-full gap-8 grid grid-cols-2 max-w-3xl">
          <BaseTabs
            default-value="team"
            justify="center"
            variant="dark-low"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
          <BaseTabs
            default-value="team"
            justify="center"
            variant="dark-high"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Align: end" description="Tabs component end align">
        <div class="w-full gap-8 grid grid-cols-2 max-w-3xl">
          <BaseTabs
            default-value="projects"
            justify="end"
            variant="muted-low"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
          <BaseTabs
            default-value="projects"
            justify="end"
            variant="muted-high"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Orientation: vertical" description="Tabs component vertical orientation">
        <div class="w-full gap-8 grid grid-cols-2 max-w-6xl">
          <BaseTabs
            default-value="team"
            orientation="vertical"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Disabled', value: 'tasks', disabled: true },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
          <BaseTabs
            default-value="team"
            orientation="vertical"
            variant="dark-high"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Disabled', value: 'tasks', disabled: true },
            ]"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Tabs component icons">
        <div class="w-full max-w-sm">
          <BaseTabs
            default-value="tasks"
            color="default"
            :tabs
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed: primary" description="Tabs component boxed">
        <div class="w-full gap-8 grid grid-cols-2 max-w-5xl">
          <BaseTabs
            v-model="selectedTab"
            type="box"
            :tabs="tabsNoIcon"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>

          <BaseTabs
            v-model="selectedTab"
            type="box"
            orientation="vertical"
            :tabs="tabsNoIcon"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed: muted" description="Tabs component boxed">
        <div class="w-full gap-8 grid grid-cols-2 max-w-5xl">
          <BaseTabs
            v-model="selectedTab"
            type="box"
            variant="muted-high"
            :tabs="tabsNoIcon"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>

          <BaseTabs
            v-model="selectedTab"
            type="box"
            variant="muted-high"
            orientation="vertical"
            :tabs="tabsNoIcon"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed: dark" description="Tabs component boxed">
        <div class="w-full gap-8 grid grid-cols-2 max-w-5xl">
          <BaseTabs
            v-model="selectedTab"
            type="box"
            variant="dark-high"
            :tabs="tabsNoIcon"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>

          <BaseTabs
            v-model="selectedTab"
            type="box"
            variant="dark-high"
            orientation="vertical"
            :tabs="tabsNoIcon"
          >
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed: icon" description="Tabs component boxed icons">
        <div class="w-full max-w-sm">
          <BaseTabs
            type="box"
            v-model="selectedTab"
            variant="dark-high"
            :tabs="tabs"
          >
            <!--template #trigger>
              <BaseTabsTrigger value="team" @click="selectedTab = 'team'">
                Team
              </BaseTabsTrigger>
              <BaseTabsTrigger value="projects" @click="selectedTab = 'projects'">
                Projects
              </BaseTabsTrigger>
              <BaseTabsTrigger value="tasks" @click="selectedTab = 'tasks'">
                Tasks
              </BaseTabsTrigger>
            </template-->
            
            <BaseTabsContent value="team">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
              Ne discipulum abducam, times. ...
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
              quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
              risus sem semper lorem, vitae efficitur nunc est eget mi. ...
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
              gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
              Pellentesque quis vehicula ipsum. ...
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>

      
      <NuiPreview title="Nested" description="Tabs component with nested tabs">
        <div class="w-full max-w-lg">
          <BaseTabs
            default-value="team"
            variant="dark-high"
            :tabs="tabs"
          >
            <BaseTabsContent value="team">
              <BaseTabs
                default-value="team"
                orientation="vertical"
                type="box"
                variant="dark-high"
                :tabs="tabsNoIcon"
              >
                <BaseTabsContent value="team">
                  team Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                  iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                  Ne discipulum abducam, times. ...
                </BaseTabsContent>
                <BaseTabsContent value="projects">
                  team Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
                  quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
                  risus sem semper lorem, vitae efficitur nunc est eget mi. ...
                </BaseTabsContent>
                <BaseTabsContent value="tasks">
                  team Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
                  gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
                  Pellentesque quis vehicula ipsum. ...
                </BaseTabsContent>
              </BaseTabs>
            </BaseTabsContent>
            <BaseTabsContent value="projects">
              <BaseTabs
                default-value="team"
                orientation="vertical"
                type="box"
                variant="dark-high"
                :tabs="tabsNoIcon"
              >
                <BaseTabsContent value="team">
                  projects Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                  iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                  Ne discipulum abducam, times. ...
                </BaseTabsContent>
                <BaseTabsContent value="projects">
                  projects Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
                  quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
                  risus sem semper lorem, vitae efficitur nunc est eget mi. ...
                </BaseTabsContent>
                <BaseTabsContent value="tasks">
                  projects Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
                  gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
                  Pellentesque quis vehicula ipsum. ...
                </BaseTabsContent>
              </BaseTabs>
            </BaseTabsContent>
            <BaseTabsContent value="tasks">
              <BaseTabs
                default-value="team"
                orientation="vertical"
                type="box"
                variant="dark-high"
                :tabs="tabsNoIcon"
              >
                <BaseTabsContent value="team">
                  tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                  iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                  Ne discipulum abducam, times. ...
                </BaseTabsContent>
                <BaseTabsContent value="projects">
                  tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada odio sed ante malesuada, 
                  quis facilisis erat iaculis. Sed egestas porta fringilla. Ut ultrices, elit eget congue aliquet, 
                  risus sem semper lorem, vitae efficitur nunc est eget mi. ...
                </BaseTabsContent>
                <BaseTabsContent value="tasks">
                  tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo ipsum, efficitur eu finibus eu, 
                  gravida quis enim. Fusce a elementum nunc. Nunc venenatis a elit quis ornare. 
                  Pellentesque quis vehicula ipsum. ...
                </BaseTabsContent>
              </BaseTabs>
            </BaseTabsContent>
          </BaseTabs>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
