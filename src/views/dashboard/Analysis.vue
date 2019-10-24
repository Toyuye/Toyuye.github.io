<template>
  <div>
    <PanelGroup></PanelGroup>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { throttle } from "@/utils";
import PanelGroup from "./components/panelGroup.vue";
@Component({
  name: "Analysis",
  components: {
    PanelGroup
  }
})
export default class Analysis extends Vue {}
</script>
<style lang="scss" scoped>
.panel-group {
  width: 100%;
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
