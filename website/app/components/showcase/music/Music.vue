<script setup lang="ts">
interface Track {
  id: string;
  title: string;
  duration: string;
  album: {
    id: string;
    title: string;
    cover: string;
    year?: string;
  };
  artist: {
    name: string;
    picture: string;
  };
  stats: {
    listenCount: string
    listened: boolean
    likeCount: string
    liked: boolean
    playing?: boolean
  }
}

interface Album {
  id: string;
  title: string;
  cover: string;
  year?: string;
  track: {
    id: string;
    title: string;
    duration: string;
  };
  artist: {
    name: string;
    picture: string;
  };
}

const albums: Album[] = [
  {
    id: "1",
    title: "Heaven & Hell",
    cover: "/img/music/disc-3.png",
    year: "2010",
    track: {
      id: "1",
      title: "Heaven & Hell",
      duration: "5:15",
    },
    artist: {
      name: "John Markstrom",
      picture: "/img/avatars/18.svg",
    },
  },
  {
    id: "2",
    title: "King Of The Hill",
    cover: "/img/music/disc-7.png",
    year: "2018",
    track: {
      id: "1",
      title: "King Of The Hill",
      duration: "7:46",
    },
    artist: {
      name: "The Cooks",
      picture: "/img/avatars/18.svg",
    },
  },
  {
    id: "3",
    title: "Bring It On",
    cover: "/img/music/disc-8.png",
    year: "2018",
    track: {
      id: "1",
      title: "Disco Party",
      duration: "3:11",
    },
    artist: {
      name: "Funky Band",
      picture: "/img/avatars/18.svg",
    },
  },
  {
    id: "4",
    title: "Cold Metal",
    cover: "/img/music/disc-1.png",
    year: "2019",
    track: {
      id: "1",
      title: "Ravenfrost",
      duration: "4:47",
    },
    artist: {
      name: "Arcade Fire",
      picture: "/img/avatars/18.svg",
    },
  },
  {
    id: "5",
    title: "Jazz Music",
    cover: "/img/music/disc-10.png",
    year: "2022",
    track: {
      id: "1",
      title: "Chill and Relax",
      duration: "7:28",
    },
    artist: {
      name: "Smoky Vibes",
      picture: "/img/avatars/18.svg",
    },
  },
  {
    id: "6",
    title: "Technodrome",
    cover: "/img/music/disc-5.png",
    year: "2003",
    track: {
      id: "1",
      title: "Electrosnap",
      duration: "3:21",
    },
    artist: {
      name: "Tekster",
      picture: "/img/avatars/18.svg",
    },
  },
  {
    id: "7",
    title: "Bristtleback",
    cover: "/img/music/disc-2.png",
    year: "2010",
    track: {
      id: "1",
      title: "Take Me With You",
      duration: "3:49",
    },
    artist: {
      name: "Blue Sky",
      picture: "/img/avatars/18.svg",
    },
  },
  {
    id: "8",
    title: "Bring It To Life",
    cover: "/img/music/disc-9.png",
    year: "2023",
    track: {
      id: "1",
      title: "Frankenslammer",
      duration: "4:41",
    },
    artist: {
      name: "Roverdo",
      picture: "/img/avatars/18.svg",
    },
  },
];

const route = useRoute()
const home = route.fullPath
const menu: any = {
  discover: [
    {
      title: 'Listen Now',
      icon: 'solar:play-circle-linear',
      to: home,
    },
    {
      title: 'Podcasts',
      icon: 'solar:widget-6-linear',
      to: '#',
    },
    {
      title: 'Radio',
      icon: 'solar:translation-linear',
      to: '#',
    },
  ],
  library: [
    {
      title: 'Recently Played',
      icon: 'solar:music-library-linear',
      to: '#',
    },
    {
      title: 'Liked Songs',
      icon: 'solar:heart-linear',
      to: '#',
    },
    {
      title: 'Albums',
      icon: 'solar:music-note-slider-2-linear',
      to: '#',
    },
    {
      title: 'Artists',
      icon: 'solar:users-group-rounded-linear',
      to: '#',
    },
    {
      title: 'Podcasts',
      icon: 'solar:smart-home-angle-linear',
      to: '#',
    },
  ],
  playlists: [
    {
      title: 'New Releases',
      icon: 'solar:calendar-linear',
      to: '#',
    },
    {
      title: 'Top Charts',
      icon: 'solar:chart-linear',
      to: '#',
    },
    {
      title: 'Genres & Moods',
      icon: 'solar:headphones-round-linear',
      to: '#',
    },
    {
      title: 'Discover',
      icon: 'solar:compass-square-linear',
      to: '#',
    },
  ],
}
</script>

<template>
  <div>
    <BaseCard rounded="lg" class="shadow-sm shadow-muted-200 dark:shadow-muted-800 overflow-hidden">
      <div class="w-full h-[815px] flex flex-col">
        <ShowcaseMusicToolbar />
        <!-- Wrapper -->
        <div class="relative w-full grow flex">
        <!-- Sidebar -->
          <div class="hidden xl:block shrink-0 h-full w-72 bg-muted-50/60 dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800">
            <div class="px-6 py-10 space-y-8">
              <div v-for="category in Object.keys(menu)" :key="category" class="relative">
                <div class="relative mb-4">
                  <BaseHeading as="h3" weight="semibold" size="xs" class="uppercase capitalize">{{ category }}</BaseHeading>
                </div>
                <ul role="list" class="-ms-2">
                  <li v-for="item in menu[category as any]" :key="item.title" class="relative">
                    <NuxtLink :to="item.to" class="py-2 px-3 font-sans flex items-center gap-3 rounded-lg" exact-active-class="bg-muted-200/60 dark:bg-muted-800">
                      <Icon :name="item.icon" class="size-5 text-muted-600 dark:text-muted-400" />
                      <span class="text-sm">{{ item.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <!-- Content -->
          <div class="h-full grow">
            <div class="px-4 md:px-6 lg:px-8 py-6">
              <div class="flex items-center justify-between mb-6">
                <ul class="inline-flex items-center p-1 rounded-xl bg-muted-200/50 dark:bg-muted-800 text-sm text-muted-400 dark:text-muted-400">
                  <li>
                    <a to="#" class="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 bg-white rounded-lg font-medium text-muted-900">
                      Music
                    </a>
                  </li>
                  <li>
                    <a to="#" class="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 text-muted-400 dark:text-muted-400 hover:text-muted-500 dark:hover:text-muted-500">
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a to="#" class="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 text-muted-400 dark:text-muted-400 hover:text-muted-500 dark:hover:text-muted-500">
                      Live
                    </a>
                  </li>
                </ul>
                <div>
                  <BaseButton rounded="md" variant="dark">
                    <Icon name="lucide:plus" class="size-4" />
                    <span>New Playlist</span>
                  </BaseButton>
                </div>
              </div>
              <div>
                <div class="my-6">
                  <BaseHeading as="h3" size="2xl" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">Playlists</BaseHeading>
                  <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">Your favorite songs and music</BaseParagraph>
                </div>

                <div class="mb-6">
                  <div class="relative z-0 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ltablet:grid-cols-4">
                    <div class="relative overflow-hidden rounded-3xl">
                      <img
                        src="/img/music/playlist-1.png"
                        class="w-full grayscale"
                        alt=""
                        width="830"
                        height="1075"
                        priority
                      />
                      <div class="absolute start-0 top-0 z-20 flex w-full items-center gap-2 p-6">
                        <span class="font-sans font-medium text-sm text-white">32 Tracks</span>
                      </div>
                      <div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div>
                      <div class="absolute bottom-0 start-0 z-20 flex w-full items-center gap-2 p-6">
                        <button
                          type="button"
                          class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted-900 text-white transition-colors duration-300 hover:enabled:bg-white hover:enabled:text-muted-900 ltablet:h-10 ltablet:w-10"
                        >
                          <Icon class="size-4" name="solar:play-bold" />
                        </button>
                        <div class="text-white">
                          <h5 class="text-white">Chill Gangsta</h5>
                          <p class="line-clamp-1 text-xs text-muted-300">
                            Sweet chill and relaxation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-3xl">
                      <img
                        src="/img/music/playlist-2.png"
                        class="w-full grayscale"
                        alt=""
                        width="830"
                        height="1075"
                        priority
                      />
                      <div class="absolute start-0 top-0 z-20 flex w-full items-center gap-2 p-6">
                        <span class="font-sans font-medium font-sans font-medium text-sm text-white">71 Tracks</span>
                      </div>
                      <div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div>
                      <div class="absolute bottom-0 start-0 z-20 flex w-full items-center gap-2 p-6">
                        <button
                          type="button"
                          class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted-900 text-white transition-colors duration-300 hover:enabled:bg-white hover:enabled:text-muted-900 ltablet:h-10 ltablet:w-10"
                        >
                          <Icon class="size-4" name="solar:play-bold" />
                        </button>
                        <div class="text-white">
                          <h5 class="text-white">My Daily Mix</h5>
                          <p class="line-clamp-1 text-xs text-muted-300">
                            Paco de Lucia, John McLaughlin, Al Di Meola
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-3xl">
                      <img
                        src="/img/music/playlist-3.png"
                        class="w-full grayscale"
                        alt=""
                        width="830"
                        height="1075"
                        priority
                      />
                      <div class="absolute start-0 top-0 z-20 flex w-full items-center gap-2 p-6">
                        <span class="font-sans font-medium text-sm text-white">321 Tracks</span>
                      </div>
                      <div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div>
                      <div class="absolute bottom-0 start-0 z-20 flex w-full items-center gap-2 p-6">
                        <button
                          type="button"
                          class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted-900 text-white transition-colors duration-300 hover:enabled:bg-white hover:enabled:text-muted-900 ltablet:h-10 ltablet:w-10"
                        >
                          <Icon class="size-4" name="solar:play-bold" />
                        </button>
                        <div class="text-white">
                          <h5 class="text-white">Liked Songs</h5>
                          <p class="line-clamp-1 text-xs text-muted-300">
                            Your favorite tracks
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-3xl">
                      <img
                        src="/img/music/playlist-4.png"
                        class="w-full grayscale"
                        alt=""
                        width="830"
                        height="1075"
                        priority
                      />
                      <div class="absolute start-0 top-0 z-20 flex w-full items-center gap-2 p-6">
                        <span class="font-sans font-medium text-sm text-white">49 Tracks</span>
                      </div>
                      <div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div>
                      <div class="absolute bottom-0 start-0 z-20 flex w-full items-center gap-2 p-6">
                        <button
                          type="button"
                          class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted-900 text-white transition-colors duration-300 hover:enabled:bg-white hover:enabled:text-muted-900 ltablet:h-10 ltablet:w-10"
                        >
                          <Icon class="size-4" name="solar:play-bold" />
                        </button>
                        <div class="text-white">
                          <h5 class="text-white">Electro & Dance</h5>
                          <p class="line-clamp-1 text-xs text-muted-300">
                            Minimalist techno and dubstep
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mt-8">
                    <div class="relative">
                      <div class="mb-4">
                        <BaseHeading as="h3" size="xl" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">Recently played</BaseHeading>
                        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                          Songs you've listened to recently
                        </BaseParagraph>
                      </div>
                      <div class="space-y-2">
                        <div
                          v-for="album in albums"
                          :key="album.id"
                          class=""
                        >
                          <BaseCard rounded="lg" class="shadow-sm shadow-muted-200 dark:shadow-muted-800 p-2 flex items-center gap-3">
                            <div class="relative">
                              <img
                                class="block w-full rounded-lg size-12 grayscale"
                                :src="album.cover"
                                alt=""
                                width="500"
                                height="500"
                              />
                            </div>
                            <div class="relative">
                              <p class="line-clamp-1 text-muted-800 dark:text-muted-100">
                                {{ album.track.title }}
                              </p>
                              <p class="line-clamp-1 text-xs text-muted-400">
                                {{ album.artist.name }}
                              </p>
                            </div>
                            
                            <div class="ms-auto flex items-center justify-end gap-2">
                              <div class="px-4">
                                <BaseTag rounded="lg" variant="muted" class="text-xs">
                                  {{ album.year }}
                                </BaseTag>
                              </div>
                              <BaseButton
                                rounded="lg"
                                size="icon-sm"
                              >
                                <Icon
                                  class="h-4 w-4"
                                  name="lucide:plus"
                                />
                              </BaseButton>
                              <BaseButton
                                rounded="lg"
                                size="icon-sm"
                              >
                                <Icon
                                  class="h-4 w-4"
                                  name="solar:heart-linear"
                                />
                              </BaseButton>
                              <BaseButton
                                rounded="lg"
                                size="icon-sm"
                              >
                                <Icon
                                  class="h-4 w-4"
                                  name="solar:play-bold"
                                />
                              </BaseButton>
                            </div>
                          </BaseCard>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>