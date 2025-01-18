<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-white py-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButton color="default">
            <Icon
              name="lucide:moon"
              class="-ms-1 size-4"
            />
            <span>Button</span>
          </BaseButton>
          <BaseButton variant="muted">
            <span>Button</span>
            <Icon
              name="lucide:arrow-right"
              class="me-1 size-4"
            />
          </BaseButton>
          <BaseButton
            variant="primary"
          >
            <Icon
              name="cib:circleci"
              class="-ms-1 size-4"
            />
            <span>Button</span>
          </BaseButton>
          <BaseButton variant="dark">
            <Icon
              name="fa:twitter"
              class="-ms-1 size-4"
            />
            <span>Button</span>
          </BaseButton>
          <BaseButton
            variant="none"
            class="bg-yellow-400/20 text-yellow-600"
          >
            <Icon
              name="ion:shapes"
              class="-ms-1 size-4"
            />
            <span>Button</span>
          </BaseButton>
          <BaseButton
            variant="none"
            class="bg-pink-500/20 text-pink-600"
          >
            <Icon
              name="mingcute:heart-fill"
              class="-ms-1 size-4"
            />
            <span>Button</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
