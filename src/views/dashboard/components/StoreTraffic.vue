<template>
  <div>
    <el-card>
      <div class="store-group">
        <div class="container-scrolling">
          <span
            :class="{
              'arrow-show': true,
              prev: true,
              disable: this.transitionWidth === 0
            }"
            @click="clickChangeArrowShow('prev')"
          >
            <i class="iconfont icon-angle-left"></i>
          </span>
          <span
            :class="{
              'arrow-show': true,
              next: true,
              disable: this.transitionWidth === this.maxTransitionWidth
            }"
          >
            <i
              class="iconfont icon-angle-right"
              @click="clickChangeArrowShow('next')"
            ></i>
          </span>
          <div class="nav-wrap">
            <div class="tabs-nav-scroll" ref="tabsNavScroll">
              <div
                class="tabs-nav"
                :style="{ transform: `translateX(${-transitionWidth}px)` }"
                ref="tabsNav"
              >
                <ul>
                  <li
                    v-for="(item, index) in 15"
                    :key="index"
                    @click="clickSelectStore(item)"
                  >
                    <div class="conten-box">
                      <div class="content-left">
                        <div class="number-title">Store{{ item }}</div>
                        <div class="number-sub-title">{{ "转化率" }}</div>
                        <div class="number-info-value">{{ 2 + item }}%</div>
                      </div>
                      <div class="content-right">
                        <StorePieChart :chartData="[]"></StorePieChart>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container-line-chart">
          <StoreLineChart :chartData="[]"></StoreLineChart>
        </div>
      </div>
      <div></div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import StoreLineChart from "./StoreLineChart.vue";
import StorePieChart from "./StorePieChart.vue";
@Component({
  name: "StoreTraffic",
  components: {
    StoreLineChart,
    StorePieChart
  }
})
export default class StoreTraffic extends Vue {
  private storeData: any[] = [{ storeName: "store" }];
  private transitionWidth: number = 0;
  private maxTransitionWidth: number = -1;
  private tabsNavScrollDom: any = null;
  private tabsNavDom: any = null;
  private mounted() {
    this.inItStyle();
  }
  private inItStyle() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.tabsNavScrollDom = this.$refs.tabsNavScroll;
        this.tabsNavDom = this.$refs.tabsNav;
        this.maxTransitionWidth =
          this.tabsNavDom.offsetWidth <= this.tabsNavScrollDom.offsetWidth
            ? 0
            : this.tabsNavDom.offsetWidth - this.tabsNavScrollDom.offsetWidth;
      }, 1000);
    });
  }
  private clickChangeArrowShow(value: string) {
    if (value === "prev") {
      this.transitionWidth =
        this.transitionWidth - this.tabsNavScrollDom.offsetWidth < 0
          ? 0
          : this.transitionWidth - this.tabsNavScrollDom.offsetWidth;
    }
    if (value === "next") {
      this.transitionWidth =
        this.transitionWidth + this.tabsNavScrollDom.offsetWidth >=
        this.maxTransitionWidth
          ? this.maxTransitionWidth
          : this.transitionWidth + this.tabsNavScrollDom.offsetWidth;
    }
  }
  private clickSelectStore(item: any) {
    window.confirm("切换店铺,更改数据");
  }
}
</script>
<style lang="scss" scoped>
.store-group {
  outline: 0;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  .container-scrolling {
    padding: 0 40px;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5;
    white-space: nowrap;
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    zoom: 1;
    span {
      &.arrow-show {
        z-index: 2;
        cursor: pointer;
        transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        background-color: transparent;
        text-align: center;
        color: rgba(0, 0, 0, 0.45);
        width: 32px;
        height: 100%;
        opacity: 1;
      }
      &.prev {
        position: absolute;
        left: 0px;
      }
      &.next {
        position: absolute;
        right: 0px;
      }
      &.disable {
        cursor: not-allowed;
      }
      > .iconfont {
        font-size: 12px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .nav-wrap {
      overflow: hidden;
      margin-top: -1px;
      box-sizing: border-box;
      .tabs-nav-scroll {
        overflow: hidden;
        white-space: nowrap;
        .tabs-nav {
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          margin: 0;
          padding-left: 0;
          list-style: none;
          transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          ul {
            font-size: 0;
            li {
              font-size: 12px;
              display: inline-block;
              padding: 12px 16px;
              margin-right: 32px;
              .conten-box {
                display: flex;
                width: 138px;
                .content-left {
                  width: 50%;
                  padding: 0 4px;
                  .number-title {
                    margin-bottom: 16px;
                    color: rgba(0, 0, 0, 0.65);
                    font-size: 16px;
                    transition: all 0.3s;
                  }
                  .number-sub-title {
                    height: 22px;
                    overflow: hidden;
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 14px;
                    line-height: 22px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    width: 100%;
                  }
                  .number-info-value {
                    margin-top: 2px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    height: 32px;

                    color: rgba(0, 0, 0, 0.85);
                    font-size: 24px;
                    line-height: 32px;
                  }
                }
                .content-right {
                  width: 50%;
                  padding: 0 4px;
                  padding-top: 36px;
                }
              }
            }
          }
        }
      }
    }
  }
  .container-line-chart {
    padding-left: 24px;
    height: 430px;
  }
}
</style>
