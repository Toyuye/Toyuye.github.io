<template>
  <div>
    <component :is="getRenderComponent" :data="data"></component>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";

const componentsContext = (require as any).context("./mobile/", true, /\.vue$/);
const modules: any = {};
componentsContext.keys().forEach((componentItem: any) => {
  console.log(componentItem);
  const config = componentsContext(componentItem);
  const ctr = config.default || config;
  modules[ctr.name] = ctr;
});

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
  };
  get getRenderComponent() {
    return this.data.moduleSign;
  }
}
</script>
