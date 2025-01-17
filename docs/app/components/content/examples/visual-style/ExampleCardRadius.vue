<template>
  <div class="py-6">
    <BaseCard
      color="muted"
      rounded="lg"
      class="!border-muted-300 dark:!border-muted-800"
    >
      <div class="flex flex-col divide-y divide-dashed divide-muted-300 dark:divide-muted-800">
        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <BaseTag rounded="full">
              rounded="none"
            </BaseTag>
          </div>
          <BaseCard
            rounded="none"
            class="grow border-muted-300 p-4 dark:!border-muted-800 md:p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="none"
                src="/img/people/55.jpg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="none"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    variant="dark"
                    label="Notify friends"
                  />
                  <BaseButton
                    variant="dark"
                    rounded="none"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <BaseTag rounded="full">
              rounded="sm"
            </BaseTag>
          </div>
          <BaseCard
            rounded="sm"
            class="grow border-muted-300 p-4 dark:!border-muted-800 md:p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="sm"
                src="/img/people/55.jpg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="sm"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    variant="dark"
                    label="Notify friends"
                  />
                  <BaseButton
                    variant="dark"
                    rounded="sm"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <BaseTag rounded="full">
              rounded="md"
            </BaseTag>
          </div>
          <BaseCard
            rounded="md"
            class="grow border-muted-300 p-4 dark:!border-muted-800 md:p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="md"
                src="/img/people/55.jpg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="md"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    variant="dark"
                    label="Notify friends"
                  />
                  <BaseButton
                    variant="dark"
                    rounded="md"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <BaseTag rounded="full">
              rounded="lg"
            </BaseTag>
          </div>
          <BaseCard
            rounded="lg"
            class="grow border-muted-300 p-4 dark:!border-muted-800 md:p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="lg"
                src="/img/people/55.jpg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="lg"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    variant="dark"
                    label="Notify friends"
                  />
                  <BaseButton
                    variant="dark"
                    rounded="lg"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <div class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-center md:p-6">
          <div class="w-40">
            <BaseTag rounded="full">
              rounded="full"
            </BaseTag>
          </div>
          <BaseCard
            rounded="lg"
            class="grow border-muted-300 p-4 dark:!border-muted-800 md:p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
          >
            <div class="flex gap-4">
              <BaseAvatar
                rounded="full"
                src="/img/people/55.jpg"
                size="sm"
              />
              <div class="grow">
                <BaseTextarea
                  rounded="lg"
                  placeholder="Write a comment..."
                  :rows="3"
                />
                <div class="mt-3 flex flex-col justify-between gap-y-3 md:flex-row md:items-center">
                  <BaseCheckbox
                    checked
                    variant="dark"
                    label="Notify friends"
                  />
                  <BaseButton
                    variant="dark"
                    rounded="full"
                    size="sm"
                    class="w-full md:w-24"
                  >
                    Send
                  </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
