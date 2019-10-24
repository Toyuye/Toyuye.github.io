<template>
  <div :class="className" :style="{ height: height, width: width }"></div>
</template>
<script lang="ts">
import echarts, { EChartOption } from "echarts";
import { Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import resizeChart from "@/components/Charts/resizeChart";
@Component({
  name: "AreaChart"
})
export default class extends mixins(resizeChart) {
  @Prop({ required: true }) chartData!: any[];
  @Prop({ default: "chart" }) className!: String;
  @Prop({ default: "100%" }) width!: String;
  @Prop({ default: "100%" }) height!: String;
  @Watch("chartData", { deep: true })
  private onChartDataChange(value: any[]) {
    this.setOptions(value);
  }
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initChart();
      },500)
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
          bottom: -19,
          left: -35,
          right: 10,
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            animation: false,
            label: {
              show: false
            }
          },
          formatter: function(params: any) {
            return params[0].name + "&nbsp;" + params[0].value;
          }
        },
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false,
          data: [
            "2018-01-10",
            "2018-09-10",
            "2018-09-10",
            "2018-09-10",
            "2018-09-10",
            "2018-09-10",
            "2018-09-10"
          ],
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          show: false,
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
            symbol: "none",
            showSymbol: false,
            hoverAnimation: false,
            areaStyle: {
              color: "rgb(151, 95, 228)"
            },
            lineStyle: {
              color: "rgba(255, 255, 255, 0)"
            }
          }
        ]
      } as EChartOption<any>);
    }
  }
}
</script>
