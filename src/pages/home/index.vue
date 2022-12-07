<template>
  <el-container>
    <el-header v-if="util.getUrlQuery('hiddenModules') !== 'header'">
      <DAHeader />
    </el-header>
    <el-container>
      <DANavigator />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import DAHeader from "./header.vue";
  import DANavigator from "./navigator.vue";
  import { util } from '@/shared'
</script>
