<template>
  <div>
    <PageHeader>
      <div class="header-content-slot">
        <div class="page-content">
          <img :src="workplaceData.userIcon" alt="" />
          <div class="style-content">
            <div class="content-title">
              早安，{{ workplaceData.userName }}，祝你开心每一天！
            </div>
            <div>{{ workplaceData.userTitle }}</div>
          </div>
        </div>
        <div class="extra-content clearfix">
          <div class="extra-content-style">
            <div class="stat-Item">
              <div class="statistic-title">项目数</div>
              <div class="statistic-content-value">
                <span class="int">{{ workplaceData.projectNum }}</span>
                <span class="suffix"></span>
              </div>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="stat-Item">
              <div class="statistic-title">团队排名</div>
              <div class="statistic-content-value">
                <span class="int">{{ workplaceData.teamRanking }}</span>
                <span class="suffix">/&nbsp;{{ workplaceData.teamTotal }}</span>
              </div>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="stat-Item">
              <div class="statistic-title">项目访问</div>
              <div class="statistic-content-value">
                <span class="int">{{ workplaceData.projectVisit }}</span>
                <span class="suffix"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageHeader>
    <div class="wrap-children-content">
      <el-row style="margin: 0 -12px">
        <el-col :xs="24" :sm="24" :lg="16" style="padding:0 12px;">
          <el-card class="clearfix" style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
              <span style="font-size:15px">进行中的项目</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >全部项目</el-button
              >
            </div>
            <div class="clearfix card-body-box">
              <div
                class="card-grid"
                v-for="(item, index) in workplaceData.progressPro"
                :key="index"
              >
                <div class="card-title clearfix">
                  <img :src="item.icon" alt="" />
                  <router-link to="/"
                    ><span>{{ item.name }}</span></router-link
                  >
                </div>
                <div class="card-detail">
                  {{ item.description }}
                </div>
                <div class="card-footer">
                  <router-link to="/">{{ item.teamName }}</router-link>
                  <span>{{ item.hoursAgo }}</span>
                </div>
              </div>
            </div>
          </el-card>
          <el-card style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
              <span style="font-size:15px">动态</span>
            </div>
            <ul class="dynamic-card-body">
              <li
                v-for="(item, index) in workplaceData.teamDynamic"
                :key="index"
              >
                <img :src="item.icon" alt="" />
                <div class="item-content-meta">
                  <h4>
                    <a href="javascript:;" class="user-name">{{ item.name }}</a
                    >&nbsp;{{ item.will }}&nbsp;<router-link to="/">{{
                      item.projectName
                    }}</router-link>
                    <span>&nbsp;{{ item.do }}&nbsp;</span
                    ><router-link to="/">{{ item.createdName }}</router-link>
                  </h4>
                  <span class="date-time">1 小时前</span>
                </div>
              </li>
            </ul>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8" style="padding:0 12px;">
          <el-card style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
              <span style="font-size:15px">快速开始 / 便捷导航</span>
            </div>
            <div class="link-group-box">
              <router-link
                :to="item.path"
                v-for="(item, index) in [
                  { name: '操作一', path: '/' },
                  { name: '操作二', path: '/' },
                  { name: '操作三', path: '/' },
                  { name: '操作四', path: '/' },
                  { name: '操作五', path: '/' },
                  { name: '操作六', path: '/' }
                ]"
                :key="index"
                >{{ item.name }}</router-link
              >
              <el-button
                size="mini"
                type="primary"
                plain
                icon="iconfont icon-plus"
                >添加</el-button
              >
            </div>
          </el-card>
          <el-card style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
              <span style="font-size:15px">XX 指数</span>
            </div>
            <div class="radar-content-box">
              <div style="height:263px;width:100%;position: relative;">
                <RadarChart :chartData="[]"></RadarChart>
              </div>
              <div class="radar-legend">
                <el-row>
                  <el-col
                    class="radar-legend-item-box"
                    :span="8"
                    v-for="(item, idx) in workplaceData.radar"
                    :key="idx"
                  >
                    <div class="radar-legend-item">
                      <p>
                        <span
                          class="dot"
                          :style="{ background: item.color }"
                        ></span>
                        <span>{{ item.name }}</span>
                      </p>
                      <h6>{{ item.value }}</h6>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
          <el-card style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
              <span style="font-size:15px">团队</span>
            </div>
            <div class="team-card-box">
              <el-row>
                <el-col
                  :span="12"
                  v-for="(item, index) in workplaceData.team"
                  :key="index"
                >
                  <div class="clearfix" style="padding:0 20px;">
                    <router-link :to="{ path: item.path }">
                      <img :src="item.icon" alt="" />
                      <span>{{ item.teamName }}</span>
                    </router-link>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "../../components/PageHeader.vue";
import RadarChart from "./components/RadarChart.vue";
import { workplace } from "../../fetch/api";
@Component({
  name: "Workplace",
  components: {
    PageHeader,
    RadarChart
  }
})
export default class Workplace extends Vue {
  private workplaceData: any = {
    userIcon: "",
    userName: "",
    userTitle: "",
    projectNum: "",
    teamRanking: "",
    teamTotal: "",
    projectVisit: "",
    progressPro: [],
    teamDynamic: [],
    radar: [],
    team: []
  };
  private mounted() {
    workplace().then(({ data }: any) => {
      if (data.code === "0000") {
        this.workplaceData = data.data;
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.header-content-slot {
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: space-between;
  .page-content {
    display: flex;
    align-items: center;
    flex-flow: wrap;
    img {
      display: block;
      width: 72px;
      height: 72px;
      border-radius: 100%;
      margin-right: 24px;
    }
    .style-content {
      div {
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        &.content-title {
          margin-bottom: 12px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
  }
  .extra-content {
    text-align: right;
    .extra-content-style {
      display: flex;
      align-items: center;
      zoom: 1;
      float: right;
      white-space: nowrap;
      .stat-Item {
        position: relative;
        display: inline-block;
        padding: 0 16px;
        .statistic-title {
          margin-bottom: 4px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
        .statistic-content-value {
          color: rgba(0, 0, 0, 0.85);
          font-size: 24px;
          span {
            &.suffix {
              margin-left: 4px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
.wrap-children-content {
  margin-top: 20px;
  .card-body-box {
    width: 100%;
    margin: -1px 0 0 0px;
  }
  .card-grid {
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    padding: 24px;
    border: 0;
    border-radius: 0;
    box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8,
      inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
    transition: all 0.3s;
    &:hover {
      position: relative;
      z-index: 1;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .card-title {
      margin-bottom: 8px;
      img {
        float: left;
        width: 24px;
        height: 24px;
        border-radius: 100%;
      }
      a {
        height: 24px;
        margin-left: 12px;
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        line-height: 24px;
        float: left;
        &:hover {
          color: #1890ff;
        }
      }
    }
    .card-detail {
      height: 44px;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .card-footer {
      display: flex;
      align-items: center;
      margin-top: 8px;
      a {
        display: inline-block;
        flex: 1 1;
        color: rgba(0, 0, 0, 0.45);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      span {
        flex: 0 0 auto;
        float: right;
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
  .dynamic-card-body {
    padding: 0 20px 8px 20px;
    li {
      padding: 16px 0;
      display: flex;
      > img {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }
      .item-content-meta {
        flex: 1;
        h4 {
          margin-bottom: 4px;
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          line-height: 22px;
          font-weight: 400;
          a {
            color: #1890ff;
            &.user-name {
              color: rgba(0, 0, 0, 0.65);
            }
          }
        }
        .date-time {
          display: block;
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
  .link-group-box {
    padding: 20px 0 8px 24px;
    font-size: 0;
    a {
      display: inline-block;
      width: 25%;
      margin-bottom: 13px;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      &:hover {
        color: #1890ff;
      }
    }
  }
  .radar-content-box {
    padding: 20px;
    zoom: 1;
    .radar-legend {
      margin-top: 16px;
      .radar-legend-item-box {
        &:last-child {
          .radar-legend-item {
            border: 0;
          }
        }
      }
      .radar-legend-item {
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        text-align: center;
        cursor: pointer;
        border-right: 1px solid #e8e8e8;
        p {
          span {
            color: rgba(0, 0, 0, 0.45);
            line-height: 22px;
            text-align: center;
            cursor: pointer;
            &.dot {
              position: relative;
              top: -1px;
              display: inline-block;
              width: 6px;
              height: 6px;
              margin-right: 6px;
              border-radius: 6px;
              background: red;
            }
          }
        }
        h6 {
          margin-top: 4px;
          margin-bottom: 0;
          padding-left: 16px;
          color: rgba(0, 0, 0, 0.85);
          font-size: 24px;
          line-height: 32px;
        }
      }
    }
  }
  .team-card-box {
    padding: 12px 0;
    a {
      display: block;
      height: 24px;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.65);
      transition: all 0.3s;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      img {
        height: 24px;
        width: 24px;
        border-radius: 100%;
      }
      span {
        margin-left: 12px;
        font-size: 14px;
        line-height: 24px;
        vertical-align: top;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .wrap-children-content {
    .card-grid {
      width: 50%;
    }
  }
}
@media screen and (max-width: 500px) {
  .wrap-children-content {
    .card-grid {
      width: 100%;
    }
  }
}
</style>
<style lang="scss">
.extra-content {
  position: relative;
  .el-divider--vertical {
    height: 40px;
  }
}
.wrap-children-content {
  .el-card__header {
    padding: 16px 20px;
  }
  .el-card__body {
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
