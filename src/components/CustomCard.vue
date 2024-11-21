<template>
  <div
    class="rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out"
  >
    <h3
      class="text-xl font-semibold mb-4 text-gray-800 dark:text-white transition-colors duration-300"
    >
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 transition-colors duration-300">
      {{ content }}
    </p>
    <button
      class="mt-4 px-4 py-2 rounded-md bg-primary hover:bg-primary-dark text-white transition-all duration-300"
      @click="onClick"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  content: string
  buttonText: string
}

interface Emits {
  (e: 'click'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const onClick = () => {
  emit('click')
}
</script>
