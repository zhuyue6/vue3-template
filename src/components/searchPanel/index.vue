<template>
  <div class="searchConditionContainer">
    <div class="searchCondition" v-show="state.searchVisibile">
      <div class="searchConditionContent">
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
    <div v-show="!state.searchVisibile" />
    <div class="searchControl">
      <div class="searchVisibile" @click="searchVisibileSwitch">
        <el-icon :size="20">
          <Fold v-show="state.searchVisibile" />
          <Expand v-show="!state.searchVisibile" />
        </el-icon>
        <span>{{ state.searchVisibile ? "折叠" : "展开" }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";

interface State {
  searchVisibile: boolean;
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
  searchVisibile: true,
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

function searchVisibileSwitch() {
  state.searchVisibile = !state.searchVisibile;
}

function search() {
  console.log("search");
}
</script>

<style scoped lang="scss">
@use "@/styles/common";
.searchConditionContainer {
  display: flex;
  @include common.flex(space-between);
  margin-bottom: 20px;
  .searchCondition {
    @include common.flex(space-between);
    flex-grow: 1;
    margin-right: 20px;
    .dataRange {
      margin-left: 20px;
      min-width: 400px;
    }
    .searchConditionContent {
      @include common.flex;
    }
  }
  .searchControl {
    @include common.flex;
    height: 32px;
    .searchVisibile {
      cursor: pointer;
      @include common.flex;
    }
  }
}
</style>
