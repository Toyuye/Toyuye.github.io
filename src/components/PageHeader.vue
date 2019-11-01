<template>
  <div class="page-header-warp clearfix">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :key="index" v-for="(item, index) in matchRoute">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="page-header-heading">
      <span class="page-header-heading-title">
        <slot name="headingTitle">{{ $route.meta.title }}</slot>
      </span>
      <span class="page-header-heading-extra" v-if="$slots.headingExtra">
        <slot name="headingExtra"></slot>
      </span>
    </div>
    <div class="page-header-content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="page-header-footer" v-if="$slots.headingFooter">
      <slot name="headingFooter"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "PageHeader"
})
export default class PageHeader extends Vue {
  private matchRoute: any[] = [];
  private created() {
    this.matchRoute = this["$route"].matched.map(item => {
      return { name: item.meta.title, path: item.path };
    });
  }
}
</script>
<style lang="scss" scoped>
.page-header-warp {
  margin: -20px -20px 0 -20px;
  background: #fff;
  padding: 12px 20px 16px 20px;
}
.page-header-heading {
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page-header-heading-title {
    float: left;
    margin-bottom: 0;
    padding-right: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
  }
}
.page-header-content {
  padding-top: 12px;
  overflow: hidden;
}
.page-header-footer {
  margin-top: 16px;
}
</style>
<style lang="scss">
.page-header-warp {
  .el-breadcrumb {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
