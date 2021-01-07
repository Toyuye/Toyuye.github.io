<template>
  <div class="attribute-component-wrap">{{ a }}</div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
@Component({
  name: "AttributeComponent"
})
export default class AttributeComponent extends Vue {
  a: string = "attribute";
  mounted() {}
}
</script>
