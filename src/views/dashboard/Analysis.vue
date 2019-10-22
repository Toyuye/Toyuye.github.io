<template>
  <div>
    <ul class="toyuye-card">
      <li>
        <div class="toyuye-card-body">
          <div class="card-title">
            <span>总销售额</span>
            <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
              <i class="iconfont icon-question-circle"></i>
            </el-tooltip>
          </div>
          <div></div>
          <div></div>
        </div>
      </li>
      <li>
        <div class="toyuye-card-body">
          <div  class="card-title">
            <span>总销售额</span>
            <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
              <i class="iconfont icon-question-circle"></i>
            </el-tooltip>
          </div>
          <div></div>
          <div></div>
        </div>
      </li>
      <li>
        <div class="toyuye-card-body">
          <div  class="card-title">
            <span>总销售额</span>
            <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
              <i class="iconfont icon-question-circle"></i>
            </el-tooltip>
          </div>
          <div></div>
          <div></div>
        </div>
      </li> 
      <li>
        <div class="toyuye-card-body">
          <div  class="card-title">
            <span>总销售额</span>
            <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
              <i class="iconfont icon-question-circle"></i>
            </el-tooltip>
          </div>
          <div></div>
          <div></div>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Analysis"
})
export default class Analysis extends Vue {
  
}
</script>
<style lang="scss" scoped>
.toyuye-card{
  display: flex;
  flex-wrap: wrap;
  li {
    padding: 0 12px;
    margin-bottom: 20px;
    flex: 1;
    .toyuye-card-body{
      background: #fff;
      padding: 20px 24px 8px 24px;
      .card-title{
        display: flex;
        justify-content: space-between;
       }
    }
  }
}
@media (max-width: 1200px) {
  .toyuye-card {
    li {
      min-width: 282.5px; 
    }
  }
}

@media (max-width: 700px) {
  .toyuye-card {
    li {
      min-width: 250px; 
    }
  }
}



</style>
