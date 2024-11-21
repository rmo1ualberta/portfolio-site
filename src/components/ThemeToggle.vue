<template>
  <button
    @click="toggleTheme"
    class="items-center p-2 w-12 h-12 rounded-full flex justify-center hover:scale-110 bg-beige-300 dark:bg-beige-1100 shadow-sm transition-all duration-300 ease-in-out hover:shadow-neon"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <!-- <span class="block dark:hidden transition-opacity duration-300">🌙</span>
    <span class="hidden dark:block transition-opacity duration-300">☀️</span> -->
    <font-awesome-icon
      :icon="isDark ? faSun : faMoon"
      class="text-black-500 dark:text-beige-700 transition-transform duration-300"
    />
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { isDark, toggleTheme } = useTheme()
</script>
