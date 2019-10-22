<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <i class="iconfont icon-diagnose"></i>
    <div style="height:10000px;">Home</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { utils } from "mocha";
import { throttle } from "../../utils";

@Component({})
export default class Home extends Vue {
  constructor() {
    super();
  }
  created(): void {}
  mounted(): void {}
}
</script>
