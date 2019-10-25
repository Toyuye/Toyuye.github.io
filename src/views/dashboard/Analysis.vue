<template>
  <div
    v-loading.fullscreen.lock="loading"
    element-loading-background="rgba(0, 0, 0, 0.9)"
  >
    <PanelGroup></PanelGroup>
    <SalesVisit></SalesVisit>
    <el-row style="margin: 20px -10px 0px -10px;">
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
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" style="margin-bottom:20px;">
        <div style="padding:0 10px;">
          <el-card class="box-card">
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
              </el-row>
            </div>
            <h4>{{ ["全部渠道", "线上", "门店"][salesGroupIndex] }}销售额</h4>
            <el-row type="flex" align="middle" justify="space-between">
              <SalesGroupPieChart :chartData="[]"></SalesGroupPieChart>
              <ul class="sales-group-classify">
                <li
                  v-for="(item, index) in [
                    {
                      name: '家用电器',
                      percent: '10.90%',
                      value: '￥99',
                      color: 'rgb(24, 144, 255)'
                    },
                    {
                      name: '食用酒水',
                      percent: '10.90%',
                      value: '￥99',
                      color: 'rgb(170, 170, 170)'
                    }
                  ]"
                  :key="index"
                >
                  <span class="dot" :style="{ background: item.color }"></span>
                  <span>{{ item.name }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="percent">{{ item.percent }}</span>
                  <span class="value">{{ item.value }}</span>
                </li>
              </ul>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PanelGroup from "./components/panelGroup.vue";
import SalesVisit from "./components/SalesVisit.vue";
import SalesGroupPieChart from "./components/SalesGroupPieChart.vue";
@Component({
  name: "Analysis",
  components: {
    PanelGroup,
    SalesVisit,
    SalesGroupPieChart
  }
})
export default class Analysis extends Vue {
  private salesGroupIndex: Number = 0;
  private loading: Boolean = true;
  private mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }
  private clickSalesAnalogy(val: Number) {
    this.salesGroupIndex = val;
  }
}
</script>
<style lang="scss" scoped>
.sales-group-classify {
  position: absolute;
  top: 50%;
  right: 0;
  min-width: 200px;
  margin: 0 20px;
  padding: 0;
  list-style: none;
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
        position: absolute;
        right: 0;
      }
    }
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
