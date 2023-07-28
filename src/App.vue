<template>
  <SCMChatApp :userDetails="userDetails" />

  <div />
</template>

<script>
import { SCMChatApp } from "SCM-UI-library";

import { markRaw } from "vue";

/* eslint-disable vue/no-unused-components */
export default {
  name: "App",
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

<style scoped></style>
