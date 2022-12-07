<template>
  <div class="container">
    <div class="filterConditionContainer">
      <div class="filterCondition" v-show="state.filterVisibile">
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
      <div v-show="!state.filterVisibile" />
      <div class="filterControl">
        <div class="filterVisibile" @click="filterVisibileSwitch">
          <el-icon :size="20">
            <Fold v-show="state.filterVisibile" />
            <Expand v-show="!state.filterVisibile" />
          </el-icon>
          <span>{{ state.filterVisibile ? '折叠' : '展开' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  import { Fold, Expand } from '@element-plus/icons-vue'

  interface State {
    filterVisibile: boolean
    terminal: {
      select: string,
      list: {
        text: string,
        value: string,
      }[]
    }
    dataRange: Date[]
  }

  const state: State = reactive({
    filterVisibile: true,
    terminal: {
      select: '',
      list: [
        {
          text: '小程序',
          value: '1'
        }, {
          text: 'h5',
          value: '2'
        }, {
          text: 'app',
          value: '3'
        }
      ]
    },
    dataRange: [
      new Date(2000, 10, 10, 10, 10),
      new Date(2000, 10, 11, 10, 10),
    ]
  })

  function filterVisibileSwitch () {
    state.filterVisibile = !state.filterVisibile
  }

</script>
<style scoped lang="less">
  .container {
    .filterConditionContainer {
      display: flex;
      justify-content: space-between;
      .filterCondition {
        display: flex;
        align-items: center;
        .dataRange {
          margin-left: 20px;
          min-width: 400px;
        }
      }
      .filterControl {
        .filterVisibile {
          cursor: pointer;
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>