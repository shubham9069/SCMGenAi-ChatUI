<template>
  <GenAIChatDrawer :userDetails="userDetails" />
</template>

<script>
import GenAIChatDrawer from "./components/genaichat/GenAIChatDrawer.vue";

/* eslint-disable vue/no-unused-components */

export default {
  name: "app",
  props: {
    userDetails: Object,
  },
  components: {
    GenAIChatDrawer,
  },
};
</script>

<style></style>
