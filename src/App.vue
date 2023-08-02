<template>
  <GenAIChatDrawer :userDetails="userDetails" />
</template>

<script>
import GenAIChatDrawer from "./components/genaichat/GenAIChatDrawer.vue";
import { ref } from "vue";
import { useStore } from "vuex";
/* eslint-disable vue/no-unused-components */

export default {
  name: "app",
  props: {
    userDetails: Object,
  },
  components: {
    GenAIChatDrawer,
  },
  setup() {
    const store = useStore();
  
    return { store };
  },
};
</script>

<style></style>
