<template>
  <div :style="{ ...RendData.wrapStyle }" class="base-radio-component-wrap">
    <div class="base-radio-item">
      <div>{{ RendData.label }}</div>
      <div>
        <el-radio-group
          v-model="value"
          size="small"
          @change="onRadioValueChange"
        >
          <el-radio-button
            v-for="item in RendData.options"
            :key="item.value"
            :label="item.value"
            >{{ item.text }}</el-radio-button
          >
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

interface BaseRadioProps {
  wrapStyle?: object;
  value: number | string | boolean | null;
  skey: string;
  label?: string;
  options?: object;
}

@Component({
  name: "Radio",
  components: {}
})
export default class Radio extends Vue {
  @Prop({
    default: () => {
      return {
        value: null,
        wrapStyle: {},
        label: "Label",
        skey: "",
        options: []
      };
    },
    type: Object
  })
  data!: BaseRadioProps;

  value: any = null;

  get RendData() {
    this.value = this.data.value;
    return this.data;
  }
  onRadioValueChange(value: number | boolean | string | null) {
    this.value = value;
    this.$emit("onChangeValue", this.RendData.skey, value);
  }
}
</script>

<style lang="scss" scoped>
.base-radio-component-wrap {
  .base-radio-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
