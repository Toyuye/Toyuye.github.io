<template>
  <div :class="className" :style="{ width: width, height: height }">111</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import resizeChart from "../../../components/Charts/resizeChart";
import echarts, { EChartOption } from "echarts";

@Component({
  name: "StoreLineChart"
})
export default class extends mixins(resizeChart) {
  @Prop({ required: true }) private chartData!: any[];
  @Prop({ default: "100%" }) private width!: string;
  @Prop({ default: "100%" }) private height!: string;
  @Prop({ default: "chart" }) private className!: string;
  @Watch("chartData", { deep: true })
  private onChartDataChange(value: any[]) {
    this.setOptions(value);
  }
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initChart();
      }, 600);
    });
  }
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  }
  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, "macarons");
    this.setOptions(this.chartData);
  }
  private setOptions(chartData: any[]) {
    if (this.chart) {
      this.chart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["客流量", "支付笔数"]
        },
        grid: {
          left: 20,
          bottom: 42,
          right: 50,
          containLabel: true
        },
        xAxis: {
          min: 8.55,
          type: "value",
          axisLine: {
            onZero: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            onZero: false,
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        dataZoom: [
          {
            type: "slider",
            xAxisIndex: 0,
            filterMode: "empty"
          },

          {
            type: "inside",
            xAxisIndex: 0,
            filterMode: "empty"
          }
        ],
        series: [
          {
            name: "客流量",
            id: "a",
            type: "line",
            animation: true,
            symbolSize: 2,
            data: [
              [8.55, 40],
              [9.55, 16],
              [10.55, 42],
              [11.55, 69],
              [12.55, 32],
              [13.55, 52],
              [14.55, 105]
            ],
            itemStyle: {
              color: "rgb(24, 144, 255)"
            }
          },
          {
            name: "支付笔数",
            id: "b",
            type: "line",
            animation: true,
            symbolSize: 2,
            data: [
              [8.55, 108],
              [9.55, 105],
              [10.55, 77],
              [11.55, 100],
              [12.55, 63],
              [13.55, 60],
              [14.55, 75]
            ],
            itemStyle: {
              color: "rgb(47, 194, 91)"
            }
          }
        ]
      } as EChartOption<any>);
    }
  }
}
</script>
