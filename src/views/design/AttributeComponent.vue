<template>
  <div class="attribute-component-wrap" :style="{ height: '100vh' }">
    <div class="attribute-component-title">{{data.name}}</div>
    <div class="attribute-component-settings">
      <el-tabs 
        v-model="TabsActiveName"
        :stretch="true"
      >
        <el-tab-pane
          label="内容设置"
          name="content"
        >
          <div class="attribute-component-content" style="height: calc(100vh - 50px - 51px - 40px)">
            <OverlayScrollbarsComponent
              :options="{ scrollbars: { autoHide: 'scroll' } }"
              :style="{ height: '100%' }"
            >
              <div
                v-for="item in RenderActiveGroups"
                :key="item.key"
              >
                <div 
                  class="attribute-component-item"
                  v-for="(attributeItem, attributeIdx) in item.settingsLayout.content"
                  :key="attributeIdx"
                >
                  
                  <div 
                    class="block"
                    v-if="attributeItem.type == 'block'"
                  >
                    1
                  </div>
                  <div v-else>

                  </div>
                </div>
              </div> 
            </OverlayScrollbarsComponent>
          </div>

        </el-tab-pane>
        <el-tab-pane
          label="样式设置"
          name="styles"
        >
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



@Component({
  name: "AttributeComponent",
  components: {
    ErrorBoundary,
    OverlayScrollbarsComponent,
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
          title: '图片',
          groupActiveKey: 1,
          groups: [
            {
              key: 1,
              title: '横向滚动',
              icon: '',
              settingsApi: {
                ImgItems: {
                  value: [],
                  rules: [],
                  components: {
                    type: 'Radio',
                    options: {

                    },
                  },
                },
              },
              settingsLayout: {
                content: [
                  {
                    type: 'block',
                    title: 'title',
                    settings: ['ImgItems']
                  }
                ],
                styles: [
                  {
                    type: 'block',
                    title: 'title',
                    settings: ['ImgItems']
                  }
                ]
              },
              cover: {
                display: true,
                data: {
                  groupActiveKey: 1,
                  content: {
                    ImgItems: [{name: 'xxx', url: 'xxxx'}],
                  },
                  styles: {
                    ImgItems: [{name: 'xxx', url: 'xxxx'}]
                  }
                },
              },
            },
          ],
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
  TabsActiveName: 'content' | 'styles' = 'content';
  
  get RenderActiveGroups() {
    return this.data.$$schema.groups.filter( item => item.key == this.data.$$schema.groupActiveKey);
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
    .block {
      margin: 0 10px 10px 10px;
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
