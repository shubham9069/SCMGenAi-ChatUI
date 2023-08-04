<template>
  <!-- topbar component  -->
  <component
    :is="TopBar"
    @close="$emit('close')"
    :chatBoxHeader="chatBoxHeader"
  />

  <div class="Chat-Box" v-if="!chatMessages?.length">
    <div class="chatbox-header">
      <img :src="chatBoxStyle.logo" />
      <p>{{ emptyChatContent?.title }}</p>
    </div>

    <div className="chat-box-input">
      <input
        id="search_Box"
        type="text"
        :placeholder="emptyChatContent?.inputPlaceholder"
        @keyup.enter="
          ($event) => {
            sentMessage($event.target.value);
            $event.target.value = '';
          }
        "
      />
      <div @click="SentmessageByButton">
        <img :src="emptyChatContent?.searchIcon" />
      </div>
    </div>

    <component :is="DataSkill" :popularDataSkill="popularDataSkill" />

    <div className="chat-box-Suggestion">
      <span
        ><img :src="savedTemplates?.icon" /> {{ savedTemplates?.title }}</span
      >
      <!-- suggestion component  -->
      <component
        :is="Suggestion"
        v-for="data in savedTemplates.templates"
        :key="data?.title"
        @click="sentMessage(data?.title)"
        v-bind="{ title: data?.title }"
      />
    </div>
  </div>
  <div class="chat-ui" v-else>
    <div class="chat_container chat-box" id="chatcontainer">
      <template v-for="(message, index) in chatMessages" :key="index">
        <!-- wrapper Ai component  -->
        <component
          :is="WrapperAi"
          v-if="message?.isAI"
          :message="message"
          :chatBoxStyle="chatBoxStyle"
          @isChatActionArea="(id) => ChatActionFunc(id)"
        />

        <!-- wrapper User Component  -->
        <component
          :is="WrapperUser"
          v-else
          :message="message"
          :userDetails="userDetails"
        />
      </template>
    </div>

    <!-- inputBar Component  -->
    <component
      :is="InputBarVue"
      inputBoxPlaceholder="Ask your data question"
      @message="(msg) => sentMessage(msg)"
    />
  </div>
</template>

<script>
import TopBarVue from "./TopBar.vue";
import WrapperAiVue from "./WrapperAi.vue";
import WrapperUserVue from "./WrapperUser.vue";
import { markRaw } from "vue";
import SuggestionVue from "./Suggestion.vue";
import InputBarVue from "./InputBar.vue";
import DataSkillVue from "./DataSkill.vue";

export default {
  name: "ChatComponent",
  components: {
    TopBarVue,
    WrapperUserVue,
    WrapperAiVue,
    SuggestionVue,
    DataSkillVue,
  },
  emits: ["close"],
  props: {
    chatBoxStyle: {
      type: Object,
    },
    emptyChatContent: {
      type: Object,
    },
    chatBoxHeader: {
      type: Object,
    },
    savedTemplates: Object,
    userDetails: Object,
  },

  data() {
    return {
      TopBar: markRaw(TopBarVue),
      WrapperUser: markRaw(WrapperUserVue),
      WrapperAi: markRaw(WrapperAiVue),
      Suggestion: markRaw(SuggestionVue),
      InputBarVue: markRaw(InputBarVue),
      DataSkill: markRaw(DataSkillVue),
      chatMessages: [],
      popularDataSkill: {
        useTemplate: true,
        title: "Start Exploring Popular Data Skills",
        icon: "./assets/icons/bolt.svg",
        arrowIcon: "../assets/icons/arrow-right.svg",
        showPopularDataSkill: true,
        dataSkills: [
          {
            icon: "./assets/icons/question.svg",
            iconBackgroundColor: "#E6F3F1",
            title: "General Insights Questions",
          },
          {
            icon: "./assets/icons/searchicon.svg",
            iconBackgroundColor: "#FBF0FF",
            title: "Explore and Run Diagnostics",
          },
          {
            icon: "./assets/icons/routeicon.svg",
            iconBackgroundColor: "#FAEDE6",
            title: "Future and “What if” Scenarios",
          },
        ],
      },
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
      //  when new msg are added into the chatMEssage Array so it will take few millisecound to update Dom so according to updated dom they will now look updated height of chat_container then scroll bottom

      setTimeout(function () {
        const chatContainer = document.getElementById("chatcontainer");

        if (chatContainer) {
          chatContainer.scrollTop = chatContainer?.scrollHeight;
          console.log(chatContainer);
        }
      }, 50);
    },
    SentmessageByButton() {
      var element = document?.getElementById("search_Box");

      this.sentMessage(element.value);
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
@import "../../css/variable.css";

.Chat-Box {
  padding: calc(2 * var(--hds-chatbox-padding));
  background: var(--hds-chatbox-background);

  flex: 1;
  display: flex;
  flex-direction: column;

  border: var(--hds-sidebar-border);
  overflow-y: scroll;
}
.Chat-Box::-webkit-scrollbar {
  width: 4px;
}

.Chat-Box::-webkit-scrollbar-thumb {
  background: #b2b2b2c1;
  border-radius: 80px;
}

.chatbox-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: var(--hds-chatbox-header-gap);
  padding: var(--hds-chatbox-header-paddingY);
}
.chatbox-header > img {
  width: var(--hds-chatbox-header-logo-width);
  height: var(--hds-chatbox-header-logo-height);
}
.chatbox-header > p {
  margin: 0;
  font-size: var(--hds-chatbox-header-text);
  font-weight: var(--hds-chatbox-header-text-weight);
}

.chat-box-input {
  display: flex;
  padding: var(--hds-chatbox-header-paddingY);
}
.chat-box-input input {
  width: var(--hds-chatbox-input-width);
  height: var(--hds-chatbox-input-height);
  border: var(--hds-chatbox-input-border);
  border-radius: var(--hds-chatbox-input-border-radius);
  background: var(--hds-chatbox-input-background);
  padding: var(--hds-chatbox-input-padding);
  outline: none;
}
.chat-box-input > div {
  border-radius: var(--hds-chatbox-input-search-border-radius);
  background: var(--hds-chatbox-input-search-background);
  padding: var(--hds-chatbox-input-search-padding);
  height: var(--hds-chatbox-input-height);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.chat_container .suggestion-box {
  display: flex;
  grid-gap: var(--hds-chatbox-gap);
  width: 100%;
  flex-wrap: wrap;
}
.chat-box-Suggestion > span {
  display: flex;
  align-items: center;
  font-weight: var(--hds-chatbox-saved-template-head-font-weight);
  color: var(--hds-chatbox-saved-template-head-color);
  font-size: var(--hds-chatbox-saved-template-head-font-size);
  grid-gap: var(--hds-chatbox-saved-template-head-gap);
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

.chat-ui .chat-box {
  width: var(--hds-chatbox-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--hds-chatbox-padding);
  gap: var(--hds-chatbox-gap);
}
.chat_container {
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

.chat_container::-webkit-scrollbar {
  display: none;
}

.chat_container::-webkit-scrollbar-thumb {
  background: #b2b2b2c1;
  border-radius: 80px;
}

.message::-webkit-scrollbar {
  display: none;
}

.chat-btn {
  outline: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
