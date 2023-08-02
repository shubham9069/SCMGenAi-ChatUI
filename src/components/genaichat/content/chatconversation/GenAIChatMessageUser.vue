<template>
  <div class="wrapper-ai wrapper-user">
    <div class="chat-ai">
      <GenAIChatMessageHeader
        :userDetails="userDetails"
        type="User"
        :collapseChat="collapseChat"
        @Collapse="this.collapseChat = !this.collapseChat"
      />

      <div v-if="collapseChat">
        <GenAIChatMessageContainer :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import GenAIChatMessageHeader from "./GenAIChatMessageHeader.vue";
import GenAIChatMessageContainer from "./GenAIChatMessageContainer.vue";

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
  props: {
    userDetails: Object,
    message: Object,
  },
};
</script>

<style>
@import "../../../../assets/css/variable.css";

.wrapper-user .chat-ai {
  background: var(--hds-chatbox-container-chat-background);
}
</style>
