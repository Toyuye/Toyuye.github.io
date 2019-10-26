<template>
  <div>
    <el-row style="margin: 20px -10px 0 10px;flex-wrap:wrap" type="flex">
      <el-col :xs="24" :sm="24" :lg="12" style="margin-bottom: 20px;">
        <div style="padding:0 10px;">
          <el-card class="box-card">
            <div slot="header">
              <el-row
                type="flex"
                align="middle"
                justify="space-between"
                style="height:28px;"
              >
                <span>线上热门搜索</span>
                <el-dropdown>
                  <i class="iconfont icon-ellipsis-vertical"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>操作1</el-dropdown-item>
                    <el-dropdown-item>操作2</el-dropdown-item>
                    <el-dropdown-item>操作3</el-dropdown-item>
                    <el-dropdown-item>操作4</el-dropdown-item>
                    <el-dropdown-item>操作5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-row>
            </div>
            <el-row style="margin: 0 -16px;">
              <el-col :span="12" class="number-info">
                <div class="number-info-title">
                  <span
                    >搜索用户数<i class="iconfont icon-exclamation-circle"></i
                  ></span>
                </div>
                <div class="number-info-value">
                  <span>12,321</span>
                  <span
                    >17.1<i
                      class="iconfont icon-sort-up"
                      style="color: rgb(245, 34, 45)"
                  /></span>
                </div>
                <div style="height:45px;background:red"></div>
              </el-col>
              <el-col :span="12" class="number-info">
                <div class="number-info-title">
                  <span
                    >人均搜索次数<i class="iconfont icon-exclamation-circle"></i
                  ></span>
                </div>
                <div class="number-info-value">
                  <span>12,321</span>
                  <span
                    >17.1<i
                      class="iconfont icon-sort-down"
                      style="color: rgb(82, 196, 26)"
                  /></span>
                </div>
                <div style="height:45px;background:green"></div>
              </el-col>
              <el-col :span="24" class="number-table">
                <el-table
                  :data="[
                    { keywords: '搜索关键子一11', account: 45, weekup: '7%' },
                    { keywords: '搜索关键子一11', account: 45, weekup: '5%' },
                    { keywords: '搜索关键子一1', account: 35, weekup: '6%' }
                  ]"
                  style="width: 100%"
                  size="small"
                  :stripe="true"
                >
                  <el-table-column type="index" width="60" label="排名">
                  </el-table-column>
                  <el-table-column prop="keywords" label="搜索关键字">
                  </el-table-column>
                  <el-table-column prop="account" sortable label="用户数">
                  </el-table-column>
                  <el-table-column prop="weekup" sortable label="周涨幅">
                  </el-table-column>
                </el-table>
                <div class="paginnation-box">
                  <el-pagination
                    size="small"
                    background
                    layout="prev, pager, next"
                    :total="100"
                  >
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" style="margin-bottom: 20px;">
        <div style="padding:0 10px; height: 100%;">
          <el-card style="height:calc(100% - 2px)">
            <div slot="header">
              <el-row
                type="flex"
                align="middle"
                justify="space-between"
                style="height:28px;"
              >
                <span>销售额类别占比</span>
                <el-button-group class="sales-group">
                  <el-button
                    size="mini"
                    v-for="(item, index) in ['全部渠道', '线上', '门店']"
                    :key="index"
                    :class="{ active: index == salesGroupIndex }"
                    @click="clickSalesAnalogy(index)"
                    >{{ item }}</el-button
                  >
                </el-button-group>
                <el-dropdown class="sales-group-dropdown">
                  <i class="iconfont icon-ellipsis-vertical"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>操作1</el-dropdown-item>
                    <el-dropdown-item>操作2</el-dropdown-item>
                    <el-dropdown-item>操作3</el-dropdown-item>
                    <el-dropdown-item>操作4</el-dropdown-item>
                    <el-dropdown-item>操作5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-row>
            </div>
            <h4>{{ ["全部渠道", "线上", "门店"][salesGroupIndex] }}销售额</h4>
            <el-row>
              <el-col :xs="24" :sm="14" :lg="12">
                <div class="pie-chart-value">
                  <div class="pie-value-show">
                    <h4>销售额</h4>
                    <p>￥1149</p>
                  </div>
                  <SalesGroupPieChart :chartData="[]"></SalesGroupPieChart>
                </div>
              </el-col>
              <el-col :xs="24" :sm="10" :lg="12" class="col-sales-group-box">
                <ul class="sales-group-classify">
                  <li
                    v-for="(item, index) in [
                      {
                        name: '家用电器',
                        percent: '10.90%',
                        value: 89,
                        color: 'rgb(24, 144, 255)'
                      },
                      {
                        name: '食用酒水',
                        percent: '10.90%',
                        value: 99,
                        color: 'rgb(170, 170, 170)'
                      }
                    ]"
                    :key="index"
                  >
                    <span
                      class="dot"
                      :style="{ background: item.color }"
                    ></span>
                    <span>{{ item.name }}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span class="percent">{{ item.percent }}</span>
                    <span class="value">￥{{ item.value }}</span>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import SalesGroupPieChart from "./SalesGroupPieChart.vue";
import { throttle } from "../../../utils";
@Component({
  name: "SearchSales",
  components: {
    SalesGroupPieChart
  }
})
export default class SearchSales extends Vue {
  private salesGroupIndex: Number = 0;
  private clickSalesAnalogy(val: Number) {
    this.salesGroupIndex = val;
  }
}
</script>

<style lang="scss" scoped>
.number-info {
  padding: 0 16px;
  margin-bottom: 24px;
  .number-info-title {
    height: 22px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    i {
      margin-left: 8px;
    }
  }
  .number-info-value {
    margin-top: 8px;
    overflow: hidden;
    font-size: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    span {
      display: inline-block;
      height: 32px;
      margin-right: 32px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 24px;
      line-height: 32px;
      &:last-child {
        margin-right: 0;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        vertical-align: top;
        i {
          margin-left: 4px;
          font-size: 12px;
        }
      }
    }
  }
}
.number-table {
  padding: 0 16px;
  .el-table {
    border: 1px solid #ebeef5;
    border-bottom: 0;
  }
}
.paginnation-box {
  margin: 16px 0;
  display: flex;
  justify-content: flex-end;
}
.pie-chart-value {
  height: 248px;
  position: relative;
}
.pie-value-show {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h4 {
    height: 22px;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  p {
    font-size: 22px;
  }
}

.col-sales-group-box {
  height: 248px;
  position: relative;
}
.sales-group-classify {
  max-width: 250px;
  min-width: 200px;
  margin: 0 20px;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  li {
    height: 22px;
    margin-bottom: 16px;
    line-height: 22px;
    cursor: pointer;
    span {
      &.dot {
        position: relative;
        top: -1px;
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 8px;
        border-radius: 8px;
      }
      &.percent {
        color: rgba(0, 0, 0, 0.45);
      }
      &.value {
        float: right;
      }
    }
  }
}

.sales-group-dropdown {
  display: none;
}

@media (max-width: 768px) {
  .sales-group-dropdown {
    display: block;
  }
  .sales-group {
    display: none;
  }
  .sales-group-classify {
    max-width: 100%;
    margin-top: 20px;
    position: relative;
    transform: none;
  }
  .col-sales-group-box {
    height: auto;
  }
}
</style>
<style lang="scss">
.sales-group {
  .el-button:hover {
    border-color: #1890ff;
  }
  .active {
    border-color: #1890ff;
    z-index: 100;
    &:hover {
      border-color: #1890ff;
    }
    span {
      color: #1890ff;
    }
  }
}
</style>
