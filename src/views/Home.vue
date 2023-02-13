<template>
  <div class="music-home">
    <Menu class="music-home-menu" />
    <div class="music-home-wrap">
      <router-view class="music-home-content"></router-view>
      <Footer class="music-home-footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/views/layout/menu/index.vue";
import Footer from "@/views/layout/footer/index.vue";
</script>

<style scoped lang="scss">
.music-home {
  display: flex;
  height: 100vh;
  &-menu {
    width: 180px;
    padding-left: 20px;
    background-color: #eee;
  }
  &-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &-content {
    flex: 1;
    padding: 0 12px;
  }
  &-footer {
    height: 60px;
    border-top: 1px solid #31c27c;
  }
}
</style>
