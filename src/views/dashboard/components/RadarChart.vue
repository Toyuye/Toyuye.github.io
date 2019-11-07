<template>
  <div :class="className" :style="{ width: width, height: height }"></div>
</template>
<script lang="ts">
import echarts, { EChartOption } from "echarts";
import { Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import resizeChart from "../../../components/Charts/resizeChart";

@Component({
  name: "RadarChart"
})
export default class extends mixins(resizeChart) {
  @Prop({ default: "chart" }) private className!: string;
  @Prop({ default: "100%" }) private width!: string;
  @Prop({ default: "100%" }) private height!: string;
  @Prop({ required: true }) private chartData!: any[];
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
        grid: {
          containLabel: true
        },
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "引用", max: 10 },
            { name: "热度", max: 10 },
            { name: "贡献", max: 10 },
            { name: "产量", max: 10 },
            { name: "口碑", max: 10 }
          ]
        },
        series: [
          {
            name: "",
            type: "radar",
            data: [
              {
                value: [10, 7, 5, 4, 8],
                name: "个人",
                lineStyle: {
                  color: "rgb(24, 144, 255)"
                }
              },
              {
                value: [3, 1, 3, 6, 9],
                name: "团队",
                lineStyle: {
                  color: "rgb(250, 204, 20)"
                }
              },
              {
                value: [4, 7, 5, 6, 1],
                name: "部门",
                lineStyle: {
                  color: "rgb(47, 194, 91)"
                }
              }
            ]
          }
        ]
      } as EChartOption<any>);
    }
  }
}
</script>
<style lang="scss" scoped></style>
