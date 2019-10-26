<template>
  <div :class="className" :style="{ width: width, height: height }"></div>
</template>
<script lang="ts">
import echarts, { EChartOption } from "echarts";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import resizeChart from "../../../components/Charts/resizeChart";
import { mixins } from "vue-class-component";
@Component({
  name: "SalesGroupPieChart"
})
export default class extends mixins(resizeChart) {
  @Prop({ default: "chart" }) private className!: String;
  @Prop({ default: "100%" }) private width!: String;
  @Prop({ default: "100%" }) private height!: String;
  @Prop({ required: true }) private chartData!: any[];
  @Watch("chartData", { deep: true })
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
    this.setOptions(this.chartData);
  }
  private setOptions(chartData: any[]) {
    if (this.chart) {
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: params => {
            const par: any = params;
            return `${par["marker"]} ${par["name"]}   ${par["percent"]}%`;
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["74%", "96%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                name: "家用电器",
                percent: "10.90%",
                value: 99,
                color: "rgb(24, 144, 255)"
              },
              {
                name: "食用酒水",
                percent: "10.90%",
                value: 88,
                color: "rgb(170, 170, 170)"
              }
            ],
            itemStyle: {
              color: (params: any) => {
                return params.data.color;
              }
            }
          }
        ]
      } as EChartOption<any>);
    }
  }
}
</script>
