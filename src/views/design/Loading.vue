<template>
  <div class="loading-container">
    组件正在加载中......
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Loading"
})
export default class Loading extends Vue {}
</script>
