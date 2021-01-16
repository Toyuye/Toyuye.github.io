<template>
  <div>我是{{ this.getComponentConfig.moduleSign }}</div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
@Component({
  name: "VideoModule"
})
export default class VideoModule extends Vue {
  @Prop({
    default: () => {
      return {};
    },
    type: Object
  })
  data!: object;
  get getComponentConfig() {
    console.log(this.data);
    return this.data;
  }
}
</script>

<style lang="scss" scoped></style>
