<template>
  <div>
    <PageHeader
      ><span
        >表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</span
      ></PageHeader
    >
    <div class="form-container">
      <el-form :model="basicFromData" :rules="dataRules" ref="form">
        <el-form-item size="small" prop="title">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label for="title">标题：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <el-input
                id="title"
                v-model="basicFromData.title"
                placeholder="给目标起个名字"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small" prop="date">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label for="date">起止时间：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <el-date-picker
                id="date"
                v-model="basicFromData.date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width:100%"
              >
              </el-date-picker>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small" prop="goal">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label for="goal">目标描述：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <el-input
                id="goal"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8 }"
                v-model="basicFromData.goal"
                placeholder="请输入你的阶段性工作目标"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small" prop="standard">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label for="standard">衡量标准：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <el-input
                id="standard"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8 }"
                v-model="basicFromData.standard"
                placeholder="请输入衡量标准"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label for="client"
                  >客户
                  <span
                    >(选填)
                    <el-tooltip
                      effect="dark"
                      content="目标服务对象"
                      placement="top"
                    >
                      <i class="iconfont icon-info-circle"></i>
                    </el-tooltip> </span
                  >：
                </label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <el-input
                id="client"
                v-model="basicFromData.client"
                placeholder="请描述你服务的客户，内部客户直接 @姓名／工号"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label for="invites">邀评人 <span>(选填)</span>： </label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <el-input
                id="invites"
                v-model="basicFromData.invites"
                placeholder="请描述你服务的客户，内部客户直接 @姓名／工号"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label>权重 <span>(选填)</span>： </label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <el-input-number
                v-model="basicFromData.weight"
                controls-position="right"
                :min="0"
                :max="100"
              ></el-input-number>
              <span style="margin-left:10px">%</span>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small">
          <el-row>
            <el-col :xs="24" :sm="8">
              <div class="label-box">
                <label>目标公开：</label>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10">
              <div>
                <div>
                  <el-radio v-model="basicFromData.public" :label="1"
                    >公开</el-radio
                  >
                  <el-radio v-model="basicFromData.public" :label="2"
                    >部分公开</el-radio
                  >
                  <el-radio v-model="basicFromData.public" :label="3"
                    >不公开</el-radio
                  >
                </div>
                <div v-if="basicFromData.public === 2"></div>
                <div>
                  <span>客户、邀评人默认被分享</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item size="small">
          <el-row>
            <el-col :xs="24" :sm="10" :offset="8" class="el-col-offset-0">
              <el-button type="primary" @click="subBasicInfoClick('form')"
                >提交</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "../../components/PageHeader.vue";
@Component({
  name: "BasicForm",
  components: {
    PageHeader
  }
})
export default class BasicForm extends Vue {
  public basicFromData: any = {
    title: "",
    date: "",
    goal: "",
    standard: "",
    client: "",
    invites: "",
    weight: 0,
    public: 1
  };
  public dataRules: any = {
    title: [{ required: true, message: "请输入标题", trigger: "blur" }],
    date: [{ required: true, message: "请选择起止时间", trigger: "change" }],
    goal: [{ required: true, message: "请输入目标描述", trigger: "blur" }],
    standard: [{ required: true, message: "请输入衡量标准", trigger: "blur" }]
  };
  private subBasicInfoClick(formName: string) {
    const formREF: any = this.$refs[formName];
    formREF.validate((valid: boolean) => {
      if (valid) {
        console.log(11);
      } else {
        console.log(222);
        return false;
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.form-container {
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  zoom: 1;
  box-sizing: border-box;
  .label-box {
    text-align: right;
    padding-right: 6px;
  }
}
@media (max-width: 768px) {
  .form-container {
    .label-box {
      text-align: left;
      padding-right: 0px;
    }
    .el-col-offset-0 {
      margin-left: 0;
    }
  }
}
</style>
