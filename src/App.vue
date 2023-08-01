<template>
  <SCMToolBar :userDetails="userDetails" />
</template>

<script>
import SCMToolBar from "./components/scmtoolbar/SCMToolBarEntry.vue";
import { ref } from "vue";
/* eslint-disable vue/no-unused-components */

export default {
  name: "app",
  props: ["userDetails"],
  components: {
    SCMToolBar,
  },
};
</script>

<style>

</style>
