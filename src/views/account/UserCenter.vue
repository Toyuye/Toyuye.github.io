<template>
  <div>
    <el-row style="margin: 0 -12px;">
      <el-col :xs="24" :md="7" style="padding:0 12px;">
        <div class="card-box">
          <el-card>
            <div class="user-name-container">
              <el-avatar
                shape="circle"
                :size="104"
                :src="require('../../assets/Toyuye_pic.jpg')"
              >
              </el-avatar>
              <div class="user-name">{{ accountCenterData.name }}</div>
              <div>{{ accountCenterData.personalSignature }}</div>
            </div>
            <div class="user-detaile-container">
              <p>
                <i class="title"></i>
                {{ accountCenterData.title }}
              </p>
              <p>
                <i class="group"></i>
                {{ accountCenterData.organization }}
              </p>
              <p>
                <i class="address"></i>
                {{ accountCenterData.location }}
              </p>
            </div>
            <div class="toyuye-divider"></div>
            <div class="user-tags-container">
              <h6>标签</h6>
              <span
                class="tag"
                v-for="(item, index) in accountCenterData.tag"
                :key="index"
                >{{ item }}</span
              >
              <span
                class="tag add-tag-plus"
                v-if="!addShowInput"
                @click="
                  () => {
                    addShowInput = true;
                  }
                "
              >
                <i class="iconfont icon-plus"></i>
              </span>
              <el-input
                v-model="addTagInput"
                size="mini"
                style="width: 78px;"
                @blur="addTagBlur"
                v-if="addShowInput"
              ></el-input>
            </div>
            <div class="toyuye-divider"></div>
            <div class="user-team-container">
              <h6>团队</h6>
              <el-row style="margin: 0 -18px;">
                <el-col
                  :xs="24"
                  :sm="24"
                  :md="12"
                  :lg="12"
                  v-for="(item, index) in accountCenterData.team"
                  :key="index"
                  style="padding: 0 18px;"
                >
                  <router-link to="/">
                    <p class="item-p">
                      <img :src="item.url" alt="" />{{ item.name }}
                    </p>
                  </router-link>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :md="17" style="padding:0 12px;">
        <div class="tab-pane-container">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="`文章(${8})`" name="first">
              <el-row>
                <el-col :xs="24" :sm="24">
                  <div class="spin-container">
                    <ul class="list-items">
                      <li
                        class="list-item"
                        v-for="(item, index) in accountCenterData.articleDate"
                        :key="index"
                      >
                        <div class="list-item-meta">
                          <router-link to="/">
                            <h4>{{ item.title }}</h4>
                          </router-link>
                          <div class="list-item-meta-description">
                            <span>
                              <span
                                class="ant-tag"
                                v-for="(tagItem, tagIndex) in item.tag"
                                :key="tagIndex"
                                >{{ tagItem }}</span
                              >
                            </span>
                          </div>
                        </div>
                        <div class="list-content">
                          <div class="content-index-description">
                            {{ item.direction }}
                          </div>
                          <div class="content-index-extra">
                            <img :src="item.url" />
                            <router-link
                              to="/"
                              active-class="router-link-class"
                              >{{ item.name }}</router-link
                            >发布在
                            <router-link
                              to="/"
                              active-class="router-link-class"
                              >{{ item.websizeUrl }}</router-link
                            >
                            <em>{{ item.time }}</em>
                          </div>
                        </div>
                        <ul class="list-item-action">
                          <li>
                            <span
                              ><i class="iconfont icon-collection"></i
                              >{{ item.follow }}</span
                            ><el-divider direction="vertical"></el-divider>
                          </li>
                          <li>
                            <span
                              ><i class="iconfont icon-like"></i
                              >{{ item.fabulous }}</span
                            ><el-divider direction="vertical"></el-divider>
                          </li>
                          <li>
                            <span
                              ><i class="iconfont icon-comment-dots"></i
                              >{{ item.comment }}</span
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane :label="`应用(${8})`" name="second">
              <el-row style="margin: 0 -12px;">
                <el-col
                  :xs="24"
                  :sm="12"
                  style="padding:0 12px;"
                  class="scoped-col-8"
                  v-for="(item, index) in accountCenterData.applicationData"
                  :key="index"
                >
                  <div class="application-list-item">
                    <div class="card-border">
                      <div class="card-body">
                        <div class="card-meta">
                          <img :src="item.url" alt="" />
                          <div class="meta-detail">{{ item.name }}</div>
                        </div>
                        <div class="card-info clearfix">
                          <div>
                            <p>活跃用户</p>
                            <p :title="item.activeUsers">
                              <span>{{ addCommaNum(item.activeUsers) }}</span>
                              <span class="unit" v-if="item.activeUsers > 10000"
                                >万</span
                              >
                            </p>
                          </div>
                          <div>
                            <p>新增用户</p>
                            <p :title="item.newUsers">
                              <span>{{ item.newUsers }}</span>
                              <span></span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul class="card-actions clearfix">
                        <li
                          v-for="(item, index) in [
                            { name: '下载', icon: 'arrow-to-bottom' },
                            { name: '编辑', icon: 'edit' },
                            { name: '分享', icon: 'chart-relation' }
                          ]"
                          :key="index"
                        >
                          <span>
                            <el-tooltip
                              effect="dark"
                              :content="item.name"
                              placement="top"
                            >
                              <i :class="['iconfont', `icon-${item.icon}`]"></i>
                            </el-tooltip>
                          </span>
                        </li>
                        <li>
                          <span>
                            <el-dropdown>
                              <span>
                                <i class="iconfont icon-ellipsis-vertical"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>item-1111</el-dropdown-item>
                                <el-dropdown-item>item-1111</el-dropdown-item>
                                <el-dropdown-item>item-1111</el-dropdown-item>
                                <el-dropdown-item>item-1111</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane :label="`项目(${8})`" name="third">
              <el-row style="margin: 0 -12px;">
                <el-col
                  :xs="24"
                  :sm="12"
                  class="scoped-col-8"
                  style="padding:0 12px;"
                  v-for="(item, index) in accountCenterData.projectsData"
                  :key="index"
                >
                  <div class="project-list-item">
                    <div class="border-card">
                      <img :src="item.url" alt="" />
                      <div class="card-body">
                        <div class="meta-title">{{ item.name }}</div>
                        <div class="meta-description">
                          {{ item.description }}
                        </div>
                        <div class="projects-index-cardItemContent">
                          <span>{{ item.timeStamp }}</span>
                          <div class="projects-index-avatarList">
                            <ul>
                              <li
                                v-for="(imgItem, imgIndex) in item.avatars"
                                :key="imgIndex"
                              >
                                <el-tooltip
                                  effect="dark"
                                  :content="imgItem.name"
                                  placement="top"
                                >
                                  <img :src="imgItem.url" alt="" />
                                </el-tooltip>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { addComma } from "../../utils";
import { accountCenter } from "../../fetch/api";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
const userModule = namespace("user");

@Component({
  name: "UserInfo"
})
export default class UserInfo extends Vue {
  private addShowInput: boolean = false;
  private addTagInput: string = "";
  private activeName: string = "third";
  @userModule.Getter("username") private username!: string;
  private accountCenterData: any = "";
  private mounted() {
    this.getAccountCenter();
  }
  private addCommaNum(num: number) {
    return addComma(num);
  }
  private handleClick() {}
  private addTagBlur() {
    this.addTagInput !== ""
      ? this.accountCenterData.tag.push(this.addTagInput)
      : "";
    this.addTagInput = "";
    this.addShowInput = false;
  }
  private getAccountCenter() {
    accountCenter().then(({ data }: any) => {
      if (data.code === "0000") {
        this.accountCenterData = data.data;
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.toyuye-divider {
  background: 0 0;
  border: dashed #e8e8e8;
  border-width: 1px 0 0;
  margin: 16px 0 24px 0;
}
.card-box {
  margin-bottom: 20px;
  .user-name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    text-align: center;
    .user-name {
      margin-bottom: 4px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
  }
  .user-detaile-container {
    p {
      position: relative;
      margin-bottom: 8px;
      padding-left: 26px;
      i {
        position: absolute;
        top: 4px;
        left: 0;
        width: 14px;
        height: 14px;
        background: url("https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg");
        &.title {
          background-position: 0 0;
        }
        &.group {
          background-position: 0 -22px;
        }
        &.address {
          background-position: 0 -44px;
        }
      }
    }
  }
  .user-tags-container {
    h6 {
      margin-bottom: 12px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
    .tag {
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
      font-feature-settings: "tnum";
      display: inline-block;
      height: auto;
      margin: 0 8px 0 0;
      padding: 0 7px;
      font-size: 12px;
      line-height: 20px;
      white-space: nowrap;
      background: #fafafa;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      cursor: default;
      opacity: 1;
      transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      margin-bottom: 8px;
      &.add-tag-plus {
        background: rgb(255, 255, 255);
        border-style: dashed;
      }
    }
  }
  .user-team-container {
    h6 {
      margin-bottom: 12px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
    .item-p {
      margin-bottom: 24px;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.65);
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      transition: color 0.3s;
      display: block;
      height: 24px;
      line-height: 24px;
      &:hover {
        color: #1890ff;
      }
      img {
        border-radius: 100%;
        float: left;
        margin-right: 12px;
        height: 24px;
        width: 24px;
      }
    }
  }
}
.tab-pane-container {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .spin-container {
    .list-items {
      .list-item {
        padding: 16px 0;
        border-bottom: 1px solid #e8e8e8;
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          border-bottom: 0;
        }
        .list-item-meta {
          margin-bottom: 16px;
          h4 {
            margin-bottom: 12px;
            color: rgba(0, 0, 0, 0.85);
            font-size: 16px;
            line-height: 24px;
          }
          .list-item-meta-description {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
            line-height: 22px;
            .ant-tag {
              box-sizing: border-box;
              color: rgba(0, 0, 0, 0.65);
              font-size: 14px;
              font-variant: tabular-nums;
              line-height: 1.5;
              list-style: none;
              font-feature-settings: "tnum";
              display: inline-block;
              height: auto;
              margin: 0 8px 0 0;
              padding: 0 7px;
              font-size: 12px;
              line-height: 20px;
              white-space: nowrap;
              background: #fafafa;
              border: 1px solid #d9d9d9;
              border-radius: 4px;
              cursor: default;
              opacity: 1;
              transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
            }
          }
        }
        .list-content {
          .content-index-description {
            max-width: 720px;
            line-height: 22px;
          }
          .content-index-extra {
            margin-top: 16px;
            color: rgba(0, 0, 0, 0.45);
            line-height: 22px;
            img {
              width: 20px;
              height: 20px;
              border-radius: 100%;
              float: left;
              margin-right: 8px;
            }
            .router-link-class {
              color: #1890ff;
            }
            em {
              margin-left: 16px;
              color: rgba(0, 0, 0, 0.25);
              font-style: normal;
            }
          }
        }
        .list-item-action {
          margin-left: auto;
          margin-top: 16px;
          li {
            padding: 0 16px;
            position: relative;
            display: inline-block;
            padding: 0 8px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            cursor: pointer;
            &:first-child {
              padding-left: 0;
            }
            span {
              i {
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }
  .application-list-item {
    margin-bottom: 16px;
    max-width: 100%;
    .card-border {
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
      font-feature-settings: "tnum";
      position: relative;
      background: #fff;
      border-radius: 2px;
      transition: all 0.3s;
      &:hover {
        border-color: rgba(0, 0, 0, 0.09);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
      }
      .card-body {
        padding: 24px;
        zoom: 1;
        padding-bottom: 20px;
        .card-meta {
          width: 100%;
          box-sizing: border-box;
          img {
            float: left;
            width: 24px;
            height: 24px;
            border-radius: 100%;
            margin-right: 16px;
          }
          .meta-detail {
            overflow: hidden;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            font-size: 16px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .card-info {
          margin-top: 16px;
          margin-left: 40px;
          zoom: 1;
          > div {
            position: relative;
            float: left;
            width: 50%;
            text-align: left;
            p {
              font-size: 24px;
              line-height: 32px;
              height: 32px;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &:first-child {
                margin-bottom: 4px;
                color: rgba(0, 0, 0, 0.45);
                font-size: 12px;
                line-height: 20px;
              }
              span {
                &.unit {
                  position: relative;
                  top: -2px;
                  font-size: 14px;
                  font-style: normal;
                  margin-left: 2px;
                }
              }
            }
          }
        }
      }
      .card-actions {
        background: #fafafa;
        border-top: 1px solid #e8e8e8;
        zoom: 1;
        li {
          width: 25%;
          float: left;
          margin: 12px 0;
          color: rgba(0, 0, 0, 0.45);
          text-align: center;
          box-sizing: border-box;
          &:not(:last-child) {
            border-right: 1px solid #e8e8e8;
          }
        }
      }
    }
  }
  .project-list-item {
    display: block;
    max-width: 100%;
    margin-bottom: 16px;
    .border-card {
      cursor: pointer;
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
      font-feature-settings: "tnum";
      position: relative;
      background: #fff;
      border-radius: 2px;
      transition: all 0.3s;
      &:hover {
        border-color: rgba(0, 0, 0, 0.09);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
      }
      img {
        display: block;
        width: 100%;
      }
      .card-body {
        padding: 24px;
        zoom: 1;
        .meta-title {
          overflow: hidden;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          font-size: 16px;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-bottom: 4px;
        }
        .meta-description {
          height: 44px;
          line-height: 22px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .projects-index-cardItemContent {
          display: flex;
          height: 20px;
          margin-top: 16px;
          margin-bottom: -4px;
          line-height: 20px;
          span {
            flex: 1 1;
            color: rgba(0, 0, 0, 0.45);
            font-size: 12px;
          }
          .projects-index-avatarList {
            display: inline-block;
            ul {
              display: inline-block;
              margin-left: 8px;
              font-size: 0;
              li {
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-left: -8px;
                font-size: 14px;
                img {
                  height: 100%;
                  width: 100%;
                  border-radius: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1600px) {
    .scoped-col-8 {
      display: block;
      box-sizing: border-box;
      width: 33.33333333%;
    }
  }
}
</style>
<style lang="scss">
.tab-pane-container {
  .el-tabs__nav-scroll {
    padding: 0 32px;
  }
  .el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e7ed;
    z-index: 1;
  }
  .el-tabs__item {
    height: 56px;
    font-size: 16px;
    line-height: 56px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 400;
    &.is-active {
      color: #1890ff;
    }
  }
  .el-tab-pane {
    padding: 24px;
  }
}
</style>
