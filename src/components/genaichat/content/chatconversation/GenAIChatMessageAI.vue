<template>
  <div class="wrapper-ai">
    <div class="chat-ai">
      <GenAIChatMessageHeader
        :userDetails="{ name: 'Ai Logo', image: chatBoxStyle?.logo }"
        type="Ai"
        :message="message"
        :collapseChat="collapseChat"
        @collapseMessageContainer="this.collapseChat = !this.collapseChat"
      />

      <div v-if="collapseChat">
        <GenAIChatMessageContainer
          :message="message"
          v-if="!message?.isChatActionArea"
        />

        <div class="chat-action" v-else>
          <p>{{ message?.areaActionButtonOption?.title }}</p>
          <div class="center-div">
            <!-- for cutsom color you have to use inline css Button component  -->
            <GenAIChatTagbutton
              :buttonProps="{
                background: '#e6f7ff',
                color: '#005ac2',
              }"
              :buttonDetails="{
                Icon: message?.areaActionButtonOption?.secondaryButtonIcon,
                Text: message?.areaActionButtonOption?.secondaryButtonText,
              }"
            />

            <GenAIChatTagbutton
              v-if="!this.pinToggle"
              @click="pinToggle = true"
              :buttonProps="{
                background: '#0074e8',
                color: 'white',
              }"
              :buttonDetails="{
                Icon: message?.areaActionButtonOption?.primaryButtonIcon,
                Text: message?.areaActionButtonOption?.primaryButtonText,
              }"
            />
            <GenAIChatTagbutton
              v-else
              @click="pinToggle = false"
              :buttonProps="{
                background: '#d0d7de',
                'text-color': '#25282e',
              }"
              :buttonDetails="{
                Icon: './assets/icons/pin.svg',
                Text: 'Unpin',
              }"
            />
          </div>
        </div>
      </div>
      <GenAIChatMessageFooter :iconArr="iconArr" />
    </div>
    <div class="suggestion-box">
      <!-- suggestion component -->
      <GenAIPromptSuggestion
        @click="
          this.$store.commit('storedata/chatActionAreaToggle', message?.id)
        "
        v-bind="{ title: 'Make This Widget' }"
      />
    </div>
  </div>
</template>

<script>
import GenAIChatMessageHeader from "./GenAIChatMessageHeader.vue";
import GenAIChatMessageFooter from "./GenAIChatMessageFooter.vue";
import GenAIChatMessageContainer from "./GenAIChatMessageContainer.vue";
import GenAIChatTagbutton from "../common/GenAIChatTagbutton.vue";
import GenAIPromptSuggestion from "../common/GenAIPromptSuggestion.vue";

export default {
  name: "GenAIChatMessageUser",
  components: {
    GenAIChatMessageHeader,
    GenAIChatMessageFooter,
    GenAIChatMessageContainer,
    GenAIChatTagbutton,
    GenAIPromptSuggestion,
  },
  props: {
    chatBoxStyle: Object,
    message: Object,
  },
  data() {
    return {
      pinToggle: false,
      collapseChat: true,
      iconArr: [
        {
          name: "FooterIcon1",
          src: "assets/icons/FooterIcon1.png",
          action: "",
        },
        {
          name: "FooterIcon2",
          src: "assets/icons/FooterIcon2.png",
          action: "",
        },
        {
          name: "FooterIcon3",
          src: "assets/icons/FooterIcon3.png",
          action: "",
        },
        {
          name: "FooterIcon4",
          src: "assets/icons/FooterIcon4.png",
          action: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
@import "/src/assets/css/variable.css";
.wrapper-ai {
  width: var(--hds-chatbox-warpper-input-width);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: var(--hds-chatbox-warpper-input-gap);
}

.wrapper-ai .chat-ai {
  width: var(--hds-chatbox-warpper-input-width);
  gap: var(--hds-chatbox-warpper-input-gap);
  background: var(--hds-chatbox-warpper-input-background);
  border: var(--hds-chatbox-warpper-input-border);
  border-radius: var(--hds-chatbox-warpper-input-border-radius);
  padding: var(--hds-chatbox-container-message-padding);
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
