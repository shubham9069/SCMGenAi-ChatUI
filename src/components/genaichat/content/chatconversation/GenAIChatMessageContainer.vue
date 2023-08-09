<template>
  <q-chat-message
    bg-color="transparent"
    v-if="
      message.isAI && get_isLoading && message.id == get_chatMessages.length - 1
    "
  >
    <q-spinner-dots color="black" size="2em" />
  </q-chat-message>

  <q-chat-message
    bg-color="transparent"
    :id="message?.id"
    v-else-if="message?.chart"
    :style="{ maxWidth: '500px' }"
  >
    <GenAIChatBarChart :graphArr="message?.chartInfo?.chartArr" />
  </q-chat-message>
  <q-chat-message
    :id="message?.id"
    bg-color="transparent"
    v-else
    :text="[message?.text]"
    :sent="type == 'User'"
  >
  </q-chat-message>
</template>

<script>
import GenAIChatBarChart from "src/components/genaichat/charts/apex/GenAIChatBarChart.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      get_chatMessages: "storedata/get_chatMessages",
      get_isLoading: "storedata/get_isLoading",
    }),
  },
  name: "GenAIChatMessageContainer",
  components: {
    GenAIChatBarChart,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
.q-message {
  width: 100% !important;
  margin: 8px 0;
}
.q-message .q-message-text:last-child {
  min-height: 0 !important;
}
</style>
