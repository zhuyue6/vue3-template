<template>
  <el-container>
    <el-header v-if="hiddenHeader">
      <DAHeader />
    </el-header>
    <el-container>
      <DANavigator />
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import DAHeader from "./header.vue";
import DANavigator from "./navigator.vue";
import { util } from "@/shared";
import { ref, onMounted } from "vue";
const hiddenHeader = ref<boolean>(false);
onMounted(() => {
  hiddenHeader.value = util.getUrlQuery("hiddenModules") !== "header";
});
</script>
