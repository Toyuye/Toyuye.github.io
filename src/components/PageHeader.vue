<template>
  <div class="page-header-warp">
    <el-breadcrumb>
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
export default class PageHeader extends Vue {}
</script>
<style lang="scss" scoped>
.page-header-warp {
  margin: -20px;
  background: #fff;
  padding: 12px 20px 16px 20px;
}
</style>
<style lang="scss">
.page-header-warp {
  .el-breadcrumb {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
