<template>
  <div class="banner-swiper">
    <swiper :slides-per-view="num" :grap-cursor="true">
      <SwiperSlide v-for="(item, index) in banners" :key="index">
        {{ index }}
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useBannerStore } from "@/store/banner";

const num = 4;

const { banners } = useBannerStore();
</script>

<style scoped lang="scss">
.banner-swiper {
  width: 80vw;
  margin: 0 auto;
}
</style>
