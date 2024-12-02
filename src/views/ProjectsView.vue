<script setup lang="ts">
import { ref, onMounted, computed, onUpdated, onUnmounted } from 'vue'
import Flicking from '@egjs/vue3-flicking'
import { Arrow, Pagination } from '@egjs/flicking-plugins'
import y2kArrowBasicLeft from '@/assets/svg/y2kArrowBasicLeft.svg'
import y2kArrowBasicRight from '@/assets/svg/y2kArrowBasicRight.svg'
import '@egjs/flicking-plugins/dist/pagination.css'
import ProjectDetailsOverlay from '@/components/ProjectDetailsOverlay.vue'

const Projects = <Project[]>[
  {
    name: 'uniONE',
    description:
      'Connect with like-minded-peers and pursue your passions with uniONE.',
    extraDescription:
      "uniONE is a social platform that connects students with similar interests and passions \
      by matching students based on their specified interests and hobbies. In addition, matching is \
      done off of available time slots that can be auto generated based on the user’s class schedule found \
      in their Google Calendar. Once matched, students can meet up at the auto-generated location that uses\
      Google Maps API to choose a safe, and available store/restaurant near campus. A unique 'playing card' \
      is created for each successful match, and is used for students to identify each other. \n\n\n \
      I had the opportunity to work on both the front-end and back-end of this project. On the front-end, \
      I designed the UI/UX of the app using Figma, and was the main supervisor in implementing \
      the design using React Native and Expo, ensuring that both Android and iOS apps worked with parity. \
      For the back-end, I pushed for Test-Driven-Development to \
      the team and implemented some end points using Django. I also helped set up the Google Cloud Platform \
      and OAuth2 to only allow users to sign in with Google and whitelisted university emails.",
    thumbnail: './img/projects/unione.jpg',
    color: '#d77d4d',
    textColor: '#040d19',
    tags: [
      'React Native',
      'Django',
      'Expo',
      'Google Cloud',
      'OAuth2',
      'Google Maps API',
      'TDD',
    ],
    links: [
      { name: 'Website', url: 'https://unione.cc' },
      {
        name: 'Video Demo',
        url: 'https://www.youtube.com/watch?v=GjZJ43cEKqQ',
      },
    ],
    date: 'Jan 2023 - Apr 2023',
  },
  {
    name: 'Habit Tracker',
    description: 'A simple yet elegant habit tracker app',
    extraDescription:
      "Habit Tracker is an Android application that allows users to track their habits. \
      Users can create, edit, and delete habits, and track their progress. The app also includes a social aspect\
      where users can follow and view other's progress on their habits, as well as share milestones in their habits. \
      I was responsible for mainly designing and implementing the front-end of the app, \
      which included writing the Java code to interact with the database. \
      I also wrote the Espresso UI tests to ensure that the app was functioning correctly.\
      Scrum was used as the project management methodology, and the project was developed using Android Studio and\
      Firebase Realtime Database.",
    thumbnail: './img/projects/HabitTrackerBanner.png',
    color: '#3aed7c',
    textColor: '#1f3c68',
    tags: ['Android Studio', 'Java', 'Firebase', 'SQLite', 'Esspresso'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/CMPUT301F21T26/Habit-Tracker',
      },
      {
        name: 'Wiki',
        url: 'https://github.com/CMPUT301F21T26/Habit-Tracker/wiki',
      },
    ],
    date: 'Aug 2021 - Dec 2021',
  },
  {
    name: 'SocialDistribution',
    description:
      'Connect, share, and grow with SocialDistribution, the peer-to-peer connection platform!',
    extraDescription:
      'SocialDistribution is a social media platform that allows users to connect with others, share their \
      thoughts, and grow their network. Users can create posts, follow other users, and like and comment on posts. \
      The platform also includes a search feature that not only allows users to search for other users, but also \
      users on other instances of SocialDistribution, as well as interacting with their posts. \
      Essentially, it is an alternative to Twitter. \n\n \
      I had my hands in both the front-end and back-end of this project. \
      It was my first time diving into React and Django, but I was able to pick it up quickly and ended up overseeing \
      the front-end and back-end development. In the front-end, I designed the UI/UX of the app using Figma, and \
      implemented the design using React with Bootstrap components for quick development. \
      Communication between the front-end and back-end was done using Axios. \
      For the back-end, I implemented the RESTful API using Django, and set up the PostgreSQL database. \
      A key feature of this project was to connect to other instances of SocialDistribution created by other teams, \
      in which I was a key player in coordinating with other teams to ensure that our instances could communicate with each other. \
      The project was deployed on Heroku for the REST API and Netlify for the front-end.',
    thumbnail: './img/projects/SocialDistribution.png',
    color: '#222836',
    textColor: '#fcc172',
    tags: [
      'React',
      'Django',
      'PostgreSQL',
      'Heroku',
      'Netlify',
      'Bootstrap',
      'Axios',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/rmo1ualberta/mondaylab-cmput404-project',
      },
      {
        name: 'Video Demo',
        url: 'https://www.youtube.com/watch?v=ooGCXph3O64',
      },
    ],
    date: 'Aug 2022 - Dec 2022',
  },
  {
    name: 'University of Alberta Golden Bears Football',
    description:
      'Created Social Media and merch graphics for the University of Alberta Golden Bears Football team.',
    thumbnail: './img/projects/gbf.png',
    color: '#025935',
    textColor: '#f8b724',
    tags: ['Adobe Illustrator', 'Adobe Photoshop'],
    links: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/uabearsfootball/',
      },
    ],
    date: 'Aug 2022 - Present',
  },
  {
    name: 'Edmonton Stingers',
    description:
      'Created banners that were displayed at the Edmonton Stingers locker room.',
    thumbnail: './img/projects/stingers.png',
    color: '#0c153a',
    textColor: '#fed12e',
    tags: ['Adobe Illustrator', 'Adobe Photoshop'],
    date: 'Jun 2021',
  },
  {
    name: 'Edmonton Wildcats',
    description:
      'Created various graphics (social media, print, home tickets, etc.) for the Edmonton Wildcats Football team.',
    thumbnail: './img/projects/EW.png',
    color: '#182e71',
    textColor: '#dee3f1',
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    links: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/edmontonwildcats/',
      },
    ],
    date: 'Apr 2020 - Present',
  },
  {
    name: 'Harry Ainlay High School Athletics (EPSB)',
    description:
      "Created various graphics for Harry Ainlay High School's Athletics department, including social media graphics, and posters which were hung up around the school gym.",
    thumbnail: './img/projects/ainlay.png',
    color: '#1c62d5',
    textColor: '#e2eaf1',
    tags: ['Adobe Illustrator', 'Adobe Photoshop'],
    links: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/harryainlayathletics/',
      },
      {
        name: 'Website',
        url: 'https://sites.google.com/epsb.ca/ainlayathletics/home',
      },
    ],
    date: 'Sep 2018 - Present',
  },
  {
    name: 'Howlin Good Farms',
    description:
      'Designed a brand identity for Howlin Good Farms, a farm in California that grew finger limes. This included a logo, and packaging design that was used for their products.',
    thumbnail: './img/projects/HowlinGood.png',
    color: '#31542c',
    textColor: '#c07847',
    tags: ['Adobe Illustrator'],
    date: 'July 2022 - Oct 2022',
  },
]

// Attempt to preload images to prevent flickering
const preloadImages = () => {
  Projects.forEach(project => {
    const img = new Image()
    img.src = project.thumbnail
  })
}

onMounted(preloadImages)

interface Project {
  name: string
  description: string
  extraDescription?: string
  thumbnail: string
  color: string
  textColor: string
  tags?: string[]
  links?: { name: string; url: string }[]
  date?: string
}

const currentProjectIndex = ref(0)
const currentProject = ref<Project>(Projects[0])
const currentProjectMobile = computed(() => Projects[currentProjectIndex.value])

const plugins = [new Arrow(), new Pagination()]

const onChange = (e: { index: number }) => {
  // Update the current project when the carousel changes
  // so that the details are updated
  currentProjectIndex.value = e.index
}

// Desktop Project Details overlay
const isProjectOverlayOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const openProjectOverlay = (project: Project) => {
  selectedProject.value = project
  isProjectOverlayOpen.value = true
}

const closeProjectOverlay = () => {
  isProjectOverlayOpen.value = false
}

const thumbnailWidth = ref(0)

const updateThumbnailWidth = () => {
  const thumbnailElement = document.querySelector(
    '.project-thumbnail',
  ) as HTMLElement
  if (thumbnailElement) {
    thumbnailWidth.value = thumbnailElement.offsetWidth
  }
}

onMounted(() => {
  updateThumbnailWidth()
  window.addEventListener('resize', updateThumbnailWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateThumbnailWidth)
})
</script>

<template>
  <div class="w-full h-full">
    <!-- Desktop -->
    <div class="hidden lg:flex relative my-6 scale-[90%]">
      <!-- Project List -->
      <div
        class="flex flex-col gap-4 relative z-10 ml-8 w-[30rem] min-w-[30rem]"
      >
        <div
          v-for="(project, index) in Projects"
          :key="project.name"
          class="w-full relative flex flex-col gap-2 px-6 py-2 bg-beige-300 dark:bg-beige-1100 cursor-pointer ease-in-out rounded-full"
          :style="[
            currentProject.name === project.name
              ? {
                  backgroundColor: project.color,
                  transform: 'translateX(-1rem) scale(1.05)',
                }
              : {},
            {
              transition: `all 200ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 10}ms`,
              animationDelay: `${index * 100}ms`,
            },
          ]"
          @mouseenter="currentProject = project"
          @click="openProjectOverlay(project)"
        >
          <!-- Extension div that goes under the thumbnail -->
          <div
            class="absolute top-0 bottom-0 left-0 -z-10 transition-all duration-200 rounded-full"
            :style="
              currentProject.name === project.name
                ? thumbnailWidth
                  ? {
                      backgroundColor: project.color,
                      right: `calc((${thumbnailWidth}px * -1) + 2.5rem)`,
                    }
                  : {}
                : {}
            "
          ></div>

          <span
            class="text-lg font-bold text-black-100 dark:text-beige-500 transition-colors duration-200 relative"
            :style="
              currentProject.name === project.name
                ? { color: project.textColor }
                : {}
            "
          >
            {{ project.name }}
          </span>
        </div>
      </div>

      <!-- Project Thumbnail -->
      <div
        class="bg-beige-700 rounded-2xl overflow-hidden relative z-20 -right-10 h-[95vh] w-[70vw] project-thumbnail"
        :style="{ backgroundColor: currentProject.color }"
      >
        <Transition name="fade" mode="out-in" :duration="300">
          <img
            :key="currentProject.name"
            :src="currentProject.thumbnail"
            alt="Project Thumbnail"
            class="w-full h-full object-cover object-[5.7%]"
            draggable="false"
          />
        </Transition>
      </div>
    </div>

    <!-- Project Details Overlay -->
    <ProjectDetailsOverlay
      v-if="selectedProject"
      :project="selectedProject"
      :is-open="isProjectOverlayOpen"
      :thumbnail-width="thumbnailWidth"
      @close="closeProjectOverlay"
    />

    <!-- Mobile -->

    <div class="relative w-full h-full py-8 lg:hidden">
      <Flicking
        :options="{
          circular: true,
          align: 'center',
          deceleration: 0.0075,
          easing: x => x,
          threshold: 50,
        }"
        @changed="onChange"
        :plugins="plugins"
        class="w-full flex-shrink-0 relative z-20"
      >
        <div
          v-for="(project, index) in Projects"
          :key="index"
          class="flex-shrink-0 w-[calc(100%-2rem)] h-[15rem] aspect-video rounded-2xl overflow-hidden mx-[32px]"
          :style="{
            backgroundColor: project.color,
            color: project.textColor,
          }"
        >
          <img
            :src="project.thumbnail"
            alt="Project Thumbnail"
            draggable="false"
            class="w-full h-full object-cover object-center relative z-30"
          />
        </div>
        <template #viewport>
          <div
            class="flicking-arrow-prev absolute z-10 top-1/2 left-1 transform -translate-y-1/2 fill-accent w-10 h-10 rounded-full p-2 transition-colors duration-300"
            :style="{
              fill: currentProjectMobile.textColor,
              backgroundColor: currentProjectMobile.color,
              opacity: 0.85,
            }"
          >
            <y2kArrowBasicLeft class="-translate-x-[2px]" />
          </div>
          <div
            class="flicking-arrow-next absolute z-10 top-1/2 right-1 transform -translate-y-1/2 fill-accent w-10 h-10 rounded-full p-2 transition-colors duration-300"
            :style="{
              fill: currentProjectMobile.textColor,
              backgroundColor: currentProjectMobile.color,
              opacity: 0.85,
            }"
          >
            <y2kArrowBasicRight class="translate-x-[2px]" />
          </div>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>

      <!-- Glow Element Positioned Just Below -->
      <div
        class="absolute left-1/2 transform -translate-x-1/2 -translate-y-24 blur-2xl rounded-full aspect-square z-10 w-[70%] h-[10%] transition-colors duration-300"
        :style="{
          zIndex: 1,
          backgroundColor: currentProjectMobile.color,
        }"
      ></div>

      <!-- Project Links -->
      <div
        v-if="currentProjectMobile.links"
        class="flex justify-center gap-4 mt-4 relative z-20"
      >
        <a
          v-for="link in currentProjectMobile.links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="px-4 py-2 bg-accent/80 rounded-full hover:shadow-neon transition text-black-100 font-bold"
        >
          {{ link.name }}
        </a>
      </div>
      <div v-else class="mt-14" />

      <!-- Project Details -->
      <div class="w-full p-4 rounded-lg text-center relative z-20">
        <h2 class="text-2xl font-bold mb-2">
          {{ currentProjectMobile.name }}
        </h2>
        <p
          class="font-semibold text-xs mb-4 bg-beige-300 dark:bg-beige-900 text-black-300 dark:text-beige-500 rounded-full py-1 px-3 pt-2 w-fit mx-auto"
        >
          {{ currentProjectMobile.date }}
        </p>
        <!-- Project Meta -->
        <div class="mb-4 mt-4">
          <div class="flex flex-wrap justify-center gap-2 mt-2">
            <span
              v-for="tag in currentProjectMobile.tags"
              :key="tag"
              class="px-2 py-1 bg-primary-100/50 rounded-full text-xs text-black-300 dark:text-beige-300 tracking-tight leading-5"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <p class="mb-4 text-black-300 dark:text-beige-700">
          {{ currentProjectMobile.description }}
        </p>

        <p
          v-if="currentProjectMobile.extraDescription"
          v-html="currentProjectMobile.extraDescription.replace(/\n/g, '<br>')"
          class="mt-4 pb-4 text-black-300 dark:text-beige-700"
        ></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
