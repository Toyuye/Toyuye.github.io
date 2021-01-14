<template>
  <OverlayScrollbarsComponent
    :options="{ scrollbars: { autoHide: 'scroll' } }"
    :style="{ height: 'calc(100% - 50px - 40px)' }"
  >
    <div class="module-component-wrap">
      <el-collapse v-model="activeNames" class="module-component-elcollapse">
        <el-collapse-item
          v-for="moduleItem in moduleComponent"
          :key="moduleItem.type"
          :name="moduleItem.type"
          :title="moduleItem.name"
        >
          <Draggable
            class="module-component-drag-wrap"
            v-bind="dragOptions"
            :clone="onModuleClone"
            :list="moduleItem.module"
            @move="onModuleMove"
            @end="onModuleEnd"
          >
            <div
              class="module-item"
              v-for="(item, index) in moduleItem.module"
              :key="index"
              :data-modulesign="item.modulesign"
            >
              <div class="module-item-content">
                <div :class="`iconfont icon-${item.iconName}`"></div>
                <div class="module-item-content-name">{{ item.name }}</div>
              </div>
            </div>
          </Draggable>
        </el-collapse-item>
      </el-collapse>
    </div>
  </OverlayScrollbarsComponent>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import Draggable from "vuedraggable";
@Component({
  name: "ModuleComponent",
  components: {
    Draggable,
    OverlayScrollbarsComponent
  }
})
export default class ModuleComponent extends Vue {
  get dragOptions(): object {
    return {
      sort: false,
      animation: 200,
      group: {
        name: "StoreClone",
        pull: "clone",
        put: false
      },
      disabled: false,
      ghostClass: "ghost-module-item",
      forceFallback: true
    };
  }
  activeNames: number[] = [1, 2, 3];
  moduleComponent: any[] = [
    {
      name: "基本组件",
      type: 1,
      module: [
        {
          modulesign: "1",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "2",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "3",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "4",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "5",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        }
      ]
    },
    {
      name: "高级组件",
      type: 2,
      module: [
        {
          modulesign: "6",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "7",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "8",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "9",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "10",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        }
      ]
    },
    {
      name: "促销活动",
      type: 3,
      module: [
        {
          modulesign: "11",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "12",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "13",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "14",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        },
        {
          modulesign: "15",
          iconName: "picture-fill",
          name: "搜索",
          limit: null,
          disabled: true,
          purchase: true
        }
      ]
    }
  ];
  mounted() {}
  onModuleMove(move: any) {
    console.log(move, "--------------->>>module move");
  }
  onModuleClone(origin: any) {
    console.log(origin, "-------------->>>l");
    return;
  }
  onModuleEnd(move: any) {
    console.log(move, "module end");
  }
}
</script>

<style lang="scss" scoped>
.module-component-wrap {
  background: #f8f9fa;
  padding: 0 10px 0 10px;
  .module-component-drag-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
  }
  .module-item {
    padding: 10px 5px 0px 5px;
    &:last-child {
      padding-bottom: 10px;
    }
    &-content {
      width: 90px;
      height: 90px;
      border-radius: 6px;
      text-align: center;
      transition: linear all 0.3s;
      &:hover {
        background-color: #fff;
      }

      .iconfont {
        font-size: 30px;
        color: #9797a1;
      }

      .module-item-content-name {
        font-size: 12px;
        color: #595961;
      }
    }
  }
}
</style>
<style lang="scss">
.module-component-elcollapse {
  &.el-collapse {
    border: 0;
  }
  .el-collapse-item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .el-collapse-item__header {
    border: 0;
    background: #f8f9fa;
    height: 40px;
    position: relative;
    padding-left: 5px;
    transition: linear all 0.3s;
    font-size: 12px;
    &::after {
      content: "";
      height: 1px;
      background-color: #e3e2e5;
      width: calc(100% - 10px);
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &:hover {
      background: #eef0f4;
      border-radius: 4px;
      &::after {
        height: 0;
      }
    }
  }
  .el-collapse-item__wrap {
    background: #f8f9fa;
    border: 0;
  }
  .el-collapse-item__content {
    padding-bottom: 0px;
  }
}
</style>
