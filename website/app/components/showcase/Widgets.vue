<script setup lang="ts">

</script>

<template>
  <div class="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
    <div class="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        <!--Item-->
        <ShowcaseWidgetChartBar />
        <!--Item-->
        <ShowcaseWidgetChartLine />
      </div>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div class="space-y-4 xl:space-y-4">
          <!--Item-->
          <ShowcaseWidgetTeam />
          <!--Item-->
          <ShowcaseWidgetSettings />
          <!--Item-->
          <ShowcaseWidgetCreditForm />
        </div>
        <div class="ptablet:grid ptablet:grid-cols-2 space-y-4 xl:space-y-4">
          <!--Item-->
          <ShowcaseWidgetChartGauge />
          <!--Item-->
          <ShowcaseWidgetNewMessage />
          <!--Item-->
          <ShowcaseWidgetLoginForm />
        </div>
      </div>
    </div>
    <div class="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
      <div class="hidden gap-1 sm:grid-cols-[260px_1fr] md:grid">
        <!--Item-->
        <ShowcaseWidgetEqualizer />
        <!--Item-->
        <div class="pt-3 sm:ps-2 sm:pt-0 xl:ps-3">
          <ShowcaseWidgetStock />
        </div>
        <!--Item-->
        <div class="pt-3 sm:col-span-2 xl:pt-3">
          <ShowcaseWidgetChartLines />
        </div>
      </div>
      <!--Item-->
      <div class="hidden md:block">
        <ShowcaseWidgetTable />
      </div>
      <!--Item-->
      <div class="hidden md:block">
        <ShowcaseWidgetDirectory />
      </div>
    </div>
  </div>
</template>