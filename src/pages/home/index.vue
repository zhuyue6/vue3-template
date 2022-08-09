<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside>
        <el-menu
          default-active="/home"
          :router="true"
        >
          <el-menu-item index="/home">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>Navigator One</span>
          </el-menu-item>
          <el-menu-item index="/home/about">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>

</style>