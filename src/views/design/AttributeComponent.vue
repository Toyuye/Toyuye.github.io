<template>
  <div class="attribute-component-wrap" :style="{ height: '100vh' }">
    <ErrorBoundary>
      <div :style="{ height: '1000px' }">{{ a }}</div>
    </ErrorBoundary>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import ErrorBoundary from "./ErrorBoundary.vue";
@Component({
  name: "AttributeComponent",
  components: {
    ErrorBoundary
  }
})
export default class AttributeComponent extends Vue {
  a: string = "attribute";
  mounted() {}
}
</script>
