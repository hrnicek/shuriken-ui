<script setup lang="ts">
const ballValues = reactive({
  one: true,
  two: true,
  three: true,
  four: true,
})
</script>

<template>
  <div class="grid grid-cols-2 gap-6 md:max-w-3xl md:grid-cols-4 p-4">
    <BaseSwitchBall
      v-model="ballValues.one"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-green-500 *:dark:peer-data-[state=checked]:bg-green-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchBall>
    <BaseSwitchBall
      v-model="ballValues.two"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-pink-500 *:dark:peer-data-[state=checked]:bg-pink-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchBall>
    <BaseSwitchBall
      v-model="ballValues.three"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-amber-500 *:dark:peer-data-[state=checked]:bg-amber-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchBall>
    <BaseSwitchBall
      v-model="ballValues.four"
      variant="none"
      class="*:first:bg-white *:first:dark:bg-muted-700 *:first:border *:first:border-muted-300 *:first:dark:border-muted-600 *:last:text-white *:last:dark:text-white *:peer-data-[state=checked]:bg-violet-500 *:dark:peer-data-[state=checked]:bg-violet-500 *:bg-muted-300 *:dark:bg-muted-600"
    >
      Custom
    </BaseSwitchBall>
  </div>
</template>
