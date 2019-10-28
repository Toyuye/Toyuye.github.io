<template>
  <div v-loading="loading" element-loading-background="rgba(, 0, 0, 0.9)">
    <PanelGroup></PanelGroup>
    <SalesVisit></SalesVisit>
    <SearchSales></SearchSales>
    <StoreTraffic></StoreTraffic>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PanelGroup from "./components/panelGroup.vue";
import SalesVisit from "./components/SalesVisit.vue";
import SearchSales from "./components/SearchSales.vue";
import StoreTraffic from "./components/StoreTraffic.vue";

@Component({
  name: "Analysis",
  components: {
    PanelGroup,
    SalesVisit,
    SearchSales,
    StoreTraffic
  }
})
export default class Analysis extends Vue {
  private loading: Boolean = true;
  private mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }
}
</script>
