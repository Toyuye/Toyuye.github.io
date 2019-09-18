<template>
    <div>
        <div class="toyuye-design-pro">
            <el-image class="toyuye-logo" :src="require('../../assets/logo.png')" ></el-image>
            <div v-if="!isCollapse" style="margin-left:8px;">Toyuye Design Pro</div>
        </div>
        <el-menu
            :class="{'el-menu-vertical-toyuye':isCollapse}"
            text-color="#909399"
            active-text-color="#fff"
            :unique-opened="true"
            :collapse="isCollapse"
        >
            <el-submenu index="1" >
                <template slot="title"><i class="el-icon-view"></i><span slot="title">Dashboard</span></template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-edit-outline"></i><span slot="title">表单页</span></template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-s-grid"></i><span slot="title">列表页</span></template>
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
import {Component, Vue, Provide} from 'vue-property-decorator'
import { throttle } from '../../utils'
@Component({
   
})
export default class Aside extends Vue {
    constructor() {
        super()
    }
    @Provide() isCollapse: Boolean = false;
    public onresizeFn(): void {
        this.isCollapseFn()
        window.onresize = throttle(this.isCollapseFn, 200)
    }
    public isCollapseFn(): void {
        document.documentElement.clientWidth <= 1000 ? this.isCollapse = true : this.isCollapse = false
    }
    public mounted(): void {
        this.onresizeFn()
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
    }
    .el-menu-vertical-toyuye{
        text-align: center;
        width: 80px;
    }
</style>