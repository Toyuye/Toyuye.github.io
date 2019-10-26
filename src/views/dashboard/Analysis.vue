<template>
  <div
    v-loading.fullscreen.lock="loading"
    element-loading-background="rgba(0, 0, 0, 0.9)"
  >
    <PanelGroup></PanelGroup>
    <SalesVisit></SalesVisit>
    <SearchSales></SearchSales>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PanelGroup from "./components/panelGroup.vue";
import SalesVisit from "./components/SalesVisit.vue";
import SearchSales from "./components/SearchSales.vue";

@Component({
  name: "Analysis",
  components: {
    PanelGroup,
    SalesVisit,
    SearchSales
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
.pie-value-show {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h4 {
    height: 22px;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  p {
    font-size: 22px;
  }
}
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
