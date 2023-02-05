<template>
  <div class="menu-wrap" v-for="(item, index) in menusList" :key="index">
    <div class="menu-name">{{ item.name }}</div>
    <template v-if="item.children">
      <div
        class="menu-item"
        v-for="(menu, cIndex) in item.children"
        :key="cIndex"
      >
        <router-link :to="{ name: menu.key }">
          <IconPark :icon="menu.icon" />{{ menu.name }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/IconPark.vue";
import { getMenuList } from "./menuList";

const menusList = getMenuList();
</script>
<style scoped></style>
