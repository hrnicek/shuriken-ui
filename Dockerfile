
FROM bitnami/node:22.14.0 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_INTEGRITY_KEYS='{"npm":[{"expires":"2025-01-29T00:00:00.000Z","keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","keytype":"ecdsa-sha2-nistp256","scheme":"ecdsa-sha2-nistp256","key":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1Olb3zMAFFxXKHiIkQO5cJ3Yhl5i6UPp+IhuteBJbuHcA5UogKo0EWtlWwW6KSaKoTNEYL7JlCQiVnkhBktUgg=="},{"expires":null,"keyid":"SHA256:DhQ8wR5APBvFHLF/+Tc+AYvPOdTpcIDqOhxsBHRwC7U","keytype":"ecdsa-sha2-nistp256","scheme":"ecdsa-sha2-nistp256","key":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEY6Ya7W++7aUPzvMTrezH6Ycx3c+HOKYCcNGybJZSCJq/fd7Qa8uuAKtdIkUQtQiEKERhAmE5lMMJhP8OkDOa2g=="}]}'

RUN corepack enable

FROM base AS install
COPY . /build
WORKDIR /build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM install AS build-docs
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm run --filter @shuriken-ui/nuxt dev:prepare
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm run --filter @shuriken-ui/nuxt-component-meta prepack
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_OPTIONS=--max-old-space-size=8192 pnpm run --filter docs build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm deploy --filter docs --prod /deploy/docs

FROM base AS docs
ENV NODE_ENV=production
COPY --from=build-docs /deploy/docs/.output /prod/docs/.output
WORKDIR /prod/docs
EXPOSE 3000
CMD ["node",  ".output/server/index.mjs"]
