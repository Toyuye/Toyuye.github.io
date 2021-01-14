<template>
  <OverlayScrollbarsComponent
    :options="{ scrollbars: { autoHide: 'scroll' } }"
    :style="{ height: '100%' }"
  >
    <div class="attribute-component-wrap">
      <div :style="{ height: '1000px' }">{{ a }}</div>
    </div>
  </OverlayScrollbarsComponent>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
@Component({
  name: "AttributeComponent",
  components: {
    OverlayScrollbarsComponent
  }
})
export default class AttributeComponent extends Vue {
  a: string = "attribute";
  mounted() {}
}
</script>
