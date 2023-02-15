<template>
  <div class="footer-play">
    <div>作者：{{ playInfo }}</div>
    <div class="footer-play-btns">
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
  </div>
</template>

<script setup lang="ts">
import { GoStart, Play, PauseOne, GoEnd } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";
import { usePlayerStore } from "@/store/player";
import { toRefs, computed, watch } from "vue";

const { togglePlay, isPause, curObj } = toRefs(usePlayerStore());

const playInfo = computed(() => {
  return curObj.value.author + "-" + "123";
});

watch(
  playInfo,
  (value, oldValue) => {
    console.log("====================================");
    console.log(value, oldValue);
    console.log("====================================");
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss">
.footer-play {
  display: flex;
  align-items: center;
  &-btns {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    .btn-play {
      margin: 0 8px;
      color: #31c27c;
    }
  }
}
</style>
