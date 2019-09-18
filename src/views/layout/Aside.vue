<template>
    <div>
        <div class="toyuye-design-pro">
            <el-image class="toyuye-logo" :src="require('../../assets/logo.png')" ></el-image>
            Toyuye Design Pro
        </div>
        <el-menu
            text-color="#909399"
            active-text-color="#fff"
            :unique-opened="true"
            :collapse="false"
        >
            <el-submenu index="1" >
                <template slot="title"><i class="el-icon-view"></i>Dashboard</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-edit-outline"></i>表单页</template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-s-grid"></i>列表页</template>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>  
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
   
})
export default class Aside extends Vue {
    constructor() {
        super()
    }  
}
</script>  

<style lang="scss" scoped>
    .toyuye-design-pro{
        background:#001529;
        height:64px;
        display:flex;
        color:#fff;
        font-size:20px;
        justify-content: center;
        align-items:center
    }
    .toyuye-logo{
        width:32px;
        height:32px;
        border-radius:100%;
        margin-right:8px;
    }
</style>