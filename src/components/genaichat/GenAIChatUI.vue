<template>
  <div class="chat-ui">
    <div class="chat-container chat-landing" id="chatcontainer">
      <template v-for="(message, index) in chatMessages" :key="index">
        <!-- wrapper Ai component  -->
        <GenAIChatMessageAI
          v-if="message?.isAI"
          :message="message"
          :chatBoxStyle="chatBoxStyle"
          @isChatActionArea="(id) => this.$emit('isChatActionArea', id)"
        />

        <!-- wrapper User Component  -->
        <GenAIChatMessageUser
          v-else
          :message="message"
          :userDetails="userDetails"
        />
      </template>
    </div>

    <!-- inputBar Component  -->
    <GenAIChatUInputBar
      inputBoxPlaceholder="Ask your data question"
      @message="(msg) => this.$emit('sentmessage', msg)"
    />
  </div>
</template>

<script>
import GenAIChatMessageAI from "./content/chatconversation/GenAIChatMessageAI.vue";
import GenAIChatMessageUser from "./content/chatconversation/GenAIChatMessageUser.vue";
import GenAIChatUInputBar from "./content/chatui/GenAIChatUInputBar.vue";

export default {
  name: "GenAIChatUI",
  emits: ["isChatActionArea", "sentmessage"],
  components: {
    GenAIChatMessageAI,
    GenAIChatMessageUser,
    GenAIChatUInputBar,
  },
  props: {
    chatMessages: Array,
    chatBoxStyle: Object,
    userDetails: Object,
  },
};
</script>

<style>
.chat-ui {
  background: var(--hds-chatbox-background);
  border: var(--hds-sidebar-border);

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}
.chat-ui::-webkit-scrollbar,
.chat-ui::-webkit-scrollbar-thumb {
  display: none;
}

.chat-ui .chat-landing {
  width: var(--hds-chatbox-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--hds-chatbox-padding);
  gap: var(--hds-chatbox-gap);
}
.chat-container {
  flex: 1;
  width: 100%;

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: var(--hds-chatbox-container-gap);
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}

.chat-container::-webkit-scrollbar {
  display: block;
}

.chat-container::-webkit-scrollbar-thumb {
  background: #b2b2b2c1;
  border-radius: 80px;
}
</style>
