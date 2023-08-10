<template>
  <div class="chat-landing">
    <div class="chat-landing-header">
      <div class="icon-star-container">
        <q-icon
          class="mdi mdi-star-four-points-outline"
          :style="{ ...get_gradientIcon, fontSize: '22px' }"
        ></q-icon>
        <q-icon
          class="mdi mdi-star-four-points-outline"
          :style="{ ...get_gradientIcon, fontSize: '12px' }"
        ></q-icon>
      </div>

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
        <q-icon
          class="material-icons icon-size"
          :style="{
            color: 'white',
          }"
        >
          search
        </q-icon>
      </div>
    </div>

    <GenAIChatLandingActionButtons />

    <div className="chat-landing-suggestion">
      <span>
        <q-icon
          class="material-icons icon-size"
          :style="{
            color: '#06025c',
          }"
        >
          search
        </q-icon>
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
import GenAIPromptSuggestion from "../common/GenAIPromptSuggestion.vue";
import GenAIChatLandingActionButtons from "./GenAIChatLandingActionButtons.vue";
import { mapGetters } from "vuex";

export default {
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
  computed: {
    get_gradientIcon() {
      return {
        background: "linear-gradient(135deg, #0074E8 0%, #A933FB 100%)",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
      };
    },
  },
};
</script>

<style>
.chat-landing-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: var(--hds-chatbox-header-gap);
  padding: var(--hds-chatbox-header-paddingY);
}
.chat-landing-header > .icon-star-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: -1px;
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
