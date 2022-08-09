<template>
  <div class="root">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.root {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
