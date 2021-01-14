<template>
  <div
    class="mobile-component-wrap"
    :style="{
      width: moblieSize.width + 'px',
      minHeight: moblieSize.minHeight + 'px'
    }"
  >
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
      >
        {{ component.name }} {{ component.id }}
      </div>
    </Draggable>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";

import Draggable from "vuedraggable";
const designModule = namespace("design");

@Component({
  name: "MoblieComponent",
  components: {
    Draggable
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
  get dragOptions(): object {
    return {
      animation: 200,
      group: "StoreClone",

      disabled: false,
      ghostClass: "ghost-component",
      forceFallback: true
    };
  }

  get RenderComponent() {
    console.log("render----------变化");
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
  onDraggableAdd(move: any) {
    console.log(move, "add----------->>");
    if (move.newIndex == 0) {
      alert("不能添加第一项");
    }
    console.log(move.newIndex, "-------------->>>newIndex");
  }

  onDraggableMove(move: any) {
    console.log(move, "移动");
    if (move.draggedContext.futureIndex == 0) {
      return false;
    }

    if (move.draggedContext.index == 0) {
      return false;
    }

    return true;
  }
  onDraggableEnd(move: any) {
    console.log(move, "完了");
    this.drag = false;
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
  margin: 0 auto;
  width: 375px;
  min-height: 667px;
  background: #fff;
  .mobile-component-item {
    cursor: pointer;
    height: 40px;
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
