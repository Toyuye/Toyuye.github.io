<template>
  <div :class="className" :style="{ width: width, height: height }"></div>
</template>
<script lang="ts">
import echarts, { EChartOption } from "echarts";
import resizeChart from "../../../components/Charts/resizeChart";
import { mixins } from "vue-class-component";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "SalesBarChart"
})
export default class extends mixins(resizeChart) {
  @Prop({ default: "chart" }) private className!: string;
  @Prop({ default: "100%" }) private width!: string;
  @Prop({ default: "100%" }) private height!: string;
  @Prop({ required: true }) private chartsData!: any[];
  @Watch("chartsData", { deep: true })
  private onChartDataChange(value: any[]) {
    this.setOptions(value);
  }
  public mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initChart();
      }, 600);
    });
  }
  public beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  }
  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, "macarons");
    this.setOptions(this.chartsData);
  }
  private setOptions(chartsData: any[]) {
    if (this.chart) {
      this.chart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: 0,
          top: "3%",
          right: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            animation: true,
            barMaxWidth: 20,
            data: chartsData,
            large: true
          }
        ]
      } as EChartOption);
    }
  }
}
</script>
