<template>
  <div>我是{{ this.data.moduleSign }}组件</div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";

@Component({
  name: "ImgModule"
})
export default class ImgModule extends Vue {
  @Prop({
    default: () => {
      return {
        name: "",
        id: null,
        moduleSign: ""
      };
    },
    type: Object
  })
  data!: {
    name: string;
    id: number;
    moduleSign: string;
  };
  get getComponentConfig() {
    console.log(this.data);
    return this.data;
  }
}
</script>

<style lang="scss" scoped></style>
