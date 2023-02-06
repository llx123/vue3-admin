<template>
  <div class="music-home">
    <Menu class="music-home-menu" />
    <router-view class="music-home-content"></router-view>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/views/layout/menu/index.vue";
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
  &-content {
    flex: 1;
    padding: 0 12px;
  }
}
</style>
