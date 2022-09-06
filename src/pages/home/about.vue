<template>
  <div>about {{ store.count }}</div>
  <el-button @click="store.increment">+1</el-button>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/store";
const store = useHomeStore();
</script>
