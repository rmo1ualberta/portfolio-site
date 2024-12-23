<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, watch, nextTick } from 'vue'
import y2kArrowRight from '@/assets/svg/y2kArrowRight.svg'

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

const props = defineProps<{
  project: Project
  isOpen: boolean
  thumbnailWidth?: number
}>()

onMounted(() => {
  // Wait for next tick to allow for transition to complete
  // for both the overlay and the back button
  nextTick(() => {
    showBackButton.value = true
  })
})

const emit = defineEmits(['close'])

const showBackButton = ref(false)

const isClosing = ref(false)

const closeOverlay = () => {
  isClosing.value = true

  // Slight delay to allow close button to animate out first
  setTimeout(() => {
    emit('close')
  }, 400) // Slightly less than the transition duration
}

// Watch for changes in isOpen to reset and trigger animation
watch(
  () => props.isOpen,
  newValue => {
    if (newValue) {
      // Reset closing state and back button when overlay opens
      isClosing.value = false
      showBackButton.value = false

      // Set back button to show after a delay matching the translation
      setTimeout(() => {
        showBackButton.value = true
      }, 100)
    }
  },
)
</script>

<template>
  <div
    class="fixed inset-0 z-50 bg-transparent transition-opacity duration-300 ease-in-out flex items-center"
    :class="isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
    @click.self="closeOverlay"
  >
    <!-- Close Button -->
    <button
      @click="closeOverlay"
      class="absolute top-[9vh] p-2 rounded-tl-full rounded-bl-full bg-beige-700 dark:bg-beige-1000 z-2 h-16 w-24 right-20 shadow-inner transform transition-transform duration-500 ease-in-out"
      :style="{
        width: '60vw',
      }"
      :class="
        isClosing
          ? 'translate-x-[calc(100%+5rem)]'
          : showBackButton
            ? 'translate-x-0'
            : 'opacity-0 translate-x-full'
      "
    >
      <y2kArrowRight class="w-12 h-12 fill-black-500 dark:fill-beige-900" />
    </button>
    <div
      class="fixed right-0 h-[90vh] bg-beige-500 dark:bg-beige-1100 shadow-2xl transform transition-transform duration-500 ease-in-out rounded-tl-3xl rounded-bl-3xl overflow-y-auto"
      :style="{
        width: '60vw',
      }"
      :class="
        isClosing
          ? 'translate-x-full'
          : isOpen
            ? 'translate-x-0'
            : 'translate-x-full'
      "
    >
      <!-- Project Title & Date -->
      <div
        class="flex flex-col bg-beige-300 dark:bg-beige-1000 rounded-2xl px-6 py-4 mt-6 mb-4 mx-4"
      >
        <span
          class="font-excelorate text-4xl text-black-100 dark:text-beige-500"
        >
          {{ project.name }}
        </span>
        <span class="text-sm font-medium rounded-full w-fit">
          {{ project.date }}
        </span>
      </div>

      <div class="mx-8">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-2 mb-4">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-black-300"
          >
            {{ tag }}
          </span>
        </div>
        <!-- Project Thumbnail -->
        <div
          class="h-[40vh] overflow-hidden relative rounded-2xl"
          :style="{ backgroundColor: project.color }"
        >
          <img
            :src="project.thumbnail"
            alt="Project Thumbnail"
            class="w-full h-full object-cover object-center"
          />
        </div>
        <!-- Project Links -->
        <div v-if="project.links" class="flex gap-4 mt-6">
          <a
            v-for="link in project.links"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="px-4 py-2 rounded-full font-bold transition-all bg-accent text-black-100 hover:shadow-neon"
          >
            {{ link.name }}
          </a>
        </div>

        <div class="pb-6 font-medium">
          <!-- Description -->
          <p class="mt-4 font-bold text-black-300 dark:text-beige-700">
            {{ project.description }}
          </p>
          <!-- Extra Description -->
          <p
            v-if="project.extraDescription"
            v-html="project.extraDescription.replace(/\n/g, '<br>')"
            class="mt-4 text-black-300 dark:text-beige-700"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
