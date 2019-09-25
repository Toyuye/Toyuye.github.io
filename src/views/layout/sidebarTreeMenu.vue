<template>
  <div>
    <template v-for="item in routes">
      <template v-if="!item.meta.hidden">
        <el-submenu
          v-if="item.children"
          :index="`${item.path}`"
          :key="item.name"
        >
          <template slot="title">
            <i :class="`iconfont icon-${item.meta.icon}`"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </template>
          <sidebarTreeMenu :routes="item.children"></sidebarTreeMenu>
        </el-submenu>
        <router-link :to="{ name: item.name }" :key="item.name" v-else>
          <el-menu-item :index="`${item.name}`" :key="item.path">
            <i :class="`iconfont icon-${item.meta.icon}`"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </template>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component, Inject } from "vue-property-decorator";
@Component({
  name: "sidebarTreeMenu"
})
export default class TreeMenu extends Vue {
  @Prop({ default: false, type: Boolean }) isCollapse!: Boolean;
  @Prop({ default: [], type: Array }) routes!: Array<any>;
  private hasOneShowingChildren(children: Array<any>): Boolean {
    const showingChildren = children.filter(item => {
      return !item.meta.hidden;
    });
    if (showingChildren.length === 1) {
      return true;
    }
    return false;
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  margin-right: 10px;
}
.el-menu-vertical-toyuye:not(.el-menu--collapse) {
  width: 256px;
}
.el-submenu [class^="el-icon-"] {
  font-size: 16px;
}
</style>
