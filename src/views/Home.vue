<script setup lang="ts">
import { ref } from "vue";
const msg = ref("首页");
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
  <h2>你好</h2>
</template>

<style lang="scss">
  .green {
    color: $color-green;
  }
</style>
