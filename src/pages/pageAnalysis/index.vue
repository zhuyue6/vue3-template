<template>
  <div class="container">
    <div class="filterConditionContainer">
      <div class="filterCondition" v-show="state.filterVisibile">
        <div class="filterConditionContent">
          <el-select v-model="state.terminal.select" placeholder="选择终端">
            <el-option
              v-for="item in state.terminal.list"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            />
          </el-select>
          <div class="dataRange">
            <el-date-picker
              v-model="state.dataRange"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
            />
          </div>
        </div>
        <el-button type="primary" size="small" @click="search">搜索</el-button>
      </div>
      <div v-show="!state.filterVisibile" />
      <div class="filterControl">
        <div class="filterVisibile" @click="filterVisibileSwitch">
          <el-icon :size="20">
            <Fold v-show="state.filterVisibile" />
            <Expand v-show="!state.filterVisibile" />
          </el-icon>
          <span>{{ state.filterVisibile ? "折叠" : "展开" }}</span>
        </div>
      </div>
    </div>
    <DATable />
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";
import DATable from "./table.vue";

interface State {
  filterVisibile: boolean;
  terminal: {
    select: string;
    list: {
      text: string;
      value: string;
    }[];
  };
  dataRange: Date[];
}

const state: State = reactive({
  filterVisibile: true,
  terminal: {
    select: "",
    list: [
      {
        text: "小程序",
        value: "1",
      },
      {
        text: "h5",
        value: "2",
      },
      {
        text: "app",
        value: "3",
      },
    ],
  },
  dataRange: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
});

function filterVisibileSwitch() {
  state.filterVisibile = !state.filterVisibile;
}

function search() {
  console.log("search");
}
</script>
<style scoped lang="scss">
.container {
  .filterConditionContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .filterCondition {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      margin-right: 20px;
      .dataRange {
        margin-left: 20px;
        min-width: 400px;
      }
      .filterConditionContent {
        display: flex;
        align-items: center;
      }
    }
    .filterControl {
      display: flex;
      align-items: center;
      height: 32px;
      .filterVisibile {
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
