<template>
  <div class="toyuye-header-view">
    <div class="toyuye-header-view-left">
      <i
        class="iconfont icon-outdent fold"
        v-if="!isCollapse"
        @click="sendIsCollapse(true)"
      ></i>
      <i
        class="iconfont icon-indent fold"
        v-else
        @click="sendIsCollapse(false)"
      ></i>
    </div>
    <div class="toyuye-header-view-right">
      <!-- <el-dropdown>
        <el-badge :value="3339" :max="99" class="item toyue-header-info-fixed">
          <i class="el-icon-message-solid  toyuye-tab-info"></i>
        </el-badge>
        <el-dropdown-menu slot="dropdown">
          <div>
            <el-dropdown-item>CN 中文简体</el-dropdown-item>
            <el-dropdown-item>HK 繁体中文</el-dropdown-item>
            <el-dropdown-item>US English</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown> -->
      <el-dropdown>
        <div class="user-name-logo">
          <el-avatar
            :src="require('../../assets/Toyuye_pic.jpg')"
            class="user-logo"
          ></el-avatar>
          <span>{{ username }}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div
              @click="
                () => {
                  $router.push('/account/center');
                }
              "
            >
              <i class="iconfont icon-user-fill"></i>个人中心
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div
              @click="
                () => {
                  $router.push('/account/settings');
                }
              "
            >
              <i class="iconfont icon-cog-fill"></i>个人设置
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div @click="logout">
              <i class="iconfont icon-poweroff"></i>退出登录
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <i class="iconfont icon-language  toyuye-tab-language"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>CN 中文简体</el-dropdown-item>
          <el-dropdown-item>HK 繁体中文</el-dropdown-item>
          <el-dropdown-item>US English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

import { State, Mutation, Getter, Action, namespace } from "vuex-class";

const userModule = namespace("user");

@Component({})
export default class Header extends Vue {
  @userModule.Getter("username") username!: string;
  @userModule.Getter("avatar") avatar!: string;
  @userModule.Action("Logout") Logout!: Function;
  @Prop({ default: false, type: Boolean }) isCollapse!: boolean;
  @Emit("sendIsCollaps")
  sendIsCollapse(val: boolean) {
    return val;
  }
  public logout() {
    this.Logout().then((data: any) => {
      if (data.code === "0000") {
        this["$router"].push("/login");
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.toyuye-header-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.user-name-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 12px 0 16px;
}
.user-logo {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 10px;
}
.toyuye-header-view-left {
  .fold {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.8);
    padding: 20px;
  }
}
.toyuye-header-view-right {
  display: flex;
  align-items: center;
  height: 100%;
  .el-dropdown {
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
.toyuye-tab-info {
  font-size: 16px;
  padding: 0 12px;
}
.toyuye-tab-language {
  font-size: 24px;
  padding: 0 12px;
}
</style>

<style lang="scss">
.toyue-header-info-fixed .el-badge__content.is-fixed {
  right: 20px;
}
</style>
