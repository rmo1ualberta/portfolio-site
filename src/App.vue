<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import logo from '@/assets/svg/logo.svg'
import BackgroundComp from './components/BackgroundComp.vue'
import VinylPlay from './components/VinylPlay.vue'

// Get current route for active state
const currentRoute = useRoute()

// Navigation routes
const routes = [
  { path: '/skills', name: 'Skills' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
] as const

// Icon components
const icons: Record<'skills' | 'projects' | 'contact', string[]> = {
  skills: ['fas', 'laptop'],
  projects: ['fas', 'folder-open'],
  contact: ['fas', 'address-book'],
}
</script>

<template>
  <div
    class="transition-all duration-300 ease-in-out bg-beige-100 dark:bg-beige-1300 md:flex md:flex-row"
  >
    <BackgroundComp />
    <!-- Nav Cluster -->
    <nav
      class="flex flex-col justify-between px-10 py-4 md:px-12 md:py-6 transition-colors duration-300 relative z-15"
    >
      <!-- Logo & Theme Toggle -->
      <div class="flex justify-between items-center">
        <logo class="w-12 h-12 p-2" />
        <VinylPlay class="hover:cursor-pointer" />
        <ThemeToggle />
      </div>
      <!-- Desktop Nav Cluster -->
      <div class="container mx-auto flex md:grid md:h-auto items-center">
        <div class="nav-links-container md:block p-6">
          <RouterLink
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="font-excelorate text-5xl font-bold inline-flex flex-col md:my-4 md:flex md:text-left relative w-fit"
            :class="
              currentRoute.path === route.path
                ? 'text-accent dark:text-primary-100 transition-colors duration-300 ease-in'
                : 'text-black-500 dark:text-beige-900 hover:text-black-300 dark:hover:text-beige-700'
            "
          >
            {{ route.name }}

            <!-- Underline Current Route -->
            <span
              class="absolute bottom-0 left-0 mt-2 w-full h-1 rounded-full bg-black-300 dark:bg-beige-300 transform origin-left transition-transform duration-300 ease-out"
              :class="
                currentRoute.path === route.path ? 'scale-x-100' : 'scale-x-0'
              "
            />
          </RouterLink>
        </div>
      </div>
      <!-- Empty div to vertically center the above nav container -->
      <div class="hidden md:flex" />
    </nav>

    <!-- Main Content -->
    <main
      class="router-view-container w-full relative z-5 lg:flex lg:justify-center"
    >
      <RouterView v-slot="{ Component }">
        <Transition
          enter-active-class="transition-all duration-500 ease-out transform"
          enter-from-class="opacity-0 translate-x-full"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-500 ease-in transform absolute top-0 w-full"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 translate-x-full"
        >
          <component :is="Component" class="absolute top-0 w-full" />
        </Transition>
      </RouterView>
    </main>

    <!-- Bottom Nav Bar for Mobile Screens -->
    <div
      class="bottom-nav-bar fixed bottom-0 left-0 right-0 bg-beige-300 dark:bg-beige-1100 drop-shadow-2xl flex justify-around p-2 md:hidden md:h-0 md:opacity-0 z-50"
    >
      <RouterLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="bottom-nav-routes text-xs tracking-widest font-excelorate flex flex-col items-center justify-center p-4 md:hidden transition-colors duration-300"
        :class="
          currentRoute.path === route.path
            ? 'text-black-200 dark:text-beige-300'
            : 'text-black-500 dark:text-beige-900'
        "
      >
        <font-awesome-icon
          :icon="
            icons[route.name.toLowerCase() as 'skills' | 'projects' | 'contact']
          "
          class="text-lg transform origin-center transition-transform duration-300"
        />
        <span
          :class="
            currentRoute.path === route.path ? 'scale-x-100' : 'scale-x-0'
          "
          >{{ route.name }}</span
        >
        <div
          class="w-full h-1 rounded-full bg-accent transform origin-left transition-transform duration-300 ease-out"
          :class="
            currentRoute.path === route.path ? 'scale-x-100' : 'scale-x-0'
          "
        />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nav-links-container a:not(.text-accent):hover {
  animation: subtle-bounce 3s ease-in-out infinite;
}

@keyframes subtle-bounce {
  0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(10px);
  }
}

/* Nav Links animation on first site load */
.nav-links-container {
  transform-origin: left center;
  transform: scaleX(0);
  animation: pop-in 0.5s ease-out forwards;
}

@keyframes pop-in {
  0% {
    transform: scaleX(0);
  }
  70% {
    transform: scaleX(1.05);
  }
  100% {
    transform: scaleX(1);
  }
}

@media (max-width: 767px) {
  .nav-links-container {
    display: none;
  }
}

@keyframes pop-in-y {
  0% {
    transform: scaleY(0);
  }
  70% {
    transform: scaleY(1.05);
  }
  100% {
    transform: scaleY(1);
  }
}

.bottom-nav-bar {
  transform-origin: bottom center;
  transform: scaleY(0);
  animation: pop-in-y 0.5s ease-out forwards;
}

.bottom-nav-routes {
  transform-origin: left center;
  transform: scaleY(0);
  animation: pop-in-y 0.5s ease-out forwards;
}

.router-view-container {
  min-height: calc(100vh - 6rem);
  overflow-y: auto;
  height: calc(100vh);
}
</style>
