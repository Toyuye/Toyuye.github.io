<template>
  <div>
    <div v-if="childError">
      {{ tips }}
    </div>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
@Component({
  name: "ErrorBoundary"
})
export default class ErrorBoundary extends Vue {
  childError: boolean = false;
  @Prop({ default: "error", type: String }) tips!: string;
  errorCaptured(err: any, vm: any, info: string) {
    console.log(err, vm, info, "------------>>> error tips");
    this.childError = true;
    return false;
  }
}
</script>
