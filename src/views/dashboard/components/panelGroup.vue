<template>
  <div>
    <el-row :gutter="0" class="panel-group">
      <el-col :xs="xs" :sm="12" :lg="6" class="card-panel-col">
        <el-card class="card">
          <div class="card-heard">
            <span class="margin-right-common">总销售量</span>
            <el-tooltip effect="dark" content="指标提示" placement="top"
              ><i class="iconfont icon-question-circle"></i>></el-tooltip
            >
          </div>
          <div class="number-total">
            <span>¥ 126,5600000</span>
          </div>
          <div class="card-canvas">
            <div class="canvas-item-box">
              <div class="canvas-item">
                <span class="margin-right-common">周同比</span>
                <span class="margin-right-common">12%</span>
                <span>
                  <i class="iconfont icon-sort-up" style="color:#f5222d"></i>
                </span>
              </div>
              <div class="canvas-item">
                <span class="margin-right-common">日同比</span>
                <span class="margin-right-common">12%</span>
                <span>
                  <i class="iconfont icon-sort-down" style="color:#52c41a"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="footer-item">
              <span class="margin-right-common">日销售额</span>
              <span>￥12,423</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="xs" :sm="12" :lg="6" class="card-panel-col">
        <el-card class="card">
          <div class="card-heard">
            <span>访问量</span>
            <el-tooltip effect="dark" content="指标提示" placement="top"
              ><i class="iconfont icon-question-circle"></i>></el-tooltip
            >
          </div>
          <div class="number-total">
            <span>8,846</span>
          </div>
          <div class="card-canvas">
            <div class="canvas-item-box">
              <AreaChart :chartData="[]"></AreaChart>
            </div>
          </div>
          <div class="card-footer">
            <div class="footer-item">
              <span class="margin-right-common">日访问量</span>
              <span>1,234</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="xs" :sm="12" :lg="6" class="card-panel-col">
        <el-card class="card">
          <div class="card-heard">
            <span>支付笔数</span>
            <el-tooltip effect="dark" content="指标提示" placement="top"
              ><i class="iconfont icon-question-circle"></i>></el-tooltip
            >
          </div>
          <div class="number-total">
            <span>6,560</span>
          </div>
          <div class="card-canvas">
            <div class="canvas-item-box">
              <BarChart :chartData="[]"></BarChart>
            </div>
          </div>
          <div class="card-footer">
            <div class="footer-item">
              <span class="margin-right-common">转化率</span>
              <span>60%</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="xs" :sm="12" :lg="6" class="card-panel-col">
        <el-card class="card">
          <div class="card-heard">
            <span>运营活动效果</span>
            <el-tooltip effect="dark" content="指标提示" placement="top"
              ><i class="iconfont icon-question-circle"></i>></el-tooltip
            >
          </div>
          <div class="number-total">
            <span>78%</span>
          </div>
          <div class="card-canvas">
            <div class="canvas-item-box">
              <el-progress
                :percentage="78"
                :show-text="false"
                :stroke-width="10"
              ></el-progress>
            </div>
          </div>
          <div class="card-footer">
            <div class="footer-item ">
              <span class="margin-right-common">周同比</span>
              <span class="margin-right-common">12%</span>
              <span>
                <i class="iconfont icon-sort-up" style="color:#f5222d"></i>
              </span>
            </div>
            <div class="footer-item">
              <span class="margin-right-common">日同比</span>
              <span class="margin-right-common">11%</span>
              <span>
                <i class="iconfont icon-sort-down" style="color:#52c41a"></i>
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { throttle } from "../../../utils";
import AreaChart from "./AreaChart.vue";
import BarChart from "./BarChart.vue";
@Component({
  name: "PanelGroup",
  components: {
    AreaChart,
    BarChart
  }
})
export default class PanelGroup extends Vue {
  private xs: Number = 12;
  private mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.onresizeFn();
      }, 100);
    });
  }
  private beforeDestroy() {
    window.removeEventListener("resize", this.onresizeFn);
  }
  private onresizeFn() {
    this.xsFn();
    window.addEventListener("resize", throttle(this.xsFn, 200));
  }
  private xsFn() {
    this.$el.clientWidth <= 500 ? (this.xs = 24) : (this.xs = 12);
  }
}
</script>
<style lang="scss" scoped>
.panel-group {
  width: calc(100% + 24px);
  left: -12px;
  .card-panel-col {
    padding: 0 12px;
    margin-bottom: 24px;
    .card {
      background: #fff;
      .card-heard {
        display: flex;
        justify-content: space-between;
      }
      .number-total {
        height: 38px;
        margin-top: 4px;
        margin-bottom: 0;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.85);
        font-size: 30px;
        line-height: 38px;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .card-canvas {
        height: 46px;
        position: relative;
        width: 100%;
        .canvas-item-box {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          .canvas-item {
            line-height: 22px;
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
      .card-footer {
        margin-top: 8px;
        padding-top: 9px;
        border-top: 1px solid #e8e8e8;
        white-space: nowrap;
        overflow: hidden;
        .footer-item {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
}
.margin-right-common {
  margin-right: 8px;
}
</style>

<style lang="scss">
.card {
  .el-card__body {
    padding-bottom: 8px;
  }
}
</style>
