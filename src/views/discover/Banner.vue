<template>
  <div class="banner-swiper">
    <swiper :slides-per-view="num" :grap-cursor="true" :space-between="20">
      <SwiperSlide v-for="(item, index) in banners" :key="index">
        <div class="item-img" @click="handle(item)">{{ index }}</div>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useBannerStore } from "@/store/banner";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { usePlayerStore } from "@/store/player";

const { play } = usePlayerStore();
const num = 4;

// 解构的数据具有响应式
const { banners } = storeToRefs(useBannerStore());

onMounted(async () => {
  // await fn
});

function handle({ bannerId }: { bannerId: number }) {
  play(bannerId);
}
</script>

<style scoped lang="scss">
.banner-swiper {
  width: 80vw;
  margin: 0 auto;
  .item-img {
    height: 80px;
    line-height: 80px;
    border-radius: 5px;
    text-align: center;
    background-color: #ccc;
  }
}
</style>
