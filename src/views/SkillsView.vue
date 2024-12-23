<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Y2k3 from '@/assets/svg/y2k-3.svg'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

interface Skill {
  name: string
  proficiency: number
}

const frameworks = ref<string[]>([
  'Vue.js',
  'Django',
  'React/React Native',
  'Android',
  'Node.js',
  'Tailwind CSS',
  'Google Cloud/Firebase',
  'Heroku',
  'Netlify',
])

const skills = ref<Skill[]>([
  { name: 'Adobe', proficiency: 97, currentWidth: 0 },
  { name: 'Figma', proficiency: 77, currentWidth: 0 },
  { name: 'Python', proficiency: 55, currentWidth: 0 },
  { name: 'JavaScript', proficiency: 40, currentWidth: 0 },
  { name: 'CSS', proficiency: 35, currentWidth: 0 },
  { name: 'C/C++', proficiency: 35, currentWidth: 0 },
])

const socialLinks = [
  { icon: ['fab', 'linkedin-in'], url: 'https://github.com/rmo1ualberta' },
  {
    icon: ['fab', 'github'],
    url: 'https://www.linkedin.com/in/raymond-mo-89b036177/',
  },
]

onMounted(() => {
  // Add a small delay before starting the animation
  setTimeout(() => {
    skills.value.forEach((skill, index) => {
      // Stagger the animations
      setTimeout(() => {
        animateBar(skill)
      }, index * 200) // 200ms delay between each bar
    })
  }, 300) // 300ms initial delay
})

const animateBar = (skill: Skill) => {
  const duration = 300 // Animation duration in milliseconds
  const steps = 60 // Number of steps in the animation (60 = smooth at 60fps)
  const increment = skill.proficiency / steps
  const stepDuration = duration / steps

  let currentStep = 0

  const animation = setInterval(() => {
    if (currentStep >= steps) {
      clearInterval(animation)
      skill.currentWidth = skill.proficiency
      return
    }

    skill.currentWidth += increment
    currentStep++
  }, stepDuration)
}
</script>

<template>
  <div
    class="xl:flex xl:items-center p-4 mt-12 pb-36 xl:py-16 xl:pr-16 xl:w-[55rem] xl:p-16"
  >
    <div class="xl:w-full">
      <!-- Header Section -->
      <div class="mb-12 -mt-12 relative w-fit">
        <!-- Stars with added twinkle classes -->
        <div
          class="absolute -top-[15] left-80 xl:-top-[15] xl:-left-12 w-8 h-8 text-primary-100"
        >
          <Y2k3
            class="w-20 h-20 transform -rotate-12 animate-float fill-accent dark:fill-primary-100"
          />
        </div>
        <div class="relative top-[7rem] left-[6.5rem] w-8 h-8 text-primary-100">
          <Y2k3
            class="w-full h-full transform rotate-12 animate-float-delayed fill-accent dark:fill-primary-100"
          />
        </div>
        <div
          class="relative top-[6.6rem] left-[6.5rem] w-4 h-4 text-primary-100"
        >
          <Y2k3
            class="w-full h-full transform rotate-45 animate-float-slow fill-accent dark:fill-primary-100"
          />
        </div>

        <h1
          class="font-excelorate text-6xl xl:text-6xl font-bold text-black-100 dark:text-beige-500 mb-2"
        >
          Raymond<br />Mo
        </h1>
        <p class="font-orbitron text-lg text-black-300 dark:text-beige-300">
          Graphic Designer | UX/UI | Full-Stack Developer
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div class="xl:col-span-4 relative">
          <!-- Avatar -->
          <div
            class="bg-beige-300 dark:bg-beige-1100 rounded-3xl aspect-3/4 w-full"
          >
            <!-- Avatar for Desktop, parallax on move -->
            <kinesis-container class="hidden xl:flex">
              <kinesis-element :strength="10">
                <img
                  src="@/assets/img/avatar.png"
                  alt="Raymond Mo"
                  class="scale-110"
                />
              </kinesis-element>
            </kinesis-container>
            <!-- Avatar for Mobile, parallax on scroll -->
            <kinesis-container event="scroll" class="xl:hidden">
              <kinesis-element :strength="50">
                <img
                  src="@/assets/img/avatar.png"
                  alt="Raymond Mo"
                  class="scale-110"
                />
              </kinesis-element>
            </kinesis-container>
          </div>
          <!-- Social Links -->
          <div class="flex flex-wrap gap-4 mt-4 align-middle items-center">
            <a
              v-for="link in socialLinks"
              :key="link.icon[1]"
              :href="link.url"
              class="max-w-[46.5%] h-fit bg-beige-300 dark:bg-beige-1100 px-4 py-2 rounded-full text-black-300 dark:text-beige-300 hover:shadow-neon transition-shadow duration-300 hover:shadow-accent"
            >
              <font-awesome-icon :icon="link.icon" />
            </a>
            <!-- Resume Button -->
            <div class="flex justify-end w-full">
              <a
                class="w-full text-center bg-primary-100 dark:bg-accent text-black-100 dark:text-black-100 font-excelorate py-2 px-4 rounded-full hover:shadow-neon transition-all ease-in-out duration-300"
                href="./resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="xl:col-span-8">
          <h2
            class="font-orbitron text-lg font-bold text-black-100 dark:text-beige-500 mb-6 bg-beige-700 dark:bg-beige-1100 rounded-full px-4 py-2"
          >
            Skills:
          </h2>
          <div class="bg-beige-300/50 dark:bg-beige-1100/50 rounded-3xl p-6">
            <div class="space-y-6">
              <div
                v-for="(skill, index) in skills"
                :key="index"
                class="space-y-2"
              >
                <div class="flex justify-between items-center">
                  <span
                    class="font-orbitron text-black-300 dark:text-beige-500"
                  >
                    {{ skill.name }}
                  </span>
                </div>
                <div
                  class="h-2 bg-beige-500 dark:bg-beige-900 rounded-full overflow-hidden"
                >
                  <div
                    class="h-full bg-primary-100 dark:bg-accent transition-all duration-500 ease-out rounded-full"
                    :style="{ width: `${skill.currentWidth}%` }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frameworks Section -->
        <div class="xl:col-span-12 overflow-x-auto">
          <div class="flex flex-wrap gap-2 justify-between">
            <div
              v-for="(framework, index) in frameworks"
              :key="index"
              class="flex bg-beige-300 dark:bg-beige-1100 px-4 py-2 rounded-full text-black-300 dark:text-beige-700 text-xs w-fit h-fit"
            >
              {{ framework }}
            </div>
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

/* New twinkle animations */
@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(-12deg);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.95) rotate(-12deg);
  }
  75% {
    opacity: 1.2;
    transform: scale(1.05) rotate(-12deg);
  }
}

@keyframes twinkle-delayed {
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(12deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.9) rotate(12deg);
  }
  75% {
    opacity: 1.2;
    transform: scale(1.1) rotate(12deg);
  }
}

@keyframes twinkle-slow {
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(45deg);
  }
  50% {
    opacity: 0.9;
    transform: scale(0.95) rotate(45deg);
  }
  75% {
    opacity: 1.1;
    transform: scale(1.05) rotate(45deg);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

/* Animation classes */
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
