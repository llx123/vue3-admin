<template>
  <div class="menu-wrap" v-for="(item, index) in menusList" :key="index">
    <div class="menu-name">{{ item.name }}</div>
    <template v-if="item.children">
      <div
        class="menu-item"
        v-for="(menu, cIndex) in item.children"
        :key="cIndex"
      >
        <router-link :to="{ name: menu.key }" class="menu-link">
          <IconPark :icon="menu.icon" />
          <span class="icon-name">{{ menu.name }}</span>
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
<style scoped lang="scss">
.menu-name {
  margin: 20px 0;
}
.menu-item {
  .menu-link {
    height: 30px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  .active {
    background-color: #31c27c;
    color: #ffffff;
  }
  .icon-name {
    padding-left: 5px;
  }
}
</style>
