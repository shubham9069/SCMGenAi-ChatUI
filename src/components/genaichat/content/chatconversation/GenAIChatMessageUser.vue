<template>
  <div class="wrapper-ai wrapper-user">
    <div class="chat-ai">
      <GenAIChatMessageHeader
        type="User"
        :message="message"
        :collapseChat="collapseChat"
        @collapseMessageContainer="toggleContainerFunc"
      />

      <div v-if="collapseChat">
        <GenAIChatMessageContainer :message="message" type="User" />
      </div>
    </div>
  </div>
</template>

<script>
import GenAIChatMessageHeader from "src/components/genaichat/content/chatconversation/GenAIChatMessageHeader.vue";
import GenAIChatMessageContainer from "src/components/genaichat/content/chatconversation/GenAIChatMessageContainer.vue";

export default {
  name: "GenAIChatMessageUser",
  components: {
    GenAIChatMessageHeader,
    GenAIChatMessageContainer,
  },
  data() {
    return {
      collapseChat: true,
    };
  },
  methods: {
    toggleContainerFunc() {
      return (this.collapseChat = !this.collapseChat);
    },
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";

.wrapper-user .chat-ai {
  background: var(--hds-chatbox-container-chat-background);
}
</style>
