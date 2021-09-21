<template>
  <div class="attribute-component-wrap" :style="{ height: '100vh' }">
    <div class="attribute-component-title">{{ data.name }}</div>
    <div class="attribute-component-settings">
      <el-tabs v-model="TabsActiveName" :stretch="true">
        <el-tab-pane label="内容设置" name="content">
          <div
            class="attribute-component-content"
            style="height: calc(100vh - 50px - 51px - 40px)"
          >
            <OverlayScrollbarsComponent
              :options="{ scrollbars: { autoHide: 'scroll' } }"
              :style="{ height: '100%' }"
            >
              <div v-for="item in RenderActiveGroups" :key="item.key">
                <div
                  class="attribute-component-item"
                  v-for="(attributeItem, attributeIdx) in item.settingsLayout
                    .content"
                  :key="attributeIdx"
                >
                  <div
                    :class="{
                      noblock: true,
                      block: attributeItem.type !== 'block'
                    }"
                  >
                    <div>{{ attributeItem.title }}</div>
                    <div
                      v-for="componentItem in attributeItem.interfaceApi"
                      :key="componentItem"
                    >
                      <component
                        :is="item.interfaceApi[componentItem].components.type"
                        :data="
                          cloneData({
                            skey: componentItem,
                            value: item.interfaceApi[componentItem].value,
                            ...item.interfaceApi[componentItem].components.props
                          })
                        "
                        @onChangeValue="onChangeValue"
                      ></component>
                    </div>
                  </div>
                </div>
              </div>
            </OverlayScrollbarsComponent>
          </div>
        </el-tab-pane>
        <el-tab-pane label="样式设置" name="styles">
          <div class="attribute-component-styles">
            <OverlayScrollbarsComponent
              :options="{ scrollbars: { autoHide: 'scroll' } }"
              :style="{ height: '100%' }"
            >
            </OverlayScrollbarsComponent>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import ErrorBoundary from "./ErrorBoundary.vue";
import { cloneDeep } from "lodash";
const componentsContext = (require as any).context(
  "./attributeItems/",
  true,
  /\.vue$/
);
const AttributeItems: any = {};
componentsContext.keys().forEach((componentItem: any) => {
  const config = componentsContext(componentItem);
  const ctr = config.default || config;
  console.log(config, "ssssssssssssssssss");
  AttributeItems[ctr.name] = ctr;
});

@Component({
  name: "AttributeComponent",
  components: {
    ErrorBoundary,
    OverlayScrollbarsComponent,
    ...AttributeItems
  }
})
export default class AttributeComponent extends Vue {
  @Prop({
    default: () => {
      return {
        moduleSign: "ImgModule",
        id: 1,
        name: "图片组件",
        asyncComponentUrl: null,
        $$schema: {
          title: "图片",
          groupActiveKey: 1,
          groups: [
            {
              key: 1,
              title: "横向滚动",
              icon: "",
              interfaceApi: {
                ImgItems: {
                  value: 1,
                  rules: [],
                  components: {
                    type: "Radio",
                    props: {
                      wrapStyle: {},
                      label: "Label",
                      options: [
                        { text: "样式1", value: 1 },
                        { text: "样式2", value: 2 }
                      ]
                    }
                  }
                }
              },
              settingsLayout: {
                content: [
                  {
                    visible: true,
                    type: "block",
                    title: "title",
                    interfaceApi: ["ImgItems"]
                  }
                ],
                styles: [
                  {
                    visible: false,
                    type: "block",
                    title: "title",
                    settings: ["ImgItems"]
                  }
                ]
              },
              cover: {
                display: true,
                data: {
                  groupActiveKey: 1,
                  content: {
                    ImgItems: [{ name: "xxx", url: "xxxx" }]
                  },
                  styles: {
                    ImgItems: [{ name: "xxx", url: "xxxx" }]
                  }
                }
              }
            }
          ]
        }
      };
    },
    type: Object
  })
  data!: {
    moduleSign: string;
    id: number;
    name: string;
    asyncComponentUrl: string;
    $$schema: any;
  };
  TabsActiveName: "content" | "styles" = "content";

  cloneData<T>(data: T): T {
    return cloneDeep(data);
  }

  onChangeValue(skey: string, value: any): void {
    this.data.$$schema.groups.forEach((item: any) => {
      if (item.key == this.data.$$schema.groupActiveKey) {
        item.interfaceApi[skey].value = value;
      }
    });
    console.log(this.data);
  }

  get RenderActiveGroups() {
    return this.data.$$schema.groups.filter(
      (item: any) => item.key == this.data.$$schema.groupActiveKey
    );
  }
  mounted() {}
}
</script>

<style lang="scss" scoped>
.attribute-component-wrap {
  .attribute-component-title {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .attribute-component-settings {
    .noblock {
      margin: 0 10px 10px 10px;
    }
    .block {
      background-color: #f0f2f5;
      border-radius: 4px;
      padding: 10px 10px 10px 10px;
    }
  }
}
</style>

<style lang="scss">
.attribute-component-wrap {
  .el-tabs__header {
    padding: 0 5px;
  }
  .el-tabs__nav-wrap {
    display: flex;
    justify-content: center;
  }
  .el-tabs__nav-scroll {
    width: 70%;
  }
  .el-tabs__active-bar {
    background-color: #333;
    height: 3px;
    border-radius: 1px;
  }
  .el-tabs__item {
    font-size: 12px;
    &.is-active {
      color: #333;
    }
  }
}
</style>
