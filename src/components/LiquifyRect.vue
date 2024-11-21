<script setup lang="ts">
import { ref } from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

interface MarbleProps {
  width?: number
  height?: number
  cellSize?: number
  colors?: string[]
}

const props = withDefaults(defineProps<MarbleProps>(), {
  width: 800,
  height: 600,
  cellSize: 40, // Size of each interactive cell
  colors: () => ['#000000', '#41E9B5', '#00B4D8', '#F5EBB3'],
})

// Create a grid of elements that will move independently
const createGrid = () => {
  const grid = []
  const cols = Math.ceil(props.width / props.cellSize)
  const rows = Math.ceil(props.height / props.cellSize)

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid.push({
        id: `cell-${x}-${y}`,
        x: x * props.cellSize,
        y: y * props.cellSize,
        strength: Math.random() * 0.3 + 0.2, // Random movement strength
        transformOrigin: `${x * props.cellSize + props.cellSize / 2}px ${y * props.cellSize + props.cellSize / 2}px`,
      })
    }
  }
  return grid
}

const grid = ref(createGrid())
</script>

<template>
  <div
    class="relative overflow-hidden"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <kinesis-container :event="'move'" :duration="50" class="absolute inset-0">
      <div
        class="absolute inset-0"
        :style="{
          background: `linear-gradient(45deg, ${colors.join(', ')})`,
        }"
      />

      <!-- Create overlapping cells that move independently -->
      <kinesis-element
        v-for="cell in grid"
        :key="cell.id"
        :strength="cell.strength"
        :transformOrigin="cell.transformOrigin"
        type="translate"
        :axis="'both'"
        class="absolute backdrop-blur-sm mix-blend-overlay"
        :style="{
          left: `${cell.x}px`,
          top: `${cell.y}px`,
          width: `${cellSize * 1.5}px`,
          height: `${cellSize * 1.5}px`,
          background: `linear-gradient(45deg, ${colors.join(', ')})`,
          opacity: '0.5',
        }"
      />
    </kinesis-container>
  </div>
</template>

<style scoped>
.kinesis-container {
  perspective: 1000px;
}

.kinesis-element {
  transition: transform 0.1s ease-out;
}
</style>
