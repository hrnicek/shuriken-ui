<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:py-8">
      <div class="mx-auto w-full max-w-md ">
        <BaseCard
          class="p-4 md:p-6"
          color="default"
          rounded="lg"
        >
          <div class="flex flex-col py-2">
            <BaseAvatar
              class="mx-auto"
              size="xl"
              src="/img/people/19.jpg"
              badge-src="/img/vector/stacks/js.svg"
            />
            <div class="mx-auto max-w-xs text-center">
              <BaseHeading
                tag="h2"
                size="md"
                weight="medium"
                class="mt-4"
              >
                Josh M. has invited you to the
                <BaseLink
                  to="#"
                  class="text-primary-800"
                >
                  Banking Solution Website
                </BaseLink>
                project.
              </BaseHeading>
            </div>
            <div class="mx-auto max-w-sm">
              <div class="mt-6 flex items-center justify-center gap-3">
                <BaseAvatar
                  src="/img/people/29.jpg"
                  size="xs"
                />
                <BaseAvatar
                  size="xs"
                  text="H"
                  class="bg-muted-100 dark:bg-muted-800 text-muted-700 dark:text-muted-300"
                />
                <BaseAvatar
                  src="/img/people/36.jpg"
                  size="xs"
                />
              </div>
              <div class="mt-2 text-center">
                <BaseText
                  size="xs"
                  class="text-muted-600 dark:text-muted-400"
                >
                  And 5 others are members of this project
                </BaseText>
              </div>
              <div class="mt-6 flex items-center justify-between gap-2">
                <BaseButton
                  rounded="md"
                  class="w-full"
                >
                  Decline
                </BaseButton>
                <BaseButton
                  rounded="md"
                  variant="dark"
                  class="w-full"
                >
                  Accept
                </BaseButton>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
