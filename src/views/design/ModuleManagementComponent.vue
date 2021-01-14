<template>
  <div :style="{ height: 'calc(100% - 50px - 40px - 40px)' }">
    <OverlayScrollbarsComponent
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      :style="{ height: '100%' }"
    >
      <Draggable
        class="module-management-component-wrap"
        v-bind="dragOptions"
        :list="RenderComponent"
      >
        <div
          class="module-management-item"
          v-for="item in RenderComponent"
          :key="item.id"
        >
          <i class="iconfont icon-management-"></i>
          <div class="module-management-item-title">
            {{ item.name }}{{ item.id }}
          </div>

          <el-popover
            popper-class="edit-package-popover"
            :open-delay="200"
            trigger="hover"
            :tabindex="-1"
          >
            <div
              class="handle-item"
              @click="() => onModuleManagementChangeName(item.id)"
            >
              重命名
            </div>
            <div
              class="handle-item"
              @click="() => onModuleManagementDeleteItem(item.id)"
            >
              删除
            </div>
            <div class="iconfont icon-ellipsis-vertical" slot="reference"></div>
          </el-popover>
        </div>
      </Draggable>
    </OverlayScrollbarsComponent>
    <el-dialog
      :visible.sync="changeNameModuleManagementVisible"
      width="20%"
      :center="true"
      class="delete-package-dialog"
      destroy-on-close
      :show-close="false"
    >
      <el-input size="small" v-model="currentEditManagement.name"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="small"
          @click="changeNameModuleManagementVisible = false"
          >取 消</el-button
        >
        <el-button
          size="small"
          type="primary"
          @click="changeNameModuleManagementVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import Draggable from "vuedraggable";
const designModule = namespace("design");
@Component({
  name: "ModuleManagementComponent",
  components: {
    Draggable,
    OverlayScrollbarsComponent
  }
})
export default class ModuleManagementComponent extends Vue {
  changeNameModuleManagementVisible: boolean = false;
  currentEditManagement: object = {};
  @designModule.Getter("renderComponentList") renderComponentList!: any[];
  @designModule.Action("updateComponentList") updateComponentList!: Function;

  get dragOptions(): object {
    return {
      sort: true,
      animation: 200,
      group: {
        name: "StoreClone",
        pull: false,
        put: false
      },
      disabled: false,
      ghostClass: "ghost-module-management-item",
      forceFallback: true
    };
  }

  get RenderComponent() {
    console.log("render----------变化");
    return this.renderComponentList;
  }

  set RenderComponent(v) {
    console.log(11111);
    this.updateComponentList(v);
  }
  public onModuleManagementChangeName(id: number) {
    console.log(id);
    this.currentEditManagement = this.RenderComponent.find(
      item => item.id == id
    );
    this.changeNameModuleManagementVisible = true;
  }
  public onModuleManagementDeleteItem(id: number) {
    console.log(id);
  }
}
</script>

<style lang="scss" scoped>
.module-management-component-wrap {
  padding: 10px 15px 10px 10px;
}

.module-management-item {
  padding: 0 5px;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  color: #595961;
  font-size: 12px;
  .icon-management- {
    color: #2589ff;
    font-size: 14px;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    background-color: #eef0f4;
  }
  &-title {
    flex: 1;
    margin: 0 5px;
    width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
<style lang="scss"></style>
