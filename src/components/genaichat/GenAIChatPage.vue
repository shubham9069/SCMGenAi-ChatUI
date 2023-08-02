<template>
  <GenAIChatHeader
    @close="$emit('close')"
    @Chatui="this.chatMessages = []"
    :chatBoxHeader="chatBoxHeader"
  />

  <GenAIChatLanding
    v-if="!chatMessages?.length"
    :chatBoxStyle="chatBoxStyle"
    :emptyChatContent="emptyChatContent"
    :savedTemplates="savedTemplates"
    @sentmessage="(value) => sentMessage(value)"
  />
  <GenAIChatUI
    v-else
    :chatMessages="chatMessages"
    :chatBoxStyle="chatBoxStyle"
    :userDetails="userDetails"
    @sentmessage="(value) => sentMessage(value)"
    @isChatActionArea="(id) => ChatActionFunc(id)"
  />
</template>

<script>
import GenAIChatHeader from "./header/GenAIChatHeader.vue";
import GenAIChatLanding from "./content/landing/GenAIChatLanding.vue";
import GenAIChatUI from "./GenAIChatUI.vue";

export default {
  name: "GenAIChatPage",
  emits: ["close"],
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
    return {
      chatMessages: [],
    };
  },
  methods: {
    sentMessage(inputText) {
      console.log(inputText);
      const obj = {
        isAI: false,
        text: inputText,
        id: `${this.chatMessages?.length}`,
        chart: false,
        chartInfo: {},
        isChatActionArea: false,
        areaActionButtonOption: {
          title: "Recomandation",
          height: "100px",
          width: "300px",
          primaryButtonText: "Pin to Broad",
          secondaryButtonText: "Preview",
          primaryButtonIcon: "./assets/icons/placeholder.svg",
          secondaryButtonIcon: "./assets/icons/placeholder.svg",
        },
        isDisabled: false,
        date: new Date().toISOString(),
      };
      this.chatMessages.push(obj, {
        ...obj,
        isAI: true,
        id: this.chatMessages?.length + 1,
      });

      // scroll to bottom function
      //  when new msg are added into the chatMEssage Array so it will take few millisecound to update Dom so according to updated dom they will now look updated height of chat-container then scroll bottom

      setTimeout(function () {
        const chatContainer = document.getElementById("chatcontainer");

        if (chatContainer) {
          chatContainer.scrollTop = chatContainer?.scrollHeight;
          console.log(chatContainer);
        }
      }, 50);
    },

    ChatActionFunc(id) {
      this.chatMessages = this.chatMessages?.map((msg) => {
        return id == msg?.id
          ? { ...msg, isChatActionArea: !msg.isChatActionArea }
          : msg;
      });
    },
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
