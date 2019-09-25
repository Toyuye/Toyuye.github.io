<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <i class="iconfont icon-diagnose"></i>
    <HelloWorld />
    <div style="height:10000px;">222222222222222</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../../components/HelloWorld.vue"; // @ is an alias to /src
import { utils } from "mocha";
import { throttle } from "../../utils";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  constructor() {
    super();
  }
  created(): void {}
  mounted(): void {}
}
</script>
<style lang="scss"></style>
