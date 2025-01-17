<script setup lang="ts">
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
</script>

<template>
  <div class="flex items-center p-4">
    <BaseTabs
      v-model="selectedTab"
      type="box"
      variant="dark"
    >
      <template #trigger>
        <BaseTabsTrigger v-for="tab in tabs" :key="tab.value" label="Team" :icon="tab.icon" value="team" @click="selectedTab = tab.value" />
      </template>

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
</template>
