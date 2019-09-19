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
    <el-menu
      class="el-menu-vertical-toyuye"
      text-color="#909399"
      active-text-color="#fff"
      :unique-opened="true"
      :collapse="isCollapse"
      :router="true"
    >
      <el-submenu v-for="(item, idx) in meunArr" :index="`${item.path}${idx}`" :key="idx">
        <template slot="title">
          <i :class="`el-icon-${item.meta.icon}`"></i><span slot="title">{{item.meta.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(val,inx) in item.children"
            :index="`${val.path}`"
            :key="inx"
          >{{val.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide, Prop } from "vue-property-decorator";
@Component({})
export default class Aside extends Vue {
  meunArr: Array<any> = [];
  private $router$: any;
  @Prop({ default: false, type: Boolean }) isCollapse!: Boolean;
  public created(): void {
    this.$router$ = this.$router;
    this.meunArr = this.$router$.options.routes[0].children;
    console.log(this.meunArr)
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
.el-submenu [class^=el-icon-] {
  font-size: 14px;
}
</style>
