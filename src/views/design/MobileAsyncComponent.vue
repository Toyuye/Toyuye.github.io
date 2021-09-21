<template>
  <div>
    <component :is="getRenderComponent" :data="data"></component>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import Loading from "./Loading.vue";

const componentsContext = (require as any).context("./mobile/", true, /\.vue$/);
const attributeContext = (require as any).context("./mobile/", true, /\.js$/);
const modules: any = {};
componentsContext.keys().forEach((componentItem: any) => {
  console.log(componentItem, "www");
  const config = componentsContext(componentItem);
  const schema = attributeContext(
    componentItem.replace("index.vue", "schema.js")
  );
  console.log(schema, "schema");
  console.log(config, "------------>>cc");
  const ctr = config.default || config;
  modules[ctr.name] = ctr;
  modules[ctr.name]["$$schema"] = schema.default || schema;
});

console.log("------------------------->>>>渲染组件", modules);

@Component({
  name: "MobileAsyncComponent",
  components: modules
})
export default class MobileAsyncComponent extends Vue {
  @Prop({
    default: () => {
      return {
        moduleSign: "",
        id: null,
        name: ""
      };
    },
    type: Object
  })
  data!: {
    moduleSign: string;
    id: number;
    name: string;
    asyncComponentUrl: "";
  };

  created(): void {}

  mounted(): void {}

  get getRenderComponent() {
    // this.$options.components[this.data.moduleSign] = modules[this.data.moduleSign]
    // console.log(this.$options.components,'components')
    return this.data.moduleSign;
  }
}
</script>
