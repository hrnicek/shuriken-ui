<script setup lang="ts">
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
  <div class="flex items-center p-4">
    <div class="w-full max-w-lg">
      <BaseTabs
        default-value="team"
        variant="dark"
        :tabs="tabs"
      >
        <BaseTabsContent value="team">
          <BaseTabs
            default-value="team"
            orientation="vertical"
            type="box"
            variant="dark"
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
            variant="dark"
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
            variant="dark"
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
  </div>
</template>
