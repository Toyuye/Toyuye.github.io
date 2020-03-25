<template>
  <div>
    <header class="search-head">
      <div class="">
        <img src="" alt="" />
      </div>
      <el-row type="flex" align="middle" style="width:100%;">
        <el-col :span="24">
          <el-input
            placeholder="Tim-邀您输入搜索关键字"
            v-model="searcForm.wd"
            class="input-with-select"
          >
            <el-select
              v-model="searcForm.t"
              slot="prepend"
              placeholder="请选择"
              style="width:90px;"
              @change="typeSearchSelect"
            >
              <el-option
                :label="item.type_name"
                :value="String(item.type_id)"
                v-for="item in classData"
                :key="item.type_id"
              ></el-option>
            </el-select>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchSubmit"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
    </header>
    <div class="tim-app-view">
      <el-row style="margin:0 -6px;">
        <el-col :xs="24" :md="6" style="padding:0 6px;">
          <div class="card-box">
            <el-card>
              <div class="user-name-container">
                <el-avatar
                  shape="circle"
                  :size="104"
                  :src="require('../../assets/timfun.jpg')"
                >
                </el-avatar>
                <div class="user-name">{{ "TimFUN" }}</div>
                <div>{{ "欢迎来到TimFUN小站" }}</div>
              </div>
              <!-- <div class="user-detaile-container">
                <p>
                  <i class="title"></i>
                  {{ "accountCenterData.title" }}
                </p>
                <p>
                  <i class="group"></i>
                  {{ "accountCenterData.organization" }}
                </p>
                <p>
                  <i class="address"></i>
                  {{ "accountCenterData.location" }}
                </p>
              </div> -->
              <div class="toyuye-divider"></div>
              <div class="user-tags-container">
                <h6>标签</h6>
                <span
                  class="tag"
                  v-for="item in classData"
                  :key="item.type_id"
                  @click="handleClickActiveName({ name: String(item.type_id) })"
                >
                  {{ item.type_name }}
                </span>
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
              <!-- <div class="toyuye-divider"></div> -->
              <!-- <div class="user-team-container">
                <h6>团队</h6>
                <el-row style="margin: 0 -18px;">
                  <el-col
                    :xs="24"
                    :sm="24"
                    :md="12"
                    :lg="12"
                    v-for="(item, index) in []"
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
              </div> -->
            </el-card>
          </div>
        </el-col>
        <el-col :xs="24" :md="18" style="padding:0 6px;">
          <div class="tab-pane-container">
            <el-tabs v-model="activeName" @tab-click="handleClickActiveName">
              <el-tab-pane
                v-for="item in classData"
                :label="item.type_name"
                :name="String(item.type_id)"
                :key="item.type_id"
              >
                <div v-if="activeName == String(item.type_id)">
                  <el-table :data="searchListData" border style="width: 100%">
                    <el-table-column fixed prop="vod_name" label="影片名称">
                    </el-table-column>
                    <el-table-column
                      fixed
                      prop="type_name"
                      label="影片类型"
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      fixed
                      prop="vod_time"
                      label="更新时间"
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="50">
                      <template slot-scope="scope">
                        <el-button
                          @click="LookHandleClick(scope.row)"
                          type="text"
                          size="small"
                          >详情</el-button
                        >
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import { okzyApi } from "../../fetch/api";
interface SearcForm {
  ac: string; // list | detail
  wd: string; //搜索关键字
  t: string; // 类型
  pg: string; // 页码
  h: string; // 几小时内的数据
  ids: string; // 逗号分隔 详情id
}
// CK播放器解析接口： https://www.dplayer.tv/?url=
// DP播放器解析接口： https://www.dplayer.tv/dp/?url=
@Component({
  name: "Tim"
})
export default class Tim extends Vue {
  private firstLookPage: number = 1;
  private activeName: string = "99999";
  private classData: Array<any> = [];
  private searchListData: Array<any> = [];
  private addShowInput: boolean = false;
  private addTagInput: string = "";
  private accountCenterData: any = {
    tag: []
  };
  private searcForm: SearcForm = {
    ac: "",
    wd: "",
    t: "",
    pg: "1",
    h: "",
    ids: ""
  };
  private typeSearchSelect(value: any) {
    this.handleClickActiveName({ name: value });
  }
  private async searchSubmit() {
    await this.getokzyData();
    this.searcForm.wd = "";
  }
  private addTagBlur() {
    this.addTagInput !== ""
      ? this.accountCenterData.tag.push(this.addTagInput)
      : "";
    this.addTagInput = "";
    this.addShowInput = false;
  }
  private async getokzyData() {
    okzyApi(this.searcForm).then(({ data }: any) => {
      if (this.firstLookPage <= 1) {
        this.classData = data.class.slice(5, 31);
        this.classData.unshift({
          type_id: "99999",
          type_name: "首页"
        });
        this.firstLookPage++;
      }
      this.searchListData = data.list;
    });
  }
  private handleClickActiveName(tab: any) {
    this.activeName = tab.name;
    this.activeName == "99999"
      ? (this.searcForm.t = "")
      : (this.searcForm.t = this.activeName);
    this.getokzyData();
  }
  private LookHandleClick(data: any) {
    console.log(data);
  }
  created() {
    this.getokzyData();
  }
}
</script>
<style lang="scss" scoped>
.tim-app-view {
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 76px;
}
.search-head {
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  margin-bottom: 12px;
  position: fixed;
  top: 0;
  z-index: 100;
}
.toyuye-divider {
  background: 0 0;
  border: dashed #e8e8e8;
  border-width: 1px 0 0;
  margin: 16px 0 24px 0;
}
.card-box {
  margin-bottom: 12px;
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
  // .user-detaile-container {
  //   p {
  //     position: relative;
  //     margin-bottom: 8px;
  //     padding-left: 26px;
  //     i {
  //       position: absolute;
  //       top: 4px;
  //       left: 0;
  //       width: 14px;
  //       height: 14px;
  //       background: url("https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg");
  //       &.title {
  //         background-position: 0 0;
  //       }
  //       &.group {
  //         background-position: 0 -22px;
  //       }
  //       &.address {
  //         background-position: 0 -44px;
  //       }
  //     }
  //   }
  // }
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
  // .user-team-container {
  //   h6 {
  //     margin-bottom: 12px;
  //     color: rgba(0, 0, 0, 0.85);
  //     font-weight: 500;
  //   }
  //   .item-p {
  //     margin-bottom: 24px;
  //     overflow: hidden;
  //     color: rgba(0, 0, 0, 0.65);
  //     white-space: nowrap;
  //     text-overflow: ellipsis;
  //     word-break: break-all;
  //     transition: color 0.3s;
  //     display: block;
  //     height: 24px;
  //     line-height: 24px;
  //     &:hover {
  //       color: #1890ff;
  //     }
  //     img {
  //       border-radius: 100%;
  //       float: left;
  //       margin-right: 12px;
  //       height: 24px;
  //       width: 24px;
  //     }
  //   }
  // }
}

.tab-pane-container {
  order: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 12px;
}
</style>
