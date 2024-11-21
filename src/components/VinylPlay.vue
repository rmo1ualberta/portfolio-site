<template>
  <kinesis-container :audio="you_can_say_hi" :playAudio="isPlaying">
    <kinesis-audio :audioIndex="26" type="rotate" :strength="10">
      <kinesis-element type="rotate" :strength="10">
        <img
          class="w-12 h-12"
          src="../assets/svg/vinyl.svg"
          alt="Vinyl record"
          @click="changeState"
          :class="isPlaying ? 'animate-spin' : ''"
        />
      </kinesis-element>
    </kinesis-audio>
  </kinesis-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { KinesisContainer, KinesisElement, KinesisAudio } from 'vue-kinesis'
import lightswitch from '@/assets/audio/lightswitch.mp3'
import you_can_say_hi from '@/assets/audio/you_can_say_hi.mp3'

const isPlaying = ref<boolean>(false)

const changeState = (): void => {
  isPlaying.value = !isPlaying.value
}
</script>
