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
              <div class="user-name">Toyuye</div>
              <div>海纳百川，有容乃大</div>
            </div>
            <div class="user-detaile-container">
              <p>
                <i class="title"></i>
                交互专家
              </p>
              <p>
                <i class="group"></i>
                蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
              </p>
              <p>
                <i class="address"></i>
                浙江省杭州市
              </p>
            </div>
            <div class="toyuye-divider"></div>
            <div class="user-tags-container">
              <h6>标签</h6>
              <span class="tag" v-for="(item, index) in userTag" :key="index">{{
                item
              }}</span>
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
                  v-for="(item, index) in userTeam"
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
                      <li class="list-item">
                        <div class="list-item-meta">
                          <router-link to="/">
                            <h4>Alipay</h4>
                          </router-link>
                          <div class="list-item-meta-description">
                            <span>
                              <span class="ant-tag">Ant Design</span>
                              <span class="ant-tag">设计语言</span>
                              <span class="ant-tag">蚂蚁金服</span>
                            </span>
                          </div>
                        </div>
                        <div class="list-content">
                          <div class="content-index-description">
                            段落示意：蚂蚁金服设计平台
                            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                            蚂蚁金服设计平台
                            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                          </div>
                          <div class="content-index-extra">
                            <img
                              src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                            />
                            <a href="https://ant.design">付小小</a> 发布在
                            <a href="https://ant.design">https://ant.design</a>
                            <em>2019-10-29 18:15</em>
                          </div>
                        </div>
                        <ul class="list-item-action">
                          <li>
                            <span
                              ><i class="iconfont icon-collection"></i>180</span
                            ><el-divider direction="vertical"></el-divider>
                          </li>
                          <li>
                            <span><i class="iconfont icon-like"></i>156</span
                            ><el-divider direction="vertical"></el-divider>
                          </li>
                          <li>
                            <span
                              ><i class="iconfont icon-comment-dots"></i
                              >12</span
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
              <el-row>
                <el-col :xs="24" :sm="12">
                  <div>111</div>
                </el-col>
                <el-col :sx="24" :sm="12">
                  <div>3333</div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane :label="`项目(${8})`" name="third">
              <el-row>
                <el-col :xs="24" :sm="12">
                  <div>111</div>
                </el-col>
                <el-col :sx="24" :sm="12">
                  <div>3333</div>
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
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
const userModule = namespace("user");
@Component({
  name: "UserInfo"
})
export default class UserInfo extends Vue {
  private userTag: string[] = [
    "很有想法的",
    "专注设计",
    "辣~",
    "大长腿",
    "川妹子",
    "海纳百川"
  ];
  private userTeam: any[] = [
    {
      name: "科学搬砖组",
      url: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
    },
    {
      name: "全组都是吴彦祖",
      url: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
    },
    {
      name: "中二少女团",
      url: "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
    },
    {
      name: "程序员日常",
      url: "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
    },
    {
      name: "高逼格设计天团",
      url: "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"
    },
    {
      name: "骗你来学计算机",
      url: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
    }
  ];
  private addShowInput: boolean = false;
  private addTagInput: string = "";
  private activeName: string = "first";
  @userModule.Getter("username") private username!: string;
  private handleClick() {}
  private addTagBlur() {
    this.addTagInput !== "" ? this.userTag.push(this.addTagInput) : "";
    this.addTagInput = "";
    this.addShowInput = false;
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
      }
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
