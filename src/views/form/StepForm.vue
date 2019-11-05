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
        <el-form
          v-if="stepActive === 0"
          :rules="stepsRules"
          :model="stepsForm"
          ref="stepsForm1"
        >
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="paymentAccount">付款账户：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small" prop="paymentAccount">
                <el-select
                  v-model="stepsForm.paymentAccount"
                  placeholder="请选择"
                  style="width:100%"
                >
                  <el-option
                    v-for="(item, index) in ['ant-design@alipay.com']"
                    :key="index"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="collectionAccount">收款账户：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small" prop="collectionAccount">
                <el-input
                  id="collectionAccount"
                  placeholder="请输入账户信息"
                  v-model="stepsForm.collectionAccount"
                >
                  <el-select
                    slot="prepend"
                    placeholder="请选择"
                    v-model="stepsForm.accountType"
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
                <label for="collectionName">收款人姓名：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small" prop="collectionName">
                <el-input
                  id="collectionName"
                  v-model="stepsForm.collectionName"
                  placeholder="收款人姓名"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="amount">转账金额：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small" prop="amount">
                <el-input
                  id="amount"
                  v-model="stepsForm.amount"
                  placeholder="给目标起个名字"
                >
                  <div slot="prepend">￥</div>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="10" :offset="6" class="el-col-offset-0">
              <el-form-item size="small">
                <el-button type="primary" @click="nextClick">下一步</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-alert
          title="确认转账后，资金将直接打入对方账户，无法退回。"
          type="warning"
          show-icon
          v-if="stepActive == 1"
        >
        </el-alert>
        <el-form
          v-if="stepActive === 1"
          :rules="stepsRules"
          :model="stepsForm"
          ref="stepsForm2"
        >
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label>付款账户：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small">
                {{ stepsForm.paymentAccount }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label>收款账户：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small">
                {{ stepsForm.collectionAccount }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label>收款人姓名：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small">
                {{ stepsForm.collectionName }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label>转账金额：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <el-form-item size="small">
                <div style="font-size:24px;color:#000;font-weight:500">
                  {{ stepsForm.amount }}
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :xs="24" :sm="6">
              <div class="label-box">
                <label for="password">支付密码：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="16">
              <el-form-item size="small" prop="password">
                <el-input
                  id="password"
                  v-model="stepsForm.password"
                  placeholder="支付密码"
                  type="password"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24">
              <el-form-item size="small" align="center">
                <el-button
                  type="primary"
                  @click="onSubmit"
                  :loading="submitLoading"
                  >提交</el-button
                >
                <el-button @click="prevClick">上一步</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="steps-complete-3" v-if="stepActive === 2">
          <div>
            <i class="iconfont icon-check-circle-fill"></i>
          </div>
          <div class="result-title">操作成功</div>
          <div class="result-sibtitle">预计两小时到账</div>
          <ul class="sub-info">
            <li>
              <span>付款账户：</span>
              <p>{{ stepsForm.paymentAccount }}</p>
            </li>
            <li>
              <span>收款账户：</span>
              <p>{{ stepsForm.collectionAccount }}</p>
            </li>
            <li>
              <span>收款人姓名：</span>
              <p>{{ stepsForm.collectionName }}</p>
            </li>
            <li>
              <span>转账金额：</span>
              <p style="font-size:24px;color:rgba(0,0,0,0.85)">
                {{ stepsForm.amount }}元
              </p>
            </li>
          </ul>
          <el-button
            size="small"
            type="primary"
            @click="
              () => {
                stepActive = 0;
              }
            "
            >再转一笔</el-button
          >
          <el-button size="small">查看账单</el-button>
        </div>
      </div>
      <el-divider v-if="stepActive == 0"></el-divider>
      <div class="step1-index-desc" v-if="stepActive == 0">
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
  private submitLoading: boolean = false;
  private stepsForm: any = {
    paymentAccount: "ant-design@alipay.com",
    collectionAccount: "",
    accountType: 1,
    collectionName: "Alex",
    amount: 500,
    password: ""
  };
  private stepsRules: any = {
    paymentAccount: [
      { required: true, message: "请选择支付账号", trigger: "change" }
    ],
    collectionAccount: [
      { required: true, message: "请输入收款人账户", trigger: "blur" }
    ],
    collectionName: [
      { required: true, message: "请输入收款人姓名", trigger: "blur" }
    ],
    amount: [{ required: true, message: "请输入转账金额", trigger: "blur" }],
    password: [{ required: true, message: "请输入支付密码", trigger: "blur" }]
  };
  private nextClick() {
    this.$refs["stepsForm1"]["validate"](valid => {
      if (valid) {
        this.stepActive++;
      }
    });
  }
  private prevClick() {
    this.stepActive--;
  }
  private onSubmit() {
    this.$refs["stepsForm2"]["validate"](valid => {
      if (valid) {
        this.submitLoading = true;
        setTimeout(() => {
          this.submitLoading = false;
          this.stepActive++;
        }, 1000);
      }
    });
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
  .steps-complete-3 {
    text-align: center;
    i {
      font-size: 80px;
      line-height: 80px;
      color: #52c41a;
    }
    .result-title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 24px;
      line-height: 1.8;
      text-align: center;
    }
    .result-sibtitle {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 1.6;
      text-align: center;
    }
    .sub-info {
      margin-top: 24px;
      padding: 24px 40px;
      background-color: #fafafa;
      li {
        padding-bottom: 16px;
        text-align: left;
        font-size: 0;
        span {
          display: inline-block;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5;
          white-space: nowrap;
        }
        p {
          display: inline-block;
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          line-height: 1.5;
        }
      }
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
      .el-col-offset-0 {
        margin-left: 0;
      }
    }
  }
}
</style>
