<script setup lang="ts">
const selectedTab = ref('team')

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
    <BaseTabs
      v-model="selectedTab"
      type="box"
      variant="dark"
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
</template>
