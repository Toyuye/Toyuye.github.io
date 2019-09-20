<template>
  <div class="toyuye-breadcrumb-view">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Breadcrumb extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss" scoped>
.toyuye-breadcrumb-view {
  background: #fff;
  padding: 15px 20px;
}
</style>
