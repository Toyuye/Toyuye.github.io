<template>
  <div class="mobile-component-wrap">
    <Draggable
      v-model="renderComponentList"
      class="drag-component-wrap"
      tag="div"
      v-bind="dragOptions"
      @start="drag = true"
      @end="onDraggableEnd"
      @change="onDraggableChange"
    >
      <div class="mobile-component-item" v-for="component in renderComponentList" :key="component">
        {{component}}
      </div>
    </Draggable>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";

import Draggable  from "vuedraggable";

@Component({
  name: "MoblieComponent",
  components: {
    Draggable
  }
})
export default class MoblieComponent extends Vue {
  drag: boolean = false;
  renderComponentList: any[] = [1, 2, 3];
  get dragOptions(): object {
    return {
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost"
    }
  }
  onDraggableChange(a,b,c) {
    console.log(a,b,c)
  }
  onDraggableEnd() {
    this.drag = false
    console.log(this.renderComponentList,'----->>d')
  }

  mounted() {}
}
</script>


<style lang="scss" scoped>
.mobile-component-wrap{
  .mobile-component-item{
    cursor: pointer;
    height: 40px;
    background: cadetblue;
  }
}
 
</style>
