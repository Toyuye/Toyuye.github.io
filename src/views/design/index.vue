<template>
  <div
    class="design-container"
    v-loading="loading"
    element-loading-text="组件正在加载中，请稍等......"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <div class="design-layout-header">
      <div class="design-layout-header-template">
        <div class="template-change-handle" @click="onChangeTemplate">
          <i class="iconfont icon-folder-open"></i>
          切换模板
          <i class="iconfont icon-switch"></i>
        </div>
      </div>
      <div class="design-layout-header-title">{{ "-----title-----" }}</div>
      <div class="design-layout-header-setting">
        <div class="layout-header-setting-item" @click="onDesignGuide">
          <i class="iconfont icon-paper-plane"></i>
          指南
        </div>
        <div class="layout-header-setting-item" @click="onDesignPreview">
          <i class="iconfont icon-external-link"></i>
          预览
        </div>
        <div class="layout-header-setting-item" @click="onDesignSave">
          <i class="iconfont icon-save"></i>
          保存
        </div>
        <div class="layout-header-setting-item">
          <el-dropdown
            size="small"
            split-button
            type="primary"
            @command="vCommand => this[vCommand]()"
          >
            发布
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="onDesignPublishNow"
                >立即发布</el-dropdown-item
              >
              <el-dropdown-item command="onDesignRegularRelease"
                >定时发布</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="design-layout-main">
      <div class="design-layout-main-module">
        <ModuleComponent></ModuleComponent>
      </div>
      <div class="design-layout-main-mobile">
        <ErrorBoundary tips="moblieComponent item error">
          <MoblieComponent></MoblieComponent>
        </ErrorBoundary>
      </div>
      <div class="design-layout-main-attribute">
        <ErrorBoundary tips="moblieAttribute item error">
          <AttributeComponent></AttributeComponent>
        </ErrorBoundary>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";

import ErrorBoundary from "./ErrorBoundary.vue";
import MoblieComponent from "./MobileComponent.vue";
import ModuleComponent from "./ModuleComponent.vue";
import AttributeComponent from "./AttributeComponent.vue";

const designModule = namespace("design");

@Component({
  name: "Design",
  components: {
    ErrorBoundary,
    MoblieComponent,
    ModuleComponent,
    AttributeComponent
  }
})
export default class Design extends Vue {
  loading: boolean = true;
  @designModule.Action("getDesignPage") getDesignPage!: Function;
  @designModule.Getter("renderComponentList") renderComponentList!: any[];
  async mounted() {
    await this.getDesignPage().then((onloadService: boolean) => {
      if (onloadService) {
        console.log(this.renderComponentList, "-------------->>>");
      }
    });
    this.loading = false;
  }
  public onChangeTemplate() {
    alert("=====>>>> 切换模板");
  }
  public onDesignGuide() {
    console.log("guide");
  }
  public onDesignPreview() {
    console.log("preview");
  }
  public onDesignSave() {
    console.log("save");
  }
  public onDesignPublishNow() {
    console.log("publish now");
  }
  public onDesignRegularRelease() {
    console.log("regular release");
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
.design-layout-header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9e7ec;
  box-shadow: 2px 6px 6px #eee;
  position: relative;
  z-index: 100;
  &-template {
    padding-left: 20px;
    width: 320px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    min-width: 320px;
    overflow: hidden;
    .template-change-handle {
      font-size: 14px;
      color: #595961;
      cursor: pointer;
      height: 32px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 6px;
      transition: all 0.3s;
      &:hover {
        background: #eef0f4;
      }
      > i {
        margin: 0 5px;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &-title {
    background: pink;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 475px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &-setting {
    display: flex;
    justify-content: flex-end;
    width: 360px;
    box-sizing: border-box;
    padding-right: 20px;
    align-items: center;
    min-width: 360px;
    .layout-header-setting-item {
      cursor: pointer;
      color: #595961;
      &:not(:last-child) {
        height: 32px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        margin-right: 10px;
        transition: all 0.3s;
        > i {
          margin-right: 5px;
        }
        &:hover {
          background: #eef0f4;
        }
      }
    }
  }
}
.design-layout-main {
  display: flex;
  position: relative;
  height: calc(100vh - 50px);
  &-module {
    width: 320px;
    min-width: 320px;
  }
  &-mobile {
    width: calc(100vw - 320px - 360px);
    min-width: 475px;
    background: pink;
    height: 100%;
  }

  &-attribute {
    width: 360px;
    min-width: 360px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
