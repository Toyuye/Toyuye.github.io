<template>
  <div 
    class="mobile-component-wrap"
    :style="{width: moblieSize.width + 'px', minHeight: moblieSize.minHeight + 'px'}"
  >
    <Draggable
      v-model="renderComponentList"
      class="drag-component-wrap"
      tag="div"
      v-bind="dragOptions"
      @start="drag = true"
      @end="onDraggableEnd"
      @change="onDraggableChange"
    >
      <!-- <transition-group type="transition" :name="!drag ? 'flip-list' : null"> -->
        <div
          class="mobile-component-item"
          v-for="component in renderComponentList"
          :key="component"
        >
          {{ component }}
        </div>
      <!-- </transition-group> -->
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
    name: 'iPhone6/7/8',
    zoom: 100
  };
  
  @designModule.Getter("renderComponentList") renderComponentList!: any[];

  get dragOptions(): object {
    return {
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost"
    };
  }
  
  onDraggableChange(move: object) {
    console.log(move);
  }
  onDraggableEnd() {
    this.drag = false;
  }
  mounted() {
    console.log(this.renderComponentList)
  }
}
</script>
<style lang="scss" scoped>
.mobile-component-wrap {
  margin: 0 auto;
  width: 375px;
  min-height: 667px;
  // overflow: hidden;
  background: #fff;
  .mobile-component-item {
    cursor: pointer;
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #ececec;
  }
}
</style>
