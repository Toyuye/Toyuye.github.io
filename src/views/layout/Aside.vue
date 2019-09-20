<template>
  <div class="toyuye-aside-view">
    <div class="toyuye-design-pro">
      <el-image
        class="toyuye-logo"
        :src="require('../../assets/logo.png')"
      ></el-image>
      <div v-show="!isCollapse" class="toyuye-describe">
        <p>TOYUYE</p>
      </div>
    </div>
    <sidebarTreeMenu
      :routes="meunArr"
      :isCollapse="isCollapse"
    ></sidebarTreeMenu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide, Prop } from "vue-property-decorator";
import sidebarTreeMenu from "./sidebarTreeMenu.vue";
@Component({
  components: {
    sidebarTreeMenu
  }
})
export default class Aside extends Vue {
  meunArr: Array<any> = [];
  private $router$: any;
  public created(): void {
    this.$router$ = this.$router;
    this.meunArr = this.$router$.options.routes;
  }
  @Prop({ default: false, type: Boolean }) isCollapse!: Boolean;
  private hasOneShowingChildren(children: Array<any>): Boolean {
    if (children.length === 1) {
      return true;
    }
    return false;
  }
}
</script>
<style lang="scss" scoped>
.toyuye-aside-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toyuye-design-pro {
  background: #001529;
  height: 64px;
  display: flex;
  justify-content: center;
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
