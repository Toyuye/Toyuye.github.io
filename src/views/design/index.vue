<template>
  <div
    class="design-container"
    v-loading="loading"
    element-loading-text="组件正在加载中，请稍等......"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <HeaderComponent></HeaderComponent>
    <div class="design-layout-main">
      <div class="design-layout-main-module">
        <div v-if="moduleComponent.length == 0" style="height: 100%">
          <div class="module-tabs-wrap">
            <div
              @click="() => onModuleTabsChange(tabItem.name)"
              :class="{
                'module-tabs-item': true,
                'module-tabs-item-active': activeTabsComponent == tabItem.name
              }"
              v-for="tabItem in moduleTabs"
              :key="tabItem.name"
            >
              <el-tooltip
                effect="dark"
                :content="tabItem.tips"
                placement="bottom"
                :tabindex="-1"
              >
                <div class="tips-wrap">
                  <i :class="`iconfont icon-${tabItem.iconName}`"></i>
                </div>
              </el-tooltip>
            </div>
          </div>
          <div
            class="module-create-package-wrap"
            v-if="
              activeTabsComponent == 'ModulePackageComponent' ||
                activeTabsComponent == 'ModuleManagementComponent'
            "
          >
            <div class="module-create-package-title">
              {{
                activeTabsComponent == "ModulePackageComponent"
                  ? "我的组件包"
                  : "组件管理"
              }}
            </div>
            <div class="module-create-package-tips">
              {{
                activeTabsComponent == "ModulePackageComponent"
                  ? "拖拽至中间使用"
                  : "上下拖动可重新排序"
              }}
            </div>
            <div class="module-create-package" @click="onCreatePackage">
              创建组件包
            </div>
          </div>
          <component :is="activeTabsComponent"></component>
          <div class="module-feedback-footer">意见反馈</div>
        </div>
        <div v-else class="module-tabs-nodata">
          <div class="iconfont icon-mobile-error"></div>
          <div class="module-tabs-nodata-tips">该模板可用组件为空</div>
        </div>
      </div>
      <div class="design-layout-main-mobile">
        <OverlayScrollbarsComponent
          :options="{ scrollbars: { autoHide: 'scroll' } }"
          :style="{ height: '100%' }"
        >
          <MoblieComponent></MoblieComponent>
          <div style="padding-bottom: 1px"></div>
        </OverlayScrollbarsComponent>
      </div>
      <div class="design-layout-main-attribute">
        <AttributePageComponent
          v-if="RenderIsActiveAttribute == 'page'"
        ></AttributePageComponent>

        <AttributeComponent v-else></AttributeComponent>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import HeaderComponent from "./HeaderComponent.vue";
import ErrorBoundary from "./ErrorBoundary.vue";
import MoblieComponent from "./MobileComponent.vue";
import ModuleComponent from "./ModuleComponent.vue";
import ModulePackageComponent from "./ModulePackageComponent.vue";
import ModuleManagementComponent from "./ModuleManagementComponent.vue";
import AttributeComponent from "./AttributeComponent.vue";
import AttributePageComponent from "./AttributePageComponent.vue";
const designModule = namespace("design");

@Component({
  name: "Design",
  components: {
    OverlayScrollbarsComponent,
    HeaderComponent,
    ErrorBoundary,
    MoblieComponent,
    ModuleComponent,
    ModulePackageComponent,
    ModuleManagementComponent,
    AttributeComponent,
    AttributePageComponent
  }
})
export default class Design extends Vue {
  moduleComponent: any[] = [];
  moduleTabs: any[] = [
    {
      name: "ModuleComponent",
      iconName: "database-set",
      tips: "组件库"
    },
    {
      name: "ModulePackageComponent",
      iconName: "database-set",
      tips: "我的组件包"
    },
    {
      name: "ModuleManagementComponent",
      iconName: "database-set",
      tips: "组件管理"
    }
  ];
  activeTabsComponent: string = "ModuleComponent";
  loading: boolean = true;
  @designModule.Action("getDesignPage") getDesignPage!: Function;
  @designModule.Getter("renderComponentList") renderComponentList!: any[];
  @designModule.Getter("activeComponent") activeComponent!: object;
  @designModule.Getter("isActiveAttribute") isActiveAttribute!:
    | "page"
    | "component";
  async mounted() {
    await this.getDesignPage().then((onloadService: boolean) => {
      if (onloadService) {
        this.loading = false;
        console.log(this.renderComponentList, "-------------->>>获取组件");
      }
    });
  }
  public onModuleTabsChange(activeName: string) {
    this.activeTabsComponent = activeName;
  }
  public onCreatePackage() {
    console.log("创建组件包--------------->>>>");
  }
  // 计算--------->> show page or component
  get RenderIsActiveAttribute() {
    return this.isActiveAttribute;
  }

  get RenderActiveComponent() {
    console.log(this.activeComponent, "00000000000000000");
    return this.activeComponent;
  }
}
</script>
<style lang="scss" scoped>
.design-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.module-tabs-wrap {
  height: 30px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  padding: 10px;
  .module-tabs-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid #e8e8e8;
    &-active {
      background-color: #2589ff;
      color: #fff;
      border-color: #2589ff;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
    &:not(:first-child) {
      border-left: 0;
    }
    .tips-wrap {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 16px;
      }
    }
  }
}
.module-create-package-wrap {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e3e2e5;
  box-sizing: border-box;
  height: 40px;
  justify-content: space-between;
  margin: 0 20px 0 10px;
  padding-left: 5px;
  font-size: 12px;
  .module-create-package-title {
    font-weight: 600;
    color: #595961;
    width: 70px;
  }
  .module-create-package-tips {
    flex: 1;
    padding-left: 5px;
    font-size: 12px;
    color: #9797a1;
  }
  .module-create-package {
    cursor: pointer;
    color: #2589ff;
  }
}
.module-feedback-footer {
  box-sizing: border-box;
  border-top: 1px solid #e3e2e5;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}
.module-tabs-nodata {
  text-align: center;
  .icon-mobile-error {
    margin-top: 60px;
    font-size: 60px;
    color: #9797a1;
  }
  &-tips {
    color: #9797a1;
    margin: 10px auto;
  }
}
.design-layout-main {
  display: flex;
  position: relative;
  height: calc(100vh - 50px);
  &-module {
    width: 320px;
    min-width: 320px;
    background-color: #f8f9fa;
    position: relative;
    z-index: 2;
  }

  &-mobile {
    width: calc(100vw - 320px - 360px);
    min-width: 475px;
    background: #f0f2f5;
    height: 100%;
  }

  &-attribute {
    width: 360px;
    min-width: 360px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background-color: #f8f9fa;
  }
}
</style>
