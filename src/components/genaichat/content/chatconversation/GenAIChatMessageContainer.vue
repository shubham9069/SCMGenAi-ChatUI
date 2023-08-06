<template>
  <div
    class="message"
    v-if="
      message.isAI &&
      $store.state.storedata.isLoading &&
      message.id == $store.state.storedata.chatMessages.length - 1
    "
  >
    <q-spinner-dots color="black" size="2em" />
  </div>

  <div class="message" :id="message?.id" v-else-if="message?.chart">
    <GenAIChatBarChart :graphArr="message?.chartInfo?.chartArr" />
  </div>
  <div class="message" :id="message?.id" v-else>
    {{ message?.text }}
  </div>
</template>

<script>
import GenAIChatBarChart from "src/components/genaichat/charts/apex/GenAIChatBarChart.vue";

export default {
  name: "GenAIChatMessageContainer",
  components: {
    GenAIChatBarChart,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
.message {
  color: var(--hds-chatbox-warpper-message-color);
  font-style: normal;
  font-weight: var(--hds-chatbox-warpper-message-font-weight);
  font-size: var(--hds-chatbox-warpper-message-font-size);
  max-width: 100%;
  white-space: pre-line;
  padding: 16px;
}
</style>
