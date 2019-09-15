<template>
    <div>
        <div id="nav">
            <router-link to="/home">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <div>
            <app-main></app-main>
        </div>
    </div>
</template> 

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import AppMain from './AppMain.vue'
@Component({
    components:{
        AppMain
    }
})
export default class Layout extends Vue {
    created(): void{
        console.log(this.$route)
    }
}
</script>  