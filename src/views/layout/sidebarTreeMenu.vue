<template>
  <div>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-toyuye"
        background-color="#001529"
        text-color="#909399"
        active-text-color="#409EFF"
        :unique-opened="true"
        :collapse="isCollapse"
        :default-active="$route.path"
      >
        <template v-for="item in routes">
          <template v-if="!item.meta.hidden && item.children">
            <router-link
              v-if="
                hasOneShowingChildren(item.children) &&
                  !item.children[0].children &&
                  !item.meta.alwaysShow
              "
              :to="item.path + '/' + item.children[0].path"
              :key="item.children[0].name"
            >
              <el-menu-item
                :index="item.path + '/' + item.children[0].path"
                :class="{ 'submenu-title-noDropdown': !isNest }"
              >
                <i :class="`el-icon-${item.meta.icon}`"></i>
                <span
                  v-if="item.children[0].meta && item.children[0].meta.title"
                  slot="title"
                  >{{ item.children[0].meta.title }}</span
                >
              </el-menu-item>
            </router-link>
            <el-submenu v-else :index="item.name || item.path" :key="item.name">
              <template slot="title">
                <i
                  v-if="item.meta && item.meta.icon"
                  :class="`el-icon-${item.meta.icon}`"
                ></i>
                <span v-if="item.meta && item.meta.title" slot="title">{{
                  item.meta.title
                }}</span>
              </template>
              <template v-for="child in item.children">
                <template v-if="!child.hidden">
                  <sidebarTreeMenu
                    :is-nest="true"
                    class="nest-menu"
                    v-if="child.children && child.children.length > 0"
                    :routes="[child]"
                    :isCollapse="isCollapse"
                    :key="child.path"
                  ></sidebarTreeMenu>
                  <router-link
                    v-else
                    :to="item.path + '/' + child.path"
                    :key="child.name"
                  >
                    <el-menu-item :index="item.path + '/' + child.path">
                      <i
                        v-if="child.meta && child.meta.icon"
                        :class="`el-icon-${child.meta.icon}`"
                      ></i>
                      <span
                        v-if="child.meta && child.meta.title"
                        slot="title"
                        >{{ child.meta.title }}</span
                      >
                    </el-menu-item>
                  </router-link>
                </template>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
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
  @Prop({ default: false, type: Boolean }) isNest!: Boolean;
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
.el-menu-vertical-toyuye:not(.el-menu--collapse) {
  width: 256px;
}
.el-submenu [class^="el-icon-"] {
  font-size: 16px;
}
</style>
