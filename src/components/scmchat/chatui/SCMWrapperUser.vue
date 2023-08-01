<template>
  <div class="wrapper-ai wrapper-user">
    <div class="chat-ai">
      <SCMChatHeader
        :userDetails="userDetails"
        type="User"
        :collapseChat="collapseChat"
        @Collapse="this.collapseChat = !this.collapseChat"
      />

      <div v-if="collapseChat">
        <SCMChatContainer :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import SCMChatHeader from "../chatconversation/SCMChatHeader.vue";
import SCMChatContainer from "../chatconversation/SCMChatContainer.vue";

export default {
  name: "WrapperUser",
  components: {
    SCMChatHeader,
    SCMChatContainer,
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
@import "../../../css/variable.css";

.wrapper-user .chat-ai {
  background: var(--hds-chatbox-container-chat-background);
}
</style>
