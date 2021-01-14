<template>
  <div :style="{ height: 'calc(100% - 50px - 40px - 40px)' }">
    <OverlayScrollbarsComponent
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      :style="{ height: '100%' }"
    >
      <Draggable
        class="module-package-component-wrap"
        v-bind="dragOptions"
        :list="modulePackageList"
        :clone="onModulePackageClone"
      >
        <div
          v-for="item in modulePackageList"
          :key="item.id"
          class="module-package-item"
          :data-moduleIds="item.moduleIds"
        >
          <i class="iconfont icon-management-"></i>
          <div class="module-package-item-title">{{ item.title }}</div>
          <el-popover
            popper-class="edit-package-popover"
            :open-delay="200"
            trigger="hover"
            :tabindex="-1"
          >
            <div
              class="handle-item"
              @click="() => onModulePackageChangeName(item.id)"
            >
              重命名
            </div>
            <div
              class="handle-item"
              @click="() => onModulePackageDeleteItem(item.id)"
            >
              删除
            </div>
            <div class="iconfont icon-ellipsis-vertical" slot="reference"></div>
          </el-popover>
        </div>
      </Draggable>
    </OverlayScrollbarsComponent>

    <el-dialog
      :visible.sync="changeNameModulePackageVisible"
      width="20%"
      :center="true"
      class="changeName-package-dialog"
      destroy-on-close
      :show-close="false"
      title="重命名组件包"
    >
      <el-input size="small" v-model="currentEditPackage.title"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="changeNameModulePackageVisible = false"
          >取 消</el-button
        >
        <el-button
          size="small"
          type="primary"
          @click="changeNameModulePackageVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="deleteModulePackageVisible"
      width="20%"
      :center="true"
      class="delete-package-dialog"
      destroy-on-close
      :show-close="false"
    >
      <span>确定要删除组件包&lt;{{ currentEditPackage.title }}&gt;吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="deleteModulePackageVisible = false"
          >取 消</el-button
        >
        <el-button
          size="small"
          type="primary"
          @click="deleteModulePackageVisible = false"
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
@Component({
  name: "ModulePackageComponent",
  components: {
    Draggable,
    OverlayScrollbarsComponent
  }
})
export default class ModulePackageComponent extends Vue {
  modulePackageList: any[] = [
    {
      id: 1,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包1"
    },
    {
      id: 2,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包2"
    },
    {
      id: 3,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包3"
    },
    {
      id: 4,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包4"
    },
    {
      id: 5,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包5"
    },
    {
      id: 6,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包6"
    },
    {
      id: 7,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包7"
    },
    {
      id: 8,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包7"
    },
    {
      id: 9,
      moduleIds: [970397, 970398],
      pid: 3400,
      storeId: 12556400,
      title: "组件包7"
    }
  ];
  deleteModulePackageVisible: boolean = false;
  changeNameModulePackageVisible: boolean = false;
  currentEditPackage: object = {};
  get dragOptions(): object {
    return {
      sort: true,
      animation: 200,
      group: {
        name: "StoreClone",
        pull: "clone",
        put: false
      },
      disabled: false,
      ghostClass: "ghost-module-package-item",
      forceFallback: true
    };
  }
  public onModulePackageClone(origin: any) {
    console.log(origin, "onModulePackage ---->>clone");
    return;
  }
  public onModulePackageChangeName(id: number) {
    console.log(id, "更名组件包");
    this.currentEditPackage = this.modulePackageList.find(
      item => item.id == id
    );
    this.changeNameModulePackageVisible = true;
  }

  public onModulePackageDeleteItem(id: number) {
    console.log(id, "删除组件包");
    this.currentEditPackage = this.modulePackageList.find(
      item => item.id == id
    );
    this.deleteModulePackageVisible = true;
    console.log(this.currentEditPackage, "-------------->>d");
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
.module-package-component-wrap {
  padding: 10px 15px 10px 10px;
}
.module-package-item {
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
<style lang="scss">
.edit-package-popover {
  min-width: 80px;
  padding: 5px 0;
  .handle-item {
    cursor: pointer;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    &:hover {
      background-color: #eef0f4;
    }
  }
}
</style>
