<template>
  <GenAIChatHeader @close="$emit('close')" :chatBoxHeader="chatBoxHeader" />
  <div class="chat-landing">
    <h5>{{ Content }}</h5>
  </div>
</template>

<script>
import GenAIChatHeader from "../header/GenAIChatHeader.vue";

export default {
  name: "GenAIChatRecent",
  components: {
    GenAIChatHeader,
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
