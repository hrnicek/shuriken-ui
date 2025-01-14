<script setup lang="ts">
const checked = ref(false)
</script>

<template>
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="mb-10 flex items-center">
      <div class="space-y-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Sign in </span>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-600 dark:text-muted-400"
        >
          Enter your account info to sign in
        </BaseParagraph>
      </div>
    </div>
    <div>
      <!-- Social Sign Up Buttons -->
      <div class="flex flex-wrap md:flex-nowrap justify-between gap-2">
        <BaseButton
          size="lg"
          rounded="md"
          class="grow cursor-pointer"
        >
          <Icon
            name="logos:google-icon"
            class="size-4 me-2"
          />
          <span class="text-sm">Google</span>
        </BaseButton>
        <BaseButton
          size="icon-lg"
          rounded="md"
          variant="muted"
          class="cursor-pointer"
        >
          <Icon
            name="fa6-brands:facebook-f"
            class="size-4"
          />
        </BaseButton>
        <BaseButton
          size="icon-lg"
          rounded="md"
          variant="muted"
          class="cursor-pointer"
        >
          <Icon
            name="fa6-brands:x-twitter"
            class="size-4"
          />
        </BaseButton>
        <BaseButton
          size="icon-lg"
          rounded="md"
          variant="muted"
          class="cursor-pointer"
        >
          <Icon
            name="fa6-brands:github"
            class="size-4"
          />
        </BaseButton>
      </div>
      <!-- 'or' divider -->
      <div class="flex-100 mt-8 flex items-center">
        <hr
          class="border-muted-200/60 dark:border-muted-800 flex-auto border-t-2"
        >
        <span
          class="text-muted-400 dark:text-muted-500 px-4 text-sm font-sans font-medium"
        >
          OR
        </span>
        <hr
          class="border-muted-200/60 dark:border-muted-800 flex-auto border-t-2"
        >
      </div>
      <!-- Form section -->
      <form
        method="POST"
        action=""
        class="mt-6"
      >
        <div class="mt-5">
          <div>
            <div class="space-y-4">
              <!-- Email -->
              <BaseField>
                <div class="w-full inline-flex mb-2">
                  <BaseFieldLabel class="flex items-center justify-between w-full">
                    <div>
                      <span>Email</span>
                      <BaseFieldRequiredIndicator />
                    </div>
                  </BaseFieldLabel>
                </div>
                <div class="relative">
                  <BaseFieldController>
                    <BaseInput placeholder="Ex: johndoe@mail.com" />
                  </BaseFieldController>
                  <div class="absolute z-0 end-4 top-3 pointer-events-none">
                    <BaseFieldLoadingIndicator />
                    <BaseFieldSuccessIndicator />
                    <BaseFieldErrorIndicator />
                  </div>
                </div>
              </BaseField>

              <!-- Password -->
              <BaseField>
                <div class="w-full inline-flex mb-2">
                  <BaseFieldLabel class="flex items-center justify-between w-full">
                    <div>
                      <span>Password</span>
                      <BaseFieldRequiredIndicator />
                    </div>
                  </BaseFieldLabel>
                </div>
                <div class="relative">
                  <BaseFieldController>
                    <BaseInput
                      type="password"
                      placeholder="••••••••••"
                    />
                  </BaseFieldController>
                  <div class="absolute z-0 end-4 top-3 pointer-events-none">
                    <BaseFieldLoadingIndicator />
                    <BaseFieldSuccessIndicator />
                    <BaseFieldErrorIndicator />
                  </div>
                </div>
              </BaseField>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <!-- Checkbox -->
              <BaseCheckbox
                v-model="checked"
                label="Remember me"
                variant="dark"
              />

              <div class="text-xs leading-5">
                <a
                  href="#"
                  class="text-muted-900 hover:text-muted-950 dark:text-white dark:hover:text-white font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <!-- Submit -->
            <div class="mt-8">
              <div class="block w-full rounded-md shadow-sm">
                <BaseButton
                  type="submit"
                  variant="dark"
                  class="w-full"
                >
                  Sign In
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </BaseCard>
</template>
