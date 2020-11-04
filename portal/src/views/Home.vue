<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="organization.name" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";

import HelloWorld from "@/components/HelloWorld.vue";

import { Organization } from "@/models/organization/Organization";


@Component({ 
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  @Getter("organization/organization") organization: Organization;
  @Action("organization/syncOrganization") syncOrganization: any;

  async created() {
    await this.syncOrganization();
  }
}
</script>
