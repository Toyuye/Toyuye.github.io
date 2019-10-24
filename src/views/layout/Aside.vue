<template>
  <div class="toyuye-aside-view">
    <div class="toyuye-design-pro">
      <el-image
        class="toyuye-logo"
        :src="require('../../assets/logo.png')"
      ></el-image>
      <div class="toyuye-describe">
        <p :class="{ 'logo-is-collapse': isCollapse }">TOYUYE</p>
      </div>
    </div>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-toyuye"
        background-color="#001529"
        text-color="#909399"
        active-text-color="#409EFF"
        :unique-opened="true"
        :collapse="isCollapse"
        :default-active="$route.name"
      >
        <sidebarTreeMenu :routes="routes"></sidebarTreeMenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide, Prop, Watch } from "vue-property-decorator";
import sidebarTreeMenu from "./sidebarTreeMenu.vue";
import { namespace, State, Action, Mutation, Getter } from "vuex-class";
const permissionModule = namespace("permission");

@Component({
  components: {
    sidebarTreeMenu
  }
})
export default class Aside extends Vue {
  private $router$: any;
  @Prop({ default: false, type: Boolean }) isCollapse!: Boolean;
  @permissionModule.Getter("routes") routes!: any[];
}
</script>
<style lang="scss" scoped>
.toyuye-aside-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.toyuye-design-pro {
  background: #001529;
  height: 64px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  overflow: hidden;
  width: 100%;
  .toyuye-describe {
    margin-left: 8px;
    overflow: hidden;
    p {
      width: 170px;
      color: #fff;
      font-size: 20px;
      transition: all 0.2s;
      &.logo-is-collapse {
        width: 0;
        height: 0;
        font-size: 0;
        overflow: hidden;
        visibility: hidden;
      }
    }
  }
}
.toyuye-logo {
  width: 32px;
  height: 32px;
}
.el-menu-vertical-toyuye:not(.el-menu--collapse) {
  width: 256px;
}
.el-submenu [class^="el-icon-"] {
  font-size: 16px;
}
</style>

<style lang="scss">
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
.el-scrollbar {
  flex: 1;
}
.el-menu--collapse {
  .el-submenu {
    & > .el-submenu__title {
      & > .el-submenu__icon-arrow {
        display: none;
      }
      & > span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}
</style>
