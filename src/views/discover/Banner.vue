<template>
  <div class="banner-swiper">
    <swiper :slides-per-view="num" :grap-cursor="true">
      <SwiperSlide>111</SwiperSlide>
      <SwiperSlide>222</SwiperSlide>
      <SwiperSlide>333</SwiperSlide>
      <SwiperSlide>444</SwiperSlide>
      <SwiperSlide>555</SwiperSlide>
      <SwiperSlide>666</SwiperSlide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const num = 4
</script>

<style scoped lang="scss">
.banner-swiper {
  width: 80vw;
  margin: 0 auto;
}
</style>
