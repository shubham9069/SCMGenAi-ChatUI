<template>
  <GenAIChatHeader :chatBoxHeader="chatBoxHeader" />
  <div class="chat-landing">
    <h5>{{ content }}</h5>
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
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
