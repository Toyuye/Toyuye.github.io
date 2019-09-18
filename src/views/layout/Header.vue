<template>
    <div class="toyuye-header-view">
        <div class="toyuye-header-view-left">
            <i class="el-icon-s-fold fold" v-if="true"></i>
            <i class="el-icon-s-unfold fold" v-else></i> 
        </div>
        <div class="toyuye-header-view-right">
            <el-dropdown>
                 <el-badge :value="3339" :max="99" class="item toyue-header-info-fixed">
                    <i class="el-icon-message-solid  toyuye-tab-info"></i>
                </el-badge>
                <el-dropdown-menu slot="dropdown">
                    <div>
                        <el-dropdown-item>CN 中文简体</el-dropdown-item>
                        <el-dropdown-item>HK 繁体中文</el-dropdown-item>
                        <el-dropdown-item>US English</el-dropdown-item>
                    </div>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <div class="user-name-logo">
                    <el-image 
                        :src="require('../../assets/Toyuye_pic.jpg')"
                        class="user-logo"           
                    >
                    </el-image>
                    <span>{{name}}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <div><i class="el-icon-user"></i>个人中心</div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div><i class="el-icon-setting"></i>个人设置</div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div><i class="el-icon-switch-button"></i>退出登录</div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <i class="el-icon-help  toyuye-tab-language" ></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>CN 中文简体</el-dropdown-item>
                    <el-dropdown-item>HK 繁体中文</el-dropdown-item>
                    <el-dropdown-item>US English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator'
@Component({
   
})
export default class Header extends Vue {
     @Provide() name: string = "Toyuye"
}
</script>  

<style lang="scss" scoped>
    .toyuye-header-view{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .user-name-logo{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding:0 12px 0 16px;
    }
    .user-logo{
        width:32px;
        height:32px;
        border-radius:100%;
        margin-right:10px;
    }
    .toyuye-header-view-left{
        .fold{
            font-size: 24px;
            color:rgba(0,0,0,.4);
            padding: 20px;
        }
    }
    .toyuye-header-view-right{
        display: flex;
        align-items: center;
        height: 100%;
        .el-dropdown{
            height: 100%;
            display: flex;
            align-items: center;
            &:hover{
                background: rgba(0,0,0,.025)
            }
        }
    }
    .toyuye-tab-info{
        font-size: 16px;
        padding: 0 12px;
    }
    .toyuye-tab-language{
        font-size:24px;
        padding:0 12px;
    }
</style>

<style lang="scss">
    .toyue-header-info-fixed .el-badge__content.is-fixed {
        right: 20px;
    }
</style>