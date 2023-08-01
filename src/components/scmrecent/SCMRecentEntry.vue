<template>
  <SCMTopBar @close="$emit('close')" :chatBoxHeader="chatBoxHeader" />
  <div class="chat-box">
    <h5>{{ Content }}</h5>
  </div>
</template>

<script>
import SCMTopBar from "../common/SCMTopBar.vue";

export default {
  name: "SCMRecentEntry",
  components: {
    SCMTopBar,
  },
  props: {
    chatBoxHeader: {
      type: Object,
    },
    Content: String,
  },
};
</script>

<style scoped></style>
