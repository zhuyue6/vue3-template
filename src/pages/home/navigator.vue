<template>
  <el-aside class="asideContainer">
    <el-menu :default-active="route.path" :router="true">
      <template v-for="item of menus">
        <template v-if="item.children && item.children.length > 0">
          <component :is="ElSubMenu" :index="item.key" :key="item.key">
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              :key="childItem.path"
              :index="childItem.path"
              v-for="childItem of item.children"
            >
              <el-icon v-if="item.icon">
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </component>
        </template>
        <template v-else>
          <component :is="ElMenuItem" :index="item.path" :key="item.path">
            <el-icon v-if="item.icon">
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
          </component>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { DataLine } from "@element-plus/icons-vue";
import { ElMenuItem, ElSubMenu } from "element-plus";
import { type Component } from "vue";
import { useRoute } from "vue-router";

interface Menu {
  title: string;
  path?: string;
  key?: string;
  icon?: Component;
  active?: boolean;
  children?: Menu[];
}

const route = useRoute();

const menus: Menu[] = [
  {
    title: "页面分析",
    path: "/home",
    icon: DataLine,
  },
];
</script>

<style scoped>
.asideContainer {
  padding-top: 2px;
}
</style>
