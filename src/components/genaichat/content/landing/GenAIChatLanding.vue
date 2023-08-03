<template>
  <div class="chat-landing">
    <div class="chat-landing-header">
      <img :src="chatBoxStyle.logo" />
      <p>{{ emptyChatContent?.title }}</p>
    </div>

    <div className="chat-landing-input">
      <input
        id="search-Box"
        type="text"
        :placeholder="emptyChatContent?.inputPlaceholder"
        @keyup.enter="
          ($event) => {
            this.$store.commit('storedata/sentMessage', $event.target.value);
            $event.target.value = '';
          }
        "
      />
      <div @click="sentMsgBySearchIcon">
        <img :src="emptyChatContent?.searchIcon" />
      </div>
    </div>

    <GenAIChatLandingActionButtons :popularDataSkill="popularDataSkill" />

    <div className="chat-landing-Suggestion">
      <span
        ><img :src="savedTemplates?.icon" /> {{ savedTemplates?.title }}</span
      >
      <!-- suggestion component  -->
      <GenAIPromptSuggestion
        v-for="data in savedTemplates.templates"
        :key="data?.title"
        @click="this.$store.commit('storedata/sentMessage', data.title)"
        v-bind="{ title: data?.title }"
      />
    </div>
  </div>
</template>

<script>
import GenAIPromptSuggestion from "../common/GenAIPromptSuggestion.vue";
import GenAIChatLandingActionButtons from "./GenAIChatLandingActionButtons.vue";

export default {
  name: "GenAIChatLanding",
  components: {
    GenAIChatLandingActionButtons,
    GenAIPromptSuggestion,
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
    sentMsgBySearchIcon() {
      var element = document?.getElementById("search-Box");
      this.$store.commit("storedata/sentMessage", element.value);
    },
  },
};
</script>

<style>
@import "../../../../assets/css/variable.css";

.chat-landing-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: var(--hds-chatbox-header-gap);
  padding: var(--hds-chatbox-header-paddingY);
}
.chat-landing-header > img {
  width: var(--hds-chatbox-header-logo-width);
  height: var(--hds-chatbox-header-logo-height);
}
.chat-landing-header > p {
  margin: 0;
  font-size: var(--hds-chatbox-header-text);
  font-weight: var(--hds-chatbox-header-text-weight);
}

.chat-landing-input {
  display: flex;
  padding: var(--hds-chatbox-header-paddingY);
}
.chat-landing-input input {
  width: var(--hds-chatbox-input-width);
  height: var(--hds-chatbox-input-height);
  border: var(--hds-chatbox-input-border);
  border-radius: var(--hds-chatbox-input-border-radius);
  background: var(--hds-chatbox-input-background);
  padding: var(--hds-chatbox-input-padding);
  outline: none;
}
.chat-landing-input > div {
  border-radius: var(--hds-chatbox-input-search-border-radius);
  background: var(--hds-chatbox-input-search-background);
  padding: var(--hds-chatbox-input-search-padding);
  height: var(--hds-chatbox-input-height);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.chat-container .suggestion-box {
  display: flex;
  grid-gap: var(--hds-chatbox-gap);
  width: 100%;
  flex-wrap: wrap;
}
.chat-landing-Suggestion > span {
  display: flex;
  align-items: center;
  font-weight: var(--hds-chatbox-saved-template-head-font-weight);
  color: var(--hds-chatbox-saved-template-head-color);
  font-size: var(--hds-chatbox-saved-template-head-font-size);
  grid-gap: var(--hds-chatbox-saved-template-head-gap);
}
</style>
