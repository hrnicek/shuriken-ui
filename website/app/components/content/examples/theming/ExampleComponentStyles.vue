<template>
  <div class="py-6">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <BaseCard rounded="lg" variant="none" class="flex h-full items-center justify-center border-none bg-black dark:bg-muted-900 p-6 xs:py-16">
          <div class="flex w-full flex-col items-center">
            <BaseAvatar
              size="2xl"
              src="/img/people/42.jpg"
              badge-src="/img/vector/stacks/photoshop.svg"
            />
            <div class="mx-auto mt-6 w-full max-w-xs text-center">
              <BaseHeading
                tag="h3"
                size="lg"
                weight="medium"
                class="text-white"
              >
                Helen Miller
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white">
                has accepted to join the project
              </BaseParagraph>
              <div class="mt-4 flex flex-col gap-2">
                <BaseButton
                  type="button"
                  variant="dark"
                  rounded="full"
                  class="w-full"
                >
                  <span>Assign Tasks</span>
                </BaseButton>
                <BaseButton
                  type="button"
                  variant="none"
                  rounded="full"
                  class="w-full bg-white/15 hover:bg-white/10 text-white"
                >
                  <span>Settings</span>
                </BaseButton>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <div>
        <BaseCard
          rounded="md"
          class="p-6"
        >
          <div class="mb-4">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
            >
              <span>New Project</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              Create a new project
            </BaseParagraph>
          </div>
          <div class="space-y-3">
            <BaseInput placeholder="Ex: Banking website project" />
            <BaseInput placeholder="Ex: For small businesses" />
            <BaseTextarea placeholder="Describe your project..." />
            <div class="py-2">
              <BaseSwitchBall
                label="Visibility"
                sublabel="Make this project public"
              />
            </div>
            <div>
              <BaseButton
                type="submit"
                variant="dark"
                rounded="md"
                class="w-full"
              >
                <span>Create Project</span>
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
