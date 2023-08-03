<template>
  <GenAIChatHeader :chatBoxHeader="chatBoxHeader" />

  <GenAIChatLanding
    v-if="!$store.state.storedata.chatMessages?.length"
    :chatBoxStyle="chatBoxStyle"
    :emptyChatContent="emptyChatContent"
    :savedTemplates="savedTemplates"
  />

  <GenAIChatUI v-else :chatBoxStyle="chatBoxStyle" :userDetails="userDetails" />
</template>

<script>
import GenAIChatHeader from "./header/GenAIChatHeader.vue";
import GenAIChatLanding from "./content/landing/GenAIChatLanding.vue";
import GenAIChatUI from "./GenAIChatUI.vue";

export default {
  name: "GenAIChatPage",
  components: {
    GenAIChatHeader,
    GenAIChatLanding,
    GenAIChatUI,
  },
  props: {
    chatBoxStyle: Object,
    emptyChatContent: Object,
    chatBoxHeader: Object,
    savedTemplates: Object,
    userDetails: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
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
