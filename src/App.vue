<template>
  <SCMChatApp :userDetails="userDetails" />

  <div />
</template>

<script>
import { SCMChatApp } from "./components/index.js";

/* eslint-disable vue/no-unused-components */
export default {
  name: "app",

  components: {
    SCMChatApp,
  },
  data() {
    return {
      userDetails: {
        name: "shubham",
        image: "./assets/icons/user.jpg",
      },
    };
  },
  methods: {},
};
</script>

<style></style>
