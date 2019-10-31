<template>
  <div>
    <PageHeader></PageHeader>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "../../components/PageHeader.vue";
@Component({
  name: "BasicForm",
  components: {
    PageHeader
  }
})
export default class BasicForm extends Vue {}
</script>
