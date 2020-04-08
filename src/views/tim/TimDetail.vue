<template>
  <div>
    <header class="search-head">
      <div class="">
        <img src="" alt="" />
      </div>
      <el-row type="flex" align="middle" style="width:100%;">
        <el-col :span="24">
          <el-input
            placeholder="Tim-邀您输入搜索关键字"
            v-model="searcForm.wd"
            class="input-with-select"
          >
            <el-select
              v-model="searcForm.t"
              slot="prepend"
              placeholder="请选择"
              style="width:90px;"
            >
              <el-option
                :label="item.type_name"
                :value="String(item.type_id)"
                v-for="item in classData"
                :key="item.type_id"
              ></el-option>
            </el-select>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchSubmit"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
    </header>
    <div class="tim-app-view">
      <div style="padding:0 12px; box-sizing:border-box;">
        <el-row
          v-for="(item, idx) in detailData"
          :gutter="24"
          style="background:#fff; padding-bottom: 25px;"
          :key="idx"
        >
          <el-col :xs="24" :md="14" :sm="14">
            <div style="display: flex;padding:12px 0;">
              <el-image
                lazy
                :src="item.vod_pic"
                style="width: 38%;border:1px solid #ddd;"
                fit="contain"
              >
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <ul style="padding: 0 0 0 12px;">
                <li>
                  <h2 style="font-size: 14px;">{{ item.vod_name }}</h2>
                </li>
                <li style="display:flex;">
                  <span style="width: 50px;">导演：</span>
                  <p style="flex:1;">{{ item.vod_director || "--" }}</p>
                </li>
                <li style="display:flex;">
                  <span style="width: 50px;">主演：</span>
                  <p style="flex:1;">{{ item.vod_actor || "--" }}</p>
                </li>
                <li style="display:flex;">
                  <span style="width: 50px;">类型：</span>
                  <p style="flex:1;">{{ item.vod_class || "--" }}</p>
                </li>
                <li style="display:flex;">
                  <span style="width: 50px;">地区：</span>
                  <p style="flex:1;">{{ item.vod_area || "--" }}</p>
                </li>
                <li style="display:flex;">
                  <span style="width: 50px;">语言：</span>
                  <p style="flex:1;">{{ item.vod_lang || "--" }}</p>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col>
            <div>
              <h5>剧情简介：</h5>
              <p>
                {{ item.vod_content }}
              </p>
            </div>
          </el-col>
          <el-col>
            <ul
              v-for="(child, childIndex) in dramaSeriesData(item.vod_play_url)"
              :key="childIndex"
              style="padding-top: 12px;display:flex;flex-wrap:wrap;"
            >
              <h4 style="width:100%;padding:10px 0;">
                来源-{{ childIndex + 1 }}
              </h4>
              <li v-for="(val, valIndex) in child" :key="valIndex">
                <a
                  :href="
                    /.m3u8$/.test(val.split('$')[1])
                      ? 'https://www.dplayer.tv/?url=' + val.split('$')[1]
                      : val.split('$')[1]
                  "
                  class="vod-play-a"
                  >{{ val.split("$")[0] }}</a
                >
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
import { okzyApi } from "../../fetch/api";
interface SearcForm {
  ac: string; // list | detail
  wd: string; //搜索关键字
  t: string; // 类型
  pg: string; // 页码
  h: string; // 几小时内的数据
  ids: string; // 逗号分隔 详情id
}
// CK播放器解析接口： https://www.dplayer.tv/?url=
// DP播放器解析接口： https://www.dplayer.tv/dp/?url=
@Component({
  name: "TimDetail"
})
export default class Tim extends Vue {
  private classData: any[] = [];
  private detailData: any = "";
  private searcForm: SearcForm = {
    ac: "detail",
    wd: "",
    t: "",
    pg: "1",
    h: "",
    ids: ""
  };
  private getClassData() {}
  private searchSubmit() {
    this.$router.push({
      path: "/tim",
      query: {
        wd: this.searcForm.wd
      }
    });
  }
  private dramaSeriesData(url: string) {
    let arr: any[] = [];
    url.split("$$$").forEach((item: any) => {
      arr.push(item.split("#"));
    });
    return arr;
  }
  private getDetailData() {
    okzyApi(this.searcForm).then(({ data }: any) => {
      if (data.code == 1) {
        this.detailData = data.list;
        console.log(this.detailData);
      } else {
        console.log("服务器错误");
      }
    });
  }
  created() {
    this.searcForm.ids = this.$route.query.ids;
    this.getDetailData();
  }
}
</script>
<style lang="scss" scoped>
.tim-app-view {
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 76px;
}
.search-head {
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  margin-bottom: 12px;
  position: fixed;
  top: 0;
  z-index: 100;
}

.vod-play-a {
  border: 1px solid #ccc;
  margin: 0 8px 8px 0;
  padding: 5px;
  display: inline-block;
  border-radius: 5px;
  color: #333;
}
</style>
