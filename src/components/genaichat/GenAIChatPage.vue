<template>
  <GenAIChatHeader :chatBoxHeader="chatBoxHeader" />

  <GenAIChatLanding
    v-if="!get_chatMessages?.length"
    :emptyChatContent="emptyChatContent"
    :savedTemplates="savedTemplates"
  />

  <GenAIChatUI v-else />
</template>

<script>
import GenAIChatHeader from "src/components/genaichat/header/GenAIChatHeader.vue";
import GenAIChatLanding from "src/components/genaichat/content/landing/GenAIChatLanding.vue";
import GenAIChatUI from "src/components/genaichat/GenAIChatUI.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("storedata", ["get_chatMessages"]),
  },
  name: "GenAIChatPage",
  components: {
    GenAIChatHeader,
    GenAIChatLanding,
    GenAIChatUI,
  },
  props: {
    emptyChatContent: {
      type: Object,
      required: false,
      default: () => {
        return {
          showEmptyChatHeader: true,
          title: "AI-Driven Insights Companion",
          inputPlaceholder: "Ask your data question",
          searchIcon: "../assets/icons/search.svg",
        };
      },
    },
    chatBoxHeader: {
      type: Object,
      required: false,
      default: () => {
        return {
          title: "AI Exploration",
          showChatBoxHeader: true,
        };
      },
    },
    savedTemplates: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
.chat-landing {
  padding: calc(2 * var(--hds-chatbox-padding));
  background: var(--hds-chatbox-background);

  flex: 1;
  display: flex;
  flex-direction: column;

  border: var(--hds-sidebar-border);
  overflow-y: scroll;
}
.chat-landing::-webkit-scrollbar {
  width: 4px;
}

.chat-landing::-webkit-scrollbar-thumb {
  background: #b2b2b2c1;
  border-radius: 80px;
}
</style>
