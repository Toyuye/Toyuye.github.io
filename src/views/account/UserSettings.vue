<template>
  <div class="user-setting-container">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="基本设置">
        <div class="basic-setup setting-style-right">
          <h3 class="setting-title">基本设置</h3>
          <div class="settins-base-view">
            <div class="settins-base-view-left">
              <el-form>
                <el-form-item label="邮箱" size="small">
                  <el-input v-model="accountSettingData.email"></el-input>
                </el-form-item>
                <el-form-item label="昵称" size="small">
                  <el-input v-model="accountSettingData.nickName"></el-input>
                </el-form-item>
                <el-form-item label="个人简介" size="small">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 8 }"
                    v-model="accountSettingData.personalProfile"
                  ></el-input>
                </el-form-item>
                <el-form-item label="国家/地区" size="small">
                  <el-select
                    v-model="accountSettingData.countryName"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in ['中国']"
                      :key="item"
                      :label="item"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所在省市" size="small">
                  <el-row style="margin: 0 -5px;">
                    <el-col :span="12" style="padding:0 5px">
                      <el-select
                        v-model="accountSettingData.provinceName"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 5"
                          :key="item"
                          :label="item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12" style="padding:0 5px;">
                      <el-select
                        v-model="accountSettingData.cityName"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in 5"
                          :key="item"
                          :label="item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="街道地址" size="small">
                  <el-input
                    v-model="accountSettingData.streetAddress"
                  ></el-input>
                </el-form-item>
                <el-form-item label="联系电话" size="small">
                  <el-row style="margin:0 -5px;">
                    <el-col style="padding:0 5px;" :span="8">
                      <el-input
                        v-model="accountSettingData.areaCode"
                      ></el-input>
                    </el-col>
                    <el-col style="padding:0 5px;" :span="16">
                      <el-input
                        v-model="accountSettingData.PhoneNumber"
                      ></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-form>
              <el-button type="primary" size="small">更新基本信息</el-button>
            </div>
            <div class="settins-base-view-right">
              <div class="avatar-title">
                <span>头像</span>
              </div>
              <div>
                <el-avatar
                  :size="144"
                  :src="accountSettingData.avatar"
                  @error="
                    () => {
                      return true;
                    }
                  "
                >
                  <img
                    src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                  />
                </el-avatar>
              </div>
              <div class="change-avatar-button">
                <el-upload
                  class="upload-avatar"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :limit="1"
                >
                  <el-button size="small"
                    ><i class="iconfont icon-upload"></i> 更换头像</el-button
                  >
                </el-upload>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="安全设置">
        <div class="setting-style-right">
          <h3 class="setting-title">安全设置</h3>
          <div class="settins-base-view">
            <ul class="setting-list-items">
              <li
                v-for="(item, index) in accountSettingData.securitySettingData"
                :key="index"
              >
                <div class="left">
                  <div class="meta-content">
                    <div class="title">{{ item.title }}</div>
                    <div class="description">{{ item.description }}</div>
                  </div>
                </div>
                <div class="right">
                  <el-button
                    type="text"
                    @click="handleClickSecuritySetting(item.handleType)"
                    >{{ item.handleType }}</el-button
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="账号绑定">
        <div class="setting-style-right">
          <h3 class="setting-title">安全设置</h3>
          <div class="settins-base-view">
            <ul class="setting-list-items">
              <li
                v-for="(item, index) in accountSettingData.accountbindingData"
                :key="index"
              >
                <div class="left">
                  <div class="avatar-account">
                    <el-avatar
                      :size="48"
                      shape="square"
                      :src="item.icon"
                    ></el-avatar>
                  </div>
                  <div class="meta-content">
                    <div class="title">{{ item.bindName }}</div>
                    <div class="description">{{ item.bindDescription }}</div>
                  </div>
                </div>
                <div class="right">
                  <el-button
                    type="text"
                    @click="handleClickAccountBind(item.handleType)"
                    >{{ item.handleType }}</el-button
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="新消息通知">
        <div class="setting-style-right">
          <h3 class="setting-title">新消息通知</h3>
          <div class="settins-base-view">
            <ul class="setting-list-items">
              <li
                v-for="(item,
                index) in accountSettingData.messageNotificationData"
                :key="index"
              >
                <div class="left">
                  <div class="meta-content">
                    <div class="title">{{ item.title }}</div>
                    <div class="description">{{ item.description }}</div>
                  </div>
                </div>
                <div class="right">
                  <el-switch
                    v-model="item.switch"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    @change="handleClikSwitch(item.switch)"
                  >
                  </el-switch>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, Action, Mutation, Getter, namespace } from "vuex-class";
const userModule = namespace("user");
import { throttle } from "../../utils";
import { accountSetting } from "../../fetch/api";
@Component({
  name: "UserSettings"
})
export default class UserSettings extends Vue {
  private tabPosition: string = "left";
  private accountSettingData: any = {
    avatar: "",
    email: "",
    nickName: "",
    personalProfile: "",
    region: [],
    countryName: "",
    provinceName: "",
    cityName: "",
    streetAddress: "",
    areaCode: "",
    PhoneNumber: "",
    securitySettingData: [],
    accountbindingData: [],
    messageNotificationData: []
  };

  mounted() {
    this.getAccountSetting();
    this.inItTabPosition();
    this.addEventListenerScreen();
  }
  beforeDestroy() {
    this.addEventListenerScreen();
  }
  getAccountSetting() {
    accountSetting().then(({ data }: any) => {
      if (data.code === "0000") {
        this.accountSettingData = data.data;
      }
    });
  }
  inItTabPosition() {
    return window.innerWidth < 768
      ? (this.tabPosition = "top")
      : (this.tabPosition = "left");
  }
  screenWidthThrottle() {
    return throttle(() => {
      this.inItTabPosition();
    }, 200);
  }
  addEventListenerScreen() {
    window.addEventListener("resize", this.screenWidthThrottle());
  }
  handleClickSecuritySetting(type: string) {
    console.log(type);
  }
  handleClickAccountBind(type: string) {
    console.log(type);
  }
  handleClikSwitch(value: boolean) {
    console.log(1);
    return (value = !value);
  }
}
</script>
<style lang="scss" scoped>
.user-setting-container {
  background: #fff;
  padding: 16px 0;
  .setting-style-right {
    box-sizing: border-box;
    width: 100%;
    .setting-title {
      margin-bottom: 12px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
    .settins-base-view {
      display: flex;
      padding-top: 12px;
      .settins-base-view-left {
        min-width: 165px;
        max-width: 448px;
      }
      .settins-base-view-right {
        flex: 1 1;
        padding-left: 84px;
        .avatar-title {
          height: 22px;
          margin-bottom: 8px;
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
          line-height: 22px;
        }
        .change-avatar-button {
          margin-top: 12px;
          width: 144px;
          text-align: center;
          i {
            font-size: 13px;
            margin-right: 8px;
          }
          button {
            font-size: 14px;
          }
        }
      }
      .setting-list-items {
        width: 100%;
        box-sizing: border-box;
        li {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid #e8e8e8;
          .left {
            flex: 1 1;
            display: flex;
            .avatar-account {
              height: 100%;
              margin-right: 16px;
            }
            .title {
              margin-bottom: 4px;
              color: rgba(0, 0, 0, 0.65);
              font-size: 14px;
              line-height: 22px;
            }
            .description {
              color: rgba(0, 0, 0, 0.45);
              font-size: 14px;
              line-height: 22px;
            }
          }
          .right {
            margin-left: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 10px;
          }
        }
      }
    }
  }
}
@media screen and(max-width: 1100px) {
  .basic-setup {
    .settins-base-view {
      flex-direction: column-reverse;
      .settins-base-view-right {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 448px;
        padding: 20px;
        padding-left: 20px !important;
      }
    }
  }
}
</style>

<style lang="scss">
.user-setting-container {
  .el-tabs--left {
    .el-tabs__item {
      &.is-left {
        text-align: left;
        width: 200px;
        height: 48px;
        line-height: 48px;
      }
      &.is-active {
        background: #e6f7ff;
      }
    }
    .el-tabs__active-bar {
      &.is-left {
        width: 3px;
      }
    }
    .el-tabs__content {
      padding: 8px 25px 8px 15px;
    }
  }
  .el-tabs--top {
    .el-tabs__nav-scroll {
      padding: 0 20px;
    }
    .el-tabs__item {
      &.is-top {
        height: 48px;
      }
    }
    .el-tabs__content {
      padding: 15px 25px 25px 25px;
    }
  }
  .basic-setup {
    .el-form-item__label {
      width: 100%;
      text-align: left;
    }
  }
}
</style>
