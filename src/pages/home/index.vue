<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <Navigator />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Navigator from "./navigator.vue";
</script>
