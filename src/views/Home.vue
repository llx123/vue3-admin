<template>
  <div class="music-home">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/views/layout/menu/index.vue";
</script>

<style scoped lang="scss">
.music-home {
  display: flex;
}
</style>
