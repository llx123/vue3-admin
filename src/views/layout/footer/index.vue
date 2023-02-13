<template>
  <div class="play-btns">
    <IconPark :icon="GoStart" />
    <IconPark
      :icon="isPlay ? Play : PauseOne"
      size="25"
      class="btn-play"
      @click="togglePlay"
    />
    <IconPark :icon="GoEnd" />
  </div>
</template>

<script setup lang="ts">
import { GoStart, Play, PauseOne, GoEnd } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";
import { ref } from "vue";

const isPlay = ref(false);

function togglePlay() {
  isPlay.value = !isPlay.value;
}
</script>

<style scoped lang="scss">
.play-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  .btn-play {
    color: #31c27c;
  }
}
</style>
