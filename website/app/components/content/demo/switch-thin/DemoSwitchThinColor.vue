<script setup lang="ts">
const thinValues = reactive({
  one: true,
  two: true,
  three: true,
  four: true,
})
</script>

<template>
  <div class="grid grid-cols-2 gap-6 md:max-w-3xl md:grid-cols-4 p-4">
    <BaseSwitchThin
      v-model="thinValues.one"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-green-500 *:dark:peer-data-[state=checked]:bg-green-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchThin>
    <BaseSwitchThin
      v-model="thinValues.two"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-pink-500 *:dark:peer-data-[state=checked]:bg-pink-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchThin>
    <BaseSwitchThin
      v-model="thinValues.three"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-amber-500 *:dark:peer-data-[state=checked]:bg-amber-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchThin>
    <BaseSwitchThin
      v-model="thinValues.four"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-violet-500 *:dark:peer-data-[state=checked]:bg-violet-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchThin>
  </div>
</template>
