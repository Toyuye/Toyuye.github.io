<template>
  <div :class="className" :style="{ height: height, width: width }"></div>
</template>
<script lang="ts">
import echarts, { EChartOption } from "echarts";
import { Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import resizeChart from "../../../components/Charts/resizeChart";
@Component({
  name: "BarChart"
})
export default class extends mixins(resizeChart) {
  @Prop({ required: true }) private chartData!: any[];
  @Prop({ default: "chart" }) private className!: string;
  @Prop({ default: "100%" }) private width!: string;
  @Prop({ default: "100%" }) private height!: string;
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
          bottom: -19,
          left: -30,
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
            type: "bar",
            animation: true,
            barWidth: 12,
            large: true,
            itemStyle: {
              normal: { color: "#409EFF" }
            }
          }
        ]
      } as EChartOption<any>);
    }
  }
}
</script>
