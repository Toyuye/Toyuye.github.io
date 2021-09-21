<template>
  <div
    class="mobile-component-wrap"
    :style="{
      width: moblieSize.width + 'px',
      minHeight: moblieSize.minHeight + 'px'
    }"
  >
    <div
      class="mobile-component-item"
      @click="
        () =>
          onActiveClick({ name: 'header', id: 0, moduleSign: 'TopNavModule' })
      "
    >
      <ErrorBoundary>
        <MobileAsyncComponent
          :data="{ name: 'header', id: 0, moduleSign: 'TopNavModule' }"
        ></MobileAsyncComponent>
      </ErrorBoundary>
    </div>
    <Draggable
      v-model="RenderComponent"
      class="drag-component-wrap"
      tag="div"
      v-bind="dragOptions"
      :move="onDraggableMove"
      @start="onDraggableStart"
      @add="onDraggableAdd"
      @end="onDraggableEnd"
      @change="onDraggableChange"
    >
      <div
        class="mobile-component-item"
        v-for="component in RenderComponent"
        :key="component.id"
        @click="() => onActiveClick(component)"
      >
        <ErrorBoundary>
          <MobileAsyncComponent :data="component"></MobileAsyncComponent>
        </ErrorBoundary>
      </div>
    </Draggable>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import MobileAsyncComponent from "./MobileAsyncComponent.vue";
import Draggable from "vuedraggable";
import ErrorBoundary from "./ErrorBoundary.vue";
const designModule = namespace("design");

@Component({
  name: "MoblieComponent",
  components: {
    Draggable,
    MobileAsyncComponent,
    ErrorBoundary
  }
})
export default class MoblieComponent extends Vue {
  drag: boolean = false;
  moblieSize: object = {
    width: 375,
    minHeight: 667,
    name: "iPhone6/7/8",
    zoom: 100
  };
  @designModule.Getter("renderComponentList") renderComponentList!: any[];
  @designModule.Action("updateComponentList") updateComponentList!: Function;
  @designModule.Action("updateActiveComponent")
  updateActiveComponent!: Function;

  get dragOptions(): object {
    return {
      delay: 60,
      animation: 200,
      group: "StoreClone",
      disabled: false,
      ghostClass: "ghost-component",
      forceFallback: true
    };
  }

  get RenderComponent() {
    console.log("render----------变化", this.renderComponentList);
    return this.renderComponentList;
  }
  set RenderComponent(v) {
    this.updateComponentList(v);
  }

  onDraggableChange({
    newIndex,
    oldIndex
  }: {
    newIndex: number;
    oldIndex: number;
  }) {
    console.log("change");
  }

  onDraggableStart(move: object) {
    console.log(move, "start");
    this.drag = true;
  }
  onDraggableAdd(move: any) {}

  onDraggableMove(move: any) {
    console.log(move, "移动");
    return true;
  }
  onDraggableEnd(move: any) {
    console.log(move, "完了");
    this.drag = false;
  }
  onActiveClick(activeComponent: any) {
    this.updateActiveComponent(activeComponent);
    console.log(activeComponent, "--------------->>active click");
  }
  mounted() {
    console.log(this, "---------->>D");
  }
}
</script>
<style lang="scss">
$zoom: 1;
$DesignDraft: 750;
@function viewportVW($args) {
  @return calc(100vw / 4.1);
}
</style>
<style lang="scss" scoped>
.mobile-component-wrap {
  margin: 60px auto;
  width: 375px;
  min-height: 667px;
  background: #fff;
  box-shadow: 0 0 28px 0px #ccc;
  .mobile-component-item {
    cursor: move;
    background: #fff;
    border-bottom: 1px solid #ececec;
  }
}
</style>
<style lang="scss">
.ghost-component {
  &.module-item {
    .module-item-content {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
      background: pink;
      > div:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
}
</style>
