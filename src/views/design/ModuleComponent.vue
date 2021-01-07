<template>
  <div class="module-component-wrap">{{ a }}</div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
@Component({
  name: "ModuleComponent"
})
export default class ModuleComponent extends Vue {
  a: string = "module";
  mounted() {}
}
</script>
