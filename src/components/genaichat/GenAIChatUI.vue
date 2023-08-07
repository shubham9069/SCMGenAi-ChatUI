<template>
  <div class="chat-ui">
    <div class="chat-container chat-landing" id="chatui-container">
      <template v-for="(message, index) in get_chatMessages" :key="index">
        <!-- wrapper Ai component  -->
        <q-chat-message v-if="message?.isAI" bg-color="transparent" size="12">
          <GenAIChatMessageAI :message="message" />
        </q-chat-message>

        <!-- wrapper User Component  -->
        <q-chat-message v-else bg-color="transparent" size="12">
          <GenAIChatMessageUser :message="message" />
        </q-chat-message>
      </template>
    </div>

    <!-- inputBar Component  -->
    <GenAIChatUInputBar inputBoxPlaceholder="Ask your data question" />
  </div>
</template>

<script>
import GenAIChatMessageAI from "src/components/genaichat/content/chatconversation/GenAIChatMessageAI.vue";
import GenAIChatMessageUser from "src/components/genaichat/content/chatconversation/GenAIChatMessageUser.vue";
import GenAIChatUInputBar from "src/components/genaichat/content/chatui/GenAIChatUInputBar.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ get_chatMessages: "storedata/get_chatMessages" }),
  },
  name: "GenAIChatUI",
  /* eslint-disable */
  components: {
    GenAIChatMessageAI,
    GenAIChatMessageUser,
    GenAIChatUInputBar,
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
.q-message {
  width: 100% !important;
}
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

.chat-ui > .chat-landing {
  width: var(--hds-chatbox-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

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
