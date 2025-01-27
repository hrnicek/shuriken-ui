<script setup lang="ts">
const scales = [
  {
    step: 'xs',
    size: '0.75rem',
    letterSpacing: '0',
    lineHeight: '1rem',
  },
  {
    step: 'sm',
    size: '0.875rem',
    letterSpacing: '0',
    lineHeight: '1.25rem',
  },
  {
    step: 'md',
    size: '1rem',
    letterSpacing: '0',
    lineHeight: '1.5rem',
  },
  {
    step: 'lg',
    size: '1.125rem',
    letterSpacing: '0',
    lineHeight: '1.75rem',
  },
  {
    step: 'xl',
    size: '1.25rem',
    letterSpacing: '0',
    lineHeight: '1.75rem',
  },
  {
    step: '2xl',
    size: '1.5rem',
    letterSpacing: '0',
    lineHeight: '2rem',
  },
  {
    step: '3xl',
    size: '1.875rem',
    letterSpacing: '0',
    lineHeight: '2.25rem',
  },
  {
    step: '4xl',
    size: '2.25rem',
    letterSpacing: '0',
    lineHeight: '2.5rem',
  },
  {
    step: '5xl',
    size: '3rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: '6xl',
    size: '3.75rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: '7xl',
    size: '4.5rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: '8xl',
    size: '6rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: '9xl',
    size: '8rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
]
</script>

<template>
  <div class="py-6">
    <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
      <table class="w-full">
        <thead>
          <tr>
            <th class="whitespace-nowrap bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100 md:whitespace-normal">
              Size
            </th>
            <th class="whitespace-nowrap bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100 md:whitespace-normal">
              Font size
            </th>
            <th class="whitespace-nowrap bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100 md:whitespace-normal">
              Letter spacing
            </th>
            <th class="whitespace-nowrap bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100 md:whitespace-normal">
              Line height
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Row -->
          <tr
            v-for="scale in scales"
            :key="scale.step"
            class="border-t border-muted-300 text-sm dark:border-muted-800"
          >
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                {{ scale.step }}
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <code class="rounded-sm bg-muted-100 px-1 text-muted-600 dark:bg-muted-950 dark:text-muted-100">{{ scale.size }}</code>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <code class="rounded-sm bg-muted-100 px-1 text-muted-600 dark:bg-muted-950 dark:text-muted-100">{{ scale.letterSpacing }}</code>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <code class="rounded-sm bg-muted-100 px-1 text-muted-600 dark:bg-muted-950 dark:text-muted-100">{{ scale.lineHeight }}</code>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
