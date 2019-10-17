<template>
  <div>
    Analysis
    <div @click="handleClick">click</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Analysis"
})
export default class Analysis extends Vue {
  private handleClick() {
    this.$router.push("/dashboard/analysis");
  }
}
</script>
