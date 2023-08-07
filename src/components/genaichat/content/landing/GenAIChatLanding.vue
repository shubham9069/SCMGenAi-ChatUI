<template>
  <div class="chat-landing">
    <div class="chat-landing-header">
      <span class="material-icons icon-size" :style="get_gradientIcon">
        auto_awesome
      </span>
      <p>{{ emptyChatContent?.title }}</p>
    </div>

    <div className="chat-landing-input">
      <q-input
        @keyup.enter="sentMessage"
        v-model="inputText"
        :placeholder="emptyChatContent?.inputPlaceholder"
        type="text"
        dense
        unelevated
        borderless
      />

      <div @click="sentMessage">
        <span
          class="material-icons icon-size"
          :style="{
            color: 'white',
          }"
        >
          search
        </span>
      </div>
    </div>

    <GenAIChatLandingActionButtons />

    <div className="chat-landing-suggestion">
      <span>
        <span
          class="material-icons icon-size"
          :style="{
            color: '#06025c',
          }"
        >
          search
        </span>
        {{ savedTemplates?.title }}</span
      >
      <!-- suggestion component  -->
      <GenAIPromptSuggestion
        v-for="data in savedTemplates.templates"
        :key="data?.title"
        @click="sentMessageMutaion(data.title)"
        :title="data?.title"
      />
    </div>
  </div>
</template>

<script>
import GenAIPromptSuggestion from "src/components/genaichat/content/common/GenAIPromptSuggestion.vue";
import GenAIChatLandingActionButtons from "src/components/genaichat/content/landing/GenAIChatLandingActionButtons.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ get_gradientIcon: "storedata/get_gradientIcon" }),
  },
  name: "GenAIChatLanding",
  components: {
    GenAIChatLandingActionButtons,
    GenAIPromptSuggestion,
  },
  data() {
    return {
      inputText: "",
    };
  },
  props: {
    emptyChatContent: {
      type: Object,
      required: false,
    },
    savedTemplates: {
      type: Object,
      required: true,
    },
  },

  methods: {
    sentMessage() {
      if (!this.inputText) return;
      this.$store.dispatch("storedata/sentMessage", this.inputText);
      this.inputText = "";
    },
    sentMessageMutaion(title) {
      return this.$store.dispatch("storedata/sentMessage", title);
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";

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

.chat-landing-input > .q-field {
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
.chat-landing-suggestion > span {
  display: flex;
  align-items: center;
  font-weight: var(--hds-chatbox-saved-template-head-font-weight);
  color: var(--hds-chatbox-saved-template-head-color);
  font-size: var(--hds-chatbox-saved-template-head-font-size);
  grid-gap: var(--hds-chatbox-saved-template-head-gap);
}
</style>
