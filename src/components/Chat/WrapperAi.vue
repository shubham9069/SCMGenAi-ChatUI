<template>
  <div class="wrapper-ai">
    <div class="chat-ai">
      <component
        :is="ChatHeader"
        :userDetails="{ name: 'Ai Logo', image: chatBoxStyle?.logo }"
        type="Ai"
        :collapseChat="collapseChat"
        @Collapse="this.collapseChat = !this.collapseChat"
      />

      <div class="loading-animation" v-if="message.isDisabled">
        <div class="item">
          <div class="skeleton title"></div>
          <div class="skeleton content"></div>
          <div class="skeleton content"></div>
          <div class="skeleton content"></div>
        </div>
      </div>

      <div v-if="collapseChat">
        <component
          :is="ChatContainer"
          :message="message"
          v-if="!message?.isChatActionArea"
        />

        <div class="chatAction" v-if="message?.isChatActionArea">
          <p>{{ message?.areaActionButtonOption?.title }}</p>
          <div class="center-div">
            <!-- for cutsom color you have to use inline css Button component  -->
            <component
              :is="Tagbutton"
              style="background: #e6f7ff; color: #005ac2; border-radius: 27px"
              :buttonDetails="{
                Icon: message?.areaActionButtonOption?.secondaryButtonIcon,
                Text: message?.areaActionButtonOption?.secondaryButtonText,
              }"
            />

            <component
              :is="Tagbutton"
              v-if="!this.PinToggle"
              @click="PinToggle = true"
              style="background: #0074e8; border-radius: 27px; color: white"
              :buttonDetails="{
                Icon: message?.areaActionButtonOption?.primaryButtonIcon,
                Text: message?.areaActionButtonOption?.primaryButtonText,
              }"
            />
            <component
              :is="Tagbutton"
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
      <component :is="ChatFooter" />
    </div>
    <div class="suggestion-box">
      <!-- suggestion component -->
      <component
        :is="Suggestion"
        @click="$emit('isChatActionArea', message?.id)"
        v-bind="{ title: 'Make This Widget' }"
      />
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import SuggestionVue from "./Suggestion.vue";
import TagbuttonVue from "./Tagbutton.vue";
import ChatHeaderVue from "./ChatHeader.vue";

import ChatContainerVue from "./ChatContainer.vue";
import ChatFooterVue from "./ChatFooter.vue";

export default {
  name: "WrapperAi",
  emits: ["isChatActionArea", "TogglePin"],
  components: {
    SuggestionVue,
    TagbuttonVue,
  },
  props: {
    chatBoxStyle: Object,
    message: Object,
  },
  data() {
    return {
      Suggestion: markRaw(SuggestionVue),
      PinToggle: false,
      collapseChat: true,
      Tagbutton: markRaw(TagbuttonVue),
      ChatHeader: markRaw(ChatHeaderVue),
      ChatContainer: markRaw(ChatContainerVue),
      ChatFooter: markRaw(ChatFooterVue),
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
@import "../../css/variable.css";
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

.loading-animation .item {
  vertical-align: top;
  background: #ffffff;
  border-radius: 3px;
  padding: 16px;
  width: 100%;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}

.loading-animation .skeleton {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1200px 100px;
}

.loading-animation .title {
  height: 20px;
  width: 200px;
  margin-top: 8px;
  margin-bottom: 26px;
}

.loading-animation .content {
  height: 20px;
  width: 100%;
  margin-bottom: 8px;
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
