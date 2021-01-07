<template>
  <div class="module-component-wrap">
    <el-collapse
      v-model="activeNames"
    >
      <el-collapse-item
        v-for="moduleItem in moduleComponent"
        :key="moduleItem.type"
        :name="moduleItem.type"
        :title="moduleItem.name"
      >
        <div v-for="(item, index) in moduleItem.module" :key="index">
          {{item.name}}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import Draggable from "vuedraggable";
@Component({
  name: "ModuleComponent",
  components: {
    Draggable
  }
})
export default class ModuleComponent extends Vue {
  activeNames: number[] = [1, 2, 3];
  moduleComponent: any[] = [
    {
      name: '基本组件',
      type: 1,
      module: [
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
      ]
    },
    {
      name: '高级组件',
      type: 2,
      module: [
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
      ]
    },
    {
      name: '促销活动',
      type: 3,
      module: [
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
        {
          icon: 'search',
          name: '搜索',
          limit: null,
          disabled: true,
          purchase: true,
        },
      ]
    }
  ];
  mounted() {}
}
</script>
