import { ref, watch, type Ref } from 'vue'

interface ThemeComposable {
  isDark: Ref<boolean>
  toggleTheme: () => void
}

export const useTheme = (): ThemeComposable => {
  const isDark = ref<boolean>(localStorage.getItem('theme') === 'dark')

  const applyTheme = (dark: boolean): void => {
    // Add transition class before changing theme
    document.documentElement.classList.add('transition-colors')
    document.documentElement.classList.add('duration-300')

    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Initialize theme
  applyTheme(isDark.value)

  // Watch for theme changes
  watch(isDark, (newValue: boolean) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
    applyTheme(newValue)
  })

  const toggleTheme = (): void => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
