<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})

export default class AppMain extends Vue { 
	created():void {
        console.log(111333333334444441111)
    }
}
</script>
<style lang="scss" >