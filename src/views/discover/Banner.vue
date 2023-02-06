<template>
  <swiper slides-per-view="auto" :grap-cursor="true">
    <SwiperSlide>111</SwiperSlide>
    <SwiperSlide>222</SwiperSlide>
    <SwiperSlide>333</SwiperSlide>
    <SwiperSlide>444</SwiperSlide>
    <SwiperSlide>555</SwiperSlide>
    <SwiperSlide>666</SwiperSlide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<style scoped lang="scss"></style>
