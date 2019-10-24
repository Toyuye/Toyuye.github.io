<template>
  <div class="min-height-view">
    <el-container class="min-height-view">
      <div class="toyuye-layout-left min-height-view">
        <el-aside :width="isCollapse ? '64px' : '256px'">
          <Aside :isCollapse="isCollapse"></Aside>
        </el-aside>
      </div>
      <div
        class="toyuye-layout-right"
        :style="{
          width: isCollapse ? 'calc(100% - 256px)' : 'calc(100% - 64px)'
        }"
      >
        <el-header height="64px">
          <Header
            :isCollapse="isCollapse"
            @sendIsCollaps="getIsCollaps"
          ></Header>
        </el-header>
        <el-main>
          <app-main></app-main>
          <el-footer height="auto">
            <Footer></Footer>
          </el-footer>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { throttle } from "../../utils";
import AppMain from "./AppMain.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Aside from "./Aside.vue";
@Component({
  components: {
    AppMain,
    Footer,
    Header,
    Aside
  }
})
export default class Layout extends Vue {
  @Provide() isCollapse: Boolean = false;
  public mounted(): void {
    this.onresizeFn();
  }
  /**
   * getIsCollaps
   */
  public getIsCollaps(val: Boolean) {
    this.isCollapse = val;
  }
  /**
   * onresizeFn
   */
  public onresizeFn(): void {
    this.isCollapseFn();
    window.addEventListener("resize", throttle(this.isCollapseFn, 200));
  }
  /**
   * isCollapseFn
   */
  public isCollapseFn(): void {
    document.documentElement.clientWidth <= 1280
      ? (this.isCollapse = true)
      : (this.isCollapse = false);
  }
}
</script>
<style lang="scss">
.el-submenu__title {
  height: 40px;
  line-height: 40px;
}
.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
.el-menu-item-group__title {
  padding: 0 20px;
}
.el-aside {
  width: 256px;
  box-shadow: rgba(0, 21, 41, 0.35) 2px 0px 6px;
  height: 100%;
  background-color: #001529;
  position: relative;
  z-index: 10;
  transition: all 0.3s;
  overflow-x: hidden;
  overflow-y: auto;
}
.el-header {
  position: relative;
  height: 64px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  z-index: 2;
  width: 100%;
}
.el-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}
.el-menu {
  border: 0;
  background-color: #001529;
}
.el-submenu__title:hover {
  color: #fff;
  background-color: transparent;
}
.el-menu-item:focus,
.el-menu-item:hover {
  color: #fff;
  background-color: transparent;
}
.el-footer {
  text-align: center;
  background: #f0f2f5;
}
</style>

<style lang="scss" scoped>
.min-height-view {
  height: 100%;
  min-height: 100%;
}
.toyuye-layout-right {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex: 1;
}
</style>
