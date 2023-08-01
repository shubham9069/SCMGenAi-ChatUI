<template>
  <div class="wrapper-ai">
    <div class="chat-ai">
      <SCMChatHeader
        :userDetails="{ name: 'Ai Logo', image: chatBoxStyle?.logo }"
        type="Ai"
        :collapseChat="collapseChat"
        @Collapse="this.collapseChat = !this.collapseChat"
      />

      <div v-if="collapseChat">
        <SCMChatContainer
          :message="message"
          v-if="!message?.isChatActionArea"
        />

        <div class="chatAction" v-if="message?.isChatActionArea">
          <p>{{ message?.areaActionButtonOption?.title }}</p>
          <div class="center-div">
            <!-- for cutsom color you have to use inline css Button component  -->
            <SCMTagbutton
              style="background: #e6f7ff; color: #005ac2; border-radius: 27px"
              :buttonDetails="{
                Icon: message?.areaActionButtonOption?.secondaryButtonIcon,
                Text: message?.areaActionButtonOption?.secondaryButtonText,
              }"
            />

            <SCMTagbutton
              v-if="!this.PinToggle"
              @click="PinToggle = true"
              style="background: #0074e8; border-radius: 27px; color: white"
              :buttonDetails="{
                Icon: message?.areaActionButtonOption?.primaryButtonIcon,
                Text: message?.areaActionButtonOption?.primaryButtonText,
              }"
            />
            <SCMTagbutton
              v-else
              @click="PinToggle = false"
              style="
                background: #d0d7de;
                text-color: #25282e;
                border-radius: 27px;
              "
              :buttonDetails="{
                Icon: './assets/icons/pin.svg',
                Text: 'Unpin',
              }"
            />
          </div>
        </div>
      </div>
      <SCMChatFooter />
    </div>
    <div class="suggestion-box">
      <!-- suggestion component -->
      <SCMPromptSuggestion
        @click="$emit('isChatActionArea', message?.id)"
        v-bind="{ title: 'Make This Widget' }"
      />
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import SCMChatHeader from "../chatconversation/SCMChatHeader.vue";
import SCMChatFooter from "../chatconversation/SCMChatFooter.vue";
import SCMChatContainer from "../chatconversation/SCMChatContainer.vue";
import SCMTagbutton from "src/components/common/SCMTagbutton.vue";
import SCMPromptSuggestion from "../common/SCMPromptSuggestion.vue";

export default {
  name: "WrapperAi",
  emits: ["isChatActionArea", "TogglePin"],
  components: {
    SCMChatHeader,
    SCMChatFooter,
    SCMChatContainer,
    SCMTagbutton,
    SCMPromptSuggestion,
  },
  props: {
    chatBoxStyle: Object,
    message: Object,
  },
  data() {
    return {
      PinToggle: false,
      collapseChat: true,
    };
  },
  methods: {
    toggle() {
      console.log("dfghj");
    },
  },
};
</script>

<style>
@import "../../../css/variable.css";
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

.wrapper-ai .message.bot-message {
  float: left;
}
.wrapper-ai .chat-profile-info {
  display: flex;
  align-items: center;
  gap: var(--hds-chatbox-chat-profile-gap);
  padding-bottom: 8px;
}

.chatAction {
  padding: 12px 16px;
  margin: 1rem 0;
  border: var(--hds-sidebar-border);
  border-radius: 8px;
}
.chatAction > p {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.chatAction > .center-div {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
