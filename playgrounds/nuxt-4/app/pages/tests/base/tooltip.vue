<script setup lang="ts">
definePageMeta({
  title: 'BaseTooltip',
  icon: 'system-uicons:duplicate-alt',
  description: 'Tooltip component',
  section: 'base',
})

const loading = ref(true)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTooltip">
      <NuiPreview title="Button" description="Test tooltip">
        <div class="flex flex-wrap items-end gap-4">
          <BaseTooltip content="Tooltip content">
            <BaseButton>
              Button
            </BaseButton>
          </BaseTooltip>

          <BaseTooltip variant="muted">
            <template #content>
              Tooltip content muted            
            </template>
            <BaseButton>
              Button
            </BaseButton>
          </BaseTooltip>

          <BaseTooltip variant="dark">
            <template #content>
              Tooltip content dark            
            </template>
            <BaseButton>
              Button
            </BaseButton>
          </BaseTooltip>
                    
          <BaseTooltip variant="primary">
            <template #content>
              Tooltip content primary            
            </template>
            <BaseButton>
              Button
            </BaseButton>
          </BaseTooltip>
          
        </div>
      </NuiPreview>

      <NuiPreview title="Inline">
        <div class="flex flex-wrap items-end gap-4">
          <BaseParagraph>
            Lorem ipsum dolor sit amet, 

            <BaseTooltip>
              <template #content>
                <span class="flex items-center gap-1">
                  <Icon name="lucide:circle-help" />
                  <span>Tooltip content</span>       
                </span>
              </template>
              <span 
                tabindex="0"
                class="outline-none focus-visible:text-primary-base hover:text-primary-base cursor-help underline decoration-dotted"
              >consectetur</span>
            </BaseTooltip>
            
            adipiscing elit. Nullam nec
          </BaseParagraph>
          
        </div>
      </NuiPreview>
      
      <NuiPreview title="Custom">
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
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
