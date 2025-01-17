<template>
  <div class="flex items-center justify-center">
    <div class="w-full rounded-xl bg-white p-4 dark:bg-muted-900">
      <div class="flex flex-wrap items-end gap-4">
        <BaseTooltip>
          <template #content>
            Quam quidem partem accusationis admiratus sum et moleste tuli potissimum esse Atratino datam. Neque enim decebat neque aetas illa postulabat neque, id quod animadvertere poteratis, pudor patiebatur optimi adulescentis in tali illum oratione versari. Vellem aliquis ex vobis robustioribus hunc male dicendi locum suscepisset; aliquanto liberius et fortius et magis more nostro refutaremus istam male dicendi licentiam. Tecum, Atratine, agam lenius, quod et pudor tuus moderatur orationi meae et meum erga te parentemque tuum beneficium tueri debeo.
          </template>
          <BaseButton>
            Button
          </BaseButton>
        </BaseTooltip>

        <div class="max-w-sm">
          <BaseTooltip disable-closing-trigger :bindings="{ content: { align: 'start' } }">
            <template #content>
              Tooltip content
            </template>
            <BaseInput placeholder="I can help" />
          </BaseTooltip>
        </div>

        <BaseTooltip disable-closing-trigger>
          <template #content>
            Tooltip content
          </template>
          <span tabindex="0" class="focus-visible:nui-focus rounded-md">
            <BaseButton disabled>
              Button
            </BaseButton>
          </span>
        </BaseTooltip>
      </div>
    </div>
  </div>
</template>
