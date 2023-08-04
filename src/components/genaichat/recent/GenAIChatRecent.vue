<template>
  <GenAIChatHeader @close="$emit('close')" :chatBoxHeader="chatBoxHeader" />
  <div class="chat-landing">
    <h5>{{ Content }}</h5>
  </div>
</template>

<script>
import GenAIChatHeader from "src/components/genaichat/header/GenAIChatHeader.vue";

export default {
  name: "GenAIChatRecent",
  components: {
    GenAIChatHeader,
  },
  props: {
    chatBoxHeader: {
      type: Object,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
