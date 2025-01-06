import type { BaseTabsTriggerProps } from "@shuriken-ui/nuxt"

export const variants = {
  'primary': 'group-data-[state=active]/trigger:text-primary-base group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-primary-400 dark:group-data-[state=inactive]/trigger:text-muted-400',
  'dark': 'group-data-[state=active]/trigger:text-muted-900 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-white dark:group-data-[state=inactive]/trigger:text-muted-400',
  'muted': 'group-data-[state=active]/trigger:text-muted-700 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-muted-100 dark:group-data-[state=inactive]/trigger:text-muted-400',
} as const satisfies Record<NonNullable<BaseTabsTriggerProps['variant']>, string>
