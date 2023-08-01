<template>
  <div class="chat-box">
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
            $emit('sentmessage', $event.target.value);
            $event.target.value = '';
          }
        "
      />
      <div @click="SentmessageByButton">
        <img :src="emptyChatContent?.searchIcon" />
      </div>
    </div>

    <SCMLandingDataSkill :popularDataSkill="popularDataSkill" />

    <div className="chat-box-Suggestion">
      <span
        ><img :src="savedTemplates?.icon" /> {{ savedTemplates?.title }}</span
      >
      <!-- suggestion component  -->
      <SCMPromptSuggestion
        v-for="data in savedTemplates.templates"
        :key="data?.title"
        @click="$emit('sentmessage', data?.title)"
        v-bind="{ title: data?.title }"
      />
    </div>
  </div>
</template>

<script>
import SCMPromptSuggestion from "../common/SCMPromptSuggestion.vue";
import SCMLandingDataSkill from "./SCMLandingDataSkill.vue";

export default {
  name: "SCMChatLanding",
  emits: ["sentmessage"],
  components: {
    SCMLandingDataSkill,
    SCMPromptSuggestion,
  },
  props: {
    chatBoxStyle: Object,
    emptyChatContent: Object,
    savedTemplates: Object,
  },
  data() {
    return {
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
    SentmessageByButton() {
      var element = document?.getElementById("search_Box");
      this.$emit("sentmessage", element.value);
    },
  },
};
</script>

<style>
@import "../../../css/variable.css";

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
</style>
