<template>
  <div :style="{ ...wrapStyle }" class="base-radio-component-wrap">
    <div>
      <div>{{ RadioProps.label }}</div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

interface BaseRadioProps {
  wrapStyle: object;
}
@Component({
  name: "Radio",
  components: {}
})
export default class Radio extends Vue {
  @Prop({
    default: {
      wrapStyle: {},
      label: "Label",
      options: []
    }
  })
  RadioProps!: BaseRadioProps;
}
</script>
