<template>
  <div
    v-loading.fullscreen.lock="loading"
    element-loading-background="rgba(0, 0, 0, 0.9)"
  >
    <PanelGroup></PanelGroup>
    <el-card class="sales-card">
      <div slot="header" class="tabs-card">
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
        <div class="tabs-card-right">
          <ul>
            <li
              v-for="(item, index) in ['今日', '本周', '本月', '全年']"
              :key="index"
              :class="{ active: index == 0 }"
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
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { throttle } from "../../utils";
import PanelGroup from "./components/panelGroup.vue";
@Component({
  name: "Analysis",
  components: {
    PanelGroup
  }
})
export default class Analysis extends Vue {
  private loading: Boolean = true;
  private dateValue: String = "";
  private salesVisitIndex: Number = 0;
  private mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }
  private clickSalesVisit(val) {
    this.salesVisitIndex = val;
  }
  private clickSelectDate(val) {
    console.log(this.dateValue);
  }
}
</script>
<style lang="scss" scoped>
.sales-card {
  .tabs-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tabs-card-left {
      height: 100%;
      ul {
        height: 100%;
        display: flex;
        cursor: default;
        li {
          cursor: pointer;
          height: 100%;
          padding: 0 16px;
          position: relative;
          &.active {
            color: #1890ff;
            font-weight: 500;
            transition: all 1s linear;
          }
          &.active::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: -18px;
            height: 2px;
            width: 100%;
            background: #1890ff;
            border-radius: 2px;
            transition: all 1s linear;
          }
        }
      }
    }
    .tabs-card-right {
      display: flex;
      ul {
        width: 208px;
        display: flex;
        justify-content: space-between;
        cursor: default;
        margin-right: 24px;
        align-items: center;
        li {
          cursor: pointer;
          &.active {
            color: #1890ff;
            font-weight: 500;
          }
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
