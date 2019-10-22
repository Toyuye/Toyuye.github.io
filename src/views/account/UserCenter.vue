<template>
  <div>
    {{ username }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation, Getter, Action, namespace } from "vuex-class";
const userModule = namespace("user");
@Component({
  name: "UserInfo"
})
export default class UserInfo extends Vue {
  @userModule.Getter("username") username!: string;
}
</script>
