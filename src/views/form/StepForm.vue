<template>
  <div>
    <PageHeader>
      <span>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</span>
    </PageHeader>
    <div class="step-form-content">
      <el-steps :active="stepActive" process-status="process">
        <el-step title="填写转账信息"></el-step>
        <el-step title="确认转账信息"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <div class="step-form">
        <el-form v-if="stepActive === 0">
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="title">付款账户：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small" prop="title">
                <el-input
                  id="title"
                  v-model="steps1Form.paymentAccount"
                  placeholder="给目标起个名字"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="title">收款账户：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small">
                <el-input
                  placeholder="请输入内容"
                  v-model="steps1Form.collectionAccount"
                >
                  <el-select
                    slot="prepend"
                    placeholder="请选择"
                    v-model="steps1Form.accountType"
                    style="width:100px;"
                  >
                    <el-option
                      v-for="(item, index) in [
                        { name: '支付宝', value: 1 },
                        { name: '银行卡', vlaue: 2 }
                      ]"
                      :label="item.name"
                      :value="item.value"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="title">收款人姓名：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small" prop="title">
                <el-input
                  id="title"
                  v-model="steps1Form.collectionName"
                  placeholder="给目标起个名字"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="title">转账金额：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small" prop="title">
                <el-input
                  id="title"
                  v-model="steps1Form.amount"
                  placeholder="给目标起个名字"
                >
                  <div slot="prepend">￥</div>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form v-if="stepActive === 1"> </el-form>
      </div>
      <el-divider></el-divider>
      <div class="step1-index-desc">
        <h3>说明</h3>
        <h4>转账到支付宝账户</h4>
        <p>
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        </p>
        <h4>转账到银行卡</h4>
        <p>
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "../../components/PageHeader.vue";
@Component({
  name: "StepForm",
  components: {
    PageHeader
  }
})
export default class StepForm extends Vue {
  private stepActive: number = 0;
  private steps1Form: any = {
    paymentAccount: "",
    collectionAccount: "",
    accountType: 1,
    collectionName: "Alex",
    amount: 500
  };
  mounted() {
    console.log(this);
  }
}
</script>
<style lang="scss" scoped>
.step-form-content {
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  .step-form {
    max-width: 500px;
    margin: 40px auto 0;
    .label-box {
      text-align: right;
      padding-right: 6px;
      line-height: 32px;
    }
    form {
      width: 100%;
    }
  }
  .step1-index-desc {
    padding: 0 56px;
    color: rgba(0, 0, 0, 0.45);
    h3 {
      margin: 0 0 12px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      line-height: 32px;
    }
    h4 {
      margin: 0 0 4px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
    }
    p {
      margin-top: 0;
      margin-bottom: 12px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
}
@media (max-width: 768px) {
  .step-form-content {
    .step-form {
      .label-box {
        text-align: left;
        padding-right: 0px;
      }
    }
  }
}
</style>
