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
import GenAIChatMessageHeader from "./GenAIChatMessageHeader.vue";
import GenAIChatMessageContainer from "./GenAIChatMessageContainer.vue";

import eventBus from "../../eventBus";

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
  created() {
    eventBus.on("collapseMessageContainer", this.toggleContainerFunc);
  },
  methods: {
    toggleContainerFunc(id) {
      if (this.message.id == id) {
        this.collapseChat = !this.collapseChat;
      }
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
.wrapper-user .chat-ai {
  background: var(--hds-chatbox-container-chat-background);
}
</style>
