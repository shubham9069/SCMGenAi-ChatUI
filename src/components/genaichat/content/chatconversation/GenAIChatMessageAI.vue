<template>
  <div class="wrapper-ai">
    <div class="chat-ai">
      <GenAIChatMessageHeader
        type="Ai"
        :message="message"
        :collapseChat="collapseChat"
        @collapseMessageContainer="toggleContainerFunc"
      />

      <div v-if="collapseChat">
        <GenAIChatMessageContainer :message="message" type="Ai" />
      </div>
      <GenAIChatMessageFooter :iconArr="iconArr" v-if="collapseChat" />
    </div>
    <div class="suggestion-box">
      <!-- suggestion component -->
      <GenAIPromptSuggestion title="Make This Widget" />
    </div>
  </div>
</template>

<script>
import GenAIChatMessageHeader from "./GenAIChatMessageHeader.vue";
import GenAIChatMessageFooter from "./GenAIChatMessageFooter.vue";
import GenAIChatMessageContainer from "./GenAIChatMessageContainer.vue";
import GenAIPromptSuggestion from "../common/GenAIPromptSuggestion.vue";

export default {
  name: "GenAIChatMessageUser",
  components: {
    GenAIChatMessageHeader,
    GenAIChatMessageFooter,
    GenAIChatMessageContainer,
    GenAIPromptSuggestion,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pinToggle: false,
      collapseChat: true,
      iconArr: [
        {
          name: "FooterIcon1",
          src: "mdi-pin",
          color: "black",
          action: "",
        },
        {
          name: "FooterIcon2",
          src: "mdi-share-variant",
          color: "yellow",
          action: "",
        },
        {
          name: "FooterIcon3",
          src: "mdi-thumb-up",
          color: "#42f5dd",
          action: "",
        },
        {
          name: "FooterIcon4",
          src: "mdi-thumb-down",
          color: "#f7113f",
          action: "",
        },
      ],
    };
  },
  methods: {
    toggleContainerFunc() {
      return (this.collapseChat = !this.collapseChat);
    },
  },
};
</script>

<style>
.wrapper-ai {
  width: var(--hds-chatbox-warpper-input-width);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: var(--hds-chatbox-warpper-input-gap);
}

.wrapper-ai .chat-ai {
  width: var(--hds-chatbox-warpper-input-width);
  gap: var(--hds-chatbox-warpper-input-gap);
  background: var(--hds-chatbox-warpper-input-background);
  border: var(--hds-chatbox-warpper-input-border);
  border-radius: var(--hds-chatbox-warpper-input-border-radius);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  position: relative;
}

.wrapper-ai .message .bot-message {
  float: left;
}
.wrapper-ai .chat-profile-info {
  display: flex;
  align-items: center;
  gap: var(--hds-chatbox-chat-profile-gap);
  padding-bottom: 8px;
}

.chat-action {
  padding: 12px 16px;
  margin: 1rem 0;
  border: var(--hds-sidebar-border);
  border-radius: 8px;
}
.chat-action > p {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.chat-action > .center-div {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
