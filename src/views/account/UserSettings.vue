<template>
  <div>{{ username }}</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Mutation, Getter, namespace } from "vuex-class";
const userModule = namespace("user");
@Component({
  name: "UserSettings"
})
export default class UserSettings extends Vue {
  @userModule.State("username") username!: string;
}
</script>
