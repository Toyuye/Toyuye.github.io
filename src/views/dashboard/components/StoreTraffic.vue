<template>
  <div>
    <el-card>
      <div class="store-group">
        <div class="container-scrolling">
          <span
            :class="{ 'arrow-show': true, prev: true, disable: prevDisable }"
            @click="clickChangeArrowShow('prev')"
          >
            <i class="iconfont icon-angle-left"></i>
          </span>
          <span
            :class="{ 'arrow-show': true, next: true, disable: nextDisable }"
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
                    style="width:170px;height:140px;"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({
  name: "StoreTraffic"
})
export default class StoreTraffic extends Vue {
  private transitionWidth: number = 0;
  private tabsNavScrollDom: any = null;
  private tabsNavDom: any = null;
  private nextDisable = false;
  private prevDisable = true;
  private mounted() {
    this.inItStyle();
  }
  private inItStyle() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.tabsNavScrollDom = this.$refs.tabsNavScroll;
        this.tabsNavDom = this.$refs.tabsNav;
        if (this.tabsNavDom.offsetWidth <= this.tabsNavScrollDom.offsetWidth) {
          this.nextDisable = true;
        }
      }, 500);
    });
  }
  private clickChangeArrowShow(value: string) {
    if (value === "prev") {
      this.transitionWidth === 0
        ? (this.prevDisable = true)
        : (this.prevDisable = false);
      if (this.prevDisable) {
        return;
      }
      this.transitionWidth =
        this.transitionWidth - this.tabsNavScrollDom.offsetWidth < 0
          ? 0
          : this.transitionWidth - this.tabsNavScrollDom.offsetWidth;
    }
    if (value === "next") {
      if (this.nextDisable) {
        return;
      }
      this.transitionWidth = (this.transitionWidth + this.tabsNavScrollDom.offsetWidth > this.tabsNavDom.offsetWidth) ?  0 : 1
    }
  }
}
</script>
<style lang="scss" scoped>
.store-group {
  margin: 0 0 16px;
  outline: 0;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  .container-scrolling {
    padding: 0 40px;
    position: relative;
    box-sizing: border-box;
    margin-bottom: -1px;
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
            }
          }
        }
      }
    }
  }
}
</style>
