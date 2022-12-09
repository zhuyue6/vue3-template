<template>
  <div class="container">
    <div class="logo">
      <h1>Data Analysis</h1>
    </div>
    <div>
      <el-switch
        v-model="themeDark"
        @change="changeTheme"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="MoonNight"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";
import { Sunny, MoonNight } from "@element-plus/icons-vue";
import { util } from "@/shared";
import { setTheme } from "@/themes";

interface ThemeItem {
  text: string;
  value: string;
}

interface State {
  theme: {
    value: string;
    list: ThemeItem[];
  };
}

const state: State = reactive({
  theme: {
    value: "",
    list: [
      {
        text: "暗黑",
        value: "dark",
      },
      {
        text: "明亮",
        value: "light",
      },
    ],
  },
});

const themeDark = computed<boolean>(() => state.theme.value === "dark");

function changeTheme(openDark: boolean) {
  state.theme.value = openDark ? "dark" : "light";
  setTheme(state.theme.value);
  util.setStorage("theme", state.theme.value);
}

onMounted(() => {
  const queryTheme = util.getUrlQuery("theme");
  const theme = util.getStorage("theme") ?? "dark";
  state.theme.value = theme;
  changeTheme(state.theme.value === "dark");
  if (queryTheme) state.theme.value = queryTheme;
});
</script>

<style scoped lang="scss">
@use "@/styles/common";
.container {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dcdfe6;
  @include common.flex(space-between);
  .logo {
    height: 100%;
    width: 200px;
    @include common.flex;
  }
}
</style>
