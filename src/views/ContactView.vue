<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import Y2k3 from '@/assets/svg/y2k-3.svg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const animationComplete = ref(false)

onMounted(() => {
  setTimeout(() => {
    animationComplete.value = true
  }, 500)
})

const handleEmailClick = () => {
  window.location.href =
    'mailto:reimaginatus@gmail.com?subject=Contact%20Inquiry'
}
</script>

<template>
  <div
    class="xl:flex xl:items-center xl:h-full p-4 pt-12 pb-36 xl:py-16 xl:pr-16 xl:w-[55rem] xl:scale-110"
  >
    <div class="xl:w-full">
      <!-- Header Section with Floating Elements -->
      <div class="mb-4 -mt-12 relative w-fit">
        <!-- Decorative Stars -->
        <div
          class="absolute top-[1rem] left-[15rem] xl:-top-[15] xl:-left-12 w-8 h-8 text-primary-100"
        >
          <Y2k3
            class="w-20 h-20 transform -rotate-12 animate-float fill-accent dark:fill-primary-100"
          />
        </div>
        <div class="relative top-[2rem] left-[32rem] w-8 h-8 text-primary-100">
          <Y2k3
            class="w-full h-full transform rotate-12 animate-float-delayed fill-accent dark:fill-primary-100"
          />
        </div>
        <div class="relative top-[2rem] left-[32rem] w-4 h-4 text-primary-100">
          <Y2k3
            class="w-full h-full transform rotate-45 animate-float-slow fill-accent dark:fill-primary-100"
          />
        </div>

        <span
          class="font-excelorate text-6xl xl:text-6xl font-bold text-black-100 dark:text-beige-500"
        >
          Get in Touch
        </span>
        <p class="font-orbitron text-lg text-black-300 dark:text-beige-300"></p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <!-- Email Button Section -->
        <div class="xl:col-span-8">
          <div class="bg-beige-300/50 dark:bg-beige-1100/50 rounded-3xl p-6">
            <div class="flex flex-col items-center justify-center space-y-6">
              <p
                class="text-lg font-bold text-black-100 dark:text-beige-500 text-center"
              >
                I'm always open to new opportunities and collaborations. Feel
                free to reach out to me via email.
              </p>
              <!-- Email w Icon -->
              <div class="flex items -center justify-center space-x-4">
                <FontAwesomeIcon
                  class="text-primary-100 dark:text-accent text-2xl"
                  icon="envelope"
                />
                <span class="text-xl text-black-100 dark:text-beige-500"
                  >reimaginatus@gmail.com</span
                >
              </div>
              <!-- Phone w Icon -->
              <div class="flex items -center justify-center space-x-4">
                <FontAwesomeIcon
                  class="text-primary-100 dark:text-accent text-2xl"
                  icon="phone"
                />
                <span class="text-xl text-black-100 dark:text-beige-500"
                  >+1 780-729-3298</span
                >
              </div>
              <button
                @click="handleEmailClick"
                class="bg-primary-100 dark:bg-accent text-black-100 font-excelorate py-3 px-6 rounded-full hover:shadow-neon transition-all duration-300 relative overflow-hidden w-64"
              >
                <span class="relative z-10">SEND EMAIL</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Decorative Section -->
        <div class="xl:col-span-4">
          <div
            class="bg-beige-300 dark:bg-beige-1100 rounded-3xl aspect-3/4 w-full overflow-hidden"
          >
            <KinesisContainer class="h-full">
              <KinesisElement
                :strength="20"
                class="h-full flex items-center justify-center"
              >
                <div class="transform rotate-45 scale-150">
                  <div class="grid grid-cols-3 gap-4">
                    <div
                      v-for="i in 9"
                      :key="i"
                      class="w-8 h-8 bg-primary-100 dark:bg-accent rounded-lg opacity-20"
                      :class="{ 'animate-pulse': animationComplete }"
                      :style="{ animationDelay: `${i * 0.1}s` }"
                    ></div>
                  </div>
                </div>
              </KinesisElement>
            </KinesisContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(-12deg);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.98) translateY(-10px) rotate(-50deg);
  }
  75% {
    opacity: 1.2;
    transform: scale(1.02) translateY(-6px) rotate(10deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    opacity: 1;
    transform: translateY(0) rotate(12deg);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-8px) rotate(-12deg);
  }
}

@keyframes float-slow {
  0%,
  100% {
    opacity: 1;
    transform: translateY(0) rotate(-45deg);
  }
  50% {
    opacity: 0.9;
    transform: translateY(-6px) rotate(45deg);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-slow {
  animation: float-slow 5s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
