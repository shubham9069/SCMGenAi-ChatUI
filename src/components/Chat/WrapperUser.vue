<template>
  <div class="wrapper-ai wrapper-user">
    <div class="chat-ai">
      <component
        :is="ChatHeader"
        :userDetails="userDetails"
        type="User"
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
        <component :is="ChatContainer" :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import { QAvatar } from "quasar";
import { markRaw } from "vue";
import ChatHeaderVue from "./ChatHeader.vue";
import ChatContainerVue from "./ChatContainer.vue";

export default {
  name: "WrapperUser",
  components: {
    QAvatar,
  },
  data() {
    return {
      Qavatar: markRaw(QAvatar),
      ChatHeader: markRaw(ChatHeaderVue),
      ChatContainer: markRaw(ChatContainerVue),
      collapseChat: true,
    };
  },
  props: {
    userDetails: Object,
    message: Object,
  },
};
</script>

<style>
@import "../../css/variable.css";

.wrapper-user .chat-ai {
  background: var(--hds-chatbox-container-chat-background);
}
</style>
