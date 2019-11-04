<template>
  <div>
    <el-card class="sales-card">
      <div slot="header" class="tabs-card">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :xs="24" :sm="6">
            <div class="tabs-card-left">
              <ul>
                <li
                  v-for="(item, index) in ['销售额', '访问量']"
                  :key="index"
                  :class="{ active: index == salesVisitIndex }"
                  @click="clickSalesVisit(index)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="0" :sm="18">
            <div class="tabs-card-right">
              <ul v-show="showDateIndex">
                <li
                  v-for="(item, index) in ['今日', '本周', '本月', '全年']"
                  :key="index"
                  :class="{ active: index == selectDateIndex }"
                  @click="clickSelectDate(index)"
                >
                  {{ item }}
                </li>
              </ul>
              <div class="block">
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  size="small"
                  v-model="dateValue"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始月份"
                  end-placeholder="结束月份"
                >
                </el-date-picker>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-col :xs="24" :sm="14" :md="15" :lg="16">
          <div class="sales-data-charts">
            <h4 style="margin-bottom:20px;">销售趋势</h4>

            <SalesBarChart
              :chartsData="chartsData"
              :height="'254px'"
              :width="'100%'"
            ></SalesBarChart>
          </div>
        </el-col>
        <el-col :xs="24" :sm="10" :md="9" :lg="8">
          <div class="sales-rank">
            <h4>门店销售额排名</h4>
            <ul>
              <li v-for="item in 7" :key="item">
                <span :class="{ 'rank-num': true, active: item <= 3 }">{{
                  item
                }}</span>
                <span class="rank-name">{{ `公专${item}号店` }}</span>
                <span>{{ 232.355 }}</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { throttle } from "../../../utils";
import SalesBarChart from "./SalesBarChart.vue";
@Component({
  name: "SalesVisit",
  components: {
    SalesBarChart
  }
})
export default class SalesVisit extends Vue {
  private dateValue: string = "";
  private salesVisitIndex: number = 0;
  private selectDateIndex: number = 0;
  private showDateIndex: boolean = true;
  private chartsData: any[] = [
    10,
    52,
    200,
    334,
    390,
    330,
    220,
    220,
    33,
    44,
    555,
    555
  ];
  private mounted() {
    this.onResize();
  }
  private beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
  private listenerShowDate() {
    this.$nextTick(() => {
      this.$el.clientWidth >= 730
        ? (this.showDateIndex = true)
        : (this.showDateIndex = false);
    });
  }
  private onResize() {
    this.listenerShowDate();
    window.addEventListener("resize", throttle(this.listenerShowDate, 200));
  }
  private clickSalesVisit(val: number) {
    this.salesVisitIndex = val;
    if (val == 0) {
      this.chartsData = [100, 522, 20, 334, 30, 330, 220, 220, 33, 44, 555, 55];
    }
    if (val == 1) {
      this.chartsData = [
        10,
        52,
        200,
        3342,
        390,
        3230,
        220,
        220,
        33,
        442,
        555,
        525
      ];
    }
  }
  private clickSelectDate(val: number) {
    this.selectDateIndex = val;
  }
}
</script>
<style lang="scss" scoped>
.sales-card {
  .tabs-card {
    .tabs-card-left {
      height: 100%;
      ul {
        height: 100%;
        display: flex;
        cursor: default;
        li {
          cursor: pointer;
          padding: 0 16px;
          position: relative;
          height: 32px;
          line-height: 32px;
          &.active {
            color: #1890ff;
            font-weight: 500;
            transition: all 0.6s linear;
          }
          &.active::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: -12px;
            height: 2px;
            width: 100%;
            background: #1890ff;
            border-radius: 2px;
            transition: all 0.6s linear;
          }
        }
      }
    }
    .tabs-card-right {
      display: flex;
      float: right;
      ul {
        width: 185px;
        display: flex;
        justify-content: space-between;
        cursor: default;
        margin-right: 18px;
        align-items: center;
        li {
          height: 32px;
          line-height: 32px;
          cursor: pointer;
          &.active {
            color: #1890ff;
            font-weight: 500;
            transition: all 0.6s linear;
          }
        }
      }
    }
  }
}
.sales-data-charts {
  padding-left: 16px;
  padding-bottom: 16px;
}
.sales-rank {
  padding: 0px 16px 16px 16px;
  ul {
    margin: 25px 0 0 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      margin-top: 16px;
      zoom: 1;
      span {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 22px;
        &.rank-num {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-top: 1.5px;
          margin-right: 16px;
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          background-color: #fafafa;
          border-radius: 20px;
          &.active {
            color: #fff;
            background-color: #314659;
          }
        }
        &.rank-name {
          flex: 1 1;
          margin-right: 8px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.sales-card {
  .el-card__header {
    padding: 12px 20px;
  }
}
</style>
