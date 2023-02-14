<template>
  <div class="play-btns">
    <IconPark :icon="GoStart" />
    <IconPark
      :icon="isPause ? Play : PauseOne"
      size="25"
      theme="filled"
      class="btn-play"
      @click="togglePlay"
    />
    <IconPark :icon="GoEnd" />
  </div>
</template>

<script setup lang="ts">
import { GoStart, Play, PauseOne, GoEnd } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";
import { usePlayerStore } from "@/store/player";
import { toRefs } from "vue";


const { togglePlay, isPause } = toRefs(usePlayerStore());
</script>

<style scoped lang="scss">
.play-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  .btn-play {
    margin: 0 8px;
    color: #31c27c;
  }
}
</style>
